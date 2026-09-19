import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const distDir = path.resolve(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Run npm run build first.');
  process.exit(1);
}

// Ensure .nojekyll exists
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

const tempIndex = path.resolve(process.cwd(), '.git', 'temp-gh-pages-index');
if (fs.existsSync(tempIndex)) fs.unlinkSync(tempIndex);

try {
  console.log('Staging dist files into temporary git index...');
  execSync('git --work-tree=dist add --all', {
    env: { ...process.env, GIT_INDEX_FILE: tempIndex },
    stdio: 'inherit'
  });

  console.log('Writing git tree object...');
  const treeSha = execSync('git write-tree', {
    env: { ...process.env, GIT_INDEX_FILE: tempIndex }
  }).toString().trim();
  console.log('Tree SHA:', treeSha);

  const parentSha = execSync('git rev-parse origin/gh-pages').toString().trim();
  console.log('Parent commit:', parentSha);

  const commitMsg = 'Deploy: 3,622 static pages with noindex safeguards on gh-pages';
  const commitSha = execSync(`git commit-tree ${treeSha} -p ${parentSha} -m "${commitMsg}"`).toString().trim();
  console.log('Created commit:', commitSha);

  execSync(`git update-ref refs/heads/gh-pages ${commitSha}`, { stdio: 'inherit' });
  console.log('Updated local gh-pages branch.');

  console.log('Pushing gh-pages to origin/gh-pages...');
  execSync('git push origin gh-pages', { stdio: 'inherit' });
  console.log('\n✅ Successfully deployed dist to gh-pages branch!');
} finally {
  if (fs.existsSync(tempIndex)) fs.unlinkSync(tempIndex);
}


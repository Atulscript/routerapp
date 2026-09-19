import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';

const server = await createServer({
  root: process.cwd(),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});
const { isLiteralCredential, splitGatewayValues, credentialNote } =
  await server.ssrLoadModule('./src/lib/credentials.ts');

test('real credentials are copyable', () => {
  for (const v of ['admin', 'password', '3ware', 'Jiocentrum', 'smcadmin', 'admin1234', '1234']) {
    assert.equal(isLiteralCredential(v), true, `${v} should be literal`);
  }
});

test('instructions are not copyable', () => {
  for (const v of [
    'Printed Admin Password on Sticker',
    'Printed Serial Number / Password on Sticker',
    'Amazon Account / OTP',
    'Password on sticker',
    'Empty (set on first login)',
    'Empty (or set during init)',
    '(blank)',
    '',
  ]) {
    assert.equal(isLiteralCredential(v), false, `${v} should not be literal`);
  }
});

// Found by running the classifier over the real dataset: these read as
// credentials by length and keyword, but are instructions.
test('app-driven and parenthetical values are not copyable', () => {
  for (const v of [
    'Set via TP-Link Deco App',
    'Set via AirPort Utility',
    'Set via SmartThings App',
    'First 8 chars of WPA key',
    'admin / (Wi-Fi password)',
    'admin / (setup password)',
  ]) {
    assert.equal(isLiteralCredential(v), false, `${v} should not be literal`);
  }
});

test('null and undefined are handled', () => {
  assert.equal(isLiteralCredential(null), false);
  assert.equal(isLiteralCredential(undefined), false);
});

test('gateway strings split into separate values', () => {
  assert.deepEqual(splitGatewayValues('192.168.1.1'), ['192.168.1.1']);
  assert.deepEqual(
    splitGatewayValues('192.168.0.1 / 192.168.1.1 / tplinkwifi.net'),
    ['192.168.0.1', '192.168.1.1', 'tplinkwifi.net']
  );
  assert.deepEqual(splitGatewayValues(''), []);
  assert.deepEqual(splitGatewayValues(null), []);
});

test('non-literal values get readable display text', () => {
  assert.equal(credentialNote('(blank)'), 'Leave blank');
  assert.equal(credentialNote(''), 'Leave blank');
  assert.equal(credentialNote('Password on sticker'), 'Password on sticker');
});

after(() => server.close());

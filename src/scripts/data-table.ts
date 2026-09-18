/**
 * Search, facets, windowing and copy-to-clipboard for the big data tables
 * (/default-passwords, /routers).
 *
 * Everything is found by class inside the root element, so a page only has to
 * render the markup; both tables share this one implementation.
 *
 * Rows past the window stay in the DOM rather than being removed, so their links
 * remain crawlable and a filter can still reach them.
 */

const WINDOW = 100;

export function initDataTable(rootId: string, windowSize = WINDOW): void {
  const root = document.getElementById(rootId);
  if (!root) return;

  const body = root.querySelector<HTMLElement>('.dt-body');
  const input = root.querySelector<HTMLInputElement>('.dt-q');
  if (!body || !input) return;

  const rows = Array.from(body.querySelectorAll<HTMLTableRowElement>('.dt-row'));
  const selects = Array.from(root.querySelectorAll<HTMLSelectElement>('.dt-select'));
  const countEl = root.querySelector('.dt-count');
  const shownEl = root.querySelector('.dt-shown');
  const emptyEl = root.querySelector<HTMLElement>('.dt-empty');
  const moreWrap = root.querySelector<HTMLElement>('.dt-more');
  const moreBtn = root.querySelector('.dt-more button');
  const clearBtn = root.querySelector<HTMLElement>('.dt-clear');

  // Read once: the row's own text is the search corpus, so no duplicate
  // data-search attribute has to ship on every row.
  const index = rows.map(row => ({
    row,
    text: (row.textContent || '').toLowerCase().replace(/\s+/g, ' '),
    facets: (row.dataset.f || '').split('|'),
  }));

  // Label each body cell with its column heading, for the stacked mobile layout.
  // Done here rather than in the markup: an attribute per cell costs far more.
  const labels = Array.from(root.querySelectorAll('.dt-table thead th')).map(
    th => th.getAttribute('data-l') || ''
  );
  for (const row of rows) {
    const cells = row.children;
    for (let i = 0; i < cells.length && i < labels.length; i++) {
      if (labels[i]) cells[i].setAttribute('data-l', labels[i]);
    }
  }

  let limit = windowSize;

  function apply(): void {
    const query = input!.value.trim().toLowerCase();
    const active = selects.map(select => select.value.toLowerCase());
    let matched = 0;

    for (const entry of index) {
      let ok = query === '' || entry.text.includes(query);

      if (ok) {
        for (let i = 0; i < active.length; i++) {
          // Facet order in data-f matches the order the selects appear in.
          if (active[i] && entry.facets[i] !== active[i]) { ok = false; break; }
        }
      }

      entry.row.hidden = !ok || matched >= limit;
      if (ok) matched++;
    }

    for (const select of selects) select.classList.toggle('on', select.value !== '');
    clearBtn?.classList.toggle('on', query !== '');

    const shown = Math.min(matched, limit);
    if (countEl) countEl.textContent = `${matched.toLocaleString()} result${matched === 1 ? '' : 's'}`;
    if (shownEl) shownEl.textContent = `Showing ${shown.toLocaleString()} of ${matched.toLocaleString()}`;
    if (emptyEl) emptyEl.hidden = matched > 0;
    if (moreWrap) moreWrap.hidden = matched <= limit;
  }

  function reset(): void {
    input!.value = '';
    for (const select of selects) select.value = '';
    limit = windowSize;
    apply();
  }

  input.addEventListener('input', () => { limit = windowSize; apply(); });
  input.addEventListener('keydown', event => { if (event.key === 'Escape') reset(); });
  for (const select of selects) {
    select.addEventListener('change', () => { limit = windowSize; apply(); });
  }
  moreBtn?.addEventListener('click', () => { limit += windowSize * 2; apply(); });
  clearBtn?.addEventListener('click', () => { input.value = ''; limit = windowSize; apply(); input.focus(); });
  for (const btn of root.querySelectorAll('.dt-resetter')) {
    btn.addEventListener('click', reset);
  }

  // One delegated listener rather than a handler per row.
  body.addEventListener('click', async event => {
    const button = (event.target as HTMLElement).closest<HTMLElement>('.dt-copy');
    if (!button) return;
    try {
      await navigator.clipboard.writeText(button.dataset.c || '');
      button.classList.add('done');
      setTimeout(() => button.classList.remove('done'), 1200);
    } catch {
      /* clipboard blocked; the value is on screen to copy by hand */
    }
  });

  apply();
}

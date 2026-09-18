/**
 * Search and chip filtering for the card-grid landing pages (/ip-addresses, /isps).
 *
 * The big tables use data-table.ts; these pages show fewer than a hundred cards,
 * so nothing is windowed. Everything is found by class inside a root element, and
 * each card wrapper carries a data-k key that the chips match against.
 */

export function initCardFilter(rootId: string): void {
  const root = document.getElementById(rootId);
  if (!root) return;

  const input = root.querySelector<HTMLInputElement>('.cf-q');
  const items = Array.from(root.querySelectorAll<HTMLElement>('.cf-item'));
  if (!input || items.length === 0) return;

  const chips = Array.from(root.querySelectorAll<HTMLButtonElement>('.cf-chip'));
  const countEl = root.querySelector('.cf-count');
  const emptyEl = root.querySelector<HTMLElement>('.cf-empty');
  const clearBtn = root.querySelector<HTMLElement>('.cf-clear');

  // Each card's own text is the search corpus, so no duplicate attribute ships.
  const index = items.map(el => ({
    el,
    text: (el.textContent || '').toLowerCase().replace(/\s+/g, ' '),
    key: el.dataset.k || '',
  }));

  let activeKey = 'ALL';

  function apply(): void {
    const query = input!.value.trim().toLowerCase();
    let visible = 0;

    for (const entry of index) {
      const match =
        (activeKey === 'ALL' || entry.key === activeKey) &&
        (query === '' || entry.text.includes(query));
      entry.el.hidden = !match;
      if (match) visible++;
    }

    clearBtn?.classList.toggle('on', query !== '');
    if (emptyEl) emptyEl.hidden = visible > 0;
    if (countEl) {
      const total = index.length;
      countEl.textContent = visible === total ? String(total) : `${visible}/${total}`;
    }
  }

  function setKey(key: string): void {
    activeKey = key;
    for (const chip of chips) {
      const on = chip.dataset.v === key;
      chip.setAttribute('aria-pressed', String(on));
      chip.classList.toggle('bg-[#1a73e8]', on);
      chip.classList.toggle('text-white', on);
      chip.classList.toggle('text-[#3c4043]', !on);
      chip.classList.toggle('dark:text-[#bdc1c6]', !on);
    }
    apply();
  }

  function reset(): void {
    input!.value = '';
    setKey('ALL');
  }

  for (const chip of chips) {
    chip.addEventListener('click', () => {
      // The chip says ALL, so it means all: a typed filter is dropped too.
      if (chip.dataset.v === 'ALL') reset();
      else setKey(chip.dataset.v || 'ALL');
    });
  }

  input.addEventListener('input', apply);
  input.addEventListener('keydown', event => { if (event.key === 'Escape') reset(); });
  clearBtn?.addEventListener('click', () => { input.value = ''; apply(); input.focus(); });
  for (const btn of root.querySelectorAll('.cf-resetter')) {
    btn.addEventListener('click', reset);
  }

  apply();
}

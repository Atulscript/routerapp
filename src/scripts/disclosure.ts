/**
 * Collapse-on-load, deliberately.
 *
 * The content ships expanded in the HTML and this collapses it once the page is
 * interactive. Crawlers and visitors without JS therefore always get the whole
 * page, and nothing is ever hidden in the markup itself — which matters on a
 * site that lives on search traffic.
 */
export function initDisclosures(): void {
  for (const root of document.querySelectorAll<HTMLElement>('.dc')) {
    const region = root.querySelector<HTMLElement>('.dc-region');
    const button = root.querySelector<HTMLButtonElement>('.dc-btn');
    if (!region || !button) continue;

    const clamp = Number(root.dataset.h || '320');

    // Nothing worth collapsing: drop the control rather than show a button
    // that barely changes anything.
    if (region.scrollHeight <= clamp + 40) {
      button.remove();
      continue;
    }

    const moreLabel = (button.textContent || 'Show more').trim();
    const lessLabel = button.dataset.less || 'Show less';

    const set = (open: boolean): void => {
      region.style.maxHeight = open ? '' : `${clamp}px`;
      region.classList.toggle('dc-clipped', !open);
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? lessLabel : moreLabel;
    };

    button.hidden = false;
    set(false);
    button.addEventListener('click', () => {
      set(button.getAttribute('aria-expanded') !== 'true');
    });
  }
}

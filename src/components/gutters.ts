/**
 * Midlines of the page's side margins, where the page thread runs, measured
 * against the page element itself (not the window), so it holds when the page
 * is embedded, e.g. as a Wix custom element.
 */
export function threadGutters(from: Element) {
  const page = from.closest('.page') ?? from
  const p = page.getBoundingClientRect()
  const railLeft = page.querySelector('.rail')?.getBoundingClientRect().left ?? p.left + 32
  const g = Math.max((railLeft - p.left) / 2, 6)
  return { left: g, right: p.width - g, pageLeft: p.left }
}

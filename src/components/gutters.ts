/** Viewport x of the side margins' midlines: where the page thread runs. */
export function threadGutters() {
  const rail = document.querySelector('.rail')?.getBoundingClientRect()
  const vw = document.documentElement.clientWidth
  const g = Math.max((rail?.left ?? 16) / 2, 6)
  return { left: g, right: vw - g }
}


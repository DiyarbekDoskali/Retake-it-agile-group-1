// Attach only while the disclosure is open; cleanup prevents stale handlers.
export function bindMenuEscape(target, closeMenu, focusToggle) {
  const onKeyDown = event => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    closeMenu();
    focusToggle();
  };
  target.addEventListener('keydown', onKeyDown);
  return () => target.removeEventListener('keydown', onKeyDown);
}

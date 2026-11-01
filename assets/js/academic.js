(() => {
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let savedTheme;
  try { savedTheme = localStorage.getItem('theme'); } catch (_) { /* Storage is optional. */ }
  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    const toggle = document.getElementById('academic-theme-toggle');
    if (toggle) toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  };
  applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (preference.matches ? 'dark' : 'light'));
  preference.addEventListener('change', (event) => {
    if (savedTheme !== 'light' && savedTheme !== 'dark') applyTheme(event.matches ? 'dark' : 'light');
  });
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('academic-theme-toggle');
    if (!toggle) return;
    toggle.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
    toggle.addEventListener('click', () => {
      savedTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(savedTheme);
      try { localStorage.setItem('theme', savedTheme); } catch (_) { /* Storage is optional. */ }
    });
  });
})();

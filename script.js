// script.js (fixed)

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const mainnav = document.querySelector('.mainnav');
  const searchbar = document.querySelector('.searchbar');
  const topbar = document.querySelector('.topbar');

  // Mobile nav toggle (only if both elements exist)
  if (toggle && mainnav) {
    toggle.addEventListener('click', () => {
      mainnav.classList.toggle('open');
    });
  }

  // Search form behaviour (only if form exists)
  if (searchbar) {
    searchbar.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = searchbar.querySelector('input');
      const q = input ? input.value.trim() : '';
      if (!q) {
        // optional: show a small UI hint instead of alert
        return;
      }
      // demo behaviour
      alert(`Searching for: ${q}`);
    });
  }

  // Header shadow on scroll (only if topbar exists)
  if (topbar) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 4;
          topbar.style.boxShadow = scrolled ? '0 2px 14px rgba(0,0,0,.06)' : 'none';
          ticking = false;
        });
        ticking = true;
      }
    });
  }
});
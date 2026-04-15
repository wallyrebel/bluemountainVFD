// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Footer year
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// Volunteer form - replace mailto behavior with a friendlier flow later (Formspree, CF Worker, etc.)
function handleApply(e) {
  // Let the default mailto fire, but show a thank-you
  setTimeout(() => alert('Thanks! Your email client should open — if not, please call 662-685-4721.'), 50);
  return true;
}

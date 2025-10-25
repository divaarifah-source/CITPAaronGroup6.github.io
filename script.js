// Robust interactivity, active nav highlighting and small helpers
document.addEventListener('DOMContentLoaded', function () {
  // Year
  const yearEls = document.querySelectorAll('#year');
  yearEls.forEach(el => el.textContent = new Date().getFullYear());

  // Form handler (demo)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (status) status.textContent = 'Sending...';
      setTimeout(function () {
        if (status) status.textContent = 'Thanks — message queued (demo).';
        form.reset();
      }, 700);
    });
  }

  // Navbar active link (match filename)
  try {
    const path = (window.location.pathname.split('/').pop() || 'exec.html').toLowerCase();
    document.querySelectorAll('.navbar .nav-link').forEach(a => {
      a.classList.remove('active');
      a.removeAttribute('aria-current');
      const href = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
      if (href === path || (href === 'index.html' && path === 'exec.html')) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });
  } catch (e) { console.warn(e); }
});

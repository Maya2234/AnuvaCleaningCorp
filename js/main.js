// Mobile nav toggle + shared header/footer. No dependencies.
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', open);
});

const headerHost = document.getElementById('site-header');
if (headerHost) {
  fetch('header.html')
    .then((response) => response.text())
    .then((html) => {
      headerHost.innerHTML = html;
      const injectedToggle = headerHost.querySelector('.nav-toggle');
      const injectedNav = headerHost.querySelector('.nav');

      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      headerHost.querySelectorAll('.nav a[href]').forEach((link) => {
        if (link.classList.contains('btn')) return;

        const href = link.getAttribute('href');
        if (href && href.replace(/\.html$/, '') === currentPage.replace(/\.html$/, '')) {
          link.setAttribute('aria-current', 'page');
        }
      });

      injectedToggle?.addEventListener('click', () => {
        const open = injectedNav.classList.toggle('open');
        injectedToggle.classList.toggle('is-open', open);
        injectedToggle.setAttribute('aria-expanded', open);
      });
    })
    .catch((error) => {
      console.error('Header could not be loaded:', error);
    });
}

const footerHost = document.getElementById('site-footer');
if (footerHost) {
  fetch('footer.html')
    .then((response) => response.text())
    .then((html) => {
      footerHost.innerHTML = html;
      const years = footerHost.querySelectorAll('#year');
      years.forEach((year) => {
        year.textContent = new Date().getFullYear();
      });
    })
    .catch((error) => {
      console.error('Footer could not be loaded:', error);
    });
} else {
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
}

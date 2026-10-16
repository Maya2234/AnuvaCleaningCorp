// Mobile nav toggle + shared header/footer. No dependencies.
const certificationRail = document.createElement('aside');
certificationRail.className = 'certification-rail';
certificationRail.setAttribute('aria-label', 'Certifications and credentials');
certificationRail.innerHTML = `
  <div class="certification-rail__header">
    <p class="certification-rail__title" id="certification-rail-title">Certifications</p>
    <button
      class="certification-rail__toggle"
      type="button"
      aria-label="Dock certifications"
      aria-expanded="true"
      aria-controls="certification-logos"
    ><span class="certification-rail__close-icon" aria-hidden="true"></span></button>
  </div>
  <div class="certification-rail__logos" id="certification-logos">
    <img src="/assets/img/BBB.avif" alt="Better Business Bureau" />
    <img src="/assets/img/WBEN.avif" alt="Woman-owned business enterprise" />
    <img src="/assets/img/MBE.avif" alt="Minority-owned business enterprise" />
    <img src="/assets/img/SBA.avif" alt="Small Business Administration" />
  </div>
`;
document.body.append(certificationRail);

const certificationToggle = certificationRail.querySelector('.certification-rail__toggle');
certificationToggle.addEventListener('click', () => {
  const docked = certificationRail.classList.toggle('is-docked');
  certificationToggle.setAttribute('aria-expanded', String(!docked));
  certificationToggle.setAttribute(
    'aria-label',
    docked ? 'View certifications' : 'Dock certifications',
  );
  certificationToggle.innerHTML = docked
    ? 'View Certifications'
    : '<span class="certification-rail__close-icon" aria-hidden="true"></span>';
});

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', open);
});

const headerHost = document.getElementById('site-header');
if (headerHost) {
  fetch('/header.html')
    .then((response) => response.text())
    .then((html) => {
      headerHost.innerHTML = html;
      const injectedToggle = headerHost.querySelector('.nav-toggle');
      const injectedNav = headerHost.querySelector('.nav');

      const currentPage = window.location.pathname.replace(/\/+$/, '').split('/').pop() || 'index';
      headerHost.querySelectorAll('.nav a[href]').forEach((link) => {
        if (link.classList.contains('btn')) return;

        const href = link.getAttribute('href');
        const linkPage = href
          ? new URL(href, window.location.href).pathname.replace(/\/+$/, '').split('/').pop() || 'index'
          : '';
        if (linkPage === currentPage) {
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
  fetch('/footer.html')
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

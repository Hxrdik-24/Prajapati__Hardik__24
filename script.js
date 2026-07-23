// ---------------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------------
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });
}

// ---------------------------------------------------------------
// Scroll reveal for sections / cards
// ---------------------------------------------------------------
const revealTargets = document.querySelectorAll(
  '.project-card, .cred-card, .skill-group, .section-head, .contact-inner > *'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);
revealTargets.forEach((el) => revealObserver.observe(el));

// ---------------------------------------------------------------
// Animate skill bars once visible
// ---------------------------------------------------------------
const bars = document.querySelectorAll('.bar-fill');
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);
bars.forEach((bar) => barObserver.observe(bar));

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    formNote.textContent = 'Sending...';

    setTimeout(() => {
      formNote.textContent = 'Message received — I\'ll reply soon.';
      contactForm.reset();
      submitBtn.disabled = false;
    }, 900);
  });
}


const nav = document.getElementById('nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.boxShadow = y > 10 ? '0 8px 24px -12px rgba(0,0,0,.5)' : 'none';
  lastScroll = y;
}, { passive: true });

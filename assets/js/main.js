// ===== HEADER SCROLL =====
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header && (header.classList.toggle('scrolled', window.scrollY > 20));
});

// ===== HAMBURGER =====
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
hamburger && hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.mobile-nav a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger && hamburger.classList.remove('open');
    mobileNav && mobileNav.classList.remove('open');
  });
});

// ===== ACTIVE NAV =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ===== FADE UP OBSERVER =====
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

// ===== FAQ =====
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contact-form');
contactForm && contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = 'Sending...';
  btn.disabled = true;

  const data = new FormData(contactForm);
  const body = Object.fromEntries(data);

  try {
    const res = await fetch(`https://formsubmit.co/ajax/jayeshn.nautiyal@gmail.com`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ ...body, _subject: 'New SEO Enquiry from Website', _captcha: 'false' })
    });
    if (res.ok) {
      showToast('Message sent! I\'ll reply within 24 hours.', 'success');
      contactForm.reset();
    } else { throw new Error(); }
  } catch {
    showToast('Something went wrong. Please email directly.', 'error');
  } finally {
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
});

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.textContent = msg;
  t.style.cssText = `
    position:fixed;bottom:90px;right:28px;z-index:9999;
    background:${type==='success'?'var(--accent)':'#ff4444'};
    color:${type==='success'?'#000':'#fff'};
    padding:14px 22px;border-radius:10px;font-weight:600;
    font-family:var(--font-body);font-size:0.9rem;
    box-shadow:0 8px 24px rgba(0,0,0,0.3);
    animation:slideIn 0.3s ease;
  `;
  document.head.insertAdjacentHTML('beforeend', '<style>@keyframes slideIn{from{transform:translateX(120%)}to{transform:translateX(0)}}</style>');
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + (el.dataset.suffix || '');
  }, 16);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ===== SMOOTH ANCHOR =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

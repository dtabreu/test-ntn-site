/* ════════════════════════════════════════
   INSTITUTO NITEN — Main JS
   Brand Guide v1.0 · 2026
════════════════════════════════════════ */

/* ── HERO SLIDER ── */
(function () {
  const track = document.getElementById('heroTrack');
  if (!track) return;

  const dots   = document.querySelectorAll('.hero-dot');
  const arrow  = document.getElementById('heroSliderArrow');
  const scroll = document.querySelector('.hero-scroll');
  let current  = 0;
  const total  = 2;

  function goTo(n) {
    current = ((n % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}vw)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));

    /* Seta inverte direção */
    if (arrow) {
      arrow.textContent      = current === 0 ? '›' : '‹';
      arrow.setAttribute('aria-label', current === 0 ? 'Ver vídeo' : 'Voltar');
      arrow.classList.toggle('is-prev', current !== 0);
    }

    /* Esconde "Descubra" no slide de vídeo */
    if (scroll) scroll.style.opacity = current === 0 ? '' : '0';
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
  if (arrow) arrow.addEventListener('click', () => goTo(current === 0 ? 1 : 0));

  /* Swipe touch */
  let tx = 0;
  track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });
})();

/* ── NAV: Opacidade ao scroll ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── NAV: Mobile toggle ── */
const toggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── SMOOTH SCROLL para âncoras ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

/* ── INTERSECTION OBSERVER: Animações de entrada ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ── COUNTER ANIMATION para stats ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = prefix + Math.floor(current).toLocaleString('pt-BR') + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const statsSection = document.getElementById('sobre');
if (statsSection) counterObserver.observe(statsSection);

/* ── FORM: Gerador de mensagem WhatsApp ── */
const form = document.getElementById('contatoForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome       = (document.getElementById('nome')?.value || '').trim();
    const cidade     = (document.getElementById('cidade')?.value || '').trim();
    const modalidade = (document.getElementById('modalidade')?.value || 'Kenjutsu');

    if (!nome || !cidade) {
      const firstEmpty = !nome
        ? document.getElementById('nome')
        : document.getElementById('cidade');
      firstEmpty.focus();
      firstEmpty.style.borderColor = 'var(--dourado)';
      setTimeout(() => { firstEmpty.style.borderColor = ''; }, 2000);
      return;
    }

    const msg = `Olá, Instituto Niten! Me chamo ${nome}, sou de ${cidade} e tenho interesse em ${modalidade}. Gostaria de saber mais sobre as aulas experimentais. Podem me ajudar?`;

    window.open(
      `https://wa.me/5511942948956?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  });
}

/* ── PARALLAX suave no hero ── */
const heroBgKanji = document.querySelector('.hero-bg-kanji');
if (heroBgKanji) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroBgKanji.style.transform = `translate(-50%, calc(-50% + ${y * 0.15}px))`;
    }
  }, { passive: true });
}

/* ── NAV: Highlight seção ativa ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--dourado)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

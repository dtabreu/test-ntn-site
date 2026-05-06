/* ════════════════════════════════════════
   INSTITUTO NITEN — Stylesheet
   Brand Guide v1.0 · 2026
════════════════════════════════════════ */

/* ── VARIABLES ── */
:root {
  --preto:         #0D0D0D;
  --preto-soft:    #111111;
  --preto-card:    #161616;
  --preto-elevated:#1C1C1C;
  --dourado:       #C9A84C;
  --dourado-claro: #E4C46A;
  --dourado-escuro:#8A6320;
  --vinho:         #6B1A1A;
  --branco:        #F5F0E8;
  --cinza-escuro:  #242424;
  --cinza:         #3A3A3A;
  --cinza-medio:   #606060;
  --cinza-claro:   #9A9A9A;

  --font-display: 'Cinzel', serif;
  --font-jp:      'Noto Serif JP', serif;
  --font-body:    'Lato', sans-serif;

  --nav-h: 80px;
  --max:   1200px;
  --ease:  cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ── SKIP LINK (acessibilidade) ── */
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  background: var(--dourado);
  color: var(--preto);
  padding: 10px 20px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 0 0 4px 4px;
  z-index: 9999;
  transition: top .2s;
}
.skip-link:focus { top: 0; }

/* ── RESET & BASE ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }

body {
  background: var(--preto);
  color: var(--branco);
  font-family: var(--font-body);
  font-weight: 300;
  line-height: 1.7;
  overflow-x: hidden;
}

img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }

/* ── TYPOGRAPHY ── */
h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; line-height: 1.15; }
.jp { font-family: var(--font-jp); }

/* ── LAYOUT HELPERS ── */
.container {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 48px;
}
.section { padding: 110px 0; }
.section-label {
  font-size: 11px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--dourado);
  margin-bottom: 16px;
  display: block;
}
.section-title {
  font-size: clamp(28px, 4vw, 52px);
  color: var(--branco);
  margin-bottom: 20px;
}
.section-title em { color: var(--dourado); font-style: normal; }
.section-desc {
  font-size: 17px;
  color: var(--cinza-claro);
  max-width: 560px;
  line-height: 1.8;
}
.gold-line {
  width: 64px; height: 2px;
  background: var(--dourado);
  margin: 24px 0;
}
.gold-line.center { margin: 24px auto; }
.divider {
  width: 100%; height: 1px;
  background: linear-gradient(to right, transparent, rgba(201,168,76,.25), transparent);
}

/* ── BUTTONS ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  font-family: var(--font-display);
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 2px;
  transition: all .3s var(--ease);
  white-space: nowrap;
}
.btn-primary {
  background: var(--dourado);
  color: var(--preto);
  font-weight: 700;
}
.btn-primary:hover {
  background: var(--dourado-claro);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(201,168,76,.3);
}
.btn-ghost {
  border: 1px solid rgba(201,168,76,.5);
  color: var(--dourado);
}
.btn-ghost:hover {
  border-color: var(--dourado);
  background: rgba(201,168,76,.08);
  transform: translateY(-2px);
}
.btn-whatsapp {
  background: #25D366;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  padding: 18px 40px;
}
.btn-whatsapp:hover {
  background: #1ebe5d;
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(37,211,102,.3);
}

/* Focus visível para navegação por teclado (WCAG 2.2) */
:focus-visible {
  outline: 2px solid var(--dourado);
  outline-offset: 3px;
}
.btn:focus-visible {
  outline: 2px solid var(--dourado);
  outline-offset: 4px;
  border-radius: 2px;
}
.hero-dot:focus-visible {
  outline: 2px solid var(--dourado);
  outline-offset: 6px;
}
.hero-slider-arrow:focus-visible {
  outline: 2px solid var(--dourado);
  outline-offset: 4px;
}
.nav-toggle:focus-visible {
  outline: 2px solid var(--dourado);
  outline-offset: 4px;
}

/* ════════════════════════════════════════
   NAV
════════════════════════════════════════ */
#nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-h);
  transition: background .4s var(--ease), box-shadow .4s;
}
#nav.scrolled {
  background: rgba(13,13,13,.97);
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 rgba(201,168,76,.15);
}
.nav-container {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 48px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo img {
  height: 52px;
  width: auto;
  transition: opacity .3s;
}
.nav-logo:hover img { opacity: .8; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
}
.nav-links a {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--cinza-claro);
  transition: color .3s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 1px;
  background: var(--dourado);
  transition: width .3s var(--ease);
}
.nav-links a:hover { color: var(--dourado); }
.nav-links a:hover::after { width: 100%; }

.nav-cta {
  background: var(--dourado) !important;
  color: var(--preto) !important;
  padding: 10px 22px;
  border-radius: 2px;
  font-weight: 700 !important;
  font-family: var(--font-display);
  letter-spacing: 1px !important;
  font-size: 11px !important;
  transition: background .3s, transform .3s !important;
}
.nav-cta::after { display: none !important; }
.nav-cta:hover {
  background: var(--dourado-claro) !important;
  transform: translateY(-1px);
}

/* Mobile hamburger */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}
.nav-toggle span {
  display: block;
  width: 26px; height: 2px;
  background: var(--branco);
  transition: all .3s var(--ease);
  transform-origin: center;
}
.nav-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.nav-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.nav-mobile {
  position: fixed;
  top: var(--nav-h); left: 0; right: 0; bottom: 0;
  background: rgba(13,13,13,.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  transform: translateX(100%);
  transition: transform .4s var(--ease);
  z-index: 99;
}
.nav-mobile.open { transform: translateX(0); }
.nav-mobile a {
  font-family: var(--font-display);
  font-size: 24px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--branco);
  transition: color .3s;
}
.nav-mobile a:hover { color: var(--dourado); }
.nav-mobile .nav-cta {
  font-size: 14px !important;
  padding: 14px 36px !important;
}

/* ════════════════════════════════════════
   HERO
════════════════════════════════════════ */
#hero {
  height: 100vh;
  min-height: 700px;
  position: relative;
  overflow: hidden;
}

/* ── SLIDER TRACK ── */
.hero-track {
  display: flex;
  height: 100%;
  transition: transform .75s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
}
.hero-slide {
  width: 100vw;
  height: 100%;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

/* Slide 1: conteúdo principal */
.hero-slide-1 {
  background-image: url('https://niten.org.br/uploads/blog/6974/mundial-kenjutsu-hofmeister-000207.jpg?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--nav-h) 24px 148px; /* bottom amplo para separar botões do "Descubra" */
}

/* Slide 2: vídeo full — desktop: texto esquerda + vídeo direita; mobile: vídeo tela toda */
.hero-slide-2 {
  display: flex;
  align-items: stretch;
  overflow: hidden;
}
.hero-slide-2-bg {
  position: absolute;
  inset: 0;
  background: var(--preto);
}
/* Coluna esquerda: texto com gradiente que dissolve no vídeo */
.hero-vid-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(var(--nav-h) + 40px) 64px 80px;
  position: relative;
  z-index: 2;
  background: linear-gradient(to right, rgba(13,13,13,.95) 60%, transparent);
}
.hero-video-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 58px);
  color: var(--branco);
  line-height: 1.1;
  margin-bottom: 20px;
}
.hero-video-title em { color: var(--dourado); font-style: normal; }
.hero-video-desc {
  color: var(--cinza-claro);
  font-size: 16px;
  line-height: 1.8;
  max-width: 420px;
  margin-bottom: 32px;
}
/* Coluna direita: vídeo 16:9 no desktop */
.hero-vid-right {
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 64px 48px 0;
  overflow: hidden;
}
.hero-vid-right .vid-desktop {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  display: block;
}
.hero-vid-right .vid-mobile {
  display: none;
}

/* Navigation dots */
.hero-slider-nav {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  gap: 10px;
  align-items: center;
}
.hero-dot {
  width: 8px; height: 8px;
  background: rgba(255,255,255,.25);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 18px;
  margin: -18px;
  background-clip: content-box;
  transition: background .3s, width .35s var(--ease), border-radius .35s;
}
.hero-dot.active {
  background: var(--dourado);
  background-clip: content-box;
  width: 28px;
  border-radius: 4px;
}

/* Arrow button */
.hero-slider-arrow {
  position: absolute;
  right: 36px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: rgba(201,168,76,.12);
  border: 1px solid rgba(201,168,76,.3);
  color: var(--dourado);
  width: 52px; height: 52px;
  border-radius: 50%;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .3s, transform .3s;
  font-family: Georgia, serif;
  line-height: 1;
  padding-left: 3px;
}
.hero-slider-arrow:hover {
  background: rgba(201,168,76,.28);
  transform: translateY(-50%) scale(1.08);
}
.hero-slider-arrow.is-prev { padding-left: 0; padding-right: 4px; }

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(13,13,13,.87);
  pointer-events: none;
  z-index: 0;
}
.hero-bg, .hero-bg-kanji, .hero-scroll { z-index: 1; }
.hero-content { z-index: 2; }

.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 70% at 50% 40%, rgba(201,168,76,.06) 0%, transparent 70%);
  pointer-events: none;
}
.hero-bg-kanji {
  position: absolute;
  font-family: var(--font-jp);
  font-size: clamp(300px, 45vw, 600px);
  font-weight: 700;
  color: rgba(201,168,76,.03);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  user-select: none;
  line-height: 1;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-logo {
  width: clamp(220px, 35vw, 400px);
  margin-bottom: 40px;
  animation: fadeDown .9s var(--ease) both;
}
.hero-tagline-label {
  font-size: 11px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: var(--dourado);
  animation: fadeUp .8s .2s var(--ease) both;
  margin-bottom: 20px;
}
.hero-title {
  font-size: clamp(32px, 5.5vw, 72px);
  font-weight: 700;
  line-height: 1.05;
  color: var(--branco);
  letter-spacing: 2px;
  animation: fadeUp .8s .3s var(--ease) both;
  margin-bottom: 8px;
}
.hero-title em { color: var(--dourado); font-style: normal; display: block; }

.hero-gold-line {
  width: 0; height: 1px;
  background: var(--dourado);
  margin: 28px auto;
  animation: expandLine .8s .5s var(--ease) forwards;
}
.hero-quote {
  font-size: clamp(14px, 1.8vw, 18px);
  color: var(--cinza-claro);
  font-style: italic;
  line-height: 1.9;
  max-width: 540px;
  animation: fadeUp .8s .6s var(--ease) both;
  margin-bottom: 48px;
}
.hero-quote strong { color: var(--branco); font-style: normal; }

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  animation: fadeUp .8s .8s var(--ease) both;
}

.hero-scroll {
  position: absolute;
  bottom: 44px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--cinza-medio);
  pointer-events: none;
  animation: fadeUp 1s 1.2s var(--ease) both;
}
.hero-scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--dourado), transparent);
  animation: scrollPulse 2s 1.5s ease-in-out infinite;
}

/* ════════════════════════════════════════
   SOBRE
════════════════════════════════════════ */
#sobre { background: var(--preto-soft); }

.sobre-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.sobre-kamon {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.sobre-foto-frame {
  position: relative;
  border: 1px solid rgba(201,168,76,.15);
  width: 100%;
  max-width: 420px;
  overflow: hidden;
}
.sobre-foto-img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  display: block;
}
.sobre-foto-frame .slc {
  position: absolute;
  width: 22px; height: 22px;
  z-index: 2;
}
.sobre-foto-frame .slc.tl { top: 14px; left: 14px; border-top: 2px solid var(--dourado); border-left: 2px solid var(--dourado); }
.sobre-foto-frame .slc.tr { top: 14px; right: 14px; border-top: 2px solid var(--dourado); border-right: 2px solid var(--dourado); }
.sobre-foto-frame .slc.bl { bottom: 14px; left: 14px; border-bottom: 2px solid var(--dourado); border-left: 2px solid var(--dourado); }
.sobre-foto-frame .slc.br { bottom: 14px; right: 14px; border-bottom: 2px solid var(--dourado); border-right: 2px solid var(--dourado); }
.sobre-foto-caption {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(13,13,13,.9) 60%, transparent);
  padding: 40px 24px 28px;
  text-align: center;
  z-index: 1;
}
.sobre-frame-divider { width: 48px; height: 1px; background: var(--dourado); margin: 0 auto 16px; }
.sobre-frame-year { font-family: var(--font-display); font-size: 44px; font-weight: 700; color: var(--dourado); line-height: 1; text-align: center; }
.sobre-frame-label { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: var(--cinza-claro); text-align: center; margin-top: 6px; }

.sobre-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin: 40px 0;
}
.stat {
  background: var(--cinza-escuro);
  padding: 24px 16px;
  text-align: center;
}
.stat-number {
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 40px);
  color: var(--dourado);
  font-weight: 700;
  display: block;
  line-height: 1;
}
.stat-label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--cinza-claro);
  margin-top: 8px;
  display: block;
}
.sobre-text p {
  color: var(--cinza-claro);
  font-size: 16px;
  line-height: 1.9;
  margin-bottom: 16px;
}
.sobre-text p strong { color: var(--branco); }

/* ════════════════════════════════════════
   MODALIDADES
════════════════════════════════════════ */
#modalidades { background: var(--preto); }

.modalidades-header { text-align: center; margin-bottom: 64px; }
.modalidades-header .section-desc { margin: 0 auto; }

.modalidades-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}
.modalidade-card {
  background: var(--preto-card);
  padding: 0;
  position: relative;
  overflow: hidden;
  cursor: default;
  transition: background .3s var(--ease);
  display: flex;
  flex-direction: column;
}
.modalidade-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(201,168,76,.05) 0%, transparent 60%);
  opacity: 0;
  transition: opacity .4s;
}
.modalidade-card:hover { background: var(--cinza-escuro); }
.modalidade-card:hover::before { opacity: 1; }

.modalidade-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: var(--dourado);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .4s var(--ease);
}
.modalidade-card:hover::after { transform: scaleX(1); }

/* ── CARD IMAGE WRAPPER ── */
.mod-img-wrap {
  height: 200px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}
.mod-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
  filter: brightness(.38) sepia(.4);
  transition: transform .6s var(--ease), filter .5s;
}
.modalidade-card:hover .mod-img-wrap img {
  transform: scale(1.07);
  filter: brightness(.52) sepia(.55);
}
.mod-img-wrap::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, var(--preto-card));
  pointer-events: none;
}

.mod-body {
  padding: 28px 36px 44px;
  position: relative;
  flex: 1;
}

.mod-kanji {
  font-family: var(--font-jp);
  font-size: 72px;
  color: rgba(201,168,76,.08);
  position: absolute;
  top: 16px; right: 24px;
  line-height: 1;
  pointer-events: none;
  transition: color .4s;
}
.modalidade-card:hover .mod-kanji { color: rgba(201,168,76,.15); }

.mod-number {
  font-family: var(--font-display);
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--dourado);
  text-transform: uppercase;
  margin-bottom: 20px;
  display: block;
}
.mod-title {
  font-family: var(--font-display);
  font-size: clamp(20px, 2.5vw, 28px);
  color: var(--branco);
  margin-bottom: 16px;
}
.mod-sub {
  font-size: 12px;
  letter-spacing: 3px;
  color: var(--dourado);
  text-transform: uppercase;
  margin-bottom: 20px;
  display: block;
}
.mod-line {
  width: 40px; height: 1px;
  background: var(--dourado);
  margin-bottom: 20px;
  transition: width .4s var(--ease);
}
.modalidade-card:hover .mod-line { width: 80px; }
.mod-desc {
  font-size: 15px;
  color: var(--cinza-claro);
  line-height: 1.8;
}

/* ════════════════════════════════════════
   SENSEI
════════════════════════════════════════ */
#sensei { background: var(--preto-soft); }

.sensei-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.sensei-visual {
  position: relative;
}
.sensei-foto {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  z-index: 0;
}
.sensei-frame {
  background: var(--cinza-escuro);
  border: 1px solid rgba(201,168,76,.2);
  aspect-ratio: 4/5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.sensei-frame::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(13,13,13,.65);
  z-index: 1;
}
.sensei-frame-kanji,
.sensei-frame-label,
.sensei-corner { z-index: 2; }
.sensei-frame-kanji {
  font-family: var(--font-jp);
  font-size: 180px;
  color: rgba(201,168,76,.08);
  line-height: 1;
}
.sensei-frame-label {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(13,13,13,.9) 60%, transparent);
  padding: 40px 32px 28px;
  text-align: center;
}
.sensei-frame-name {
  font-family: var(--font-display);
  font-size: 18px;
  color: var(--branco);
  display: block;
}
.sensei-frame-title {
  font-size: 12px;
  color: var(--dourado);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 4px;
  display: block;
}
.sensei-corner {
  position: absolute;
  width: 24px; height: 24px;
}
.sensei-corner.tl { top: 12px; left: 12px; border-top: 1px solid var(--dourado); border-left: 1px solid var(--dourado); }
.sensei-corner.tr { top: 12px; right: 12px; border-top: 1px solid var(--dourado); border-right: 1px solid var(--dourado); }
.sensei-corner.bl { bottom: 12px; left: 12px; border-bottom: 1px solid var(--dourado); border-left: 1px solid var(--dourado); }
.sensei-corner.br { bottom: 12px; right: 12px; border-bottom: 1px solid var(--dourado); border-right: 1px solid var(--dourado); }

.sensei-credentials {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 28px 0;
}
.credential {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px;
  background: var(--cinza-escuro);
}
.credential-icon {
  font-family: var(--font-jp);
  font-size: 20px;
  color: var(--dourado);
  flex-shrink: 0;
  width: 28px;
  text-align: center;
}
.credential-text {
  font-size: 14px;
  color: var(--cinza-claro);
  line-height: 1.6;
}
.credential-text strong { color: var(--branco); display: block; font-size: 15px; margin-bottom: 2px; }

.sensei-quote {
  border-left: 2px solid var(--dourado);
  padding: 16px 24px;
  margin: 24px 0;
  font-style: italic;
  color: var(--cinza-claro);
  font-size: 16px;
  line-height: 1.8;
}
.sensei-quote strong { color: var(--branco); font-style: normal; }

/* ════════════════════════════════════════
   MÉTODO KIR
════════════════════════════════════════ */
#metodo {
  background: var(--preto);
  position: relative;
  overflow: hidden;
}
#metodo::before {
  content: 'KIR';
  position: absolute;
  font-family: var(--font-display);
  font-size: clamp(120px, 20vw, 280px);
  font-weight: 700;
  color: rgba(201,168,76,.03);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  letter-spacing: 16px;
}

.metodo-header { text-align: center; margin-bottom: 64px; }
.metodo-header .section-desc { margin: 0 auto; }
.metodo-header .gold-line { margin: 24px auto; }

.metodo-pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin-bottom: 64px;
}
.pillar {
  background: var(--preto-card);
  padding: 48px 36px;
  text-align: center;
  position: relative;
  transition: background .3s;
}
.pillar:hover { background: var(--cinza-escuro); }
.pillar-num {
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 4px;
  color: var(--dourado);
  text-transform: uppercase;
  margin-bottom: 20px;
  display: block;
}
.pillar-icon {
  font-family: var(--font-jp);
  font-size: 48px;
  color: var(--dourado);
  margin-bottom: 20px;
  display: block;
}
.pillar-title {
  font-family: var(--font-display);
  font-size: 18px;
  color: var(--branco);
  margin-bottom: 16px;
}
.pillar-desc {
  font-size: 14px;
  color: var(--cinza-claro);
  line-height: 1.8;
}

.metodo-destaque {
  background: var(--cinza-escuro);
  border: 1px solid rgba(201,168,76,.15);
  padding: 52px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  align-items: center;
}
.metodo-destaque-label {
  font-family: var(--font-jp);
  font-size: 64px;
  color: var(--dourado);
  text-align: center;
  line-height: 1;
}
.metodo-destaque-text h3 {
  font-family: var(--font-display);
  font-size: 22px;
  color: var(--branco);
  margin-bottom: 16px;
}
.metodo-destaque-text p {
  font-size: 15px;
  color: var(--cinza-claro);
  line-height: 1.9;
  margin-bottom: 24px;
}

/* ════════════════════════════════════════
   VALORES (BUSHIDO)
════════════════════════════════════════ */
#valores { background: var(--preto-soft); }

.valores-header { text-align: center; margin-bottom: 64px; }
.valores-header .gold-line { margin: 24px auto; }

.valores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}
/* 7º card centralizado na última linha */
.valor-last {
  grid-column: 2;
}
.valor-card {
  background: var(--preto-card);
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: background .3s;
}
.valor-card:hover { background: var(--cinza-escuro); }
.valor-jp {
  font-family: var(--font-jp);
  font-size: 48px;
  color: var(--dourado);
  margin-bottom: 16px;
  display: block;
}
.valor-pt {
  font-family: var(--font-display);
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--branco);
  margin-bottom: 12px;
  display: block;
}
.valor-line {
  width: 24px; height: 1px;
  background: var(--dourado);
  margin-bottom: 12px;
  transition: width .4s var(--ease);
}
.valor-card:hover .valor-line { width: 48px; }
.valor-desc { font-size: 13px; color: var(--cinza-claro); line-height: 1.7; }

/* ════════════════════════════════════════
   PRESENÇA
════════════════════════════════════════ */
#onde-treinar { background: var(--preto); }

.presenca-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.presenca-numbers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
}
.presenca-num-card {
  background: var(--preto-card);
  padding: 36px 28px;
  text-align: center;
}
.presenca-big {
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 56px);
  color: var(--dourado);
  font-weight: 700;
  line-height: 1;
  display: block;
}
.presenca-sub {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--cinza-claro);
  margin-top: 8px;
  display: block;
}

.presenca-paises {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 32px;
}
.pais {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--cinza-claro);
}
.pais::before {
  content: '·';
  color: var(--dourado);
  font-size: 16px;
}

/* ════════════════════════════════════════
   MOMENTOS DE OURO
════════════════════════════════════════ */
#momentos {
  background: var(--cinza-escuro);
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 110px 0;
  position: relative;
  overflow: hidden;
}
#momentos::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(13,13,13,.82);
  pointer-events: none;
  z-index: 0;
}
.momentos-content { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; padding: 0 48px; }
.momentos-icon {
  font-family: var(--font-jp);
  font-size: 56px;
  color: var(--dourado);
  margin-bottom: 24px;
  display: block;
}
.momentos-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 48px);
  color: var(--branco);
  margin-bottom: 24px;
}
.momentos-desc {
  font-size: 17px;
  color: var(--cinza-claro);
  line-height: 1.9;
  margin-bottom: 32px;
}

/* ════════════════════════════════════════
   CONTATO
════════════════════════════════════════ */
#contato { background: var(--preto-soft); }

.contato-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}
.contato-info { }
.contato-info .section-desc { margin-bottom: 40px; }
.contato-detail {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}
.detail-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.detail-icon {
  color: var(--dourado);
  flex-shrink: 0;
  width: 24px;
  display: flex;
  align-items: flex-start;
  padding-top: 2px;
}
.detail-text { font-size: 15px; color: var(--cinza-claro); line-height: 1.6; }
.detail-text strong { color: var(--branco); display: block; margin-bottom: 2px; }
.detail-text a { color: var(--dourado); transition: opacity .2s; }
.detail-text a:hover { opacity: .7; }

.contato-form { }
.form-group { margin-bottom: 20px; }
.form-label {
  display: block;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--cinza-claro);
  margin-bottom: 8px;
}
.form-input,
.form-textarea {
  width: 100%;
  background: var(--cinza-escuro);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 2px;
  padding: 14px 18px;
  color: var(--branco);
  font-family: var(--font-body);
  font-size: 15px;
  transition: border-color .3s;
  outline: none;
}
.form-input:focus,
.form-textarea:focus { border-color: var(--dourado); }
.form-textarea { min-height: 130px; resize: vertical; }
.form-input::placeholder,
.form-textarea::placeholder { color: var(--cinza-medio); }
.field-error {
  display: block;
  font-size: 12px;
  color: #e07070;
  margin-top: 6px;
  letter-spacing: .5px;
  min-height: 16px;
}
.btn:disabled {
  opacity: .65;
  cursor: not-allowed;
  transform: none !important;
}
.btn-loading-icon {
  display: inline-block;
  animation: spin .8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ════════════════════════════════════════
   FOOTER
════════════════════════════════════════ */
#footer {
  background: var(--preto);
  border-top: 1px solid rgba(201,168,76,.1);
  padding: 80px 0 40px;
}
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 64px;
}
.footer-brand { }
.footer-logo {
  height: 72px;
  width: auto;
  margin-bottom: 20px;
}
.footer-brand-desc {
  font-size: 14px;
  color: var(--cinza-claro);
  line-height: 1.8;
  max-width: 260px;
  margin-bottom: 24px;
}
.footer-social {
  display: flex;
  gap: 12px;
}
.social-btn {
  width: 40px; height: 40px;
  background: var(--cinza-escuro);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  color: var(--cinza-claro);
  font-size: 16px;
  font-family: var(--font-jp);
  transition: background .3s, color .3s;
}
.social-btn:hover { background: var(--dourado); color: var(--preto); }

.footer-col-title {
  font-family: var(--font-display);
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--dourado);
  margin-bottom: 20px;
  display: block;
}
.footer-links { display: flex; flex-direction: column; gap: 12px; }
.footer-links a {
  font-size: 14px;
  color: var(--cinza-claro);
  transition: color .3s;
}
.footer-links a:hover { color: var(--dourado); }

.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}
.footer-copy { font-size: 12px; color: var(--cinza-medio); }
.footer-copy em { color: var(--dourado); font-style: normal; }
.footer-tagline {
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 3px;
  color: var(--cinza-medio);
  text-transform: uppercase;
}

/* ════════════════════════════════════════
   VÍDEO
════════════════════════════════════════ */
#video { background: var(--preto); }
.video-header { text-align: center; margin-bottom: 48px; }
.video-header .gold-line { margin: 20px auto; }
.video-header .section-desc { margin: 0 auto; }

/* ── VIDEO WRAPPER (iframe embed) ── */
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  background: #000;
  border: 1px solid rgba(201,168,76,.2);
  box-shadow: 0 24px 80px rgba(0,0,0,.7), 0 0 0 1px rgba(201,168,76,.08);
}
.video-wrapper iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 0;
}


.video-note {
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  color: var(--cinza-claro);
}
.video-note a { color: var(--dourado); transition: opacity .2s; }
.video-note a:hover { opacity: .7; }

/* ════════════════════════════════════════
   SCROLL ANIMATIONS
════════════════════════════════════════ */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity .7s var(--ease), transform .7s var(--ease);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: .1s; }
.reveal-delay-2 { transition-delay: .2s; }
.reveal-delay-3 { transition-delay: .3s; }
.reveal-delay-4 { transition-delay: .4s; }
.reveal-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity .7s var(--ease), transform .7s var(--ease);
}
.reveal-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity .7s var(--ease), transform .7s var(--ease);
}
.reveal-left.visible, .reveal-right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* ════════════════════════════════════════
   KEYFRAMES
════════════════════════════════════════ */
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes expandLine {
  to { width: 80px; }
}
@keyframes scrollPulse {
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50% { opacity: .4; transform: scaleY(0.6); }
}

/* ════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════ */
@media (max-width: 1024px) {
  .sobre-grid,
  .sensei-grid,
  .presenca-grid,
  .contato-grid { grid-template-columns: 1fr; gap: 48px; }
  /* Slide 2 mobile: vídeo full screen + texto overlay na base */
  .hero-slide-2 { position: relative; }
  .hero-vid-text {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 100px 24px 72px;
    background: linear-gradient(to top, rgba(13,13,13,.92) 60%, transparent);
    flex: none;
  }
  .hero-video-desc { display: none; }
  .hero-vid-right {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    padding: 0;
  }
  .hero-vid-right .vid-desktop {
    display: none;
  }
  .hero-vid-right .vid-mobile {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: calc(100vh * 9 / 16);
    min-width: 100%;
    aspect-ratio: unset;
    border: 0;
  }
  .video-note { font-size: 12px; }
  .sobre-kamon { order: -1; }
  .footer-top { grid-template-columns: 1fr 1fr; }
  .metodo-destaque { grid-template-columns: 1fr; text-align: center; }
  .modalidades-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  :root { --nav-h: 68px; }
  .container { padding: 0 20px; }
  .section { padding: 80px 0; }
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
  .nav-logo img { height: 42px; }

  .hero-logo { width: clamp(180px, 60vw, 260px); }

  .modalidades-grid,
  .valores-grid { grid-template-columns: 1fr; }
  .valor-last { grid-column: 1; }
  .metodo-pillars { grid-template-columns: 1fr; }
  .presenca-numbers { grid-template-columns: 1fr 1fr; }
  .presenca-paises { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .sobre-stats { grid-template-columns: 1fr 1fr 1fr; }
  .metodo-destaque { padding: 32px 24px; }
  .hero-actions { flex-direction: column; align-items: center; }
  .hero-actions .btn { width: 100%; max-width: 280px; justify-content: center; }
  .hero-slider-arrow { display: none; }
}

@media (max-width: 480px) {
  .sobre-stats { grid-template-columns: 1fr; }
  .presenca-numbers { grid-template-columns: 1fr; }
}

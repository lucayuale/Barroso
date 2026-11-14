/* Barroso: progressive enhancement; no animation library or persistent frame loop. */
(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = matchMedia('(min-width: 961px) and (hover: hover)');
  const tracked = new Set();
  const hero = document.querySelector('.hero');
  const header = document.querySelector('.header');
  const heroPhoto = document.querySelector('.hero-image');
  let observer = null;
  let frame = 0;
  let heroInView = true;
  const selectors = [
    '.reveal:not(.hero-content)', '.hero-content > *', '.hero-bottom',
    '.fact', '.section-head > *', '.record-panel', '.achievement',
    '.next-event .wrap > .eyebrow', '.event-layout > *', '.event-note',
    '.gallery-toolbar', '.gallery-card', '.kit-row > *', '.reach-layout > *',
    '.contact .wrap > .eyebrow', '.contact-head > *', '.contact-links > a',
    '.footer-top > *'
  ].join(',');

  function show(el) {
    el.classList.add('visible');
    observer?.unobserve(el);
  }
  function refresh() {
    for (const el of tracked) {
      if (!el.isConnected) { observer?.unobserve(el); tracked.delete(el); }
    }
    document.querySelectorAll(selectors).forEach(el => {
      if (tracked.has(el)) return;
      // Avoid double reveals inside an already animated parent.
      if (el.parentElement?.closest('.ab-reveal')) return;
      tracked.add(el);
      el.classList.add('ab-reveal');
      const siblings = [...el.parentElement.children].filter(n => n.matches(selectors));
      const heroChild = el.parentElement.classList.contains('hero-content');
      const delay = heroChild ? Math.min(siblings.indexOf(el), 4) * 90
        : (innerWidth > 600 ? Math.max(0, siblings.indexOf(el)) % 3 * 75 : 0);
      el.style.setProperty('--ab-delay', `${delay}ms`);
      if (reduced.matches || !observer || el.getBoundingClientRect().bottom < 0) show(el);
      else observer.observe(el);
    });
  }
  function updateScroll() {
    frame = 0;
    header?.classList.toggle('has-scrolled', scrollY > 32);
    const shift = !reduced.matches && desktop.matches && heroInView && !document.hidden
      ? Math.min(12, Math.max(0, scrollY * 0.025)) : 0;
    heroPhoto?.style.setProperty('--ab-shift', `${shift}px`);
  }
  function requestUpdate() {
    if (!frame) frame = requestAnimationFrame(updateScroll);
  }
  function preferenceChanged() {
    if (reduced.matches) tracked.forEach(show);
    requestUpdate();
  }
  try {
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) show(entry.target); });
      }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });
      if (hero) {
        new IntersectionObserver(entries => {
          heroInView = entries[0].isIntersecting;
          requestUpdate();
        }).observe(hero);
      }
    }
    root.classList.add('ab-motion-ready');
    window.ABMotion = { refresh };
    refresh();
    updateScroll();
    addEventListener('scroll', requestUpdate, { passive: true });
    addEventListener('resize', requestUpdate, { passive: true });
    document.addEventListener('visibilitychange', requestUpdate);
    reduced.addEventListener('change', preferenceChanged);
    desktop.addEventListener('change', requestUpdate);
    document.addEventListener('focusin', event => {
      let el = event.target.closest('.ab-reveal');
      while (el) { show(el); el = el.parentElement.closest('.ab-reveal'); }
    });
    // Any navigation to an anchor remains readable immediately to keyboard users.
    document.addEventListener('click', event => {
      const link = event.target.closest('a[href^="#"]');
      if (!link || link.hash.length < 2) return;
      const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (target) {
        if (target.matches('.ab-reveal')) show(target);
        target.querySelectorAll('.ab-reveal').forEach(show);
      }
    });
  } catch (error) {
    root.classList.remove('ab-motion-ready');
    tracked.forEach(show);
    console.warn('Motion enhancement unavailable; content remains visible.', error);
  }
})();

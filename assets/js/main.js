// MetaPohyb Website – Minimal interactivity + i18n

// ── i18n ────────────────────────────────────────────────────────────────────
function getPreferredLanguage(translations) {
  // Explicit per-page override (set inline by en/ and sk/ pages)
  if (window.MP_LANG && translations[window.MP_LANG]) {
    return window.MP_LANG;
  }
  // Fallback: browser language (used by standalone pages like reset-password, 404, etc.)
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return browserLang.startsWith('sk') ? 'sk' : 'en';
}

function runTranslations() {
  const translations = window.MP_TRANSLATIONS;
  if (!translations) return;

  const lang = getPreferredLanguage(translations);
  const fallbackDict = translations.en || {};
  const dict = translations[lang] || fallbackDict;

  window.MP_LANG = lang;
  document.documentElement.lang = lang;
  window.MP_T = function translate(key) {
    if (dict[key] !== undefined) return dict[key];
    if (fallbackDict[key] !== undefined) return fallbackDict[key];
    return key;
  };

  // Plain-text replacements (data-i18n="key")
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = window.MP_T(key);
    if (value !== key) {
      el.textContent = value;
    }
  });

  // HTML replacements (data-i18n-html="key") – values are trusted static strings
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    const value = window.MP_T(key);
    if (value !== key) {
      el.innerHTML = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = window.MP_T(key);
    if (value !== key) {
      el.setAttribute('placeholder', value);
    }
  });

  document.querySelectorAll('[data-i18n-content]').forEach((el) => {
    const key = el.getAttribute('data-i18n-content');
    const value = window.MP_T(key);
    if (value !== key) {
      el.setAttribute('content', value);
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    const value = window.MP_T(key);
    if (value !== key) {
      el.setAttribute('alt', value);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runTranslations, { once: true });
} else {
  runTranslations();
}

// ── Language dropdown ────────────────────────────────────────────────────────
const _LANGS = {
  en: { flag: '\uD83C\uDDEC\uD83C\uDDE7', label: 'EN', full: 'English' },
  sk: { flag: '\uD83C\uDDF8\uD83C\uDDF0', label: 'SK', full: 'Sloven\u010dina' },
};

(function initLangDropdown() {
  const toggle  = document.getElementById('lang-toggle');
  const menu    = document.getElementById('lang-menu');
  const chevron = document.getElementById('lang-chevron');
  if (!toggle || !menu) return;

  const lang = window.MP_LANG || 'en';
  const info = _LANGS[lang] || _LANGS.en;

  // Populate button with current flag + code
  const flagEl = document.getElementById('lang-flag-btn');
  const codeEl = document.getElementById('lang-code-btn');
  if (flagEl) flagEl.textContent = info.flag;
  if (codeEl) codeEl.textContent = info.label;

  // Mark active option
  document.querySelectorAll('.lang-option').forEach((opt) => {
    const isActive = opt.getAttribute('data-lang') === lang;
    opt.classList.toggle('text-mp-green', isActive);
    opt.classList.toggle('text-white/70', !isActive);
  });

  // Toggle open/close
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden', isOpen);
    if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
  });

  // Close on outside click
  document.addEventListener('click', () => {
    menu.classList.add('hidden');
    if (chevron) chevron.style.transform = '';
  });

  // Prevent menu click from closing immediately
  menu.addEventListener('click', (e) => e.stopPropagation());
})();

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer.observe(el);
  });

  // Navbar background on scroll
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.classList.add('bg-[#1e252e]/95', 'backdrop-blur-lg', 'shadow-lg');
        nav.classList.remove('bg-transparent');
      } else {
        nav.classList.remove('bg-[#1e252e]/95', 'backdrop-blur-lg', 'shadow-lg');
        nav.classList.add('bg-transparent');
      }
    });
  }
});

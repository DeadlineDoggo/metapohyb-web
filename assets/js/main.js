// MetaPohyb Website – Minimal interactivity + i18n

// ── i18n ────────────────────────────────────────────────────────────────────
function getPreferredLanguage(translations) {
  if (window.MP_LANG && translations[window.MP_LANG]) {
    return window.MP_LANG;
  }

  const documentLang = (document.documentElement.lang || '').toLowerCase();
  if (translations[documentLang]) {
    return documentLang;
  }

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

// ── Language switcher active state ──────────────────────────────────────────
(function markActiveLang() {
  const lang = window.MP_LANG || 'en';
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('bg-mp-green', 'text-mp-dark');
      btn.classList.remove('text-white/50');
    } else {
      btn.classList.add('text-white/50');
      btn.classList.remove('bg-mp-green', 'text-mp-dark');
    }
  });
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

// MetaPohyb – i18n translation dictionary
// Usage: data-i18n="key" → textContent replaced
//        data-i18n-html="key" → innerHTML replaced

window.MP_TRANSLATIONS = {
  en: {
    // ── Navigation ──────────────────────────────────────────────────────────
    nav_features:      'Features',
    nav_how_it_works:  'How It Works',
    nav_screenshots:   'Screenshots',
    nav_download:      'Download',
    nav_cta:           'Get Started',

    // ── Hero ────────────────────────────────────────────────────────────────
    hero_badge:        'v0.1.6 alpha · Open Source',
    hero_h1:           'Smarter <span class="text-mp-green">Physiotherapy</span>,<br/>Right in Your Pocket',
    hero_p:            'MetaPohyb bridges the gap between physiotherapists and clients with guided exercises, VR device integration, and real&#8209;time progress tracking&nbsp;&mdash; all in one beautiful app.',
    hero_btn_download: 'Download Now',
    hero_btn_explore:  'Explore Features',
    hero_scroll:       'Scroll',

    // ── Features ─────────────────────────────────────────────────────────────
    feat_label: 'Features',
    feat_h2:    'Everything You Need for Recovery',
    feat_sub:   'A bachelor thesis project focused on clear exercise and progress tracking.',

    feat_1_title: 'Guided Exercises',
    feat_1_desc:  'Browse and perform structured exercise routines with clear instructions and progress tracking.',
    feat_2_title: 'VR Device Integration',
    feat_2_desc:  'Connect VR glasses via UDP for an immersive rehabilitation experience. Real-time device communication makes sessions engaging and effective.',
    feat_3_title: 'Physio &amp; Client Roles',
    feat_3_desc:  'Dedicated dashboards for physiotherapists and clients. Therapists assign exercises, clients perform and report&nbsp;&mdash; seamlessly connected.',
    feat_4_title: 'Local Device Discovery',
    feat_4_desc:  'Automatic WiFi-based device discovery finds nearby sensors and VR hardware without manual configuration.',
    feat_5_title: 'Session History',
    feat_5_desc:  'Every completed session is recorded. Review past performance, track improvement over time, and export data for analysis.',
    feat_6_title: 'Secure Cloud Sync',
    feat_6_desc:  'Powered by Supabase with email verification, your data stays safe. Import and export session data whenever you need.',

    // ── How It Works ─────────────────────────────────────────────────────────
    hiw_label: 'How It Works',
    hiw_h2:    'Get Moving in 3&nbsp;Steps',

    step_1_title: 'Create an Account',
    step_1_desc:  'Sign up with your email, verify it, and choose your role&nbsp;&mdash; Client or Physiotherapist.',
    step_2_title: 'Connect Devices',
    step_2_desc:  'Pair your phone with VR glasses or other sensors over your local WiFi network automatically.',
    step_3_title: 'Start Exercising',
    step_3_desc:  'Follow guided exercise routines, track your session, and watch your progress over time.',

    // ── Screenshots ───────────────────────────────────────────────────────────
    ss_label:   'Preview',
    ss_h2:      'See MetaPohyb in Action',
    ss_sub:     'A clean, modern interface designed for both desktop and mobile.',
    ss_1_title: 'Client Dashboard',
    ss_1_desc:  'Navigate exercises, view progress stats, and manage sessions from a single intuitive sidebar.',
    ss_2_title: 'Exercise &amp; VR View',
    ss_2_desc:  'Structured exercise cards with real-time VR device data overlay for immersive sessions.',

    // ── Built With ────────────────────────────────────────────────────────────
    built_with: 'Built With',

    // ── Download CTA ─────────────────────────────────────────────────────────
    dl_h2:         'Ready to Start Your Recovery&nbsp;Journey?',
    dl_sub:        'Download MetaPohyb for Android or build from source. The app is free, open-source, and actively developed.',
    dl_btn_android: 'Download for Android',
    dl_btn_github:  'View on GitHub',

    // ── Footer ────────────────────────────────────────────────────────────────
    footer_desc:        'Open-source physiotherapy application.<br/>Bachelor thesis project.',
    footer_nav_label:   'Navigation',
    footer_proj_label:  'Project',
    footer_link_github: 'GitHub Repository',
    footer_link_docs:   'Documentation',
    footer_link_verify: 'Verification Page',
    footer_copy:        '&copy; 2025 MetaPohyb. All rights reserved.',
    footer_built:       'Built with Flutter, Supabase &amp; Tailwind CSS',

    // ── Standalone Pages ───────────────────────────────────────────────────
    common_back_home:      '&larr; Back to Home',
    common_go_home:        'Go to Homepage',
    common_close_page:     'Close This Page',
    common_footer_project: '&copy; 2025 MetaPohyb &bull; Bachelor Thesis Project',

    page_404_title:   '404 - MetaPohyb',
    page_404_heading: 'Page Not Found',
    page_404_body:    "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
    page_404_back:    'Go Back',
    page_404_footer:  '&copy; 2025 MetaPohyb',

    reset_page_title:         'Reset Password - MetaPohyb',
    reset_page_description:   'Set a new password for your MetaPohyb account.',
    reset_loading_title:      'Verifying link...',
    reset_loading_desc:       'Please wait while we verify your recovery token.',
    reset_error_heading_html: 'Link <span class="text-mp-purple">Expired</span>',
    reset_error_default:      'This password reset link is invalid or has expired. Please request a new one from the app.',
    reset_error_missing:      'No password reset token found. Please use the link from the email you received.',
    reset_error_expired:      'This password reset link has expired or is invalid. Please request a new one from the app.',
    reset_form_heading_html:  'New <span class="text-mp-green">Password</span>',
    reset_form_desc:          'Choose a strong password for your MetaPohyb account.',
    reset_password_label:     'New Password',
    reset_password_placeholder: 'At least 8 characters',
    reset_strength_len:       '8+ chars',
    reset_strength_upper:     'Uppercase',
    reset_strength_lower:     'Lowercase',
    reset_strength_number:    'Number',
    reset_confirm_label:      'Confirm Password',
    reset_confirm_placeholder: 'Repeat your password',
    reset_match_error:        'Passwords do not match.',
    reset_submit:             'Update Password',
    reset_submit_loading:     'Updating...',
    reset_form_error_generic: 'Something went wrong. Please try again.',
    reset_success_heading_html: 'Password <span class="text-mp-green">Updated!</span>',
    reset_success_desc:       'Your password has been changed successfully.',
    reset_success_note:       'You can now close this page and sign in to the MetaPohyb app with your new password.',

    verify_page_title:       'Email Verified - MetaPohyb',
    verify_page_description: 'Your MetaPohyb email has been verified successfully. You can now return to the app.',
    verify_heading_html:     'Email <span class="text-mp-green">Verified!</span>',
    verify_desc:             'Your account has been confirmed successfully.',
    verify_note:             'You can now close this page and open the MetaPohyb app. Sign in with your credentials to get started.',
    verify_info_title:       'What happens next?',
    verify_info_desc:        'Open the MetaPohyb app and sign in with your email and password. Your account is now active and ready to use.',
  },

  sk: {
    // ── Navigation ──────────────────────────────────────────────────────────
    nav_features:      'Funkcie',
    nav_how_it_works:  'Ako to funguje',
    nav_screenshots:   'Ukážky',
    nav_download:      'Stiahnuť',
    nav_cta:           'Začať',

    // ── Hero ────────────────────────────────────────────────────────────────
    hero_badge:        'v0.1.6 alfa · Open Source',
    hero_h1:           'Inteligentnejšia <span class="text-mp-green">Fyzioterapia</span>,<br/>priamo vo vašom vrecku',
    hero_p:            'MetaPohyb prepája fyzioterapeutov a klientov prostredníctvom vedených cvičení, integrácie VR zariadení a sledovania pokroku v reálnom čase&nbsp;— všetko v jednej krásnej aplikácii.',
    hero_btn_download: 'Stiahnuť',
    hero_btn_explore:  'Preskúmať funkcie',
    hero_scroll:       'Rolovať',

    // ── Features ─────────────────────────────────────────────────────────────
    feat_label: 'Funkcie',
    feat_h2:    'Všetko, čo potrebujete na rehabilitáciu',
    feat_sub:   'Bakalársky projekt zameraný na prehľadné sledovanie cvičenia a pokroku.',

    feat_1_title: 'Vedené cvičenia',
    feat_1_desc:  'Prehliadajte a vykonávajte štruktúrované cvičenia s jasnými pokynmi a sledovaním pokroku.',
    feat_2_title: 'Integrácia VR zariadení',
    feat_2_desc:  'Prepojte VR okuliare cez UDP pre pohlcujúci rehabilitačný zážitok. Komunikácia v reálnom čase robí sedenia pútavými a efektívnymi.',
    feat_3_title: 'Režimy terapeut / klient',
    feat_3_desc:  'Dedikované dashboardy pre fyzioterapeutov a klientov. Terapeuti priraďujú cvičenia, klienti ich vykonávajú a hlásia výsledky&nbsp;— bezproblémovo prepojení.',
    feat_4_title: 'Lokálne objavovanie zariadení',
    feat_4_desc:  'Automatické objavovanie zariadení cez WiFi nájde blízke senzory a VR hardware bez manuálnej konfigurácie.',
    feat_5_title: 'História sedení',
    feat_5_desc:  'Každé dokončené sedenie je zaznamenané. Prehliadajte minulé výkony, sledujte zlepšenie v priebehu času a exportujte dáta na analýzu.',
    feat_6_title: 'Bezpečná cloudová synchronizácia',
    feat_6_desc:  'Napájané cez Supabase s overením e-mailom, vaše dáta sú v bezpečí. Importujte a exportujte dáta sedení kedykoľvek potrebujete.',

    // ── How It Works ─────────────────────────────────────────────────────────
    hiw_label: 'Ako to funguje',
    hiw_h2:    'Začnite cvičiť v 3&nbsp;krokoch',

    step_1_title: 'Vytvorte si účet',
    step_1_desc:  'Zaregistrujte sa pomocou e-mailu, overte ho a vyberte svoju rolu&nbsp;— Klient alebo Fyzioterapeut.',
    step_2_title: 'Pripojte zariadenia',
    step_2_desc:  'Spárujte telefón s VR okuliarmi alebo inými senzormi cez lokálnu WiFi sieť automaticky.',
    step_3_title: 'Začnite cvičiť',
    step_3_desc:  'Postupujte podľa vedených cvičebných rutín, sledujte svoje sedenie a pozorujte pokrok v priebehu času.',

    // ── Screenshots ───────────────────────────────────────────────────────────
    ss_label:   'Ukážky',
    ss_h2:      'Pozrite si MetaPohyb v praxi',
    ss_sub:     'Čisté, moderné rozhranie navrhnuté pre desktop aj mobil.',
    ss_1_title: 'Dashboard klienta',
    ss_1_desc:  'Navigujte cvičenia, sledujte štatistiky pokroku a spravujte sedenia z jedného intuitívneho bočného panela.',
    ss_2_title: 'Cvičenie a VR pohľad',
    ss_2_desc:  'Štruktúrované karty cvičení s prekryvnými dátami VR zariadení v reálnom čase pre pohlcujúce sedenia.',

    // ── Built With ────────────────────────────────────────────────────────────
    built_with: 'Použité technológie',

    // ── Download CTA ─────────────────────────────────────────────────────────
    dl_h2:          'Pripravení začať svoju rehabilitačnú&nbsp;cestu?',
    dl_sub:         'Stiahnite si MetaPohyb pre Android alebo zostavte zo zdrojového kódu. Aplikácia je bezplatná, open-source a aktívne vyvíjaná.',
    dl_btn_android: 'Stiahnuť pre Android',
    dl_btn_github:  'Pozrieť na GitHub',

    // ── Footer ────────────────────────────────────────────────────────────────
    footer_desc:        'Open-source fyzioterapeutická aplikácia.<br/>Bakalárska práca.',
    footer_nav_label:   'Navigácia',
    footer_proj_label:  'O projekte',
    footer_link_github: 'GitHub repozitár',
    footer_link_docs:   'Dokumentácia',
    footer_link_verify: 'Stránka overenia',
    footer_copy:        '&copy; 2025 MetaPohyb. Všetky práva vyhradené.',
    footer_built:       'Vytvorené pomocou Flutter, Supabase &amp; Tailwind CSS',

    // ── Standalone Pages ───────────────────────────────────────────────────
    common_back_home:      '&larr; Späť na hlavnú stránku',
    common_go_home:        'Prejsť na hlavnú stránku',
    common_close_page:     'Zavrieť túto stránku',
    common_footer_project: '&copy; 2025 MetaPohyb &bull; Bakalársky projekt',

    page_404_title:   '404 - MetaPohyb',
    page_404_heading: 'Stránka sa nenašla',
    page_404_body:    'Stránka, ktorú hľadáte, neexistuje alebo bola presunutá. Vráťme vás späť.',
    page_404_back:    'Späť',
    page_404_footer:  '&copy; 2025 MetaPohyb',

    reset_page_title:         'Obnovenie hesla - MetaPohyb',
    reset_page_description:   'Nastavte nové heslo pre svoj účet MetaPohyb.',
    reset_loading_title:      'Overuje sa odkaz...',
    reset_loading_desc:       'Počkajte, kým overíme váš token na obnovenie hesla.',
    reset_error_heading_html: 'Odkaz <span class="text-mp-purple">vypršal</span>',
    reset_error_default:      'Tento odkaz na obnovenie hesla je neplatný alebo vypršal. Vyžiadajte si nový v aplikácii.',
    reset_error_missing:      'Token na obnovenie hesla sa nenašiel. Použite odkaz z e-mailu, ktorý ste dostali.',
    reset_error_expired:      'Tento odkaz na obnovenie hesla vypršal alebo je neplatný. Vyžiadajte si nový v aplikácii.',
    reset_form_heading_html:  'Nové <span class="text-mp-green">heslo</span>',
    reset_form_desc:          'Zvoľte silné heslo pre svoj účet MetaPohyb.',
    reset_password_label:     'Nové heslo',
    reset_password_placeholder: 'Aspoň 8 znakov',
    reset_strength_len:       '8+ znakov',
    reset_strength_upper:     'Veľké písmeno',
    reset_strength_lower:     'Malé písmeno',
    reset_strength_number:    'Číslo',
    reset_confirm_label:      'Potvrďte heslo',
    reset_confirm_placeholder: 'Zopakujte heslo',
    reset_match_error:        'Heslá sa nezhodujú.',
    reset_submit:             'Aktualizovať heslo',
    reset_submit_loading:     'Aktualizuje sa...',
    reset_form_error_generic: 'Niečo sa pokazilo. Skúste to znova.',
    reset_success_heading_html: 'Heslo <span class="text-mp-green">bolo zmenené!</span>',
    reset_success_desc:       'Vaše heslo bolo úspešne zmenené.',
    reset_success_note:       'Teraz môžete túto stránku zavrieť a prihlásiť sa do aplikácie MetaPohyb novým heslom.',

    verify_page_title:       'E-mail overený - MetaPohyb',
    verify_page_description: 'Váš e-mail pre MetaPohyb bol úspešne overený. Teraz sa môžete vrátiť do aplikácie.',
    verify_heading_html:     'E-mail <span class="text-mp-green">overený!</span>',
    verify_desc:             'Váš účet bol úspešne potvrdený.',
    verify_note:             'Teraz môžete túto stránku zavrieť a otvoriť aplikáciu MetaPohyb. Prihláste sa svojimi údajmi a môžete začať.',
    verify_info_title:       'Čo bude nasledovať?',
    verify_info_desc:        'Otvorte aplikáciu MetaPohyb a prihláste sa svojím e-mailom a heslom. Váš účet je teraz aktívny a pripravený na používanie.',
  },
};

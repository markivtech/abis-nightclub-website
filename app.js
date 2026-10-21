'use strict';

const STORAGE_KEY = 'abis-nightclub-language';
const translations = {
  en: {
    nav: { home: 'Home', menu: 'Our food', about: 'About', contact: 'Contact' },
    hero: {
      eyebrow: 'A LOCAL FAVOURITE IN THOOTHUKUDI', titleLead: 'Good food.', titleAccent: 'Good moments.',
      tamilTitle: 'சுவையான உணவு. சிறந்த தருணங்கள்.',
      description: 'Enjoy satisfying Indian food at Abis Nightclub, serving customers in Thoothukudi.',
      dineIn: 'Dine-in', takeaway: 'Takeaway', indianFood: 'Indian restaurant', call: 'Call us',
      directions: 'Get directions', maps: 'Open in Google Maps', photoNote: "Food imagery is illustrative. Ask us about today's menu.", scroll: 'DISCOVER OUR FOOD'
    },
    menu: {
      eyebrow: 'MADE FOR BIG APPETITES', title: 'A taste of the South',
      description: "Explore some of the favourites customers mention. Please contact us to confirm today's availability and prices.",
      tamilDescription: 'வாடிக்கையாளர்கள் விரும்பும் உணவு வகைகள். இன்றைய கிடைக்கும் உணவுகள் மற்றும் விலைகளுக்கு எங்களைத் தொடர்புகொள்ளவும்.',
      parotta: 'Parotta varieties', parottaTa: 'பரோட்டா வகைகள்', mutton: 'Mutton chukka', muttonTa: 'ஆட்டிறைச்சி சுக்கா',
      kadai: 'Kadai dishes', kadaiTa: 'கடாய் உணவு வகைகள்', more: 'More to explore',
      moreDescription: 'Our menu may vary. Call us to ask what is available today.',
      moreTa: 'உணவுப் பட்டியல் மாறுபடலாம். இன்றைய உணவு வகைகளை அறிய அழைக்கவும்.',
      ctaText: 'Looking for something specific?', ctaLink: 'Call to ask about the menu'
    },
    about: {
      eyebrow: 'ABOUT ABIS', title: 'Local flavour, familiar comfort.',
      description: 'Abis Nightclub is an Indian restaurant on Ettayapuram Road in Thoothukudi. Stop by for dine-in or takeaway, and ask our team about the dishes available today.',
      tamilDescription: 'அபிஸ் நைட்கிளப் தூத்துக்குடி எட்டயபுரம் சாலையில் அமைந்துள்ள இந்திய உணவகம். இங்கே அமர்ந்து உணவருந்தலாம் அல்லது எடுத்துச் செல்லலாம். இன்றைய உணவு வகைகள் குறித்து எங்கள் குழுவினரிடம் கேளுங்கள்.',
      imageCaption: 'A welcoming place to enjoy a meal', factLocation: 'Convenient location', factLocationSub: 'Ettayapuram Road, Thoothukudi',
      factService: 'Dine-in & takeaway', factServiceSub: 'Choose what works for you'
    },
    contact: {
      eyebrow: 'COME SAY HELLO', title: 'Find your way to Abis.',
      description: "We're on Ettayapuram Road in Thoothukudi. Call ahead if you'd like to check today's menu.",
      addressTitle: 'Address', address: '10, Ettayapuram Rd, Tuticorin Melur, Thoothukudi, Tamil Nadu 628002',
      phoneTitle: 'Phone', phoneNote: 'Tap the number to call', hoursTitle: 'Opening hours',
      hoursNote: 'Please check Google Maps or call us for current hours.', mapLabel: 'VISIT US', mapTitle: 'Open directions in Google Maps'
    },
    footer: { tagline: 'Good food, right here in Thoothukudi.', note: 'Business details shown as supplied by the owner.', top: 'Back to top ↑' }
  },
  ta: {
    nav: { home: 'முகப்பு', menu: 'உணவு வகைகள்', about: 'எங்களைப் பற்றி', contact: 'தொடர்புக்கு' },
    hero: {
      eyebrow: 'தூத்துக்குடியின் உள்ளூர் உணவகம்', titleLead: 'சுவையான உணவு.', titleAccent: 'மகிழ்ச்சியான தருணங்கள்.',
      tamilTitle: 'சுவையான உணவு. சிறந்த தருணங்கள்.',
      description: 'தூத்துக்குடியில் உள்ள அபிஸ் நைட்கிளப்பில் சுவையான இந்திய உணவை அனுபவியுங்கள்.',
      dineIn: 'அமர்ந்து சாப்பிடலாம்', takeaway: 'எடுத்துச் செல்லலாம்', indianFood: 'இந்திய உணவகம்', call: 'அழைக்கவும்',
      directions: 'வழியைப் பெறுங்கள்', maps: 'Google Maps-இல் திறக்கவும்', photoNote: 'படங்கள் எடுத்துக்காட்டுக்காகப் பயன்படுத்தப்பட்டுள்ளன. இன்றைய உணவு வகைகளைக் கேளுங்கள்.', scroll: 'உணவு வகைகளைப் பாருங்கள்'
    },
    menu: {
      eyebrow: 'உங்கள் பசியைத் தீர்க்க', title: 'தென்னிந்தியச் சுவை',
      description: 'வாடிக்கையாளர்கள் குறிப்பிடும் சில உணவு வகைகளைப் பாருங்கள். இன்றைய கிடைக்கும் உணவுகள் மற்றும் விலைகளை உறுதிப்படுத்த எங்களைத் தொடர்புகொள்ளவும்.',
      tamilDescription: 'வாடிக்கையாளர்கள் விரும்பும் உணவு வகைகள். இன்றைய கிடைக்கும் உணவுகள் மற்றும் விலைகளுக்கு எங்களைத் தொடர்புகொள்ளவும்.',
      parotta: 'பரோட்டா வகைகள்', parottaTa: 'பரோட்டா வகைகள்', mutton: 'மட்டன் சுக்கா', muttonTa: 'ஆட்டிறைச்சி சுக்கா',
      kadai: 'கடாய் உணவு வகைகள்', kadaiTa: 'கடாய் உணவு வகைகள்', more: 'மேலும் பல உணவு வகைகள்',
      moreDescription: 'உணவுப் பட்டியல் மாறுபடலாம். இன்று என்னென்ன உணவுகள் உள்ளன என்று அழைத்துக் கேளுங்கள்.',
      moreTa: 'உணவுப் பட்டியல் மாறுபடலாம். இன்றைய உணவு வகைகளை அறிய அழைக்கவும்.',
      ctaText: 'குறிப்பிட்ட உணவு வேண்டுமா?', ctaLink: 'உணவுப் பட்டியலைக் கேட்க அழைக்கவும்'
    },
    about: {
      eyebrow: 'அபிஸ் பற்றி', title: 'உள்ளூர் சுவை, மனதுக்கு நெருக்கமான உணவு.',
      description: 'அபிஸ் நைட்கிளப் தூத்துக்குடி எட்டயபுரம் சாலையில் அமைந்துள்ள இந்திய உணவகம். இங்கே அமர்ந்து உணவருந்தலாம் அல்லது உணவை எடுத்துச் செல்லலாம். இன்றைய உணவு வகைகள் குறித்து எங்கள் குழுவினரிடம் கேளுங்கள்.',
      tamilDescription: 'அபிஸ் நைட்கிளப் தூத்துக்குடி எட்டயபுரம் சாலையில் அமைந்துள்ள இந்திய உணவகம். இங்கே அமர்ந்து உணவருந்தலாம் அல்லது எடுத்துச் செல்லலாம். இன்றைய உணவு வகைகள் குறித்து எங்கள் குழுவினரிடம் கேளுங்கள்.',
      imageCaption: 'உணவை ரசித்து மகிழ ஏற்ற இடம்', factLocation: 'எளிதில் வந்தடையலாம்', factLocationSub: 'எட்டயபுரம் சாலை, தூத்துக்குடி',
      factService: 'அமர்ந்து சாப்பிடலாம் / எடுத்துச் செல்லலாம்', factServiceSub: 'உங்களுக்கு ஏற்ற முறையைத் தேர்ந்தெடுக்கவும்'
    },
    contact: {
      eyebrow: 'எங்களைச் சந்திக்க வாருங்கள்', title: 'அபிஸை வந்தடையுங்கள்.',
      description: 'நாங்கள் தூத்துக்குடி எட்டயபுரம் சாலையில் இருக்கிறோம். இன்றைய உணவு வகைகளைத் தெரிந்துகொள்ள முன்கூட்டியே அழைக்கவும்.',
      addressTitle: 'முகவரி', address: '10, எட்டயபுரம் சாலை, தூத்துக்குடி மேலூர், தூத்துக்குடி, தமிழ்நாடு 628002',
      phoneTitle: 'தொலைபேசி', phoneNote: 'அழைக்க எண்ணைத் தொடவும்', hoursTitle: 'திறந்திருக்கும் நேரம்',
      hoursNote: 'தற்போதைய நேரத்தை Google Maps-இல் பார்க்கவும் அல்லது எங்களை அழைக்கவும்.', mapLabel: 'எங்களைச் சந்திக்கவும்', mapTitle: 'Google Maps-இல் வழியைப் பெறுங்கள்'
    },
    footer: { tagline: 'தூத்துக்குடியில் சுவையான உணவு.', note: 'வணிக விவரங்கள் உரிமையாளர் வழங்கிய தகவல்களின் அடிப்படையில் காட்டப்பட்டுள்ளன.', top: 'மேலே செல்ல ↑' }
  }
};

function getValue(object, path) {
  return path.split('.').reduce((value, part) => value == null ? undefined : value[part], object);
}

function setLanguage(language) {
  const lang = translations[language] ? language : 'en';
  const dictionary = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = 'ltr';
  document.body.classList.toggle('lang-ta', lang === 'ta');
  document.body.classList.toggle('lang-en', lang === 'en');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18n);
    if (typeof value === 'string') element.textContent = value;
  });

  document.querySelectorAll('[data-lang]').forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* Storage can be disabled; language still works for this page. */ }
}

function initNavigation() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (_) { /* Use English if storage is unavailable. */ }
  setLanguage(savedLanguage);
  initNavigation();
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});

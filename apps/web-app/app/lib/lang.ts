import en from '../locales/en.json';
import es from '../locales/es.json';

export let currentLanguage: 'en' | 'es' = navigator.language.startsWith('en') ? 'en' : 'es';

(function(){
  if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('lang') as 'en' | 'es';
    if (storedLang) {
      currentLanguage = storedLang;
    }
  }
})();

const translations = {
  en,
  es,
};

export const setLanguage = (lang: 'en' | 'es') => {
  currentLanguage = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', lang);
  }
  window.location.reload();
};

export const trans = (key: typeof en | typeof es | string): string => {
  const translation = translations[currentLanguage];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return key.split('.').reduce((acc, part) => acc && acc[part], translation);
};
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/translation.json';
import id from './id/translation.json';

i18n
  .use(LanguageDetector) // Deteksi bahasa dari browser/user
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    fallbackLng: 'en', // fallback ke English jika tidak terdeteksi
    interpolation: {
      escapeValue: false, // tidak perlu escape pada React
    },
  });

export default i18n;

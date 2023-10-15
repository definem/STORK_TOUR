import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "uz",
  lng: "uz",
  resources: {
    en: { translation: en },
    uz: { translation: euz },
    tr: { translation: tr },
    ru: { translation: ru },
    ar: { translation: ar },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {en} from "./public/locales/en"
import {uz} from "./public/locales/uz"
import {tr} from "./public/locales/tr"
import {ru} from "./public/locales/ru"
import {ar} from "./public/locales/ar";

i18next.use(initReactI18next).init({
  fallbackLng: "uz",
  lng: "uz",
  resources: {
    en: { translation: en },
    uz: { translation: uz },
    tr: { translation: tr },
    ru: { translation: ru },
    ar: { translation: ar },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
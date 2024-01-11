// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import translationEN from "./src/translations/en.json";
// import translationES from "./locales/es.json";

const resources = {
  en: {
    translation: translationEN,
  },
  //   es: {
  //     translation: translationES,
  //   },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Set the default language
  keySeparator: false, // Disable key separator for nested translations
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;

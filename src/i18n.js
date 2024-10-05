import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjima fayllari (misol)
const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      ginseng: "Ginseng",
      contact: "Contact",
    },
  },
  ru: {
    translation: {
      home: "Домой",
      about: "О нас",
      ginseng: "Женьшень",
      contact: "Контакт",
    },
  },
  uz: {
    translation: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      ginseng: "Jenshen",
      contact: "Bog'lanish",
    },
  },
};

// i18next sozlamalari
i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default til
  fallbackLng: "en", // Tilni topa olmasa qaysi tilda ishlaydi
  interpolation: {
    escapeValue: false, // React bilan qochirishga hojat yo'q
  },
});

export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      Главная: "Главная",
      "О компании": "О компании",
      Услуги: "Услуги",
      Проекты: "Проекты",
      "Доставка и оплата": "Доставка и оплата",
      Контакты: "Контакты",
      Подборка: "Подборка",
      Язык: "Язык",
    },
  },
  en: {
    translation: {
      Главная: "Home",
      "О компании": "About company",
      Услуги: "Services",
      Проекты: "Projects",
      "Доставка и оплата": "Shipping and payment",
      Контакты: "Contacts",
      Подборка: "Compilation",
      Язык: "Language",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

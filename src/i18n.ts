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
      "Эффективные решения": "Эффективные решения",
      "Компания I-lights":
        "Компания I-lights это современная производственно-проектная организация с многолентим опытом работы в сфере разработки",
      Подробнее: "Подробнее",
      Каталог: "Каталог",
      "Трековые светильники": "Трековые светильники",
      Органично: "Органично вписываются в интерьеры в стиле хай-тек, лофт",
      "Перейти в каталог": "Перейти в каталог",
      "Встраиваемые светильники": "Встраиваемые светильники",
      "Фигурные светильники": "Фигурные светильники",
      "Светильники Армстронг": "Светильники Армстронг",
      Светильники: " Светильники Армстронг с равномерной засветкой",
      УслугиC: "Услуги",
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
      "Эффективные решения": "Effective Solutions",
      "Компания I-lights":
        "I-lights is a modern production and design organization with many years of experience in the field of development",
      Подробнее: "More",
      Каталог: "Catalog",
      "Трековые светильники": "Track lights",
      Органично:
        "Organically fit into the interiors in the style of hi-tech, loft",
      "Перейти в каталог": "Go to catalog",
      "Встраиваемые светильники": "Recessed luminaires",
      "Фигурные светильники": "Figured lamps",
      "Светильники Армстронг": "Lamps Armstrong",
      Светильники: "Armstrong luminaires with uniform illumination",
      УслугиC: "Service",
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

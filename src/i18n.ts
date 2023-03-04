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
      Изготовление:
        "Изготовление счетильников для торгового и общественного освещени",
      "Мы ценим":
        "Мы ценим Ваше время, поэтому, коротко о главном. Наша компания была образована с целью предложить Российскому рынку профессиональные светотехнические решения для освещения магазинов, офисов и объектов общественно-развлекательного назначения. Сегодня мы поставляем осветительное оборудование различных ценовых категорий из стран Юго-Восточной Азии и Европы, а так же являемся дистрибьюторами лучших Российских производителей. А среди наших клиентов, сетевые и частные магазины одежды и обуви, продуктовые магазины, торговые и офисные центры, представители индустрии красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и частные заказчики.",
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
      Изготовление:
        "Manufacture of counters for commercial and public lighting",
      "Мы ценим":
        "We value your time, therefore, briefly about the main thing. Our company was founded to offer the Russian market professional lighting solutions for lighting shops, offices and public entertainment facilities. Today we supply lighting equipment of various price categories from the countries of Southeast Asia and Europe, and we are also distributors of the best Russian manufacturers. And among our clients are chain and private clothing and footwear stores, grocery stores, shopping and office centers, representatives of the beauty and health industry, cafes, restaurants, hotels, cottage settlements and private customers.",
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

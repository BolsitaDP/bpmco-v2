import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hello: "Hello",
        aboutUs: "About us",
        ourProducts: "Our products",
        aboutusTitle: "About us",
        aboutusText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ut quam eleifend tempus. Vestibulum pulvinar elit quis mattis vestibulum. Aenean auctor massa in suscipit fringilla. Sed sollicitudin elit sit amet hendrerit luctus. Fusce ultrices leo in tristique auctor. Ut convallis turpis augue, nec ullamcorper purus luctus vitae. Duis ultrices sem eget tellus pretium, in venenatis dui bibendum. Etiam ornare nunc ut augue dignissim, ac lacinia sapien pharetra.",
        footerLeft: "Developed by BPMco",
        footerRight: "Working through processes is possible and easy",
        ourProductsTitle: "Our products",
      },
    },
    es: {
      translation: {
        hello: "Hola",
        aboutUs: "Quienes somos",
        aboutusTitle: "Quienes somos",
        aboutusText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ut quam eleifend tempus. Vestibulum pulvinar elit quis mattis vestibulum. Aenean auctor massa in suscipit fringilla. Sed sollicitudin elit sit amet hendrerit luctus. Fusce ultrices leo in tristique auctor. Ut convallis turpis augue, nec ullamcorper purus luctus vitae. Duis ultrices sem eget tellus pretium, in venenatis dui bibendum. Etiam ornare nunc ut augue dignissim, ac lacinia sapien pharetra.",
        footerLeft: "Desarrollado por BPMco",
        footerRight: "Trabajar por procesos es posible y fácil",
        ourProducts: "Nuestros productos",
        ourProductsTitle: "Nuestros productos",
      },
    },
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

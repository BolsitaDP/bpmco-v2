import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hello: "Hello",
        aboutUs: "About us",
        changeLang: "Change language",
        ourProducts: "Our products",
        aboutusTitle: "About us",
        aboutusText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ut quam eleifend tempus. Vestibulum pulvinar elit quis mattis vestibulum. Aenean auctor massa in suscipit fringilla. Sed sollicitudin elit sit amet hendrerit luctus. Fusce ultrices leo in tristique auctor. Ut convallis turpis augue, nec ullamcorper purus luctus vitae. Duis ultrices sem eget tellus pretium, in venenatis dui bibendum. Etiam ornare nunc ut augue dignissim, ac lacinia sapien pharetra.",
        footerLeft: "Developed by BPMco",
        footerRight: "Working through processes is possible and easy",
        ourProductsTitle: "Our products",
        descriptionIndubatch:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta feugiat tellus eget porttitor. Fusce vitae dolor arcu. In et suscipit lacus, in dapibus mi. Donec odio urna, aliquam convallis ligula ut, eleifend posuere mi. Mauris dictum lectus nisl, et fermentum lacus maximus ut. Vivamus tempus, ipsum sed vulputate fermentum, enim est mollis magna, at ultrices dui ligula vitae tortor. Ut gravida eros eu suscipit blandit. Donec id congue lorem, et vulputate est. ",
        descriptionProcess:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta feugiat tellus eget porttitor. Fusce vitae dolor arcu. In et suscipit lacus, in dapibus mi. Donec odio urna, aliquam convallis ligula ut, eleifend posuere mi. Mauris dictum lectus nisl, et fermentum lacus maximus ut. Vivamus tempus, ipsum sed vulputate fermentum, enim est mollis magna, at ultrices dui ligula vitae tortor. Ut gravida eros eu suscipit blandit. Donec id congue lorem, et vulputate est. ",
        descriptionMerco:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta feugiat tellus eget porttitor. Fusce vitae dolor arcu. In et suscipit lacus, in dapibus mi. Donec odio urna, aliquam convallis ligula ut, eleifend posuere mi. Mauris dictum lectus nisl, et fermentum lacus maximus ut. Vivamus tempus, ipsum sed vulputate fermentum, enim est mollis magna, at ultrices dui ligula vitae tortor. Ut gravida eros eu suscipit blandit. Donec id congue lorem, et vulputate est. ",
        ourClients: "Our clients",
        ourClientsTitle: "Our clients",
        contact: "Contact us",
        contactTitle: "Contact us",
      },
    },
    es: {
      translation: {
        hello: "Hola",
        aboutUs: "Quienes somos",
        changeLang: "Cambiar idioma",
        aboutusTitle: "Quienes somos",
        aboutusText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ut quam eleifend tempus. Vestibulum pulvinar elit quis mattis vestibulum. Aenean auctor massa in suscipit fringilla. Sed sollicitudin elit sit amet hendrerit luctus. Fusce ultrices leo in tristique auctor. Ut convallis turpis augue, nec ullamcorper purus luctus vitae. Duis ultrices sem eget tellus pretium, in venenatis dui bibendum. Etiam ornare nunc ut augue dignissim, ac lacinia sapien pharetra.",
        footerLeft: "Desarrollado por BPMco",
        footerRight: "Trabajar por procesos es posible y fácil",
        ourProducts: "Nuestros productos",
        ourProductsTitle: "Nuestros productos",
        descriptionIndubatch:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta feugiat tellus eget porttitor. Fusce vitae dolor arcu. In et suscipit lacus, in dapibus mi. Donec odio urna, aliquam convallis ligula ut, eleifend posuere mi. Mauris dictum lectus nisl, et fermentum lacus maximus ut. Vivamus tempus, ipsum sed vulputate fermentum, enim est mollis magna, at ultrices dui ligula vitae tortor. Ut gravida eros eu suscipit blandit. Donec id congue lorem, et vulputate est. ",
        descriptionProcess:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta feugiat tellus eget porttitor. Fusce vitae dolor arcu. In et suscipit lacus, in dapibus mi. Donec odio urna, aliquam convallis ligula ut, eleifend posuere mi. Mauris dictum lectus nisl, et fermentum lacus maximus ut. Vivamus tempus, ipsum sed vulputate fermentum, enim est mollis magna, at ultrices dui ligula vitae tortor. Ut gravida eros eu suscipit blandit. Donec id congue lorem, et vulputate est. ",
        descriptionMerco:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta feugiat tellus eget porttitor. Fusce vitae dolor arcu. In et suscipit lacus, in dapibus mi. Donec odio urna, aliquam convallis ligula ut, eleifend posuere mi. Mauris dictum lectus nisl, et fermentum lacus maximus ut. Vivamus tempus, ipsum sed vulputate fermentum, enim est mollis magna, at ultrices dui ligula vitae tortor. Ut gravida eros eu suscipit blandit. Donec id congue lorem, et vulputate est. ",
        ourClients: "Nuestros clientes",
        ourClientsTitle: "Nuestros clientes",
        contact: "Contáctanos",
        contactTitle: "Contáctanos",
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

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Aquí van tus traducciones para inglés
        hello: "Hello",
        aboutUs: "About us",
        // Otros textos...
      },
    },
    es: {
      translation: {
        // Aquí van tus traducciones para español
        hello: "Hola",
        aboutUs: "Quienes somos",
        // Otros textos...
      },
    },
    // Agrega más idiomas según sea necesario
  },
  lng: "es", // Idioma predeterminado
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

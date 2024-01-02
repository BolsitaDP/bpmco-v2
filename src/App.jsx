import "./App.css";
import { ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar";
import { useState } from "react";
import lightTheme from "./mui-theme/lightTheme";
import darkTheme from "./mui-theme/darkTheme";
import Home from "./sections/Home";
import AboutUs from "./sections/AboutUs";
import Footer from "./components/Footer";
import OurProducts from "./sections/OurProducts";
import OurClients from "./sections/OurClients";
import Contact from "./sections/Contact";

import { useTranslation } from "react-i18next";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar changeLanguage={changeLanguage} />
        <Home />
        <AboutUs />
        <OurProducts />
        <OurClients />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

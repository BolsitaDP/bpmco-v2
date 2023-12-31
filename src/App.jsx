import "./App.css";
import { ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar";
import { useState } from "react";
import lightTheme from "./mui-theme/lightTheme";
import darkTheme from "./mui-theme/darkTheme";
import Home from "./sections/Home";
import AboutUs from "./sections/AboutUs";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar toggleTheme={toggleTheme} />
        <Home />
        <AboutUs />
      </div>
    </ThemeProvider>
  );
}

export default App;
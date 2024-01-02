import React, { useState } from "react";
import { AppBar, Box, Button, Tooltip, useMediaQuery } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

import logoBPMcoBlanco from "../assets/4-isologo_sin_fondo_blanco.png";
import logoBPMcoNormal from "../assets/1-isologo_sin_fondo.png";

import banderaColombia from "../assets/banderaColombia.png";
import baderaEEUU from "../assets/banderaEEUU.png";

import { useTranslation } from "react-i18next";

import { useTheme } from "@mui/material/styles";
import { linksNavbar } from "../utils/textos";

const Navbar = ({ changeLanguage }) => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [langEs, setLangEs] = useState("es");

  const theme = useTheme();

  const down1200 = useMediaQuery(theme.breakpoints.down("lg"));

  const { t } = useTranslation();

  const changeLang = () => {
    setLangEs(langEs === "es" ? "en" : "es");
    changeLanguage(langEs === "es" ? "en" : "es");
  };

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <AppBar
      position="fixed"
      variant={navbarScrolled && "scrolled"}
      className="navbar">
      <Box
        className="navbarContainer"
        sx={{
          // backgroundColor: "red",
          width: "95%",
          transition: "0.3s ease all",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <ScrollLink spy smooth duration={500} to={"home"}>
          <img
            src={navbarScrolled ? logoBPMcoBlanco : logoBPMcoNormal}
            alt="Logo BPMco blanco"
            style={{
              height: "9vh",
              transition: "0.3s ease all",
              cursor: "pointer",
              marginRight: "20px",
            }}
          />
        </ScrollLink>
        <Box sx={{ display: "flex" }} className="navbarLinks">
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {linksNavbar.map((link, index) => {
              return (
                <ScrollLink
                  style={{
                    color: !navbarScrolled && theme.palette.primary.main,
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  key={index}
                  spy
                  smooth
                  duration={500}
                  to={link.link}>
                  {t(link.texto)}
                </ScrollLink>
              );
            })}
            <Tooltip title={t("changeLang")}>
              <img
                className="banderaLang"
                src={langEs === "es" ? banderaColombia : baderaEEUU}
                alt="Language"
                width={20}
                onClick={changeLang}
              />
            </Tooltip>
          </Box>
        </Box>
        <Box>asdasd</Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;

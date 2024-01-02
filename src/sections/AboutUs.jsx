import React from "react";

import { AppBar, Box, Button, Link } from "@mui/material";

import { useRef } from "react";
import { motion } from "framer-motion";

import { useTheme } from "@mui/material/styles";

import logoProcesos from "../assets/Procesos.png";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const theme = useTheme();

  const constraintsRef = useRef(null);

  const { t } = useTranslation();

  return (
    <Box
      id="aboutUs"
      sx={{
        height: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "20px ",
        // gap: "25%",
      }}>
      <motion.div className="aboutusDragArea" ref={constraintsRef} />
      <motion.div
        className="aboutusDraggableDiv"
        drag
        dragConstraints={constraintsRef}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          // backgroundColor: `${theme.palette.contrast.main}`,
          display: "flex",
          flexDirection: "column",
          height: "max-content",
          padding: "15px",
        }}>
        <div className="aboutusTitle">{t("aboutusTitle")}</div>
        <div className="aboutusText">{t("aboutusText")}</div>
      </motion.div>
      <motion.img
        className="aboutusDraggableDiv"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="imagenProcesos"
        drag
        style={{
          backgroundColor: `${theme.palette.contrast.main}`,
          height: "min-content",
          padding: "15px",
          marginLeft: "20px",
        }}
        dragConstraints={constraintsRef}
        src={logoProcesos}
        alt="Imagen procesos"
      />
    </Box>
  );
};

export default AboutUs;

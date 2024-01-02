import React from "react";
import { AppBar, Box, Button, Link, Tooltip, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { contactoInfo } from "../utils/textos";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Box
      id="contact"
      sx={{
        height: "30vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "40px",
      }}>
      <div className="contactusTitle">{t("contactTitle")}</div>
      <Box className="contactusContainer">
        <div className="contactoLeft">
          <div className="contactoInfoInfo">
            <a
              className="contactoLinkCorreo"
              href={`mailto:${contactoInfo.correo}`}>
              {contactoInfo.correo}
            </a>
            <span>{contactoInfo.direccion}</span>
            <span>{contactoInfo.telefono}</span>
            <span>{contactoInfo.ciudad}</span>
          </div>
        </div>
        <div className="contactoRight"></div>
      </Box>
    </Box>
  );
};

export default Contact;

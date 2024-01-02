import React from "react";
import { useTranslation } from "react-i18next";

import { AppBar, Box, Button, Link, Tooltip } from "@mui/material";
import { ourClients } from "../utils/textos";

const OurClients = () => {
  const { t } = useTranslation();
  return (
    <Box
      id="ourClients"
      sx={{
        height: "80vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px ",
      }}>
      <div className="clientsBackground1 clienstLateral"></div>
      <div className="clientsBackground2 clienstLateral"></div>
      <Box
        sx={{
          width: "80%",
          height: "80vh",
          position: "relative",
          left: "10%",
        }}>
        <div className="clientsTitulo">{t("ourClientsTitle")}</div>
        <div className="clientsContainer">
          {ourClients.map((client) => {
            return (
              <Tooltip title={client.nombre} placement="bottom">
                <div className="clienteImgContainer">
                  <img src={client.imagen} alt={client.nombre} />
                </div>
              </Tooltip>
            );
          })}
        </div>
      </Box>
    </Box>
  );
};

export default OurClients;

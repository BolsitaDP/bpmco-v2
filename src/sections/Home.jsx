import React from "react";
import { AppBar, Box, Button, Link } from "@mui/material";

import logoBPMcoNormal from "../assets/1-isologo_sin_fondo.png";

import { motion } from "framer-motion";

import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      id="home"
      sx={{
        height: "90vh",
        width: "100%",
        // backgroundColor: theme.palette.primary.contrastText,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <motion.img
        src={logoBPMcoNormal}
        width={400}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <div className="backgroundHome"></div>
    </Box>
  );
};

export default Home;

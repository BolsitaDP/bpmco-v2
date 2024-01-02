import React, { useState } from "react";
import { AppBar, Box, Button, Link } from "@mui/material";
import { ourProducts } from "../utils/textos";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const OurProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box
      id="ourProducts"
      sx={{
        height: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: theme.palette.secondary.main,
        borderRadius: "20px ",
        // gap: "25%",
      }}>
      <div>{t("ourProductsTitle")}</div>
      <div>
        <AnimatePresence>
          {ourProducts.map((prod) => (
            <motion.div
              key={prod.titulo}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedProduct(prod)}
              style={{
                cursor: "pointer",
                marginBottom: 10,
                padding: 10,
                border: "1px solid #ccc",
                backgroundColor: theme.palette.primary.main,
                display: "flex",
              }}>
              <div>{prod.titulo}</div>
              <img src={prod.imagen} alt="prod título" />
              <div>{prod.descripcion}</div>
            </motion.div>
          ))}
        </AnimatePresence>
        {/* Modal de producto seleccionado */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setSelectedProduct(null)}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                style={{
                  background: "#fff",
                  padding: 20,
                  borderRadius: 10,
                }}>
                <div>{selectedProduct.titulo}</div>
                <img
                  src={selectedProduct.imagen}
                  alt={selectedProduct.titulo}
                />
                <div>{selectedProduct.descripcion}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Box>
  );
};

export default OurProducts;

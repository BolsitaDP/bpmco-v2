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
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: theme.palette.secondary.main,
        borderRadius: "20px ",
        // gap: "25%",
      }}>
      <div className="productsSectionTitle">{t("ourProductsTitle")}</div>
      <div className="productsCardContainer">
        <AnimatePresence>
          {ourProducts.map((prod) => (
            <motion.div
              key={prod.titulo}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProduct(prod)}
              className="productsCard"
              style={{
                cursor: "pointer",
                marginBottom: 10,
                padding: 10,
                border: "1px solid #ccc",
                backgroundColor: theme.palette.primary.main,
                display: "flex",
              }}>
              <div className="productTitulo">{prod.titulo}</div>
              <div className="productImage">
                <img src={prod.imagen} alt="prod título" />
              </div>
              {/* <div>{prod.descripcion}</div> */}
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
                zIndex: 9999,
              }}
              onClick={() => setSelectedProduct(null)}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="productModal"
                style={{
                  background: "#fff",
                  padding: 20,
                  borderRadius: 10,
                  width: "50%",
                }}>
                <div className="productTituloModal">
                  {selectedProduct.titulo}
                </div>
                <div className="productImageModalContainer">
                  <img
                    className="productImageModal"
                    src={selectedProduct.imagen}
                    alt={selectedProduct.titulo}
                  />
                </div>
                <div className="productDescripcionModal">
                  {selectedProduct.descripcion}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Box>
  );
};

export default OurProducts;

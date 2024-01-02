import React, { useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Button, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();

  const scrollHandler = () => {
    const atBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setIsAtBottom(atBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <Box
      className={`footer ${isAtBottom && "bottom"}`}
      sx={{
        backgroundColor: isAtBottom
          ? theme.palette.primary.main
          : `${theme.palette.primary.main}80`,
      }}>
      <div>{t("footerLeft")}</div>
      <div style={{ display: isAtBottom ? "flex" : "none" }}>
        {t("footerRight")}
      </div>
    </Box>
  );
};

export default Footer;

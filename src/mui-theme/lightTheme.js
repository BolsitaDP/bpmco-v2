import { createTheme } from "@mui/material/styles";

const azulOscuro = "#134c7e";
const azulClaro = "#2180bb";
const blanco = "#ffffff";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: azulOscuro,
    },
    secondary: {
      main: azulClaro,
    },
    contrast: {
      main: blanco,
    },
  },
  components: {
    Button: {
      styleOverrides: {
        root: {
          color: blanco, // Color de texto para botones
          backgroundColor: "#2196f3", // Color de fondo para botones
          "&:hover": {
            backgroundColor: "#1565c0", // Cambia el color de fondo al pasar el ratón
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          boxShadow: "none",
          transition: "0.3s ease all",
          backdropFilter: "blur(10px)",
        },
      },
      variants: [
        {
          props: { variant: "scrolled" },
          style: {
            backgroundColor: `${azulOscuro}80`,
            width: "70%",
            right: "15%",
            top: "3%",
            padding: "2%",
            borderRadius: "20px",
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: azulOscuro,
          textDecoration: "none",
          whiteSpace: "nowrap",
          padding: "10px",
        },
      },
      variants: [
        {
          props: { variant: "navbarLinkScrolled" },
          style: {
            color: blanco,
          },
        },
      ],
    },
  },
});

export default lightTheme;

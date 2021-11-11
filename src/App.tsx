import { BrowserRouter } from "react-router-dom";
import { Box, createTheme, makeStyles, ThemeProvider } from "@material-ui/core";

import { CartProvider } from "./contexts/cartContext";

import Routes from "./routes";

const styles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#d1d8e5",
  },
});

function App() {
  const classes = styles();

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [
            {
              fontFamily: "Poppins, sans-serif",
              fontStyle: "normal",
              fontDisplay: "swap",
              fontWeight: 400,
            },
          ],
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.container}>
        <CartProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </CartProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;

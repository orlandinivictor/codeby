import { Box, createTheme, makeStyles, ThemeProvider } from "@material-ui/core";

import { Cart } from "./pages/Cart";

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
        <Cart />
      </Box>
    </ThemeProvider>
  );
}

export default App;

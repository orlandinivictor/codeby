import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
  container: {
    width: "60%",
    minWidth: 300,
    height: "90%",
    borderRadius: 16,

    overflow: "auto",

    "&::-webkit-scrollbar": {
      width: 10,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.0)`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#3b74f2",
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
    },
  },

  gridContainer: {
    width: "100%",
    padding: 40,
    paddingTop: 10,
  },

  buttonBox: {
    padding: 20,
  },

  button: {
    paddingBlock: 20,
    width: "100%",
    backgroundColor: "#3b74f2",
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    textTransform: "none",

    transition: "filter 0.3s",

    "&:hover": {
      backgroundColor: "#3b74f2",
      filter: "brightness(0.80)",
    },
  },
}));

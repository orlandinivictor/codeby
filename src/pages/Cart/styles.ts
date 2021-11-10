import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
  container: {
    width: "50%",
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

  header: {
    paddingBlock: 30,
    borderBottom: "1px solid #c4c4c4",
  },

  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: 700,
  },

  items: {
    paddingInline: 20,
  },

  total: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    paddingBlock: 30,
    paddingInline: 20,

    borderBlock: "1px solid #c4c4c4",
  },

  amount: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  amountValue: {
    fontSize: 20,
    fontWeight: 600,
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

  freeShip: {
    backgroundColor: "#c7ffa6",
    color: "#227a00",

    fontSize: 18,
    fontWeight: 600,
    padding: 20,
    borderRadius: 30,
  },
}));

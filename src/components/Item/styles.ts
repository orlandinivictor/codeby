import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
  container: {
    width: "100%",
    marginBlock: 20,

    display: "flex",
    alignItems: "center",
  },

  image: {
    width: 100,
    height: 100,
    objectFit: "cover",
    border: "1px solid #c4c4c4",

    marginRight: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: 600,

    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },

  original: {
    fontSize: 14,
    fontWeight: 400,
    color: "#777",
  },

  final: {
    fontSize: 15,
    fontWeight: 500,
  },

  addToCart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: "#c7ffa6",
    color: "#227a00",

    marginLeft: 20,

    minWidth: 0,
    paddingInline: 15,
    paddingBlock: 3,

    transition: "filter 0.3s",

    "&:hover": {
      backgroundColor: "#c7ffa6",
      filter: "brightness(0.8)",
    },
  },
}));

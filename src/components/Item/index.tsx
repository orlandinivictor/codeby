import { Box, Typography } from "@material-ui/core";

import { styles } from "./styles";

export type ItemProps = {
  uri: string;
  title: string;
  price: number;
  finalPrice: number;
};

export function Item({ uri, title, price, finalPrice }: ItemProps) {
  const classes = styles();

  return (
    <Box className={classes.container}>
      <img src={uri} alt={title} className={classes.image} />

      <Box style={{ flex: 1 }}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.original}>
          {(price / 100).toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
        <Typography className={classes.final}>
          {(finalPrice / 100).toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
      </Box>
    </Box>
  );
}

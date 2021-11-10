import { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";

import { styles } from "./styles";
import axios from "axios";
import { Item, ItemProps } from "../../components/Item";

export function Cart() {
  const classes = styles();

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("acima-10-reais.json");
    const items = data.items.map((item: any) => {
      return {
        uri: item.imageUrl,
        title: item.name,
        price: item.price,
        finalPrice: item.sellingPrice,
      };
    });

    setItems(items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Paper elevation={8} className={classes.container}>
      <Box className={classes.header}>
        <Typography className={classes.title}>Meu carrinho</Typography>
      </Box>

      <Box className={classes.items}>
        {items.map((item: ItemProps) => (
          <Item
            uri={item.uri}
            title={item.title}
            price={item.price}
            finalPrice={item.finalPrice}
          />
        ))}
      </Box>

      <Box className={classes.total}>
        <Box className={classes.amount}>
          <Typography className={classes.amountValue}>Total</Typography>

          <Typography className={classes.amountValue}>
            {(
              items
                .map((item: ItemProps) => item.finalPrice)
                .reduce(function (sum, price) {
                  return sum + price;
                }) / 100
            ).toLocaleString("pt-br", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </Typography>
        </Box>
        {items
          .map((item: ItemProps) => item.finalPrice)
          .reduce(function (sum, price) {
            return sum + price;
          }) /
          100 >
          10 && (
          <Typography className={classes.freeShip}>
            Parabéns, sua compra tem frete grátis!
          </Typography>
        )}
      </Box>

      <Box className={classes.buttonBox}>
        <Button variant="contained" className={classes.button}>
          Finalizar compra
        </Button>
      </Box>
    </Paper>
  );
}

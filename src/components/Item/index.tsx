import { useState } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { styles } from "./styles";
import { useCart } from "../../contexts/cartContext";

export type ItemProps = {
  id: string;
  uri: string;
  title: string;
  price: number;
  finalPrice: number;
  isntCart?: boolean;
};

export function Item({
  id,
  uri,
  title,
  price,
  finalPrice,
  isntCart,
}: ItemProps) {
  const classes = styles();
  const { handleAddItemToCart } = useCart();

  const [amount, setAmount] = useState(1);

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

        {isntCart && (
          <Box className={classes.addToCart}>
            <TextField
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              variant="standard"
              type="number"
            />

            <Button
              variant="contained"
              className={classes.button}
              onClick={() => {
                const items: ItemProps[] = [];
                for (let i = 0; i < amount; i++) {
                  items.push({ id, uri, title, price, finalPrice });
                }
                handleAddItemToCart(items);
                setAmount(1);
              }}
            >
              <AddShoppingCartIcon />
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

import { useHistory } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@material-ui/core";

import { Item, ItemProps } from "../../components/Item";
import { Header } from "../../components/Header";

import { useCart } from "../../contexts/cartContext";

import { styles } from "./styles";

export function Cart() {
  const classes = styles();
  const history = useHistory();
  const { cartItems, handleClearCart } = useCart();

  return (
    <Paper elevation={8} className={classes.container}>
      <Header title="Meu carrinho" />

      <Box className={classes.items}>
        {cartItems &&
          cartItems.map((item: ItemProps) => (
            <Box key={item.id}>
              <Item
                id={item.id}
                uri={item.uri}
                title={item.title}
                price={item.price}
                finalPrice={item.finalPrice}
              />
            </Box>
          ))}
      </Box>

      <Box className={classes.total}>
        <Box className={classes.amount}>
          <Typography className={classes.amountValue}>Total</Typography>

          <Typography className={classes.amountValue}>
            {(
              cartItems.length &&
              cartItems
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
        {cartItems.length &&
        cartItems
          .map((item: ItemProps) => item.finalPrice)
          .reduce(function (sum, price) {
            return sum + price;
          }) /
          100 >
          10 ? (
          <Typography className={classes.freeShip}>
            Parabéns, sua compra tem frete grátis!
          </Typography>
        ) : (
          ""
        )}
      </Box>

      <Box className={classes.buttonBox}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            handleClearCart();
            history.push("/");
          }}
        >
          Finalizar compra
        </Button>
      </Box>
    </Paper>
  );
}

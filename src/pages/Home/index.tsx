import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import axios from "axios";

import { Item, ItemProps } from "../../components/Item";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function Home() {
  const classes = styles();
  const history = useHistory();

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("acima-10-reais.json");
    console.log(data);
    const items = data.items.map((item: any) => {
      return {
        id: item.uniqueId,
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
      <Header title="Itens disponíveis" />

      <Grid container spacing={2} className={classes.gridContainer}>
        {items.map((item: ItemProps) => (
          <Grid key={item.id} item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Paper elevation={6} style={{ paddingInline: 10, paddingBlock: 5 }}>
              <Item
                id={item.id}
                uri={item.uri}
                title={item.title}
                price={item.price}
                finalPrice={item.finalPrice}
                isntCart
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box className={classes.buttonBox}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => history.push("/cart")}
        >
          Ir para o carrinho
        </Button>
      </Box>
    </Paper>
  );
}

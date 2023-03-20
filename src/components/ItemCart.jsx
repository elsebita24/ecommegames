import { Grid, GridItem, Image, Box, Button, Center } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Utils } from "../context/UtilsContext";

const ItemCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { formatPrice } = useContext(Utils);

  const [total, setTotal] = useState(0);

  const borrarItem = (id) => {
    const newCart = cart.filter((cartItem) => id !== cartItem.id);
    setCart(newCart);
  };

  useEffect(() => {
    let sumaTotal = 0;
    cart.map((product) => (sumaTotal += product.price * product.quantity));
    setTotal(sumaTotal);
  }, [cart]);
  return (
    <>
      <Box mt={2}>
        {cart.map((product) => (
          <Grid
            key={product.id}
            templateColumns="repeat(6, 1fr)"
            className="cartProductos"
          >
            <GridItem></GridItem>
            <GridItem>Título</GridItem>
            <GridItem>Cantidad</GridItem>
            <GridItem>Precio u.</GridItem>
            <GridItem>Total</GridItem>
            <GridItem>Borrar</GridItem>
            <GridItem>
              <Image
                src={product.pictureUrl}
                alt="Product img"
                className="cartProductosImg"
              />
            </GridItem>
            <GridItem className="cartTitleProducto">{product.title}</GridItem>
            <GridItem className="cartTitleProducto">
              x{product.quantity}
            </GridItem>
            <GridItem className="cartTitleProducto">
              ${formatPrice(product.price)}
            </GridItem>
            <GridItem className="cartTitleProducto">
              ${formatPrice(product.price * product.quantity)}
            </GridItem>
            <GridItem className="cartTitleProducto">
              <Button
                colorScheme="red"
                fontSize="20px"
                onClick={() => borrarItem(product.id)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </Button>
            </GridItem>
          </Grid>
        ))}
        <Center>
          <Box className="carTotal">Total: ${formatPrice(total)}</Box>
        </Center>
      </Box>
    </>
  );
};

export default ItemCart;

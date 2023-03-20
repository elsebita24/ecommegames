import {
  Box,
  Flex,
  Button,
  Input,
  Spacer,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Utils } from "../context/UtilsContext";

const ItemCount = ({ stockDisponible, id, title, price, pictureUrl }) => {
  // #region ##HOOKS##
  const [cantidad, setCantidad] = useState(0);
  const [stock, setStock] = useState(stockDisponible);
  const [disabledRestar, setDisabledRestar] = useState(true);
  const [disabledAgregar, setDisabledAgregar] = useState(
    stockDisponible > 0 ? false : true
  );
  const { setCart } = useContext(CartContext);
  const { mostrarToast } = useContext(Utils);
  // #endregion ##HOOKS##

  // #region ##ALL FUNCTIONS##

  // #region Agregar Cantidad
  const agregarCantidad = () => {
    let cantidadNueva = cantidad + 1;

    if (cantidadNueva == stockDisponible) {
      setDisabledAgregar(true);
      mostrarToast("Se llegó al máximo stock disponible.", "warning");
    }
    setCantidad(cantidadNueva);
    setStock(stock - 1);
    setDisabledRestar(false);
  };
  // #endregion Agregar Cantidad

  // #region Restar Cantidad
  const restarCantidad = () => {
    let cantidadNueva = cantidad - 1;

    if (cantidadNueva == 0) setDisabledRestar(true);

    setCantidad(cantidadNueva);
    setStock(stock + 1);
    setDisabledAgregar(false);
  };
  // #endregion Restar Cantidad

  // #region Reestablecer Cantidad
  const reestablecer = () => {
    setCantidad(0);
    setStock(stock);
    setDisabledAgregar(stock ? false : true);
    setDisabledRestar(true);
  };
  // #endregion Reestablecer Cantidad

  // #region Agregar Al Carrito
  const agregarAlCarrito = () => {
    if (!cantidad) return mostrarToast("Seleccione la cantidad.", "error");

    setCart((carritoActual) => {
      const elementoEnCarrito = carritoActual.find(
        (product) => product.id === id
      );
      return elementoEnCarrito
        ? carritoActual.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + cantidad }
              : product
          )
        : [
            ...carritoActual,
            { id, quantity: cantidad, price, title, pictureUrl },
          ];
    });
    mostrarToast("Producto agregado al carrito", "success");
    reestablecer(stock - cantidad);
  };
  // #endregion Agregar Al Carrito

  // #endregion ##ALL FUNCTIONS##

  // #region ##RETURN REACT##
  return (
    <>
      <HStack>
        <Box>
          <Box p={2}>Cantidad</Box>
          <Flex className="quantityProduct">
            <Button onClick={restarCantidad} isDisabled={disabledRestar}>
              -
            </Button>
            <Spacer />
            <Input value={cantidad} readOnly />
            <Spacer />
            <Button onClick={agregarCantidad} isDisabled={disabledAgregar}>
              +
            </Button>
          </Flex>
          <Box p={2}>
            Stock: <Badge bg={"green.300"}>{stock}</Badge>
          </Box>
        </Box>
        <Button
          colorScheme="whatsapp"
          variant="outline"
          onClick={agregarAlCarrito}
          fontSize={20}
          height={50}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <Box m={2}>Agregar</Box>
        </Button>
      </HStack>
    </>
  );
  // #endregion ##RETURN REACT##
};

export default ItemCount;

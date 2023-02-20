import {
  Box,
  Flex,
  Button,
  Input,
  Spacer,
  Badge,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const ItemCount = ({ stockDisponible }) => {
  // #region ##HOOKS##
  const [cantidad, setCantidad] = useState(0);
  const [stock, setStock] = useState(stockDisponible);
  const [disabledRestar, setDisabledRestar] = useState(true);
  const [disabledAgregar, setDisabledAgregar] = useState(
    stockDisponible > 0 ? false : true
  );
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
  const reestablecerCantidad = () => {
    setCantidad(0);
    setStock(stockDisponible);
    setDisabledAgregar(false);
    setDisabledRestar(true);
  };
  // #endregion Reestablecer Cantidad

  // #region Agregar Al Carrito
  const agregarAlCarrito = () => {
    mostrarToast("Próximamente agregar al carrito.", "success");
    reestablecerCantidad();
  };
  // #endregion Agregar Al Carrito

  // #region Toast
  const toast = useToast();
  const mostrarToast = (mensaje, tipo) => {
    toast({
      title: mensaje,
      position: "top",
      duration: 5000,
      isClosable: true,
      status: tipo,
    });
  };
  // #endregion Toast

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

import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Box, Button, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  let cantidadProductos = 12;

  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <Box p="6">
        <Box pl="4">
          <Link to={"/cart"}>
            <Button
              colorScheme="whatsapp"
              variant="ghost"
              borderWidth="2px"
              borderRadius="lg"
              borderColor="whatsapp.300"
            >
              <i className="fa-sharp fa-solid fa-cart-shopping paddingIcons iconoAgrandado"></i>
              <Badge p="1" ml="1" colorScheme="twitter">
                {cantidadProductos}
              </Badge>
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default CartWidget;

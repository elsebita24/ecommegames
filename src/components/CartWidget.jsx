import React from "react";
import { Box, Button, Badge } from "@chakra-ui/react";

const CartWidget = () => {
  let cantidadProductos = 12;

  return (
    <>
      <Box p="6">
        <Box pl="4">
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
        </Box>
      </Box>
    </>
  );
};

export default CartWidget;

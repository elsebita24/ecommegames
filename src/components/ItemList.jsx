import { Box, Flex, SimpleGrid, Spacer } from "@chakra-ui/react";
import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  const mensajeBienvenida =
    "¡Bienvenido a Ecommegames! Aquí encontrarás los mejores juegos al mejor precio del mercado.";
  return (
    <>
      <Box className="boxBienvenida">{mensajeBienvenida}</Box>
      <SimpleGrid spacing={2} minChildWidth="300px" p={4}>
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ItemList;

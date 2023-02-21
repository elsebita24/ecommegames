import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      <SimpleGrid
        spacing={3}
        p={4}
        maxW={{ xl: "1500px" }}
        m="0 auto"
        minChildWidth={"290px"}
      >
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ItemList;

import React from "react";
import { Box } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <Box className="boxBienvenida">{greeting}</Box>
    </>
  );
};

export default ItemListContainer;

import React from "react";
import { Box } from "@chakra-ui/react";

const Bienvenido = () => {
  const mensajeBienvenida =
    "¡Bienvenido a Ecommegames! Aquí encontrarás los mejores juegos al mejor precio del mercado.";
  return (
    <>
      <Box className="boxBienvenida">{mensajeBienvenida}</Box>
    </>
  );
};

export default Bienvenido;

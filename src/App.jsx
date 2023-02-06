import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  const mensajeBienvenida =
    "¡Bienvenido a Ecommegames! Aquí encontrarás los mejores juegos al mejor precio del mercado.";
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={mensajeBienvenida} />
    </>
  );
};

export default App;

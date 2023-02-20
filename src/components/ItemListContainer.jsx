import { useState, useEffect } from "react";
import data from "../data.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();

  // #region ##HOOKS##
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchData();
  }, [category]);
  // #endregion ##HOOKS##

  // #region ##ALL FUNCTIONS##

  // #region Obtener datos del JSON y devolver promesa
  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.length == 0) reject(new Error("No hay productos"));
        resolve(data);
      }, 1000);
    });
  };
  // #endregion

  // #region recibir datos y establecer el estado de la prop "productos" del componente ItemList
  const fetchData = async () => {
    try {
      const productosFetched = await getData();
      const productosFiltered =
        category !== undefined
          ? productosFetched.filter((product) => product.category == category)
          : productosFetched;
      setProductos(productosFiltered);
    } catch (e) {
      console.error(e);
    }
  };
  // #endregion
  // #endregion ##ALL FUNCTIONS##

  // #region ##RETURN REACT##
  return (
    <>
      <ItemList productos={productos} />
    </>
  );
  // #endregion ##RETURN REACT##
};

export default ItemListContainer;

import { useState, useEffect } from "react";
import data from "../data.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  // #region ##HOOKS##
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    fetchData();
  }, [id]);
  // #endregion ##HOOKS##

  // #region ##ALL FUNCTIONS##

  // #region Obtener datos del JSON y devolver promesa
  const getData = async () => {
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
      const producto = productosFetched.filter((producto) => producto.id == id);
      setProducto(producto);
    } catch (e) {
      console.error(e);
    }
  };
  // #endregion
  // #endregion ##ALL FUNCTIONS##

  // #region ##RETURN REACT##
  return (
    <>
      {producto.map((producto) => (
        <ItemDetail key={producto.id} producto={producto} />
      ))}
    </>
  );
  // #endregion ##RETURN REACT##
};

export default ItemDetailContainer;

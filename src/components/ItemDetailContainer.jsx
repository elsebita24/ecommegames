import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const defaultProduct = {
    title: "Product no encontrado",
    description:
      "El producto que esta intentando ver ya no existe, recargue la página e intente mas tarde.",
    price: "0",
    stock: 0,
    pictureUrl: "https://i.ibb.co/gWb4K3q/404.jpg",
  };

  // #region ##HOOKS##
  const [producto, setProducto] = useState(defaultProduct);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [id]);
  // #endregion ##HOOKS##

  // #region ##ALL FUNCTIONS##

  // #region Obtener datos del JSON y devolver promesa
  const getData = async () => {
    return new Promise((resolve, reject) => {
      try {
        const db = getFirestore();
        const oneItem = doc(db, "Juegos", id); // lo ultimo es el id del producto
        getDoc(oneItem).then((snapshot) => {
          snapshot.exists()
            ? resolve({ id: snapshot.id, ...snapshot.data() })
            : reject(new Error("El producto no existe"));
        });
      } catch (e) {
        reject(new Error("Ocurrió un error con firebase"));
      }
    });
  };
  // #endregion

  // #region recibir datos y establecer el estado de la prop "productos" del componente ItemList
  const fetchData = async () => {
    setLoading(true);
    try {
      const productoFetched = await getData();
      productoFetched !== undefined && setProducto(productoFetched);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  // #endregion
  // #endregion ##ALL FUNCTIONS##

  // #region ##RETURN REACT##
  return <>{loading ? <Loading /> : <ItemDetail producto={producto} />}</>;
  // #endregion ##RETURN REACT##
};

export default ItemDetailContainer;

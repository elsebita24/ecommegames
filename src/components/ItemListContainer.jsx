import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  orderBy,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();

  // #region ##HOOKS##
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [category]);
  // #endregion ##HOOKS##

  // #region ##ALL FUNCTIONS##

  // #region Obtener datos del JSON y devolver promesa
  const getData = () => {
    return new Promise((resolve, reject) => {
      try {
        const db = getFirestore();
        const itemsCollection = query(
          collection(db, "Juegos"),
          orderBy("category")
        );
        getDocs(itemsCollection).then((snapshot) => {
          const docs = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });

          !docs.length ? reject(new Error("No hay productos")) : resolve(docs);
        });
      } catch (e) {
        reject(new Error(e));
      }
    });
  };
  // #endregion

  // #region recibir datos y establecer el estado de la prop "productos" del componente ItemList
  const fetchData = async () => {
    setLoading(true);
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
    setLoading(false);
  };
  // #endregion
  // #endregion ##ALL FUNCTIONS##

  // #region ##RETURN REACT##
  return <>{loading ? <Loading /> : <ItemList productos={productos} />}</>;
  // #endregion ##RETURN REACT##
};

export default ItemListContainer;

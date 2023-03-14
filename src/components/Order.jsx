import { useState, useContext } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../context/ShoppingCartContext";

const Order = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { cart } = useContext(CartContext);

  const db = getFirestore();
  const ordersCollection = collection(db, "Orden");

  const order = {
    name,
    email,
    cart,
  };

  const handleSubmit = (e) => {
    //ACA AGREGAR TODOS LOS CONTROLES JS DE CAMPOS VACIOS, EMAIL CORRECTO Y DEMAS
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => finishOrder(id));
  };

  const finishOrder = (id) => {
    setOrderId(id);
    //vaciar carrito
    //dar mensaje de correcto y order id al usuario
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre y apellido"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
        <p>Orden Id {orderId}</p>
      </form>
    </>
  );
};

export default Order;

import Order from "./Order";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import EmptyCart from "./EmptyCart";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return <>{cart.length ? <Order /> : <EmptyCart />}</>;
};

export default Cart;

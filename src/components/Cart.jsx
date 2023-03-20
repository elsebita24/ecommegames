import Order from "./Order";
import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div>
      <Order />
    </div>
  );
};

export default Cart;

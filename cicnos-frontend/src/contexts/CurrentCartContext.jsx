import React, { createContext, useState } from "react";

export const Cart = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = usestate(0);
  I;

  const contextValue = {
    cart: cart,
    total: total,
  };

  return <Cart.Provider value={contextValue}>{props.children}</Cart.Provider>;
};

export default CartProvider;

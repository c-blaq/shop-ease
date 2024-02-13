"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

type CartContextType = {
  cartItemsCount: number;
  setCartItemsCount: React.Dispatch<React.SetStateAction<number>>;
  cartItems: any;
  handleAddItemToCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddItemToCart = () => {
    // setCartItems([item, ...cartItems]);
    setCartItemsCount((prev) => prev + 1);
  };

  return (
    <CartContext.Provider
      value={{
        cartItemsCount,
        setCartItemsCount,
        cartItems,
        handleAddItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () =>
  useContext<CartContextType | null>(CartContext);

export default CartProvider;

"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

type CartContextType = {
  cartItemsCount: number;
  setCartItemsCount: React.Dispatch<React.SetStateAction<number>>;
  cartItems: any;
  handleAddItemToCart: () => void;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

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
        cartItemsCount: cartItemsCount,
        setCartItemsCount,
        cartItems,
        handleAddItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext<CartContextType>(CartContext);

export default CartProvider;

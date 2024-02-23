"use client";
import { commerce } from "@/lib/commerce";
import React, { ReactNode, createContext, useContext, useState } from "react";

type CartContextType = {
  cartItems: any;
  fetchCart: () => void;
  handleEmptyCart: () => void;
  handleAddItemToCart: (productId: string, quantity: number) => void;
};

interface IAddToCart {
  productId: string;
  quantity: number;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState({});
  // const [cartQuantity, setCartQuantity] = useState([]);

  // fetch cart items
  const fetchCart = async () => {
    setCartItems(await commerce.cart.retrieve());
  };

  // add to cart
  const handleAddItemToCart = async (productId: string, quantity: number) => {
    const cartItem = await commerce.cart.add(productId, quantity);
    setCartItems(cartItem);
  };

  // empty cart
  const handleEmptyCart = async () => {
    const cartItem = await commerce.cart.empty();
    setCartItems(cartItem);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        fetchCart,
        handleAddItemToCart,
        handleEmptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext<CartContextType>(CartContext);

export default CartProvider;

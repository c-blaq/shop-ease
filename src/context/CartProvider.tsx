import React, { ReactNode, createContext, useContext, useState } from "react";

interface CartContextType {
  cartItemsCount: number;
  setCartItemsCount: React.Dispatch<React.SetStateAction<number>>;
  cartItems: any;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddItemToCart = (item) => {
    setCartItems([item, ...cartItems]);
    setCartItemsCount((prev) => prev + 1);
  };

  return (
    <CartContext.Provider
      value={{ cartItemsCount, setCartItemsCount, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = useContext(CartContext);

export default CartProvider;

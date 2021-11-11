import { createContext, useContext, useState } from "react";

import { ItemProps } from "../components/Item";

type CartContextData = {
  handleAddItemToCart: (cartItem: ItemProps[]) => void;
  cartItems: ItemProps[];
  handleClearCart: () => void;
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<ItemProps[]>([]);

  const handleAddItemToCart = (cartItem: ItemProps[]) => {
    setCartItems([...cartItems, ...cartItem]);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ handleAddItemToCart, cartItems, handleClearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

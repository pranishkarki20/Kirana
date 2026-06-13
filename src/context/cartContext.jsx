import { createContext, useContext, useState } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addtoCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if(existingItem){
        return prev.map((cartItem) =>
          cartItem.id == item.id
         ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
        )
      }
      return [...prev, { ...item, quantity: 1 }];
    })
  };

  const removeFromCart = (id) => {
  setCart((prev) => prev.filter((cartItem) => cartItem.id !== id));
};
  return (
    <CartContext.Provider value={{ cart, addtoCart , removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext);
}
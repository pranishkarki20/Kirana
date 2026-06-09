import { createContext, useContext, useState } from "react";
const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addtoCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addtoCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
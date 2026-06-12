import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  return (
    <div className="checkout">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>No items in cart</h2>
      ) : (
        cart.map((item, index) => (
          <div className="cartItem" key={index}>
            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
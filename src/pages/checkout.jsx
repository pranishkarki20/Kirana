import { useCart } from "../context/cartContext";
import "./checkout.css";
export default function Checkout() {
  const { cart ,removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    const price = Number(item.price.replace("Rs", "").trim());
    return total + price * item.quantity;
  }, 0);
  return (
    <div className="checkout">
      <h1>Shopping Cart</h1>
      <div className=" it">     
      <div className="items">
      {cart.length === 0 ? (
        <h2>No items in cart</h2>
      ) : (
        cart.map((item, index) => (
          <div className="cartItem" key={index}>
            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.name}</h3>
             <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove
                </button>
            </div>
          </div>
        ))
      )}
      </div>

      <div className="check">
        <h1>Total Price</h1>
        {cart.map((item) => (
           <p key={item.id}>
            {item.name} x {item.quantity}
            </p> ))}
        <p>Total Price Rs {totalPrice}</p>
        <button>
          Checkout
        </button>
      </div>
      </div> 
    </div>
  );
}

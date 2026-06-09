import { useState } from "react";
import './products.css'
import { useCart } from "../context/cartContext";
export default function Product() {
     const products = [
    { id: 1, name: "Macbook", image: "/mac.jpg", price: "$1000", category: "mobile" },
    { id: 2, name: "Iphone", image: "/iphone.jpg", price: "$599", category: "mobile" },
    { id: 3, name: "Suit", image: "/suit.jpg", price: "$250", category: "clothes" },
    { id: 4, name: "Check shirt", image: "/checkshirt.jpg", price: "$100", category: "clothes" },
    { id: 5, name: "Bag", image: "/bag.jpg", price: "$89.90", category: "clothes" }
  ];
  
  const [product] = useState(products);
  const {addtoCart} = useCart();
  return (
    <main>
      <section className="Product">
        {product.map((item) => (
          <div className="Card">
            <div key={item.id}> 
            <img src={item.image} width="150" alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button onClick={() => addtoCart(item)}>Add to card</button>
            </div>
            </div>
        ))}</section>
    </main>
  );
}

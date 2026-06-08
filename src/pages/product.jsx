import { useState } from "react";
import './products.css'
export default function Product() {
     const products = [
    { id: 1, name: "Macbook", image: "/mac.jpg", price: "$1000", category: "mobile" },
    { id: 2, name: "Iphone", image: "/iphone.jpg", price: "$599", category: "mobile" },
    { id: 3, name: "Suit", image: "/suit.jpg", price: "$250", category: "clothes" },
    { id: 4, name: "Check shirt", image: "/checkshirt.jpg", price: "$100", category: "clothes" },
    { id: 5, name: "Bag", image: "/bag.jpg", price: "$89.90", category: "clothes" }
  ];
  
  const [product] = useState(products);
  return (
    <main>
      <section className="Product">
        {product.map((item) => (
          <div className="card">
            <div key={item.id}> 
            <img src={item.image} width="150" alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.category}</p>
            </div>
            </div>
        ))}</section>
    </main>
  );
}

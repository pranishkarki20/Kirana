import "./Product.css";
import { useState } from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

export default function Product() {
  const product = [
    { id: 1, name: "Macbook", image: "/mac.jpg", price: "Rs 1000", category: "mobile" },
    { id: 2, name: "Iphone", image: "/iphone.jpg", price: "Rs 599", category: "mobile" },
    { id: 3, name: "Suit", image: "/suit.jpg", price: "Rs 250", category: "clothes" },
    { id: 4, name: "Check shirt", image: "/checkshirt.jpg", price: "Rs 100", category: "clothes" },
    { id: 5, name: "Bag", image: "/bag.jpg", price: "Rs 89.90", category: "clothes" }
  ];

  const [category, setCategory] = useState("all");
  const { addtoCart } = useCart();

  const filterproducts = product.filter((item) => {
    return category === "all" || item.category === category;
  });

  return (
    <section id="Products" className="Products">
      <div className="product">
        <h1>Featured Product</h1>

        <select
        className = "dropdown"
        onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="all">All</option>
          <option value="mobile">Electronics</option>
          <option value="clothes">Clothes</option>
        </select>
        <div className="Productitems">
          {filterproducts.map((item) => (
            <div
              key={item.id}
              className="Card"
            >
              <img src={item.image} alt={item.name} className="imges" />
              <div className="text">{item.name}</div>
              <div className="Price">{item.price}</div>

              <button className="button" onClick={() => addtoCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="btn">
          <Link to="/pages/product">
        <button>
          View all products
        </button>
        </Link>
        </div>
      </div>
      
    </section>
  );
}

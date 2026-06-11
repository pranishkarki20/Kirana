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
  
  const {addtoCart} = useCart();
  const [search , setsearch] = useState("");
  const [category , setCategory] = useState("all")
  const searchfilter = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "all" || item.category === category)
  );
  return (
    <main>
      <section className="Product">
        <div className="all ">
          <div className="fse">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="search-input"
          />
          <select
            className="dropdown"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="all">All</option>
            <option value="mobile">Electronics</option>
            <option value="clothes">Clothes</option>
          </select>
        </div>
        </div>
        <div className="Products">
        {searchfilter.map((item , index) =>(
          <div className="card">
            <div key={item.id}> 
            <img src={item.image} width="150" alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button onClick={() => addtoCart(item)}>Add to card</button>
            </div>
          </div>

        ))}
        </div>
        </div>
        </section>

    </main>
  );
}

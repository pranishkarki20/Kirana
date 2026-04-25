import { motion } from "framer-motion";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Product.css";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Product() {
  const product = [
    { id: 1, name: "Macbook", image: "/mac.jpg", price: "$1000", category: "mobile" },
    { id: 2, name: "Iphone", image: "/iphone.jpg", price: "$599", category: "mobile" },
    { id: 3, name: "Suit", image: "/suit.jpg", price: "$250", category: "clothes" },
    { id: 4, name: "Check shirt", image: "/checkshirt.jpg", price: "$100", category: "clothes" },
    { id: 5, name: "Bag", image: "/bag.jpg", price: "$89.90", category: "clothes" }
  ];

  const [category, setCategory] = useState("all");

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
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1 }}
              className="Card"
            >
              <img src={item.image} alt={item.name} className="imges" />
              <div className="text">{item.name}</div>
              <div className="Price">{item.price}</div>

              <Button
                className="button"
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                style={{
                  margin: "10px auto",
                  display: "flex",
                  justifyContent: "center",
                  color: "black",
                  background: "white",
                  width: "160px"
                }}
              >
                Add to Cart
              </Button>
            </motion.div>
          ))}
        </div>

        <Button
          component={RouterLink}
          to="/pages/product"
          variant="outlined"
          sx={{
            margin: "15px auto",
            color: "black",
            borderColor: "black"
          }}
        >
          View all products
        </Button>
      </div>
    </section>
  );
}

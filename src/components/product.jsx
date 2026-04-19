import { motion } from "framer-motion";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Product.css";
import { useState, useEffect } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Products request failed");
        }
        return res.json();
      })
      .then((data) => {
        const productList = Array.isArray(data?.[0]) ? data[0] : data;
        setProducts(Array.isArray(productList) ? productList : []);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load products");
      });
  }, []);

  const filteredProducts = products.filter((item) => {
    return category === "all" || item.category === category;
  });

  return (
    <section id="Products" className="Products">
      <div className="product">
        <h1>Featured Product</h1>

        <select
          className="dropdown"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="all">All</option>
          <option value="mobile">Electronics</option>
          <option value="clothes">Clothes</option>
        </select>

        <div className="Productitems">
          {error && <p className="product-message">{error}</p>}
          {!error && filteredProducts.length === 0 && (
            <p className="product-message">No products found</p>
          )}

          {filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1 }}
              className="Card"
            >
              <img
                src={item.image || "https://placehold.co/400x500?text=Product"}
                alt={item.name}
                className="imges"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/400x500?text=Product";
                }}
              />
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
                  width: "160px",
                }}
              >
                Add to Cart
              </Button>
            </motion.div>
          ))}
        </div>

        <Button
          variant="outlined"
          sx={{
            margin: "15px auto",
            color: "black",
            borderColor: "black",
          }}
        >
          View all products
        </Button>
      </div>
    </section>
  );
}

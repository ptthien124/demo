import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Products() {
  const navigate = useNavigate();

  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (store.length === 0) {
      try {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => {
            setStore(json);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [store]);

  const products = store.map((product) => (
    <div
      className="product"
      key={product.id}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  ));

  return (
    <div className="products">
      {loading ? <h2 className="loading">Loading...</h2> : products}
    </div>
  );
}

export default Products;

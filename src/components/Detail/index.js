import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

function Product() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!data) {
      try {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((json) => {
            setData(json);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [data, id]);

  return (
    <div className="detail">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="wrapper">
          <h1>{data.title}</h1>
          <img src={data.image} alt="img" />
          <strong>{data.price}$</strong>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
}

export default Product;

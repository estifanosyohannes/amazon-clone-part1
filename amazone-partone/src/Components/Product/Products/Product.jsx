import React, { useEffect, useState } from "react";
import "./product.css";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
function Product() {
  const [porducts, setProducts] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="porducts_container">
      {porducts?.map((singleproduct) => {
        return <ProductCard product={singleproduct} />;
      })}
    </section>
  );
}

export default Product;

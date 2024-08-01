import React, { useEffect, useState } from "react";
// import "./product.css";
import classes from './product.module.css'
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../../Loader/Loader";

function Product() {
  const [porducts, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // isLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading?(
        <Loader />
      ) : (
        <section className={classes.porducts_container}>
          {porducts?.map((singleproduct) => {
            return <ProductCard product={singleproduct} renderAdd={true} key={singleproduct.id}/>;
          })}
        </section>)
      }
    </>
  );
}

export default Product;

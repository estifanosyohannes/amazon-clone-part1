import React, { useEffect, useState } from "react";
// import "./productdetail.css";
import classes from './productdetail.module.css'
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard/ProductCard";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [product, setproduct] = useState({});

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, []);

  return (
    <LayOut>
      {isLoading ?(<Loader />):(
      <ProductCard product={product} flex={true} renderDescription={true} renderAdd={true}/>)}
    </LayOut>
  );
}

export default ProductDetail;

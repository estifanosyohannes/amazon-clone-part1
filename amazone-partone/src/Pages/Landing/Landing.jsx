import React from "react";

import Category from "../../Components/Catagory/category/Category";
import Product from "../../Components/Product/Products/Product";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";

import LayOut from "../../Components/LayOut/LayOut";


function Landing() {
  return (

    
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;

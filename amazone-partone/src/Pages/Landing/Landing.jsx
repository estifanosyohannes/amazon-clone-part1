import React from "react";

import LayOut from "../../Components/LayOut/LayOut";

import Category from "../../Components/Catagory/category/Category";
import Product from "../../Components/Product/Products/Product";
// import Carousels from "../../Components/Carousel/CarouselEffect";

function Landing() {
  return (
    <LayOut>
      {/* <Carousels /> */}
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;

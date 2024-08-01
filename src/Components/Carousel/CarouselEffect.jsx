import React from "react";
// import "./carousels.css";
import classes from './carousels.module.css'

import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {/* console.log(imageItem); */}
        {img.map((imageItem) => {
          return <img key={imageItem} src={imageItem} alt=""/>;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;

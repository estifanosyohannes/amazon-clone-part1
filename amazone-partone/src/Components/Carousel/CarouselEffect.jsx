import React from "react";
import "./carousels.css";
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
        {img.map((imageItem) => {
          return <img src={imageItem} />;
        })}
      </Carousel>
      <div className="hero__img"></div>
    </div>
  );
}

export default CarouselEffect;

import React from "react";
import "./carousels.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";

function Carousels() {
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

export default Carousels;

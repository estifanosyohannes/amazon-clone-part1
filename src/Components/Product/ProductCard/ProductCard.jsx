import React, { useContext } from "react";
import classes from './productcard.module.css'
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating/Rating";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import { DataContext } from "../../DataProvider/DataProvider";
import { Type } from "../../../Utility/action.type";

function ProductCard({ product, flex, renderDescription,renderAdd }) {
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);

  // console.log(basket.length);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
      },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title} </h3>
        {renderDescription && (
          <div style={{ maxWidth: "750px" }}>{description}</div>
        )}
        <div className={classes.rating}>
          {/* ratting */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* price */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

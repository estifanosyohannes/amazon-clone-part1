import React from "react";
import "./lowerhead.css";
import { AiOutlineMenu } from "react-icons/ai";

function LowerHead() {
  return (
    <>
      <div className="lower__container">
        <ul>
          <li>
            <AiOutlineMenu />
            <p>All</p>
          </li>
          <li>Today's Dealse </li>
          <li>Costumer Service </li>
          <li>Registry </li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </>
  );
}

export default LowerHead;

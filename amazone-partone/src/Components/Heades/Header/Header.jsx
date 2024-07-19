import React from 'react'
import './header.css'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHead from '../Lowerhead/LowerHead';

function Header() {
  return (
    <>
      <section className="header__container">
        {/* {logo section} */}
        <div className="logo__container">
          <a href="">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
          <div className="delivery">
            {/* {delivery} */}
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className="search">
          {/* {searce } */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <BsSearch size={25} />
        </div>

        {/* {right side link section} */}
        <div className="order__container">
          <a href="#" className="language">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt=""
            />
            <select>
              <option value="">EN </option>
            </select>
          </a>
          {/* {three components } */}
          <a href="#">
            <p>Sign In </p>
            <span>Account & Lists </span>
          </a>
          {/* {cart } */}
          <a href="#">
            <p>returns</p>
            <span>& Orders </span>
          </a>
          <a href="#" className='cart'>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </section>
      <LowerHead />
    </>
  );
}

export default Header

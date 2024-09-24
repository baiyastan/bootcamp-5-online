import React from "react";
import { useParams } from "react-router-dom";
import "./Item.scss";

function ItemProduct() {
  const { id } = useParams();

  return (
    <div className="item container">
      <div className="images">
        <img className="i" src="" alt="" />
        <img className="i" src="" alt="" />
        <img className="i" src="" alt="" />
        <img className="i" src="" alt="" />
      </div>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="text">
        <h1>Havic HV G-92 Gamepad</h1>
        <h3>$192.00</h3>
        <p>
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
        <div className="size">
          <p>Size:</p>
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
        </div>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default ItemProduct;

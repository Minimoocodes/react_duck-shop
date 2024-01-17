import React from "react";
import { products } from "../data";
import { useParams } from "react-router-dom";

const ItemDetails = ({ handleAdd, handleRemove }) => {
  const { id } = useParams();

  return (
    <div className="item_details">
      <img src={products[id].image} className="item_image" alt="duck" />
      <div className="text_details">
        <h3>{products[id].name}</h3>
        <p>{products[id].price}sek</p>
        <p>{products[id].description}</p>
        <div className="buttons_wrap">
          <button className="button" onClick={() => handleAdd(id)}>
            Add to cart
          </button>
          <button className="button" onClick={() => handleRemove()}>
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

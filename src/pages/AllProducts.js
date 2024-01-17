import React from "react";
import { products } from "../data";
import { useNavigate } from "react-router-dom";

const AllProducts = ({ handleAdd, handleRemove }) => {
  const navigate = useNavigate();

  const showDetail = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="content_wrap">
      {products.map((item) => (
        <div className="product_card" onClick={() => showDetail(item.id)}>
          <img className="product_img" src={item.image} alt="product" />
          <h3>{item.name}</h3>
          <p>{item.price} sek</p>
          <p>{item.description}</p>
          <div className="buttons_wrap">
            <button className="button" onClick={() => handleAdd}>
              {" "}
              Add to cart
            </button>
            <button className="button" onClickCapture={() => handleRemove}>
              Remove from cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;

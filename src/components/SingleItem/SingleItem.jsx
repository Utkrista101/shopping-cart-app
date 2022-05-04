import React from "react";
import "./singleitem.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { products } from "../Products/product";
import { addToCart } from "../../redux/shopping/actions";

function SingleItem({ addToCart }) {
  const { id } = useParams();
  const singleItem = products.find((product) => product.id == id);

  return (
    <div className="singleItem">
      <img
        className="singleItem-image"
        src={singleItem.img}
        alt={singleItem.title}
      />
      <div className="singleItem-details">
        <p className="singleItem-title">{singleItem.title}</p>
        <p className="singleItem-description">{singleItem.desc}</p>
        <p className="singleItem-price">{singleItem.price}</p>
        <button
          onClick={() => addToCart(singleItem.id)}
          className="singleItem-btn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(SingleItem);

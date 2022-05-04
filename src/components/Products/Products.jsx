import "./product.css";
import React from "react";
import { products } from "./product";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../redux/shopping/actions";
import { toast, ToastContainer } from "react-toastify";

function Products({ addToCart }) {
  return (
    <div className="container">
      <div className="products">
        <div className="product">
          {products.map((element, key) => {
            return (
              <div className="product-card">
                <img className="product-img" src={element.img} />
                <div className="product-title"> {element.title}</div>
                <div className="product-price"> NPR {element.price}</div>
                <div className="product-button">
                  <Link to={`../products/${element.id}`}>
                    <button>View Item</button>
                  </Link>
                  <button onClick={() => addToCart(element.id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Products);

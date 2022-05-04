import "./cart.css";
import React, { useState, useEffect } from "react";
import CartItem from "./CartItem/CartItem";

import { connect } from "react-redux";

function Cart({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="cart-summary">
        <div className="summary-title">Cart Summary</div>
        <div className="summary-price">
          <span> TOTAL: ({totalItems} items)</span>
          <span>NPR {totalPrice}</span>
        </div>
        <button className="summary-checkout">Proceed To Checkout</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

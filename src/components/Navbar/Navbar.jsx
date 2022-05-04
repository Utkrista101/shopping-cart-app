import "./navbar.css";
import { connect } from "react-redux";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="navbar-heading">SHOPPING CART APP</div>
      </Link>
      <div className="navbar-carticon">
        <Link className="link" to="/cart">
          <Badge badgeContent={cartCount} color="primary">
            <MdOutlineShoppingCart size={35} />
          </Badge>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);

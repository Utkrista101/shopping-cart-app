import "./cartItem.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeFromCart, adjustQty } from "../../../redux/shopping/actions";

function CartItem({ item, removeFromCart, adjustQty }) {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className="cartItem">
      <img className="cartItem-img" src={item.img} alt={item.title} />
      <div className="cartItem-details">
        <p className="details-title">{item.title}</p>
        <p className="details-desc">{item.desc}</p>
        <p className="details-price">NPR {item.price}</p>
      </div>
      <div className="cartItem-actions">
        <div className="cartItem-Qty">
          <label htmlFor="qty">QTY</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={() => removeFromCart(item.id)} className="deleteItem">
          <MdDeleteForever size={30} alt="delete" />
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

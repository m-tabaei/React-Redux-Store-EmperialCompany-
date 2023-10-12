import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

function CartSummary({ onClear, cart }) {
  return (
    <div className="cart-summary">
      <button className="clear-cart" onClick={onClear}>
        Clear Cart
      </button>
      <div className="cart-checkout">
        <div className="subtotal">
          <span>Subtotal</span>
          <span className="amount">
            $
            {cart.cartTotalAmount}
          </span>
        </div>
        <p>Taxes and Shipping calculated at checkout</p>
        <button>CheckOut</button>
        <div className="continue-shopping">
          <Link to="/products">
            <FaRegArrowAltCircleLeft />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;

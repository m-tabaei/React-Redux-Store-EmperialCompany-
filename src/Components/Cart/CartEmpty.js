import React from 'react';
import Images from '../../assets/cart/cart-empty.jpg';

export function CartEmpty() {
  return (
    <div className="cart-empty-container">
      <img className="cart-empty-image" src={Images} alt="cart empty" />
      <p className="cart-empty-title">Shopping cart is empty!</p>
      <p className="cart-empty-message">But it's never too late to fix it :)</p>
    </div>
  );
}

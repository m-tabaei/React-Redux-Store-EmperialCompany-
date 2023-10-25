import React from 'react';
import { FaTrash } from 'react-icons/fa';

function CartItem({
  cartItem, onRemove, onDecrease, onIncrease,
}) {
  return (
    <div className="cart-item" key={cartItem.id}>
      <div className="cart-product">
        <img src={cartItem.image} alt={cartItem.name} />
        <div>
          <h3>{cartItem.title}</h3>
          <p>{cartItem.description}</p>
          <button onClick={() => onRemove(cartItem)}>  Remove</button>
          <FaTrash style={{ color: 'red', margin: '2px' }} />
        </div>
      </div>
      <div className="cart-product-price">{cartItem.price}</div>
      <div className="cart-product-quantity">
        <button onClick={() => onDecrease(cartItem)}>-</button>
        <div className="count">{cartItem.cartQuantity}</div>
        <button onClick={() => onIncrease(cartItem)}>+</button>
      </div>
      <div className="cart-product-total-price">
        $
        {parseFloat(cartItem.price * cartItem.cartQuantity).toFixed(2)}
      </div>
    </div>
  );
}

export default CartItem;

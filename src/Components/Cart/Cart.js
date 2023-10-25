import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '../../Products/CartSlice';
import CartSummary from './CartSummary';
import CartItem from './CartItem';
import { CartEmpty } from './CartEmpty';
import { useDarkMode } from '../DarkMode/DarkModeContext';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <section className={` ${isDarkMode ? 'dark-mode' : ''}`} >

    <div  className={`cart-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <CartEmpty />
          <p>Your cart is currently empty</p>
          <div className="cart-shopping">
            <Link to="/products">
              <FaRegArrowAltCircleLeft />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div >
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                onRemove={handleRemoveFromCart}
                onDecrease={handleDecreaseCart}
                onIncrease={handleIncreaseCart}
                />
                ))}
          </div>
          <CartSummary onClear={handleClearCart} cart={cart} />
        </div>
      )}
    </div>
</section>
  );
}

export default Cart;

// import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { FaArrowAltCircleLeft, FaRegArrowAltCircleLeft } from "react-icons/fa";
// import {
//   addToCart,
//   clearCart,
//   decreaseCart,
//   getTotals,
//   removeFromCart,
// } from "../../Products/CartSlice";

// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTotals());
//   }, [cart, dispatch]);

//   const handleRemoveFromCart = (cartItem) => {
//     dispatch(removeFromCart(cartItem));
//   };

//   const handleDecreaseCart = (cartItem) => {
//     dispatch(decreaseCart(cartItem));
//   };

//   const handleIncreaseCart = (cartItem) => {
//     dispatch(addToCart(cartItem));
//   };

//   const handleclearCart = (cartItem) => {
//     dispatch(clearCart(cartItem));
//   };

//   return (
//     <div className="cart-container">
//       <h2>Shopping Cart</h2>
//       {cart.cartItems.length === 0 ? (
//         <div className="cart-empty">
//           <p>Your cart is currently empty</p>
//           <div className="cart-shopping">
//             <Link to="/">
//               <FaRegArrowAltCircleLeft />

//               <span>Start Shopping</span>
//             </Link>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div className="titles">
//             <h3 className="product-title">Product</h3>
//             <h3 className="price">Price</h3>
//             <h3 className="quantity">Quantity</h3>
//             <h3 className="total">Total</h3>
//           </div>
//           <div className="cart-items">
//             {cart.cartItems?.map((cartItem) => (
//               <div className="cart-item" key={cartItem.id}>
//                 <div className="cart-product">
//                   <img src={cartItem.image} alt="{cartItem.name}" />
//                   <div>
//                     <h3>{cartItem.title}</h3>
//                     <p>{cartItem.description}</p>
//                     <button onClick={() => handleRemoveFromCart(cartItem)}>
//                       Remove
//                     </button>
//                   </div>
//                 </div>

//                 <div className="cart-product-price">${cartItem.price}</div>
//                 <div className="cart-product-quantity">
//                   <button onClick={() => handleDecreaseCart(cartItem)}>
//                     -
//                   </button>
//                   <div className="count">{cartItem.cartQuantity}</div>
//                   <button onClick={() => handleIncreaseCart(cartItem)}>
//                     +
//                   </button>
//                 </div>
//                 <div className="cart-product-total-price">
//                   ${cartItem.price * cartItem.cartQuantity}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="cart-summary">
//             <button className="clear-cart" onClick={() => handleclearCart()}>
//               Clear Cart
//             </button>
//             <div className="cart-chechout">
//               <div className="subtotal">
//                 <span>Subtotal</span>
//                 <span className="amount">${cart.cartTotalAmount}</span>
//               </div>
//               <p>Taxes and Shipping calculated at checkout</p>
//               <button>CheckOut</button>
//               <div className="continue-shopping">
//                 <Link to="/">
//                   <FaRegArrowAltCircleLeft />

//                   <span>Continue Shopping</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

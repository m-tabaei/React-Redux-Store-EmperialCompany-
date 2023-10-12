import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FiShoppingCart } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import { addToCart } from '../../Products/CartSlice';

function ProductDetail() {
  const { productId } = useParams();
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const numericProductId = parseInt(productId);

  const product = products.find((product) => product.id === numericProductId);

  if (!product) {
    return <p>Can not Found Product ....</p>;
  }
  // Add Product to Basket
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      {product.image ? (
        <img src={product.image} alt={product.category} className="product-image" />
      ) : (
        <Skeleton count={3} baseColor="#2b2b2b" highlightColor="#5b5b5b" />
      )}
      <p>{product.description}</p>

      <div className="price-section">
        <span className="price">
          $
          {product.price}
        </span>
      </div>

      <div className="cart-actions">
        <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
        <Link to="/cart" className="view-cart-link">
          View Cart
          <FiShoppingCart style={{ fontSize: '34px' }} />
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;

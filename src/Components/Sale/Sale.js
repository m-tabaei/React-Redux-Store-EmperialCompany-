import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { useState } from "react";
import { addToCart } from "../../Products/CartSlice";
import { useGetAllProductsQuery } from "../../Products/ProductsApi";

function Sale() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  // State for cart Hover
  const [isCardOpen, setIsCardOpen] = useState(false);

  // On Click for cart Header
  const handleCardToggle = () => {
    setIsCardOpen((prevIsCardOpen) => !prevIsCardOpen);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    Navigate("/cart");
  };
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>error</p>
      ) : (
        <>
          <h2>Store Emperial</h2>
          <div className="products ">
            {data?.map((product) => (
              <div className="product overflow-hidden" key={product.id}>
                <div className="title">
                  <p>{product.title}</p>
                </div>
                <Link to={`/product/${product.id}`}>
                  <div className="image-product">
                    <img
                      src={
                        product.image || (
                          <Skeleton
                            count={1}
                            baseColor="#2b2b2b"
                            highlightColor="#5b5b5b"
                          />
                        )
                      }
                      alt={product.category}
                      loading="Layz"
                    />
                  </div>
                </Link>
                <div className="card mt-3">
                  <div className="card-header">
                    <a href={handleCardToggle} className="btn" onClick={handleCardToggle}>
                      Rating : {product.rating.rate}
                    </a>
                  </div>
                  <div
                    className={`collapse ${isCardOpen ? "show" : ""}`}
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">{product.category}</div>
                  </div>
                </div>
                <div className="details">
                  <span className="price">
                    Price:$
                    {product.price}
                  </span>
                  <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Sale;

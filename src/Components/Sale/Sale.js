import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addToCart } from "../../Products/CartSlice";
import { useGetAllProductsQuery } from "../../Products/ProductsApi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDarkMode } from "../DarkMode/DarkModeContext";

function Sale() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  // State for cart Hover
  const [isCardOpen, setIsCardOpen] = useState(false);
   const { isDarkMode } = useDarkMode();


  // On Click for cart Header
  const handleCardToggle = () => {
    setIsCardOpen((prevIsCardOpen) => !prevIsCardOpen);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    Navigate("/cart");
  };
  return (
    <div className={`home-container ${isDarkMode ? 'dark-mode' : ''}`}>
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
                    <LazyLoadImage
                      alt={product.category}
                      effect="blur"
                      src={product.image}
                    />
                  </div>
                </Link>
                <div className="card mt-3">
                  <div className="card-header">
                    <a
                      href={handleCardToggle}
                      className="btn"
                      onClick={handleCardToggle}
                    >
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

import { Link } from 'react-router-dom';
import { FiShoppingCart, TfiShoppingCartFull } from 'react-icons/fi';
import { useSelector } from 'react-redux';

function NavBarMenu() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>Emperial</h2>
      </Link>
      <Link to="/cart">
        <div className="nav-bag">
          <FiShoppingCart style={{ fontSize: '34px' }} />
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default NavBarMenu;

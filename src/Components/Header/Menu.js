import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { Nav, Navbar } from 'react-bootstrap';
import MenuItem from './MenuItem';

function Menu({ menu }) {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <Navbar
    collapseOnSelect
    expand="md"
    bg="light"
    variant="light"
    >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
        <Navbar.Brand to="/" style={{paddingLeft:"8px"}}>Emperial online Shop</Navbar.Brand>
      

      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="m-auto justify-content-between">
          {menu
                && menu.map((elem) => (
                  <MenuItem
                  item={elem}
                  key={elem.id}
                    />
                    ))}
        </Nav>

      </Navbar.Collapse>
      <Link to="/login">
        <div className="nav-bag-user">
          <FiUser style={{ fontSize: '34px' }} />
        </div>
      </Link>
      <Link to="/cart" style={{ textDecoration: 'none' }}>
        <div className="nav-bag">
          <FiShoppingCart style={{ fontSize: '34px' }} />
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
    </Navbar>
  );
}
export default Menu;

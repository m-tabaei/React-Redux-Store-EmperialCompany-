import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import MenuSubItem from "./MenuSubItem";

function MenuItem({ item }) {
  return (
    <>
      {item.dropdown.length ? (
        <NavDropdown title={item.name} style={{ marginLeft: '45px' }} >
          {item.dropdown.map((elem) => <MenuSubItem subMenu={elem} key={elem.id} />)}
        </NavDropdown>
      ) : (
        <li className="nav-item">
          <NavLink className="nav-link text-capitalize ps-5" to={item.link}>
            {item.name}
          </NavLink>
        </li>
      )}
    </>
  );
}

export default MenuItem;


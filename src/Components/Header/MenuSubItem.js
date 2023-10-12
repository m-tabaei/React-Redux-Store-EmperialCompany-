import { NavLink } from "react-router-dom";

function MenuSubItem({ subMenu }) {
  return (

    <li>
      <NavLink className="dropdown-item" to={subMenu.link}>
        {subMenu.name}
    </NavLink>
    </li>

  );
}

export default MenuSubItem;

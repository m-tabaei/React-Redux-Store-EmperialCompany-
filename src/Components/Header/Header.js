import { useEffect, useState } from 'react';
import Menu from './Menu';
import '../DarkMode/dark-mode.css'
function Header() {
  const [menu, setMenu] = useState(null);

  const fetchMenu = async () => {
    try {
      const data = await fetch('https://api-storge-menu.vercel.app/menu');
      const res = await data.json();
      setMenu(res);
      console.log(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (

    <Menu menu={menu} />

  );
}

export default Header;

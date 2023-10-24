import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import ProductDetail from '../ProductDetail/ProductDetail';
import Header from '../Header/Header';
import Sale from '../Sale/Sale';
import Footer from '../Footer/Footer';
import Login from '../Dashboard/Login';
import Dashboard from '../Dashboard/Dashboard';
import Delete from '../Dashboard/Delete';
import Edit from '../Dashboard/Edit';
import Create from '../Dashboard/Create';
import { DarkModeProvider } from '../DarkMode/DarkModeContext';

function App() {
  return (
    <BrowserRouter>
    <DarkModeProvider>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" exact element={<Sale />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/dashboard/delete" element={<Delete />} />
        <Route path="/dashboard/edit" element={<Edit />} />
        <Route path="/dashboard/create" element={<Create />} />
      </Routes>
      <Footer />
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;

// const App = () => {
//   let [menu, setMenu] = useState(null);
//   let [sliders, setSliders] = useState(null);
//   let [products, setProducts] = useState(null);
//   const fetchMenu = async () => {
//     try {
//       let data = await fetch("http://localhost:3030/menu");
//       let res = await data.json();
//       setMenu(res);
//     } catch (error) {}
//   };
//   const fetchSlider = async () => {
//     try {
//       let data = await fetch("http://localhost:3030/sliders");
//       let res = await data.json();
//       setSliders(res);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   const fetchProducts = async () => {
//     try {
//       let data = await fetch("http://localhost:3030/products");
//       let res = await data.json();
//       setProducts(res.products);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   useEffect(() => {
//     fetchMenu();
//     fetchSlider();
//     fetchProducts();
//   }, []);
//   return (
//     <>
//       <div className="container-fluid p-0">
//         {/* menu */}
//         <Menu menu={menu} />
//         {/* End menu */}

//         {/* Slider */}
//         <Slider slider={sliders} />
//         {/* End Slider */}

//         {/* Products */}
//         <Products products={products} />
//         {/* End Products */}
//       </div>
//     </>
//   );
// };

// export default App;

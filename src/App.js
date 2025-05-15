import logo from './logo.svg';
import './App.css';
import Navbar from './Project/Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Project/Pages/Home';
import About from './Project/Pages/About';
import Product from './Project/Pages/Product';
import ProductDetails from './Project/Pages/ProductDetails';
import Cart from './Project/Pages/Cart';
import Checkout from './Project/Pages/Checkout';
import Login from './Project/Pages/Login';
import Signup from './Project/Pages/Signup';

function App() {
  return (
    <div  >
      <Navbar />
      <Product/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/product" element={<Product />} /> */}
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

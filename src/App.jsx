import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
 import CustomNavbar from './Project/Component/Navbar';
import Footer from './Project/Component/Footer';
import Home from './Project/Pages/Home';
import About from './Project/Pages/About';
import Product from './Project/Pages/Product';
import ProductDetails from './Project/Pages/ProductDetails';
import Cart from './Project/Pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project/Component/Navbar.css';

function App() {
  return (
  
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <CustomNavbar />
          <main className="container py-4 flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
   );
}

export default App;
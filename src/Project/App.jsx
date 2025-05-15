import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Footer from './Component/Footer';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="d-flex flex-column min-vh-100">
                    <Navbar />
                    <main className="flex-grow-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/product" element={<Product />} />
                            <Route path="/product/:id" element={<ProductDetails />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App; 
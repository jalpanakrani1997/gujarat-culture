import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>Your one-stop shop for all your needs. Quality products at affordable prices.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Home</a></li>
                            <li><a href="/about" className="text-white">About</a></li>
                            <li><a href="/product" className="text-white">Products</a></li>
                            <li><a href="/cart" className="text-white">Cart</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <address>
                            <p>123 Shopping Street</p>
                            <p>Email: info@eshop.com</p>
                            <p>Phone: +1 234 567 890</p>
                        </address>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 text-center">
                        <p className="mb-0">&copy; 2024 E-Shop. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
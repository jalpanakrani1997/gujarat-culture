import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, totalAmount } = useSelector(state => state.cart);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        paymentMethod: 'credit'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the order to your backend
        console.log('Order submitted:', { items, formData });
        dispatch(clearCart());
        alert('Order placed successfully!');
        navigate('/');
    };

    return (
        <div className="container py-5">
            <h2 className="mb-4">Checkout</h2>
            <div className="row">
                {/* Order Summary */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Order Summary</h5>
                            <div className="mb-3">
                                {items.map(item => (
                                    <div key={item.id} className="d-flex justify-content-between mb-2">
                                        <span>{item.name} x {item.quantity}</span>
                                        <span>${item.totalPrice.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-2">
                                <strong>Subtotal:</strong>
                                <span>${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <strong>Shipping:</strong>
                                <span>$5.00</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <strong>Total:</strong>
                                <span className="text-success">${(totalAmount + 5).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Checkout Form */}
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Shipping Information</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="zipCode" className="form-label">ZIP Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="zipCode"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Payment Method</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentMethod"
                                            id="credit"
                                            value="credit"
                                            checked={formData.paymentMethod === 'credit'}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="credit">
                                            Credit Card
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentMethod"
                                            id="debit"
                                            value="debit"
                                            checked={formData.paymentMethod === 'debit'}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="debit">
                                            Debit Card
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentMethod"
                                            id="paypal"
                                            value="paypal"
                                            checked={formData.paymentMethod === 'paypal'}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="paypal">
                                            PayPal
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Place Order
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
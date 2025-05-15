import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../Redux/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
    const dispatch = useDispatch();
    const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    if (items.length === 0) {
        return (
            <div className="container py-5 text-center">
                <h2>Your Cart is Empty</h2>
                <p className="lead">Looks like you haven't added any items to your cart yet.</p>
                <Link to="/product" className="btn btn-primary">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Shopping Cart</h2>
            <div className="row">
                <div className="col-md-8">
                    {items.map((item) => (
                        <div key={item.id} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={item.image}
                                        className="img-fluid rounded-start"
                                        alt={item.name}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text text-success">${item.price}</p>
                                        <div className="d-flex align-items-center mb-3">
                                            <label className="me-2">Quantity:</label>
                                            <div className="input-group" style={{ maxWidth: '150px' }}>
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="form-control text-center"
                                                    value={item.quantity}
                                                    onChange={(e) => handleUpdateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                                                    min="1"
                                                />
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <p className="card-text">
                                            <strong>Total: </strong>${item.totalPrice.toFixed(2)}
                                        </p>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className="btn btn-danger" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Order Summary</h5>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Total Items:</span>
                                <span>{totalQuantity}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Total Amount:</span>
                                <span className="text-success">${totalAmount.toFixed(2)}</span>
                            </div>
                            <Link to="/checkout" className="btn btn-primary w-100">
                                Proceed to Checkout
                            </Link>
                            <Link to="/product" className="btn btn-outline-secondary w-100 mt-2">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
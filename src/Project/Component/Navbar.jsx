import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/userSlice';

export default function Navbar() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const user = useSelector((state) => state.user.user);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleLogout = () => {
        dispatch(logout());
    };

    const productCategories = [
        { name: 'Textiles', icon: 'scissors' },
        { name: 'Handicrafts', icon: 'brush' },
        { name: 'Pottery', icon: 'cup' },
        { name: 'Jewelry', icon: 'gem' },
        { name: 'Home Decor', icon: 'house' },
        { name: 'Accessories', icon: 'bag' }
    ];

    const culturalSections = [
        { name: 'Gujarati Festivals', icon: 'calendar-event' },
        { name: 'Traditional Dance', icon: 'music-note' },
        { name: 'Folk Music', icon: 'music-note-list' },
        { name: 'Cuisine', icon: 'cup-hot' },
        { name: 'Traditional Attire', icon: 'person' },
        { name: 'Art & Architecture', icon: 'palette' }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ 
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            minHeight: '50px'
        }}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/004/296/875/original/indian-traditional-and-cultural-rangoli-alpona-kolam-or-paisley-line-art-bengal-art-india-for-textile-printing-logo-wallpaper-free-vector.jpg" 
                        alt="Logo" 
                        style={{ 
                            height: '60px',
                            width: '60px',
                            objectFit: 'contain'
                        }} 
                    />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    style={{ 
                        border: 'none',
                        padding: '0.25rem'
                    }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to="/"
                                style={{
                                    fontWeight: '500',
                                    color: '#333',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '20px',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.95rem'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link 
                                className="nav-link dropdown-toggle" 
                                to="#" 
                                role="button" 
                                data-bs-toggle="dropdown"
                                style={{
                                    fontWeight: '500',
                                    color: '#333',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '20px',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.95rem'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                Products
                            </Link>
                            <div className="dropdown-menu" style={{
                                minWidth: '250px',
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                borderRadius: '15px',
                                padding: '0.5rem'
                            }}>
                                {productCategories.map((category) => (
                                    <Link
                                        key={category.name}
                                        to={`/category/${category.name.toLowerCase()}`}
                                        className="dropdown-item d-flex align-items-center"
                                        style={{
                                            color: '#333',
                                            padding: '0.8rem 1rem',
                                            borderRadius: '10px',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                    >
                                        <i className={`bi bi-${category.icon} me-2`} style={{ fontSize: '1.1rem' }}></i>
                                        {category.name}
                                    </Link>
                                ))}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link 
                                className="nav-link dropdown-toggle" 
                                to="#" 
                                role="button" 
                                data-bs-toggle="dropdown"
                                style={{
                                    fontWeight: '500',
                                    color: '#333',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '20px',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.95rem'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                Gujarat Culture
                            </Link>
                            <div className="dropdown-menu" style={{
                                minWidth: '250px',
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                borderRadius: '15px',
                                padding: '0.5rem'
                            }}>
                                {culturalSections.map((section) => (
                                    <Link
                                        key={section.name}
                                        to={`/culture/${section.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="dropdown-item d-flex align-items-center"
                                        style={{
                                            color: '#333',
                                            padding: '0.8rem 1rem',
                                            borderRadius: '10px',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                    >
                                        <i className={`bi bi-${section.icon} me-2`} style={{ fontSize: '1.1rem' }}></i>
                                        {section.name}
                                    </Link>
                                ))}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to="/about"
                                style={{
                                    fontWeight: '500',
                                    color: '#333',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '20px',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.95rem'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link" style={{ color: '#333' }}>
                                        Welcome, {user.firstName}
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className="nav-link" 
                                        onClick={handleLogout}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#333',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link 
                                        className="nav-link" 
                                        to="/signup"
                                        style={{
                                            fontWeight: '500',
                                            color: '#333',
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '20px',
                                            transition: 'all 0.3s ease',
                                            fontSize: '0.95rem'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        className="nav-link" 
                                        to="/login"
                                        style={{
                                            fontWeight: '500',
                                            color: '#333',
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '20px',
                                            transition: 'all 0.3s ease',
                                            fontSize: '0.95rem'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                    >
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                to="/cart"
                                style={{
                                    fontWeight: '500',
                                    color: '#333',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '20px',
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.95rem'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                <i className="bi bi-cart" style={{ fontSize: '1.1rem' }}></i>
                                {cartItemCount > 0 && (
                                    <span className="badge bg-danger ms-1" style={{ 
                                        fontSize: '0.65rem',
                                        padding: '0.2rem 0.4rem',
                                        borderRadius: '8px'
                                    }}>
                                        {cartItemCount}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../Redux/productSlice';
import { Link } from 'react-router-dom';

export default function CategoryProducts() {
    const dispatch = useDispatch();
    const { category } = useParams();
    const { items: products, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // Filter products by category
    const filteredProducts = products.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
    );

    if (loading) {
        return (
            <div style={{
                minHeight: 'calc(100vh - 86px)',
                marginTop: '86px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url("https://tse1.mm.bing.net/th/id/OIP.IsKAOXR1LbirrBuZ5hQCtgHaHa?rs=1&pid=ImgDetMain")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.24)',
                    backdropFilter: 'blur(5px)'
                }}></div>
                <div className="spinner-border text-light" role="status" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{
                minHeight: 'calc(100vh - 86px)',
                marginTop: '86px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url("https://tse1.mm.bing.net/th/id/OIP.IsKAOXR1LbirrBuZ5hQCtgHaHa?rs=1&pid=ImgDetMain")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.24)',
                    backdropFilter: 'blur(5px)'
                }}></div>
                <div className="text-center" style={{ position: 'relative', zIndex: 1, color: 'white' }}>
                    <h3>Error loading products</h3>
                    <p>{error}</p>
                    <button 
                        className="btn btn-primary mt-3"
                        onClick={() => dispatch(fetchProducts())}
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: 'calc(100vh - 86px)',
            marginTop: '86px',
            padding: '2rem 0',
            backgroundImage: 'url("https://tse1.mm.bing.net/th/id/OIP.IsKAOXR1LbirrBuZ5hQCtgHaHa?rs=1&pid=ImgDetMain")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.24)',
                backdropFilter: 'blur(5px)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center mb-5">
                    <h2 style={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '2.5rem',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        {category} Products
                    </h2>
                    <p style={{
                        color: '#e0e0e0',
                        fontSize: '1.2rem',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        Discover our collection of {category.toLowerCase()} products
                    </p>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center" style={{ color: '#ffffff' }}>
                        <h3>No products found in this category</h3>
                        <Link to="/products" className="btn btn-primary mt-3">
                            View All Products
                        </Link>
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="col">
                                <div className="card h-100" style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '20px',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div className="position-relative">
                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            alt={product.name}
                                            style={{
                                                height: '250px',
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '20px',
                                                borderTopRightRadius: '20px'
                                            }}
                                        />
                                        <div className="position-absolute top-0 end-0 m-2">
                                            <span className="badge" style={{
                                                backgroundColor: 'rgba(0, 123, 255, 0.8)',
                                                backdropFilter: 'blur(5px)',
                                                fontSize: '0.9rem',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '15px'
                                            }}>
                                                {product.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-body" style={{ padding: '1.5rem' }}>
                                        <h5 className="card-title" style={{
                                            color: '#ffffff',
                                            fontSize: '1.2rem',
                                            fontWeight: '600',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {product.name}
                                        </h5>
                                        <p className="card-text" style={{
                                            color: '#e0e0e0',
                                            fontSize: '0.9rem',
                                            marginBottom: '1rem'
                                        }}>
                                            {product.brand}
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h6 style={{
                                                color: '#00ff88',
                                                fontSize: '1.1rem',
                                                fontWeight: '600',
                                                margin: 0
                                            }}>
                                                ₹{product.price.toLocaleString()}
                                            </h6>
                                            <div className="text-warning">
                                                {[...Array(5)].map((_, i) => (
                                                    <i
                                                        key={i}
                                                        className={`bi bi-star${i < Math.floor(product.rating) ? '-fill' : ''}`}
                                                        style={{ fontSize: '1rem' }}
                                                    ></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer" style={{
                                        backgroundColor: 'transparent',
                                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                        padding: '1rem'
                                    }}>
                                        <Link
                                            to={`/product/${product.id}`}
                                            className="btn w-100"
                                            style={{
                                                background: 'linear-gradient(45deg, #007bff, #00bcd4)',
                                                border: 'none',
                                                color: '#ffffff',
                                                padding: '0.6rem 1.2rem',
                                                borderRadius: '10px',
                                                fontWeight: '600',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
} 
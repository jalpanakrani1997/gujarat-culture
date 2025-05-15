import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import { Link } from 'react-router-dom';

export default function About() {
    const dispatch = useDispatch();
    const { items: products, loading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts({ page: 1, limit: 4 }));
    }, [dispatch]);

    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            color: '#000000',
            paddingTop: '56px',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Hero Section */}
            <div style={{
                position: 'relative',
                height: '500px',
                backgroundImage: 'url("https://bhagyashritravels.com/wp-content/uploads/2019/10/White-Rann-of-Kutch-Feature.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                marginBottom: '4rem'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="container text-center text-white">
                        <h2 style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            marginBottom: '1.5rem',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                        }}>
                            About Our Company
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            maxWidth: '800px',
                            margin: '0 auto',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                        }}>
                            Discover the story behind our commitment to quality and tradition
                        </p>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card shadow-lg" style={{
                            border: 'none',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="card-body p-5">
                                <h3 style={{
                                    color: '#007bff',
                                    fontWeight: 'bold',
                                    fontSize: '2.2rem',
                                    background: 'linear-gradient(45deg, #007bff, #00bcd4)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Our Story
                                </h3>
                                <p style={{ 
                                    fontSize: '1.1rem', 
                                    lineHeight: '1.8',
                                    color: '#555555',
                                    textAlign: 'justify'
                                }}>
                                    Founded in 2024, we are dedicated to preserving and promoting Gujarat's rich cultural heritage through authentic handicrafts and traditional art forms. Our mission is to support local artisans and bring their exquisite creations to the world.
                                </p>
                                <p style={{ 
                                    fontSize: '1.1rem', 
                                    lineHeight: '1.8',
                                    color: '#555555',
                                    textAlign: 'justify'
                                }}>
                                    We believe in sustainable business practices and are committed to reducing our environmental impact. All our products are carefully selected to ensure they meet our high standards of quality and authenticity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://tse3.mm.bing.net/th/id/OIP.zKK85XmYUYTCkaVT4d4HjwHaFj?rs=1&pid=ImgDetMain"
                            alt="About Us"
                            className="img-fluid rounded shadow-lg"
                            style={{ 
                                minHeight: '424px', 
                                objectFit: 'cover',
                                borderRadius: '20px',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        />
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center mb-4">
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            color: '#333333',
                            position: 'relative',
                            paddingBottom: '1rem'
                        }}>
                            Our Values
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '100px',
                                height: '3px',
                                backgroundColor: '#007bff',
                                borderRadius: '3px'
                            }}></div>
                        </h2>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-lg" style={{
                            border: 'none',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="card-body text-center p-4">
                                <i className="bi bi-star-fill text-warning" style={{ fontSize: '2.5rem' }}></i>
                                <h5 className="card-title mt-3" style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '600',
                                    color: '#333333'
                                }}>Quality</h5>
                                <p className="card-text" style={{
                                    fontSize: '1.1rem',
                                    color: '#555555',
                                    lineHeight: '1.6'
                                }}>
                                    We are committed to providing only the highest quality products to our customers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-lg" style={{
                            border: 'none',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="card-body text-center p-4">
                                <i className="bi bi-people-fill text-primary" style={{ fontSize: '2.5rem' }}></i>
                                <h5 className="card-title mt-3" style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '600',
                                    color: '#333333'
                                }}>Customer Service</h5>
                                <p className="card-text" style={{
                                    fontSize: '1.1rem',
                                    color: '#555555',
                                    lineHeight: '1.6'
                                }}>
                                    Your satisfaction is our priority. We're here to help you every step of the way.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-lg" style={{
                            border: 'none',
                            borderRadius: '20px',
                            backgroundColor: '#ffffff',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="card-body text-center p-4">
                                <i className="bi bi-globe text-success" style={{ fontSize: '2.5rem' }}></i>
                                <h5 className="card-title mt-3" style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '600',
                                    color: '#333333'
                                }}>Sustainability</h5>
                                <p className="card-text" style={{
                                    fontSize: '1.1rem',
                                    color: '#555555',
                                    lineHeight: '1.6'
                                }}>
                                    We are committed to sustainable practices and reducing our environmental impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <div style={{
                position: 'relative',
                padding: '4rem 0',
                backgroundImage: 'url("https://storage.needpix.com/rsynced_images/adalaj-step-well-1514747_1280.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                marginTop: '4rem 0'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(2px)'
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                color: 'white',
                                position: 'relative',
                                paddingBottom: '1rem'
                            }}>
                                Featured Products
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '100px',
                                    height: '3px',
                                    backgroundColor: '#007bff',
                                    borderRadius: '3px'
                                }}></div>
                            </h2>
                            <p style={{
                                fontSize: '1.2rem',
                                color: '#555555',
                                marginBottom: '2rem'
                            }}>
                                Check out some of our best-selling products
                            </p>
                        </div>
                        {loading ? (
                            <div className="text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            products.map((product) => (
                                <div key={product.id} className="col-md-3 mb-4">
                                    <div className="card shadow-lg" style={{
                                        border: 'none',
                                        borderRadius: '20px',
                                        transition: 'transform 0.3s ease',
                                        cursor: 'pointer',
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            alt={product.name}
                                            style={{ 
                                                height: '200px', 
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '20px',
                                                borderTopRightRadius: '20px'
                                            }}
                                        />
                                        <div className="card-body p-4">
                                            <h5 className="card-title" style={{
                                                fontSize: '1.2rem',
                                                fontWeight: '600',
                                                color: '#333333'
                                            }}>{product.name}</h5>
                                            <p className="card-text text-success" style={{
                                                fontSize: '1.1rem',
                                                fontWeight: 'bold'
                                            }}>${product.price}</p>
                                            <Link to={`/product/${product.id}`} className="btn btn-primary" style={{
                                                padding: '0.5rem 1.5rem',
                                                borderRadius: '30px',
                                                background: 'linear-gradient(45deg, #007bff, #00bcd4)',
                                                border: 'none',
                                                boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
 
            {/* Footer with Contact Information */}
            <footer style={{
                position: 'relative',
                padding: '2rem 0'
           
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(5px)'
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <h5 className="mb-4" style={{ 
                                color: '#333333',
                                fontWeight: '600',
                                fontSize: '1.3rem'
                            }}>
                                About Us
                            </h5>
                            <p style={{ 
                                fontSize: '1rem', 
                                lineHeight: '1.6',
                                color: '#555555'
                            }}>
                                We are dedicated to preserving and promoting Gujarat's rich cultural heritage through authentic handicrafts and traditional art forms. Our mission is to support local artisans and bring their exquisite creations to the world.
                            </p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h5 className="mb-4" style={{ 
                                color: '#333333',
                                fontWeight: '600',
                                fontSize: '1.3rem'
                            }}>
                                Contact Us
                            </h5>
                            <ul className="list-unstyled">
                                <li className="mb-3" style={{ fontSize: '1rem' }}>
                                    <i className="bi bi-geo-alt me-2" style={{ color: '#007bff' }}></i>
                                    <span style={{ color: '#555555' }}>123 Craft Street, Ahmedabad, Gujarat 380001</span>
                                </li>
                                <li className="mb-3" style={{ fontSize: '1rem' }}>
                                    <i className="bi bi-telephone me-2" style={{ color: '#007bff' }}></i>
                                    <span style={{ color: '#555555' }}>+91 98765 43210</span>
                                </li>
                                <li className="mb-3" style={{ fontSize: '1rem' }}>
                                    <i className="bi bi-envelope me-2" style={{ color: '#007bff' }}></i>
                                    <span style={{ color: '#555555' }}>info@gujaratcrafts.com</span>
                                </li>
                                <li className="mb-3" style={{ fontSize: '1rem' }}>
                                    <i className="bi bi-clock me-2" style={{ color: '#007bff' }}></i>
                                    <span style={{ color: '#555555' }}>Mon-Sat: 10:00 AM - 7:00 PM</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h5 className="mb-4" style={{ 
                                color: '#333333',
                                fontWeight: '600',
                                fontSize: '1.3rem'
                            }}>
                                Quick Links
                            </h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="/about" className="text-decoration-none" style={{ 
                                        color: '#555555',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <i className="bi bi-chevron-right me-2" style={{ color: '#007bff' }}></i>About Us
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/products" className="text-decoration-none" style={{ 
                                        color: '#555555',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <i className="bi bi-chevron-right me-2" style={{ color: '#007bff' }}></i>Our Products
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/artisans" className="text-decoration-none" style={{ 
                                        color: '#555555',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <i className="bi bi-chevron-right me-2" style={{ color: '#007bff' }}></i>Our Artisans
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/contact" className="text-decoration-none" style={{ 
                                        color: '#555555',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <i className="bi bi-chevron-right me-2" style={{ color: '#007bff' }}></i>Contact Us
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/privacy" className="text-decoration-none" style={{ 
                                        color: '#555555',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <i className="bi bi-chevron-right me-2" style={{ color: '#007bff' }}></i>Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-4" style={{ borderColor: 'rgb(0, 0, 0)' }} />
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="d-flex justify-content-center justify-content-md-start">
                                <Link to="#" className="text-dark me-3" style={{ 
                                    fontSize: '1.5rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="bi bi-facebook"></i>
                                </Link>
                                <Link to="#" className="text-dark me-3" style={{ 
                                    fontSize: '1.5rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="bi bi-instagram"></i>
                                </Link>
                                <Link to="#" className="text-dark me-3" style={{ 
                                    fontSize: '1.5rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="bi bi-twitter"></i>
                                </Link>
                                <Link to="#" className="text-dark" style={{ 
                                    fontSize: '1.5rem',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="bi bi-linkedin"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <p className="text-center text-md-end mb-0" style={{ 
                                fontSize: '0.9rem',
                                color: '#555555'
                            }}>
                                © {new Date().getFullYear()} Gujarat Crafts. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

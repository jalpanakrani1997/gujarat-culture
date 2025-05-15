import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';

export default function Home() {
    const dispatch = useDispatch();
    const { items: products, loading } = useSelector(state => state.products);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts({ page: 1, limit: 20 }));
    }, [dispatch]);

    const slides = [
        {
            image: "https://img.freepik.com/premium-photo/ceramic-pots-table-with-wooden-background_865967-495575.jpg",
            title: "Wooden Handicrafts",
            description: "Traditional wooden crafts from Gujarat's skilled artisans",
            category: "handicrafts"
        },
        {
            image: "https://media.istockphoto.com/photos/art-embroiderydecorations-kutch-artbeautiful-view-of-embroider-picture-id1300336043?k=20&m=1300336043&s=612x612&w=0&h=xgWMWEbwdYmZQCoak72O7qA6qykOW83b9aUvvGwRqkw=",
            title: "Kutch Embroidery",
            description: "Explore the vibrant and intricate embroidery work from Kutch",
            category: "handicrafts"
        },
        {
            image: "https://cdn.thisday.app/media/uploads/Bandhani20Print.jpg-2b2c9475ac56b9ee_cmprssd.webp",
            title: "Bandhani Art",
            description: "Experience the beautiful tie-dye art of Bandhani",
            category: "textiles"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            // Set featured products to first 8 products
            setFeaturedProducts(products.slice(0, 4));

            const currentCategory = slides[currentSlide].category;
            const filteredProducts = products.filter(product =>
                product.category.toLowerCase() === currentCategory
            );
            setCategoryProducts(filteredProducts);
        }
    }, [currentSlide, products]);

  return (
        <div style={{
            backgroundColor: '#f8f9fa',
            color: '#000000',
            paddingTop: '56px',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Hero Slider */}
            <div className="position-relative" style={{ height: '680px', overflow: 'hidden' }}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: currentSlide === index ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(0.7)'
                        }} />
                        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{
                                color: '#ffffff',
                                fontSize: '3.5rem',
                                fontWeight: 'bold',
                                marginBottom: '1.5rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
                                {slide.title}
                            </h2>
                            <p style={{
                                color: '#ffffff',
                                fontSize: '1.5rem',
                                margin: '1rem 0',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                            }}>
                                {slide.description}
                            </p>
                            <Link
                                to={`/product?category=${slide.category}`}
                                className="btn btn-light btn-lg"
                                style={{
                                    padding: '0.8rem 2.5rem',
                                    fontSize: '1.1rem',
                                    borderRadius: '30px',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }}
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                ))}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`btn btn-sm mx-1 ${currentSlide === index ? 'btn-light' : 'btn-outline-light'}`}
                            onClick={() => setCurrentSlide(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                padding: 0,
                                borderRadius: '50%'
                            }}
                        />
                    ))}
                </div>
                <button
                    className="position-absolute top-50 start-0 translate-middle-y btn btn-link text-light"
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    style={{ fontSize: '2rem' }}
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    className="position-absolute top-50 end-0 translate-middle-y btn btn-link text-light"
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    style={{ fontSize: '2rem' }}
                >
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>

            {/* Featured Products */}
            <div className="container my-5" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="text-center mb-4" style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#333',
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
                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="col">
                                <div className="card h-100 shadow-sm" style={{
                                    border: 'none',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt={product.name}
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{
                                            fontSize: '1.2rem',
                                            fontWeight: '600',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {product.name}
                                        </h5>
                                        <p className="card-text text-success" style={{
                                            fontSize: '1.1rem',
                                            fontWeight: 'bold'
                                        }}>
                                            ${product.price}
                                        </p>
                                        <Link
                                            to={`/product/${product.id}`}
                                            className="btn btn-outline-primary"
                                            style={{
                                                borderRadius: '20px',
                                                padding: '0.5rem 1.5rem',
                                                color: 'white',
                                                background: 'linear-gradient(45deg, #007bff, #00bcd4)'
                                            }}
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

            {/* Dark Background Section */}
            <div style={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url("https://2.bp.blogspot.com/-H_PtJWyIEmY/VqIUXMF-AmI/AAAAAAAAAWI/GmhralUAaC0/s1600/Lakshmi%2BVilas%2BPalace.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                margin: '4rem 0'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
                            Discover Gujarat's Rich Heritage
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            maxWidth: '800px',
                            margin: '0 auto 2rem',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                        }}>
                            Experience the timeless beauty of traditional crafts, from intricate Patola weaves to vibrant Bandhani patterns. Each piece tells a story of Gujarat's cultural legacy.
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <Link
                                to="/product"
                                className="btn btn-light btn-lg"
                                style={{
                                    padding: '0.8rem 2.5rem',
                                    borderRadius: '30px',
                                    fontWeight: '600',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }}
                            >
                                Shop Now
                            </Link>
                            <Link
                                to="/about"
                                className="btn btn-outline-light btn-lg"
                                style={{
                                    padding: '0.8rem 2.5rem',
                                    borderRadius: '30px',
                                    fontWeight: '600'
                                }}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="container my-5" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="text-center mb-4" style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#333',
                    position: 'relative',
                    paddingBottom: '1rem'
                }}>
                    Shop by Category
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
                <div className="row g-4">
                    {slides.map((slide, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card shadow-sm" style={{
                                border: 'none',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <img
                                    src={slide.image}
                                    className="card-img-top"
                                    alt={slide.title}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '600',
                                        marginBottom: '1rem'
                                    }}>
                                        {slide.title}
                                    </h5>
                                    <Link
                                        to={`/product?category=${slide.category}`}
                                        className="btn btn-primary"
                                        style={{
                                            borderRadius: '20px',
                                            padding: '0.5rem 1.5rem',
                                            background: 'linear-gradient(45deg, #007bff, #00bcd4)'
                                        }}
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ratings Section */}
            <div style={{
                position: 'relative',
                backgroundImage: 'url("https://www.weavermag.com/English/wp-content/uploads/2021/04/Sun-Temple19.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                padding: '4rem 0',
                margin: '4rem 0'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h2 className="text-center mb-4" style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        position: 'relative',
                        paddingBottom: '1rem'
                    }}>
                        Customer Reviews
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
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm" style={{
                                border: 'none',
                                borderRadius: '15px',
                                transition: 'transform 0.3s ease',
                                backgroundColor: 'rgba(255, 255, 255, 0.9)'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div className="card-body text-center p-4">
                                    <div className="mb-3">
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                    </div>
                                    <p className="card-text" style={{
                                        fontSize: '1.1rem',
                                        color: '#333',
                                        marginBottom: '1.5rem'
                                    }}>
                                        "The quality of the Patola silk saree exceeded my expectations. The craftsmanship is exceptional and the colors are vibrant."
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/1.jpg"
                                            alt="Customer"
                                            className="rounded-circle me-2"
                                            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                        />
                                        <div>
                                            <h6 className="mb-0" style={{ fontWeight: '600' }}>Priya Patel</h6>
                                            <small className="text-muted">Ahmedabad, Gujarat</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm" style={{
                                border: 'none',
                                borderRadius: '15px',
                                transition: 'transform 0.3s ease',
                                backgroundColor: 'rgba(255, 255, 255, 0.9)'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div className="card-body text-center p-4">
                                    <div className="mb-3">
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-half text-warning" style={{ fontSize: '1.2rem' }}></i>
                                    </div>
                                    <p className="card-text" style={{
                                        fontSize: '1.1rem',
                                        color: '#333',
                                        marginBottom: '1.5rem'
                                    }}>
                                        "The wooden handicrafts are beautifully crafted. Each piece tells a story of Gujarat's rich cultural heritage."
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/2.jpg"
                                            alt="Customer"
                                            className="rounded-circle me-2"
                                            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                        />
                                        <div>
                                            <h6 className="mb-0" style={{ fontWeight: '600' }}>Rajesh Sharma</h6>
                                            <small className="text-muted">Surat, Gujarat</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm" style={{
                                border: 'none',
                                borderRadius: '15px',
                                transition: 'transform 0.3s ease',
                                backgroundColor: 'rgba(255, 255, 255, 0.9)'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div className="card-body text-center p-4">
                                    <div className="mb-3">
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                        <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.2rem' }}></i>
                                    </div>
                                    <p className="card-text" style={{
                                        fontSize: '1.1rem',
                                        color: '#333',
                                        marginBottom: '1.5rem'
                                    }}>
                                        "The Kutch embroidery work is stunning! The attention to detail and vibrant colors make these pieces truly special."
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/3.jpg"
                                            alt="Customer"
                                            className="rounded-circle me-2"
                                            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                        />
                                        <div>
                                            <h6 className="mb-0" style={{ fontWeight: '600' }}>Meera Desai</h6>
                                            <small className="text-muted">Vadodara, Gujarat</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cultural Information Section */}
            <div className="container my-5">
                <div className="card shadow-lg" style={{
                    border: 'none',
                    borderRadius: '20px',
                    backgroundColor: '#f8f9fa',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div className="card-body p-5">
                        <h3 className="text-center mb-4" style={{
                            color: '#007bff',
                            fontWeight: 'bold',
                            fontSize: '2.2rem',
                            background: 'linear-gradient(45deg, #007bff, #00bcd4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Gujarat's Rich Cultural Heritage
                        </h3>
                        <p className="text-muted" style={{ 
                            fontSize: '1.1rem', 
                            lineHeight: '1.8',
                            textAlign: 'justify'
                        }}>
                            Gujarat, the land of vibrant colors and rich traditions, is home to some of India's most exquisite handicrafts. From the intricate Patola silk sarees of Patan to the beautiful Bandhani work of Jamnagar, each craft tells a story of centuries-old traditions passed down through generations.
                        </p>
                        <p className="text-muted" style={{ 
                            fontSize: '1.1rem', 
                            lineHeight: '1.8',
                            textAlign: 'justify'
                        }}>
                            The state's cultural diversity is reflected in its crafts, where each region has its unique style. Kutch embroidery, with its mirror work and vibrant threads, represents the nomadic lifestyle of the region, while the wooden crafts of Sankheda showcase the exceptional skills of local artisans.
                        </p>
                        <div className="text-center mt-4">
                            <Link to="/about" className="btn btn-primary" style={{
                                padding: '0.8rem 2.5rem',
                                borderRadius: '30px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                background: 'linear-gradient(45deg, #007bff, #00bcd4)',
                                border: 'none',
                                boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)',
                                transition: 'all 0.3s ease'
                            }}>
                                Explore More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Registration Form Section */}
            <div style={{
                position: 'relative',
                padding: '4rem 0',
                marginTop: '4rem',
                backgroundImage: 'url("https://i.pinimg.com/originals/56/df/28/56df2878213bdeae4a680fe37e956bec.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(3px)'
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 text-center text-white mb-4 mb-md-0">
                            <h2 style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                marginBottom: '1.5rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Join Our Craft Community
                            </h2>
                            <p style={{
                                fontSize: '1.3rem',
                                marginBottom: '2rem',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                color: '#f0f0f0'
                            }}>
                                Discover the rich heritage of Gujarat's traditional crafts
                            </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '1.5rem',
                                marginTop: '2rem'
                            }}>
                                <Link to="/about" className="btn btn-outline-light btn-lg" style={{
                                    padding: '0.8rem 2.5rem',
                                    borderRadius: '30px',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease',
                                    borderWidth: '2px',
                                    fontSize: '1.1rem'
                                }}>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card shadow-lg" style={{
                                borderRadius: '20px',
                                border: 'none',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                                border: '1px solid rgba(255, 255, 255, 0.18)',
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            >
                                <div className="card-body p-4">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="firstName"
                                                        placeholder="First Name"
                                                        style={{
                                                            borderRadius: '10px',
                                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            color: '#ffffff',
                                                            backdropFilter: 'blur(5px)',
                                                            transition: 'all 0.3s ease',
                                                            height: '3.5rem'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                                            e.target.style.transform = 'translateY(-2px)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                                            e.target.style.transform = 'translateY(0)';
                                                        }}
                                                    />
                                                    <label htmlFor="firstName" style={{
                                                        color: '#ffffff',
                                                        fontSize: '1.1rem',
                                                        paddingLeft: '1rem'
                                                    }}>First Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="lastName"
                                                        placeholder="Last Name"
                                                        style={{
                                                            borderRadius: '10px',
                                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            color: '#ffffff',
                                                            backdropFilter: 'blur(5px)',
                                                            transition: 'all 0.3s ease',
                                                            height: '3.5rem'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                                            e.target.style.transform = 'translateY(-2px)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                                            e.target.style.transform = 'translateY(0)';
                                                        }}
                                                    />
                                                    <label htmlFor="lastName" style={{
                                                        color: '#ffffff',
                                                        fontSize: '1.1rem',
                                                        paddingLeft: '1rem'
                                                    }}>Last Name</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder="Email"
                                                        style={{
                                                            borderRadius: '10px',
                                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            color: '#ffffff',
                                                            backdropFilter: 'blur(5px)',
                                                            transition: 'all 0.3s ease',
                                                            height: '3.5rem'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                                            e.target.style.transform = 'translateY(-2px)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                                            e.target.style.transform = 'translateY(0)';
                                                        }}
                                                    />
                                                    <label htmlFor="email" style={{
                                                        color: '#ffffff',
                                                        fontSize: '1.1rem',
                                                        paddingLeft: '1rem'
                                                    }}>Email Address</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        placeholder="Password"
                                                        style={{
                                                            borderRadius: '10px',
                                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            color: '#ffffff',
                                                            backdropFilter: 'blur(5px)',
                                                            transition: 'all 0.3s ease',
                                                            height: '3.5rem'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                                            e.target.style.transform = 'translateY(-2px)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                                            e.target.style.transform = 'translateY(0)';
                                                        }}
                                                    />
                                                    <label htmlFor="password" style={{
                                                        color: '#ffffff',
                                                        fontSize: '1.1rem',
                                                        paddingLeft: '1rem'
                                                    }}>Password</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="confirmPassword"
                                                        placeholder="Confirm Password"
                                                        style={{
                                                            borderRadius: '10px',
                                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            color: '#ffffff',
                                                            backdropFilter: 'blur(5px)',
                                                            transition: 'all 0.3s ease',
                                                            height: '3.5rem'
                                                        }}
                                                        onFocus={(e) => {
                                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                                            e.target.style.transform = 'translateY(-2px)';
                                                        }}
                                                        onBlur={(e) => {
                                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                                            e.target.style.transform = 'translateY(0)';
                                                        }}
                                                    />
                                                    <label htmlFor="confirmPassword" style={{
                                                        color: '#ffffff',
                                                        fontSize: '1.1rem',
                                                        paddingLeft: '1rem'
                                                    }}>Confirm Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="terms"
                                                        style={{
                                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            width: '1.2rem',
                                                            height: '1.2rem',
                                                            marginTop: '0.2rem'
                                                        }}
                                                    />
                                                    <label className="form-check-label text-light" htmlFor="terms" style={{ fontSize: '1.1rem' }}>
                                                        I agree to the <Link to="/terms" style={{ color: '#ffffff', textDecoration: 'underline' }}>Terms and Conditions</Link>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    style={{
                                                        padding: '1rem 3.5rem',
                                                        borderRadius: '30px',
                                                        fontSize: '1.2rem',
                                                        fontWeight: '600',
                                                        background: 'linear-gradient(45deg, #007bff, #00bcd4)',
                                                        border: 'none',
                                                        boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)',
                                                        transition: 'all 0.3s ease',
                                                        marginTop: '1.5rem'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.transform = 'translateY(-3px)';
                                                        e.target.style.boxShadow = '0 6px 20px rgba(0, 123, 255, 0.6)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.4)';
                                                    }}
                                                >
                                                    Register Now
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <p style={{
                                    color: '#ffffff',
                                    marginBottom: '0.5rem',
                                    fontSize: '1.1rem',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                                }}>
                                    Already have an account? <Link to="/login" style={{
                                        color: '#ffffff',
                                        textDecoration: 'underline',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease'
                                    }}>Login here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer with Contact Information */}
            <footer style={{
                position: 'relative',
                padding: '2rem 0',
                // marginTop: '4rem',
                backgroundImage: 'url("https://i.pinimg.com/originals/56/df/28/56df2878213bdeae4a680fe37e956bec.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
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

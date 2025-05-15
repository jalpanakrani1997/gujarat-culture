import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signup form submitted:', formData);
        // After successful signup, navigate to login
        navigate('/login');
    };

    const handleGoogleSuccess = (response) => {
        console.log('Google Signup Success:', response);
        // Handle Google signup success
        navigate('/login');
    };

    const handleGoogleError = () => {
        console.log('Google Signup Failed');
    };

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

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '20px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                            padding: '2rem'
                        }}>
                            <div className="text-center mb-4">
                                <h2 style={{
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    fontSize: '2.5rem',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                                }}>
                                    Create Account
                                </h2>
                                <p style={{
                                    color: '#e0e0e0',
                                    fontSize: '1.1rem'
                                }}>
                                    Join our community today
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="firstName" style={{
                                            color: '#ffffff',
                                            fontSize: '1.1rem',
                                            marginBottom: '0.5rem'
                                        }}>
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                                color: '#ffffff',
                                                padding: '0.8rem 1rem',
                                                borderRadius: '10px',
                                                fontSize: '1rem'
                                            }}
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="lastName" style={{
                                            color: '#ffffff',
                                            fontSize: '1.1rem',
                                            marginBottom: '0.5rem'
                                        }}>
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                                color: '#ffffff',
                                                padding: '0.8rem 1rem',
                                                borderRadius: '10px',
                                                fontSize: '1rem'
                                            }}
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" style={{
                                        color: '#ffffff',
                                        fontSize: '1.1rem',
                                        marginBottom: '0.5rem'
                                    }}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                            color: '#ffffff',
                                            padding: '0.8rem 1rem',
                                            borderRadius: '10px',
                                            fontSize: '1rem'
                                        }}
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="password" style={{
                                            color: '#ffffff',
                                            fontSize: '1.1rem',
                                            marginBottom: '0.5rem'
                                        }}>
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                                color: '#ffffff',
                                                padding: '0.8rem 1rem',
                                                borderRadius: '10px',
                                                fontSize: '1rem'
                                            }}
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="confirmPassword" style={{
                                            color: '#ffffff',
                                            fontSize: '1.1rem',
                                            marginBottom: '0.5rem'
                                        }}>
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                                color: '#ffffff',
                                                padding: '0.8rem 1rem',
                                                borderRadius: '10px',
                                                fontSize: '1rem'
                                            }}
                                            placeholder="Confirm your password"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="terms"
                                        required
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.3)'
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="terms" style={{
                                        color: '#e0e0e0',
                                        fontSize: '1rem'
                                    }}>
                                        I agree to the{' '}
                                        <Link to="/terms" style={{
                                            color: '#007bff',
                                            textDecoration: 'none'
                                        }}>
                                            Terms and Conditions
                                        </Link>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 mb-3"
                                    style={{
                                        padding: '0.8rem',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        borderRadius: '10px',
                                        background: 'linear-gradient(45deg, #007bff, #00bcd4)',
                                        border: 'none',
                                        boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    Create Account
                                </button>

                                <div className="text-center mb-3">
                                    <p style={{ color: '#e0e0e0', fontSize: '1rem' }}>
                                        Or sign up with
                                    </p>
                                </div>

                                <div className="d-flex justify-content-center mb-4">
                                    <GoogleLogin
                                        onSuccess={handleGoogleSuccess}
                                        onError={handleGoogleError}
                                        size="large"
                                        width="100%"
                                    />
                                </div>

                                <div className="text-center">
                                    <p style={{ color: '#e0e0e0', fontSize: '1rem' }}>
                                        Already have an account?{' '}
                                        <Link to="/login" style={{
                                            color: '#007bff',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            Sign In
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
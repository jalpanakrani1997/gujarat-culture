import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';
import jwt_decode from 'jwt-decode';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For demo purposes, we'll just use the email as the name
        dispatch(login({
            firstName: formData.email.split('@')[0],
            email: formData.email
        }));
        navigate('/');
    };

    const handleGoogleSuccess = (response) => {
        const decoded = jwt_decode(response.credential);
        dispatch(login({
            firstName: decoded.given_name,
            email: decoded.email
        }));
        navigate('/');
    };

    const handleGoogleError = () => {
        console.log('Google Login Failed');
    };

    return (
        <div style={{
            height: 'calc(100vh - 86px)',
            marginTop: '86px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url("https://tse1.mm.bing.net/th/id/OIP.IsKAOXR1LbirrBuZ5hQCtgHaHa?rs=1&pid=ImgDetMain")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative',
            overflow: 'hidden'
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
            
            <div className="container" style={{ 
                position: 'relative', 
                zIndex: 1,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="row justify-content-center" style={{ width: '100%' }}>
                    <div className="col-md-6">
                        <div className="card" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '20px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                            padding: '2rem',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}>
                            <div className="text-center mb-4">
                                <h2 style={{
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    fontSize: '2.5rem',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                                }}>
                                    Welcome Back
                                </h2>
                                <p style={{
                                    color: '#e0e0e0',
                                    fontSize: '1.1rem'
                                }}>
                                    Sign in to your account
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
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

                                <div className="mb-4">
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

                                <div className="mb-4 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberMe"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.3)'
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe" style={{
                                        color: '#e0e0e0',
                                        fontSize: '1rem'
                                    }}>
                                        Remember me
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
                                    Sign In
                                </button>

                                <div className="text-center mb-3">
                                    <p style={{ color: '#e0e0e0', fontSize: '1rem' }}>
                                        Or sign in with
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
                                    <Link to="/forgot-password" style={{
                                        color: '#e0e0e0',
                                        textDecoration: 'none',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        Forgot Password?
                                    </Link>
                                </div>

                                <div className="text-center mt-4">
                                    <p style={{ color: '#e0e0e0', fontSize: '1rem' }}>
                                        Don't have an account?{' '}
                                        <Link to="/signup" style={{
                                            color: '#007bff',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            Sign Up
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
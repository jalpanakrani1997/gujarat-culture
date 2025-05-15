import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import { addToCart } from '../Redux/cartSlice';

export default function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { items: products, loading } = useSelector(state => state.products);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts({ page: 1, limit: 20 }));
    }, [dispatch]);

    useEffect(() => {
        if (products.length > 0) {
            const foundProduct = products.find(p => p.id === parseInt(id));
            setProduct(foundProduct);
        }
    }, [products, id]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ ...product, quantity }));
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 2000);
        }
    };

    if (loading) {
        return <div className="container py-5 text-center">Loading...</div>;
    }

    if (!product) {
        return <div className="container py-5 text-center">Product not found</div>;
    }

    return (
        <div className="container py-5">
            <div className="row">
                {/* Product Image */}
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded"
                        style={{ maxHeight: '500px', objectFit: 'cover' }}
                    />
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                    <h1 className="mb-3">{product.name}</h1>
                    <p className="text-muted mb-3">Category: {product.category}</p>
                    <h3 className="text-success mb-4">${product.price}</h3>
                    
                    <div className="mb-4">
                        <h5>Description</h5>
                        <p>{product.description || 'No description available'}</p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="mb-4">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <div className="input-group" style={{ maxWidth: '150px' }}>
                            <button 
                                className="btn btn-outline-secondary" 
                                type="button"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                className="form-control text-center"
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                min="1"
                            />
                            <button 
                                className="btn btn-outline-secondary" 
                                type="button"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-grid gap-2">
                        <button 
                            className="btn btn-primary btn-lg"
                            onClick={handleAddToCart}
                        >
                            {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
                        </button>
                        <button className="btn btn-outline-secondary">
                            Add to Wishlist
                        </button>
                    </div>

                    {/* Product Information */}
                    <div className="mt-4">
                        <h5>Product Information</h5>
                        <ul className="list-unstyled">
                            <li><strong>Availability:</strong> In Stock</li>
                            <li><strong>Brand:</strong> {product.brand || 'N/A'}</li>
                            <li><strong>Rating:</strong> {product.rating || 'No ratings yet'}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-5">
                <h3 className="mb-4">Related Products</h3>
                <div className="row">
                    {products
                        .filter(p => p.category === product.category && p.id !== product.id)
                        .slice(0, 4)
                        .map(relatedProduct => (
                            <div key={relatedProduct.id} className="col-md-3 mb-4">
                                <div className="card h-100">
                                    <img
                                        src={relatedProduct.image}
                                        className="card-img-top"
                                        alt={relatedProduct.name}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{relatedProduct.name}</h5>
                                        <p className="card-text text-success">${relatedProduct.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
} 
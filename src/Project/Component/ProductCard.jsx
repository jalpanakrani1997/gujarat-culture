import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="card h-100">
            <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-success fw-bold">${product.price}</p>
                <p className="card-text">{product.description}</p>
            </div>
            <div className="card-footer bg-white">
                <div className="d-flex justify-content-between">
                    <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                    <button className="btn btn-success">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
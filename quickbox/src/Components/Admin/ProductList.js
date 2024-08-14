import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Styles/AdminStyle/ProductList.css'; // Import the CSS file
import Sidebar from './Sidebar';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:8080/api/products/${productId}`);
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            <Sidebar/>
            <div className="product-list-container">
                <h1>Product Management</h1>
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <img
                            src={`data:image/jpeg;base64,${product.image}`}
                            alt={product.name}
                            className="product-image"
                        />
                        <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

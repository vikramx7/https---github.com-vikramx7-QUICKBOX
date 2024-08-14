import React, { useState } from 'react';
import axios from 'axios';
import '../../Styles/AdminStyle/ProductForm.css'; // Import the CSS file
import Sidebar from './Sidebar';

const ProductForm = ({ onUpdateProducts = () => {} }) => {  // Default value provided
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:8080/api/products/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Call the onUpdateProducts callback to update the product list
            onUpdateProducts(response.data);
            // Reset form fields after submission
            setName('');
            setPrice('');
            setImage(null);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div>
            <Sidebar/>
            <div className="product-form-container">
                <h2>Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                    <button type="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;

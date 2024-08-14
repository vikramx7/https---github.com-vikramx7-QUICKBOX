import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/AdminStyle/UserEdit.css'; // Import the CSS file

const UserEdit = ({ user, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({ ...user });

    useEffect(() => {
        setFormData({ ...user });
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/users/${formData.id}`, formData)
            .then(response => {
                onUpdate(formData);
                onClose();
            })
            .catch(error => console.error('Error updating user:', error));
    };

    return (
        <div className="user-edit-container">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Mobile:
                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                </label>
                <button type="submit">Update</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default UserEdit;

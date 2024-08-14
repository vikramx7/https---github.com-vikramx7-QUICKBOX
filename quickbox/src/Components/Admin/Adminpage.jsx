import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserEdit from './UserEdit';
import '../../Styles/AdminStyle/AdminPage.css'; // Import the CSS file
import Sidebar from './Sidebar';

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleDelete = (userId) => {
        axios.delete(`http://localhost:8080/api/users/${userId}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== userId));
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <div>
            <Sidebar />
            <div className="admin-container">
                <h1>Admin - Users</h1>
                {editingUser && <UserEdit user={editingUser} onClose={() => setEditingUser(null)} onUpdate={(updatedUser) => {
                    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
                    setEditingUser(null);
                }} />}
                <div className="table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="action-column">
                                        <button className="edit" onClick={() => handleEdit(user)}>Edit</button>
                                        <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;

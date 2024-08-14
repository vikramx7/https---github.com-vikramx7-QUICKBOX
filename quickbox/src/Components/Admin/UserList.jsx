// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Style from '../../Styles/AdminStyle/UserList.module.css';

// const UserList = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8080/api/users')
//             .then(response => setUsers(response.data))
//             .catch(error => console.error('Error fetching users:', error));
//     }, []);

//     return (
//         <div className={Style.Container}>
//             <h1>Users List</h1>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}>
//                         <p><strong>Name:</strong> {user.name}</p>
//                         <p><strong>Email:</strong> {user.email}</p>
//                         <p><strong>Mobile:</strong> {user.mobile}</p>
//                         <button onClick={() => "/"}>Edit</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default UserList;

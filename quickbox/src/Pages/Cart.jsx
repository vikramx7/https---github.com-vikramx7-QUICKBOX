import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Contexts/AuthContext';
import '../Styles/Cart.css'; // Import the CSS file
import Navbar from '../Components/Navbar';

const Cart = () => {
    const { userCart } = useContext(AuthContext);
    const [orderStatus, setOrderStatus] = useState('');

    const handleOrder = async () => {
        try {
            const orderData = {
                customerId: userCart.id,
                productName: userCart.cart.map(item => item.product_name).join(', '),
                price: totalpayment,
                status: 'Pending',
            };

            console.log('Order Data:', orderData);

            const response = await axios.post('http://localhost:8080/api/orders/place', orderData, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log('Response:', response.data);

            setOrderStatus('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
            setOrderStatus('Failed to place order.');
        }
    };

    const totalpayment = userCart.cart.reduce((acc, item) => acc + item.total_price, 0);

    return (
      <div>
        <Navbar/>
        <div className="cart-container">
            <h2>Cart</h2>
            
            <div className="customer-info">
                <div>Customer Name: {userCart.name}</div>
                <div>Mobile Number: {userCart.mobile}</div>
                <div>Email: {userCart.email}</div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ITEM DESCRIPTION</th>
                        <th>UNIT PRICE</th>
                        <th>QUANTITY</th>
                        <th>SAVING</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {userCart.cart.map(el => (
                        <tr key={el.id}>
                            <td>{el.product_name}</td>
                            <td>{el.price}</td>
                            <td>{el.quantity}</td>
                            <td>{Math.floor(el.total_price / 10)}</td>
                            <td>{el.total_price}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>TOTAL BILL</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>{totalpayment}</th>
                    </tr>
                </tfoot>
            </table>

            <button onClick={handleOrder}>Place Order</button>
            <p>{orderStatus}</p>
        </div>
        </div>
    );
};

export default Cart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Select, Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/api/orders/${selectedOrderId}/status`, newStatus, {
        headers: { 'Content-Type': 'text/plain' },
      });

      setOrders(orders.map(order => 
        order.id === selectedOrderId ? { ...order, status: newStatus } : order
      ));

      setSelectedOrderId('');
      setNewStatus('');

      alert('Order status updated successfully!');
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Box ml="250px" p="20px" w="full">
        <h2 style={{
          fontWeight: 'normal',
          fontSize: '2em',
          fontFamily: "'Raleway', sans-serif",
          margin: '0 auto',
          marginTop: '30px',
          width: '400px',
          color: '#f90',
          textAlign: 'center',
        }}>
          Order Management
        </h2>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Customer ID</Th>
              <Th>Product Name</Th>
              <Th>Price</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order) => (
              <Tr key={order.id}>
                <Td>{order.id}</Td>
                <Td>{order.customerId}</Td>
                <Td>{order.productName}</Td>
                <Td>{order.price}</Td>
                <Td>{order.status}</Td>
                <Td>
                  <Select
                    placeholder="Select status"
                    value={selectedOrderId === order.id ? newStatus : ''}
                    onChange={(e) => {
                      setSelectedOrderId(order.id);
                      setNewStatus(e.target.value);
                    }}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </Select>
                  <Button
                    onClick={handleStatusUpdate}
                    colorScheme="blue"
                    ml={2}
                    disabled={!selectedOrderId}
                  >
                    Update Status
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default AdminDashboard;

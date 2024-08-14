import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Text, List, ListItem, Alert, AlertIcon } from '@chakra-ui/react';

const Notifications = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/api/notifications/${userId}`);
        console.log('API Response:', response.data); // Log the response to verify
        if (response.data && Array.isArray(response.data)) {
          setNotifications(response.data);
        } else {
          setNotifications([]);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setError('Failed to fetch notifications. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchNotifications();
    }
  }, [userId]);

  return (
    <Box p={4} borderWidth={1} borderRadius="md" shadow="md">
      <Text fontSize="lg" mb={4}>Notifications</Text>
      {loading && <Text>Loading notifications...</Text>}
      {error && <Alert status="error" mb={4}><AlertIcon />{error}</Alert>}
      {!loading && !error && notifications.length > 0 ? (
        <List spacing={3}>
          {notifications.map((notification) => (
            <ListItem key={notification.id} p={3} borderWidth={1} borderRadius="md">
              {notification.message}
            </ListItem>
          ))}
        </List>
      ) : (
        !loading && !error && <Text>No notifications.</Text>
      )}
    </Box>
  );
};

export default Notifications;

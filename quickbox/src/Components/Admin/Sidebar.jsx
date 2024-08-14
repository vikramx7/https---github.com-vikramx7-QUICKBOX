import React from 'react';
import { Box, VStack, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box
      w="250px"
      h="100vh"
      bg="gray.800"
      color="white"
      padding="20px"
      position="fixed"
    >
      <VStack spacing={4} align="stretch">
        <Link as={NavLink} to="/adminp" _hover={{ textDecoration: 'none', color: 'teal.200' }}>
          User Management
        </Link>
        <Link as={NavLink} to="/admin" _hover={{ textDecoration: 'none', color: 'teal.200' }}>
          Order Management
        </Link>
        <Link as={NavLink} to="/list" _hover={{ textDecoration: 'none', color: 'teal.200' }}>
          Product Management
        </Link>
        <Link as={NavLink} to="/update" _hover={{ textDecoration: 'none', color: 'teal.200' }}>
          Add Product
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;

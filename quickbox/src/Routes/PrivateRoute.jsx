import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

const PrivateRoute = ({ children, adminOnly }) => {
  const { authState } = useContext(AuthContext);

  if (!authState.isAuth) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !authState.isAdmin) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default PrivateRoute;

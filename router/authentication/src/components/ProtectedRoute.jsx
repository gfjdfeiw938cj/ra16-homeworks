import React from 'react';
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const {isAuthenticated} = useAuth();
  console.log('ProtectedRoute', isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

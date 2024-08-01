import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log(isAuthenticated);
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' />
  );
}
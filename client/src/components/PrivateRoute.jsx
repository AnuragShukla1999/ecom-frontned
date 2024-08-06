import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  // const { isAuthenticated } = useSelector((state) => state.user);
  // console.log(isAuthenticated);

  const user = localStorage.getItem('currentUser')
  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' />
  );
}
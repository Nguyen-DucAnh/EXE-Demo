// import { Navigate } from 'react-router-dom';
// import { useAppSelector } from '@/store/hooks';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // For MVP, we'll allow access without authentication
  // In production, uncomment the lines below to require auth
  // const { isAuthenticated } = useAppSelector((state) => state.auth);
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  return <>{children}</>;
};


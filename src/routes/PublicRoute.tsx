import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';

interface PublicRouteProps {
  children: React.ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // For MVP, we'll allow access without authentication
  // In production, you can uncomment the line below to require auth
  // if (isAuthenticated) {
  //   return <Navigate to="/" replace />;
  // }

  return <>{children}</>;
};


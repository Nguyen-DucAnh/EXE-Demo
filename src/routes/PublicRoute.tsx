// import { Navigate } from 'react-router-dom';
// import { useAppSelector } from '@/store/hooks';

interface PublicRouteProps {
  children: React.ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  // For MVP, we'll allow access without authentication
  // In production, you can uncomment the lines below to require auth
  // const { isAuthenticated } = useAppSelector((state) => state.auth);
  // if (isAuthenticated) {
  //   return <Navigate to="/" replace />;
  // }

  return <>{children}</>;
};


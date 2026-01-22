import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, MessageCircle, Info, Home } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/slices/authSlice';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const navItems = [
    { path: '/', label: 'Trang chủ', icon: Home },
    { path: '/knowledge', label: 'Kiến thức', icon: BookOpen },
    { path: '/assistant', label: 'Trợ lý AI', icon: MessageCircle },
    { path: '/about', label: 'Về chúng tôi', icon: Info },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Logo className="h-14 w-14 relative z-10 group-hover:scale-105 transition-transform" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-primary via-indigo-600 to-secondary bg-clip-text text-transparent group-hover:tracking-tight transition-all">HeyPaaaa</span>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-2">
              {isAuthenticated && user ? (
                <>
                  <span className="text-sm text-muted-foreground hidden md:inline">
                    {user.name}
                  </span>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    Đăng xuất
                  </Button>
                </>
              ) : (
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Đăng nhập</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center gap-2 overflow-x-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-xs">{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="border-t mt-auto py-10 bg-gradient-to-r from-slate-50 via-sky-50 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Logo className="h-10 w-10" />
            <p className="text-xl font-bold text-gray-800">© 2024 HeyPaaaa</p>
          </div>
          <p className="text-sm text-gray-600">Đồng hành cùng các ông bố trên hành trình làm cha ❤️</p>
        </div>
      </footer>
    </div>
  );
};


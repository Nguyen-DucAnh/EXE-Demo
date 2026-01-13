import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Layout } from './components/Layout';
import { PublicRoute } from './routes/PublicRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import { Home } from './pages/Home';
import { Knowledge } from './pages/Knowledge';
import { KnowledgeDetail } from './pages/KnowledgeDetail';
import { Assistant } from './pages/Assistant';
import { About } from './pages/About';
import { Login } from './pages/Login';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="/knowledge"
              element={
                <PublicRoute>
                  <Knowledge />
                </PublicRoute>
              }
            />
            <Route
              path="/knowledge/:id"
              element={
                <PublicRoute>
                  <KnowledgeDetail />
                </PublicRoute>
              }
            />
            <Route
              path="/assistant"
              element={
                <PrivateRoute>
                  <Assistant />
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PublicRoute>
                  <About />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


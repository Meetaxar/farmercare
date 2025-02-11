import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoanSchemes from './pages/LoanSchemes';
import CropRecommendations from './pages/CropRecommendations';
import GovSchemes from './pages/GovSchemes';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (credentials) => {
    // In a real app, validate credentials here
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route 
          path="/" 
          element={
            !isAuthenticated ? (
              <Home onLogin={handleLogin} />
            ) : (
              <Navigate to="/dashboard" />
            )
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route 
          path="/loan-schemes" 
          element={
            isAuthenticated ? (
              <LoanSchemes />
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route 
          path="/crop-recommendations" 
          element={
            isAuthenticated ? (
              <CropRecommendations />
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route 
          path="/gov-schemes" 
          element={
            isAuthenticated ? (
              <GovSchemes />
            ) : (
              <Navigate to="/" />
            )
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
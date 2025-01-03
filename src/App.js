import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserDashboard from './pages/UserDashboard';
import CalendarPage from './pages/CalendarPage';
import { CompanyProvider } from './context/CompanyContext';

const App = () => {
  return (
    <CompanyProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/" element={<UserDashboard />} />
        </Routes>
      </Router>
    </CompanyProvider>
  );
};

export default App;
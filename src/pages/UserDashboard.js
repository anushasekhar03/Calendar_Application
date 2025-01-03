import React, { useContext } from 'react';
import { CompanyContext } from '../context/CompanyContext';
import DashboardGrid from '../components/DashboardGrid';

const UserDashboard = () => {
  const { companies } = useContext(CompanyContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <DashboardGrid companies={companies} />
    </div>
  );
};

export default UserDashboard;
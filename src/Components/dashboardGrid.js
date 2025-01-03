import React from 'react';

const DashboardGrid = ({ companies }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {companies.map((company) => (
        <div key={company.id} className="p-4 border rounded">
          <h2 className="text-xl font-semibold">{company.name}</h2>
          <p>Location: {company.location}</p>
          <p>Last Communication: N/A</p>
          <p>Next Communication: N/A</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardGrid;
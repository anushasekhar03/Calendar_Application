import React from 'react';

const CompanyList = ({ companies, onEdit, onDelete }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Company List</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id} className="mb-2 p-2 border rounded flex justify-between">
            <span>{company.name}</span>
            <div>
              <button onClick={() => onEdit(company)} className="mr-2 text-blue-500">
                Edit
              </button>
              <button onClick={() => onDelete(company.id)} className="text-red-500">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
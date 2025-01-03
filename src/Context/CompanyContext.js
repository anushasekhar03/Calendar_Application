import React, { createContext, useState } from 'react';

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);

  const addCompany = (company) => {
    setCompanies([...companies, { ...company, id: Date.now() }]);
  };

  const editCompany = (id, updatedCompany) => {
    setCompanies(companies.map((company) => (company.id === id ? updatedCompany : company)));
  };

  const deleteCompany = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  return (
    <CompanyContext.Provider value={{ companies, addCompany, editCompany, deleteCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};
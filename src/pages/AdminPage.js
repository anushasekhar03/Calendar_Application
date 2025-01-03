import React, { useContext, useState } from 'react';
import { CompanyContext } from '../context/CompanyContext';
import CompanyForm from '../components/CompanyForm';
import CompanyList from '../components/CompanyList';

const AdminPage = () => {
  const { companies, addCompany, editCompany, deleteCompany } = useContext(CompanyContext);
  const [editingCompany, setEditingCompany] = useState(null);

  const handleSave = (company) => {
    if (editingCompany) {
      editCompany(editingCompany.id, company);
      setEditingCompany(null);
    } else {
      addCompany(company);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Module</h1>
      <CompanyForm onSave={handleSave} editingCompany={editingCompany} />
      <CompanyList companies={companies} onEdit={setEditingCompany} onDelete={deleteCompany} />
    </div>
  );
};

export default AdminPage;
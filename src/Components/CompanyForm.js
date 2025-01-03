import React, { useState } from 'react';

const CompanyForm = ({ onSave, editingCompany }) => {
  const [company, setCompany] = useState(
    editingCompany || {
      name: '',
      location: '',
      linkedInProfile: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      periodicity: '',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(company);
    setCompany({
      name: '',
      location: '',
      linkedInProfile: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      periodicity: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={company.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={company.location}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        {/* Add other fields similarly */}
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        {editingCompany ? 'Update Company' : 'Add Company'}
      </button>
    </form>
  );
};

export default CompanyForm;
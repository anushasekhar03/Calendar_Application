import React, { useState } from 'react';

const CommunicationModal = ({ isOpen, onClose, onSave, selectedCompanies }) => {
  const [communication, setCommunication] = useState({
    type: '',
    date: new Date().toISOString().split('T')[0], // Default to today's date
    notes: '',
  });

  const communicationMethods = [
    { name: 'LinkedIn Post', description: 'Post on LinkedIn' },
    { name: 'LinkedIn Message', description: 'Send a LinkedIn message' },
    { name: 'Email', description: 'Send an email' },
    { name: 'Phone Call', description: 'Make a phone call' },
    { name: 'Other', description: 'Other communication method' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommunication({ ...communication, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(selectedCompanies, communication);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Log Communication</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Communication Type</label>
            <select
              name="type"
              value={communication.type}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="" disabled>
                Select a type
              </option>
              {communicationMethods.map((method) => (
                <option key={method.name} value={method.name}>
                  {method.name} - {method.description}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={communication.date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Notes</label>
            <textarea
              name="notes"
              value={communication.notes}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
              placeholder="Add notes about the communication..."
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommunicationModal;
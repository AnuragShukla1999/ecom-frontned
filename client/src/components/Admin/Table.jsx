// src/DashboardTable.js
import React, { useState } from 'react';
import { nanoid } from 'nanoid'; // For unique IDs

const initialData = [
  { id: nanoid(), name: 'John Doe', email: 'john@example.com' },
  { id: nanoid(), name: 'Jane Smith', email: 'jane@example.com' },
  // Add more initial data as needed
];

const DashboardTable = () => {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleDeleteAll = () => {
    setData([]);
  };

  const handleEdit = (id, newData) => {
    setData(data.map(item => item.id === id ? { ...item, ...newData } : item));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    setData([...data].sort((a, b) => {
      if (a.name < b.name) return newSortOrder === 'asc' ? -1 : 1;
      if (a.name > b.name) return newSortOrder === 'asc' ? 1 : -1;
      return 0;
    }));
  };

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-4 flex justify-between items-center">
        <input 
          type="text" 
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded"
        />
        <button 
          onClick={handleSort}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Sort by Name ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
        <button 
          onClick={handleDeleteAll}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Delete All
        </button>
      </div>

      
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="p-4 border-b">Name</th>
            <th className="p-4 border-b">Email</th>
            <th className="p-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td className="p-4 border-b">{item.name}</td>
              <td className="p-4 border-b">{item.email}</td>
              <td className="p-4 border-b">
                <button 
                  onClick={() => handleEdit(item.id, { name: 'Updated Name', email: 'updated@example.com' })}
                  className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;

import React, { useState } from 'react';

const TableWithDropdowns = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleDropdownChange = (index, value) => {
    const updatedValues = [...selectedValues];
    updatedValues[index] = value;
    setSelectedValues(updatedValues);
  };

  const renderDropdowns = () => {
    return dropdownOptions.map((option, index) => (
      <select
        key={index}
        value={selectedValues[index] || ''}
        onChange={(e) => handleDropdownChange(index, e.target.value)}
      >
        <option value="">Select an option</option>
        {dropdownOptions.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Dropdowns</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{renderDropdowns()}</td>
        </tr>
        <tr>
          <td>{renderDropdowns()}</td>
        </tr>
        <tr>
          <td>{renderDropdowns()}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableWithDropdowns;

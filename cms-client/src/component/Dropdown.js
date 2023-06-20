// import React, { useState } from 'react';

// const TableWithDropdowns = () => {
//   const [selectedValues, setSelectedValues] = useState([]);

//   const dropdownOptions = ['Option 1', 'Option 2'];

//   const handleDropdownChange = (index, value) => {
//     const updatedValues = [...selectedValues];
//     updatedValues[index] = value;
//     setSelectedValues(updatedValues);
//   };

//   const renderDropdowns = () => {
//     return dropdownOptions.map((option, index) => (
//       <select
//         key={index}
//         value={selectedValues[index] || ''}
//         onChange={(e) => handleDropdownChange(index, e.target.value)}
//       >
//         <option value="">Select an option</option>
//         {dropdownOptions.map((opt, i) => (
//           <option key={i} value={opt}>
//             {opt}
//           </option>
//         ))}
//       </select>
//     ));
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Dropdowns</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>{renderDropdowns()}</td>
//         </tr>
//         <tr>
//           <td>{renderDropdowns()}</td>
//         </tr>
//         <tr>
//           <td>{renderDropdowns()}</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default TableWithDropdowns;


// ----------------------------------------------------------------------------------------------------------------


import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const MultiLevelDropdown = ({ dropdownData }) => {
  const [selectedValues, setSelectedValues] = useState({});
  const [finalSelection, setFinalSelection] = useState('');

  const handleDropdownSelect = (level, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [level]: value,
    }));
  };

  const handleFinalSelection = () => {
    const selectedOptions = Object.values(selectedValues);
    setFinalSelection(selectedOptions.join(' > '));
  };

  return (
    <div>
      {dropdownData.map((dropdown, index) => (
        <Dropdown
          key={index}
          options={dropdown.options}
          onSelect={(value) => handleDropdownSelect(index, value)}
        />
      ))}
      <button onClick={handleFinalSelection}>Get Final Selection</button>
      <p>{finalSelection}</p>
    </div>
  );
};

// Usage
const dropdownData = [
  {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
  },
  {
    options: [
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
    ],
  },
  {
    options: [
      { label: 'Option 5', value: 'option5' },
      { label: 'Option 6', value: 'option6' },
    ],
  },
];

const Apps = () => {
  return (
    <div>
      <h1>Multi-Level Dropdowns</h1>
      <MultiLevelDropdown dropdownData={dropdownData} />
    </div>
  );
};

export default Apps;

import React, { useState } from "react";
import "./Department.css"; // Import the CSS file

const Department = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="department">Select Department:</label>
      <select
        id="department"
        value={selectedDepartment}
        onChange={handleChange}
        className="department-dropdown"
      >
        <option value="" disabled>
          Select a department
        </option>
        <option value="social-science">Social Science</option>
        <option value="natural-science">Natural Science</option>
      </select>
      {selectedDepartment && <p>You selected: {selectedDepartment}</p>}
    </div>
  );
};

export default Department;

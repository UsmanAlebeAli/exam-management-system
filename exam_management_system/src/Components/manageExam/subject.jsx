import React, { useState } from "react";
import "./Subject.css"; // Import the CSS file

const Subject = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const departments = {
    "Natural Science": ["Biology", "Chemistry", "Physics", "Earth Science"],
    "Social Science": [
      "Psychology",
      "Sociology",
      "Political Science",
      "Economics",
    ],
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    setSelectedSubject(""); // Reset subject when department changes
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Selected Department:", selectedDepartment);
    console.log("Selected Subject:", selectedSubject);
    // Logic to handle form submission (e.g., API call) goes here
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="department">Select Department:</label>
          <select
            id="department"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            className="dropdown"
          >
            <option value="" disabled>
              Select a department
            </option>
            {Object.keys(departments).map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Select Subject:</label>
          <select
            id="subject"
            value={selectedSubject}
            onChange={handleSubjectChange}
            className="dropdown"
          >
            <option value="" disabled>
              Select a subject
            </option>
            {selectedDepartment
              ? departments[selectedDepartment].map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))
              : Object.values(departments)
                  .flat()
                  .map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
          </select>

          {selectedSubject && (
            <div className="selected-subject">
              <p>You selected: {selectedSubject}</p>
            </div>
          )}
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subject;

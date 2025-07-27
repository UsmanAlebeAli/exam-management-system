import React, { useState } from "react";

import { Link } from "react-router-dom"; // Import Link for navigation
import classes from "./leftside.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleIcon from "@mui/icons-material/People";

function Leftside() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderItemDetails = () => {
    switch (selectedItem) {
      case "Manage Examinee":
        return (
          <div className={classes.childs}>
            <h2>View Examinee</h2>
            <Link to="/register" className={classes.buttons}>
              Add Examinee
            </Link>
            <Link to="/examinee" className={classes.buttons}>
              View Examinee
            </Link>
          </div>
        );
      case "Manage Exam":
        return (
          <div className={classes.childs}>
            <h2>Examination</h2>
            <Link to="/add-subject" className={classes.buttons}>
              Add Subject
            </Link>
            <Link to="/add-exam" className={classes.buttons}>
              Add Examination
            </Link>
            <Link to="/view-exams" className={classes.buttons}>
              View Examinations
            </Link>
          </div>
        );
      case "Manage Questions":
        return (
          <div className={classes.childs}>
            <h2>Questions</h2>
            <Link to="/add-questions" className={classes.buttons}>
              Add Questions
            </Link>
            <Link to="/view-questions" className={classes.buttons}>
              View Questions
            </Link>
          </div>
        );
      case "Manage Account":
        return (
          <div className={classes.childs}>
            <h2>Accounts</h2>
            <Link to="/add-account" className={classes.buttons}>
              Add Account
            </Link>
            <Link to="/view-account" className={classes.buttons}>
              View Account
            </Link>
          </div>
        );
      case "Manage Status":
        return (
          <div className={classes.childs}>
            <h2>Results</h2>
            <Link to="/view-status" className={classes.buttons}>
              View Status
            </Link>
          </div>
        );
      default: 
        return null;
    }
  };

  return (
    <div className={classes.sidebar}>
      <nav>
        <ul>
          <li onClick={() => handleItemClick("Home")}>
            <DashboardIcon /> Home
          </li>
          <li onClick={() => handleItemClick("Manage Examinee")}>
            <QuestionAnswerIcon /> Manage Examinee
          </li>
          <li onClick={() => handleItemClick("Manage Exam")}>
            <AssignmentIcon /> Manage Examination
          </li>
          <li onClick={() => handleItemClick("Manage Questions")}>
            <AssessmentIcon /> Manage Questions
          </li>
          <li onClick={() => handleItemClick("Manage Account")}>
            <PeopleIcon /> Manage Account
          </li>
          <li onClick={() => handleItemClick("Manage Status")}>
            <PeopleIcon /> Manage Status
          </li>
        </ul>
      </nav>
      {selectedItem && (
        <div className={classes.itemDetails}>{renderItemDetails()}</div>
      )}
    </div>
  );
}

export default Leftside;

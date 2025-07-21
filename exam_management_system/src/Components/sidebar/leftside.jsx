import React from "react";
import classes from "./leftside.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleIcon from "@mui/icons-material/People";
function Leftside() {
  return (
    <div className={classes.sidebar}>
      <nav>
        <ul>
          <li>
            <DashboardIcon /> Dashboard
          </li>
          <li>
            <QuestionAnswerIcon /> Question Bank
          </li>
          <li>
            <AssignmentIcon /> Examination
          </li>
          <li>
            <AssessmentIcon /> Reports
          </li>
          <li>
            <PeopleIcon /> Client Level
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Leftside;

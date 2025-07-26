import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leftside from "../sidebar/leftside";
import Dashboard from "./dashboard";
import classes from "./dashleft.module.css";
import Registration from "../Registratin/examinee";
import AddExam from "../manageExam/addexam";
import AddQuestion from "../managequestion/addquestion";
import AddUser from "../manageAccount/adduser";
import Status from "../status/status";

const Main = () => {
  return (
    <div className={classes.appContainer}>
      <Router>
        <Leftside />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/add-exam" element={<AddExam />} />
          <Route path="/add-questions" element={<AddQuestion />} />
          <Route path="/add-account" element={<AddUser />} />
          <Route path="/view-status" element={<Status />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;

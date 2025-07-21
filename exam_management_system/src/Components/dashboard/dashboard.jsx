import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faClipboardCheck,
  faFileAlt,
  faQuestionCircle,
  faBook,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./dashboard.module.css";

const Dashboard = () => {
  const data = {
    totalCandidates: 24,
    attendance: 20,
    evaluation: 5,
    maxMarks: 20,
    passingMarks: 5,
    totalQuestions: 11,
    objectiveQuestions: 10,
    descriptiveQuestions: 1,
  };

  return (
    <div className={classes.dashboard_container}>
      <nav className={classes.sidebar}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faClipboardCheck} /> Dashboard
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} /> Question Bank
          </li>
          <li>
            <FontAwesomeIcon icon={faFileAlt} /> Examination
          </li>
          <li>
            <FontAwesomeIcon icon={faChartBar} /> Reports
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} /> Client Level
          </li>
        </ul>
      </nav>
      <main className={classes.main_content}>
        <h2>Exam Analysis Dashboard</h2>
        <div className={classes.exam_select}>
          <label htmlFor="exam-select">Select Exam:</label>
          <select id="exam-select">
            <option value="bvs-exam">BVS Exam</option>
            {/* Add more options here */}
          </select>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5">{data.totalCandidates}</Typography>
                <Typography color="textSecondary">Total Candidates</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5">{data.attendance}%</Typography>
                <Typography color="textSecondary">Attendance (%)</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{data.evaluation}</Typography>
                <Typography color="textSecondary">Evaluation</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{data.maxMarks}</Typography>
                <Typography color="textSecondary">Max Marks</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{data.passingMarks}</Typography>
                <Typography color="textSecondary">Passing Marks</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{data.totalQuestions}</Typography>
                <Typography color="textSecondary">Total Questions</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{data.objectiveQuestions}</Typography>
                <Typography color="textSecondary">
                  Objective Questions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">
                  {data.descriptiveQuestions}
                </Typography>
                <Typography color="textSecondary">
                  Descriptive Questions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};
<Container className={classes.main_content}>
  <h2>Exam Analysis Dashboard</h2>
  <div className={classes.exam_select}>
    <label htmlFor="exam-select">Select Exam:</label>
    <select id="exam-select">
      <option value="bvs-exam">BVS Exam</option>
    </select>
  </div>
</Container>;
export default Dashboard;

import React from "react";
import classes from "./dashboard.module.css";
import { Typography, Container, Grid, Card, CardContent } from "@mui/material";
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
    <div className={classes.appContainer}>
      <main className={classes.main_content}>
        <h2>Exam Analysis Dashboard</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{data.totalCandidates}</Typography>
                <Typography color="textSecondary">Total Candidates</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
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

export default Dashboard;

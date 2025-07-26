import React, { useState, useEffect } from "react";
import classes from "./dashboard.module.css";
import { Typography, Container, Grid, Card, CardContent } from "@mui/material";

const Dashboard = () => {
  const data = {
    AllExaminee: 24,
    Exams: 20,
    Questions: 5,
    TotalAccounts: 20,
  };

  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(now.toLocaleString("en-US", options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className={classes.appContainer}>
      <main className={classes.main_content}>
        <h2>
          Exam Analysis Dashboard
          <span style={{ marginLeft: "40px", fontSize: "1rem", color: "#fff" }}>
            {currentDateTime}
          </span>
        </h2>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{data.AllExaminee}</Typography>
                <Typography color="textSecondary">All Examinee</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{data.Exams}</Typography>
                <Typography color="textSecondary">Exams</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{data.Questions}</Typography>
                <Typography color="textSecondary">Questions</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5">{data.TotalAccounts}</Typography>
                <Typography color="textSecondary">Total Accounts</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Dashboard;

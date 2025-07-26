import React, { useState } from "react";
import { Container, Typography, TextField, Button, Paper } from "@mui/material";
import classes from "./Registration.module.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    department: "",
    dateOfJoining: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Employee Data Submitted:", formData);
    // Logic to save data (e.g., API call) goes here
  };

  return (
    <Container component="main" maxWidth="lg" style={{ width: "100%" }}>
      <Paper elevation={3} className={classes.registration_paper}>
        <Typography variant="h4" align="center">
          Examinee Registration
        </Typography>
        <form onSubmit={handleSave}>
          <div className={classes.inputContainer}>
            <TextField
              className={classes.question_input}
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.question_input}
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.question_input}
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.question_input}
              name="phone"
              label="Phone Number"
              variant="outlined"
              type="tel"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.question_input}
              name="position"
              label="Position"
              variant="outlined"
              fullWidth
              value={formData.position}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.question_input}
              name="department"
              label="Department"
              variant="outlined"
              fullWidth
              value={formData.department}
              onChange={handleChange}
              required
            />
            <TextField
              className={classes.question_input}
              name="dateOfJoining"
              label="Date of Registration"
              variant="outlined"
              type="date"
              fullWidth
              value={formData.dateOfJoining}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              className={classes.question_input}
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              multiline
              rows={1}
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              className={classes.saveButton}
              type="submit"
            >
              Register 
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default Registration;

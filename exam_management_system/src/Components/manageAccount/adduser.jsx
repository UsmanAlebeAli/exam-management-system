import React, { useState } from "react";
import classes from "./adduser.module.css"; // Ensure this CSS file is created
import { Container, Typography, Button, Paper, TextField } from "@mui/material";
import axios from "axios"; // Import Axios

const AddUser = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message

    console.log("Submitting:", userDetails); // Log the data being submitted

    try {
      const response = await axios.post(
        "http://localhost:3000/add-account",
        userDetails
      ); // Use Axios for the POST request

      console.log("User added:", response.data); // Log successful addition

      // Reset form after successful submission
      setUserDetails({ firstName: "", lastName: "", password: "" });
    } catch (error) {
      // console.error("Error:", error); // Log the error
      setErrorMessage(error.response?.data?.error || "Failed to add user"); // Set error message for display
    }
  };

  return (
    <Container component="main" maxWidth={false} style={{ padding: 0 }}>
      <Paper elevation={3} className={classes.form_container}>
        <Typography variant="h4" align="center">
          Add System User
        </Typography>
        {errorMessage && (
          <Typography color="error" align="center">
            {errorMessage}
          </Typography>
        )}
        <form onSubmit={handleSave}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={userDetails.firstName}
            onChange={handleInputChange} // Use the new change handler
            required
            className={classes.input_field}
            name="firstName"
          />
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            value={userDetails.lastName}
            onChange={handleInputChange} // Use the new change handler
            required
            className={classes.input_field}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={userDetails.password}
            onChange={handleInputChange} // Use the new change handler
            required
            className={classes.input_field}
            name="password"
          />
          <div className={classes.button_container}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.save_button}
            >
              Add
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default AddUser;

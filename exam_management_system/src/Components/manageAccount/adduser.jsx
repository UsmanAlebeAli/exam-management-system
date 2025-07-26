import React, { useState } from "react";
import classes from "./adduser.module.css"; // Ensure this CSS file is created
import { Container, Typography, Button, Paper, TextField } from "@mui/material";

const AddUser = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleSave = (e) => {
    e.preventDefault();
    console.log("User details saved:", userDetails);
    // Logic to save user details (e.g., API call) goes here
  };

  return (
    <Container component="main" maxWidth={false} style={{ padding: 0 }}>
      <Paper elevation={3} className={classes.form_container}>
        <Typography variant="h4" align="center">
          Add System User
        </Typography>
        <form onSubmit={handleSave}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={userDetails.firstName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, firstName: e.target.value })
            }
            required
            className={classes.input_field}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={userDetails.lastName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastName: e.target.value })
            }
            required
            className={classes.input_field}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            required
            className={classes.input_field}
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

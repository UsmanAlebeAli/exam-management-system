import React, { useState } from "react";
import "./addexam.css";
import { Container, Typography, Button, Paper, TextField } from "@mui/material";

const AddExam = () => {
  const [examDetails, setExamDetails] = useState({
    description: "",
    Exam: "",
    startDate: "",
    endDate: "",
    duration: "",
  });

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Exam details saved:", examDetails);
    // Logic to handle save action (e.g., API call) goes here
  };

  return (
    <Container component="main" maxWidth="lg" style={{ width: "100%" }}>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h4" align="center">
          Add Exam
        </Typography>
        <form onSubmit={handleSave}>
          <TextField
            label="Exam Description"
            variant="outlined"
            fullWidth
            value={examDetails.description}
            onChange={(e) =>
              setExamDetails({ ...examDetails, description: e.target.value })
            }
            required
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Exam"
            variant="outlined"
            fullWidth
            value={examDetails.Exam}
            onChange={(e) =>
              setExamDetails({ ...examDetails, Exam: e.target.value })
            }
            required
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Start Date"
            variant="outlined"
            type="date"
            fullWidth
            value={examDetails.startDate}
            onChange={(e) =>
              setExamDetails({ ...examDetails, startDate: e.target.value })
            }
            InputLabelProps={{ shrink: true }}
            required
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="End Date"
            variant="outlined"
            type="date"
            fullWidth
            value={examDetails.endDate}
            onChange={(e) =>
              setExamDetails({ ...examDetails, endDate: e.target.value })
            }
            InputLabelProps={{ shrink: true }}
            required
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Exam Duration (minutes)"
            variant="outlined"
            type="number"
            fullWidth
            value={examDetails.duration}
            onChange={(e) =>
              setExamDetails({ ...examDetails, duration: e.target.value })
            }
            required
            style={{ marginBottom: "20px" }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit" // Change to type submit
              className="save-button"
            >
              Save
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default AddExam;

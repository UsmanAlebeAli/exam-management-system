import React, { useState } from "react";
import "./addquestion.css";
import { Container, Typography, Button, Paper, TextField } from "@mui/material";

const AddQuestion = () => {
  const [questionDetails, setQuestionDetails] = useState({
    description: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });

  const handleInputChange = (index, value) => {
    const newOptions = [...questionDetails.options];
    newOptions[index] = value;
    setQuestionDetails({ ...questionDetails, options: newOptions });
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Question Details:", questionDetails);
    // Logic to save question (e.g., API call) goes here
  };

  return (
    <Container component="main" maxWidth="lg" style={{ width: "100%" }}>
      <Paper elevation={3} className="question-form">
        <Typography variant="h4" align="center">
          Register Question
        </Typography>
        <form onSubmit={handleSave}>
          <div className="input-container">
            <TextField
              className="question-input"
              label="Question Description"
              variant="outlined" 
              fullWidth
              value={questionDetails.description}
              onChange={(e) =>
                setQuestionDetails({
                  ...questionDetails,
                  description: e.target.value,
                })
              }
              required
            />
            {questionDetails.options.map((option, index) => (
              <TextField
                className="answer-option"
                label={`Answer Option ${index + 1}`}
                variant="outlined"
                fullWidth
                value={option}
                onChange={(e) => handleInputChange(index, e.target.value)}
                key={index}
                required
              />
            ))}
            <TextField
              className="correct-answer"
              label="Correct Answer (Option Number)"
              variant="outlined"
              fullWidth
              type="number"
              value={questionDetails.correctAnswer}
              onChange={(e) =>
                setQuestionDetails({
                  ...questionDetails,
                  correctAnswer: e.target.value,
                })
              }
              inputProps={{ min: 1, max: 4 }}
              required
            />
          </div>
          <div className="button-container">
            <Button
              variant="contained"
              className="save-button"
              type="submit" // Change to type submit
            >
              Save
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default AddQuestion;

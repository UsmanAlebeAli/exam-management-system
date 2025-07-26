import React, { useState } from "react";
import "./addexam.css";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const AddExam = () => {
  const [examDetails, setExamDetails] = useState({
    description: "",
    Exam: "",
    startDate: "",
    endDate: "",
    duration: "",
  });

  const [examinees, setExaminees] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    // Add more examinees as needed
  ]);

  const handlePrint = () => {
    window.print();
  };

  const handleRecordsPerPageChange = (event) => {
    // Logic to handle records per page change
    console.log(`Records per page: ${event.target.value}`);
  };

  return (
    <Container component="main" maxWidth="lg">
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h4" align="center">
          Add Exam
        </Typography>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Exam Description"
              variant="outlined"
              fullWidth
              value={examDetails.description}
              onChange={(e) =>
                setExamDetails({ ...examDetails, description: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Exam"
              variant="outlined"
              fullWidth
              value={examDetails.Exam}
              onChange={(e) =>
                setExamDetails({ ...examDetails, Exam: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Exam Duration (minutes)"
              variant="outlined"
              type="number"
              fullWidth
              value={examDetails.duration}
              onChange={(e) =>
                setExamDetails({ ...examDetails, duration: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        ></div>
      </Paper>

      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5">Registered Examinees</Typography>
        <Typography variant="subtitle1">
          Total Examinees: {examinees.length}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRecordsPerPageChange}
        >
          Show Records Per Page
        </Button>
        <Button variant="contained" color="secondary" onClick={handlePrint}>
          Print
        </Button>
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {examinees.map((examinee) => (
                <TableRow key={examinee.id}>
                  <TableCell>{examinee.id}</TableCell>
                  <TableCell>{examinee.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default AddExam;

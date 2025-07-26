import classes from "./status.module.css"; // Import the CSS file
import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Status = () => {
  // Sample data
  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      department: "Engineering",
      result: "Pass",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      department: "Marketing",
      result: "Fail",
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      department: "Sales",
      result: "Pass",
    },
    { firstName: "Bob", lastName: "Brown", department: "HR", result: "Pass" },
  ];

  return (
    <Container component="main" maxWidth="lg" className={classes.container}>
      <Typography variant="h4" align="center" className={classes.header}>
        User Information
      </Typography>
      <TableContainer component={Paper} className={classes.table_container}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>{user.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Status;

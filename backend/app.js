//import the express module
const express = require("express"); //first step
const mysql = require("mysql2"); //import my sql module
const port = 5000; //second step setting listener port
//create express app
const app = express();
//define connection for the database
const dbConfig = {
  connectionLimit: 10,
  password: "",
  user: "root",
  host: "127.0.0.1",
  database: "ems",
};
//create a connectio to the database
const connection = mysql.createConnection(dbConfig);
//connect to database
connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});
//use express.json method to parse the body
app.use(express.json());
// Allow CORS for all origins
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // Allowed methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allowed headers

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // No content response
  }

  next(); // Proceed to the next middleware or route handler
});
//create a listener page
app.get("/", (req, res) => {
  res.send("listening");
});
//set up the post to listenet
app.post("/add-account", (req, res) => {
  console.log(req.body); // Log the request body
  const { firstName, lastName, password } = req.body;

  // Validate input
  if (!firstName || !lastName || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // SQL query to insert a new employee
  const query =
    "INSERT INTO accounts (firstName, lastName, password) VALUES (?, ?,  ?)";
  connection.query(query, [firstName, lastName, password], (err, results) => {
    if (err) {
      console.error("Error inserting employee: " + err.stack);
      return res.status(500).json({ error: "Database error." });
    }

    // Respond with success
    res.status(201).json({
      message: "Employee added successfully!",
      employeeId: results.insertId,
    });
  });
});
// viiew user
app.get("/view-account", (req, res) => {
  const query = "SELECT * FROM accounts"; // Adjust the table name as needed
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching accounts: " + err.stack);
      return res.status(500).json({ error: "Database error." });
    }
    res.status(200).json(results); // Send the fetched results
  });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  // SQL query to find the employee
  const query = "SELECT * FROM employe_test WHERE email = ? AND password = ?";
  connection.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error querying database: " + err.stack);
      return res.status(500).json({ error: "Database error." });
    }

    // Check if an employee was found
    if (results.length > 0) {
      // Employee found
      res
        .status(200)
        .json({ message: "Login successful!", employee: results[0] });
    } else {
      // No matching employee
      res.status(401).json({ error: "Invalid credentials." });
    }
  });
});
app.listen(port, () => console.log(`listening on port ${port}`)); //set up the listener

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(express.json()); // Make sure this is included at the top

app.use(cors()); // Enable CORS

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Set your MySQL password here
  database: "ems",
});

// Route to view accounts
app.get("/view-account", (req, res) => {
  const q = "SELECT * FROM accounts";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// // Route to add an account

// app.post("/add-account", (req, res) => {
//   const { firstName, lastName, password } = req.body;

//   const q =
//     "INSERT INTO accounts (firstName, lastName, password) VALUES (?, ?, ?)";

//   db.query(q, [firstName, lastName, password], (err, result) => {
//     if (err) {
//       console.error("Database error:", err); // Log full error to console
//       return res
//         .status(500)
//         .json({ error: "Database insert failed", details: err });
//     }

//     return res.json({
//       message: "Account added successfully",
//       id: result.insertId,
//     });
//   });
// });
// Start the server
app.listen(3005, () => {
  console.log(`Server is running on port 3002`);
});

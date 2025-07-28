// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql2"); // or any other database you are using

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(cors()); // Enable CORS
// app.use(express.json()); // Parse JSON requests

// // Create a MySQL connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "", // Set your MySQL password here
//   database: "ems",
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error("Database connection failed:", err.stack);
//     return;
//   }
//   console.log("Connected to database.");
// });

// // // API Routes

// // // Registration Route
// app.post("/add-account", (req, res) => {
//   const { firstName, lastName, password } = req.body;

//   if (!firstName || !lastName || !password) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   const query =
//     "INSERT INTO accounts (firstName, lastName, password) VALUES (?, ?, ?)";
//   db.query(query, [firstName, lastName, password], (error, results) => {
//     if (error) {
//       console.error("Error inserting data:", error);
//       return res.status(500).json({ error: "Failed to register user" });
//     }
//     res.status(201).json({
//       message: "User registered successfully",
//       userId: results.insertId,
//     });
//   });
// });

// // // Add Exam Route
// // app.post("/add-exam", (req, res) => {
// //   const { examName, subjectId } = req.body;

// //   const query = "INSERT INTO exams (examName, subjectId) VALUES (?, ?)";
// //   db.query(query, [examName, subjectId], (error, results) => {
// //     if (error) {
// //       console.error("Error adding exam:", error);
// //       return res.status(500).json({ error: "Failed to add exam" });
// //     }
// //     res
// //       .status(201)
// //       .json({ message: "Exam added successfully", examId: results.insertId });
// //   });
// // });

// // // Add Question Route
// // app.post("/add-question", (req, res) => {
// //   const { questionText, examId } = req.body;

// //   const query = "INSERT INTO questions (questionText, examId) VALUES (?, ?)";
// //   db.query(query, [questionText, examId], (error, results) => {
// //     if (error) {
// //       console.error("Error adding question:", error);
// //       return res.status(500).json({ error: "Failed to add question" });
// //     }
// //     res.status(201).json({
// //       message: "Question added successfully",
// //       questionId: results.insertId,
// //     });
// //   });
// // });

// // // Add Subject Route
// // app.post("/add-subject", (req, res) => {
// //   const { subjectName } = req.body;

// //   const query = "INSERT INTO subjects (subjectName) VALUES (?)";
// //   db.query(query, [subjectName], (error, results) => {
// //     if (error) {
// //       console.error("Error adding subject:", error);
// //       return res.status(500).json({ error: "Failed to add subject" });
// //     }
// //     res.status(201).json({
// //       message: "Subject added successfully",
// //       subjectId: results.insertId,
// //     });
// //   });
// // });

// // // Get Status Route (example)
// // app.get("/view-status", (req, res) => {
// //   // Example logic to fetch status
// //   res.json({ status: "All systems operational" });
// // });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

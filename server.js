const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const cTable = require('console.table');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

// display all departments
db.query(`SELECT * FROM departments`, (err, rows) => {
  console.table(rows);
});

// display all roles
db.query(`SELECT * FROM roles`, (err, rows) => {
  console.table(rows);
});

// display all employees
db.query(`SELECT * FROM employees`, (err, rows) => {
  console.table(rows);
});

// add a department
// const sql = `INSERT INTO departments (department_name) 
//               VALUES (?)`;
// const params = ['I.T.'];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
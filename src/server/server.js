const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'aakansha23@',
  database: 'employee_management',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Routes for employees
app.post('/api/addEmployee', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    jobTitle,
    dateOfBirth,
    gender,
    address,
    maritalStatus,
    dateOfHire,
    salary
  } = req.body;

  const sql = `
    INSERT INTO employees 
    (firstName, lastName, email, phone, jobTitle, dateOfBirth, gender, address, maritalStatus, dateOfHire, salary) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    firstName,
    lastName,
    email,
    phone,
    jobTitle,
    dateOfBirth,
    gender,
    address,
    maritalStatus,
    dateOfHire,
    salary
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting employee data into the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true, message: 'Employee added successfully' });
    }
  });
});

app.get('/api/getEmployees', (req, res) => {
  const sql = 'SELECT * FROM employees';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving employee data from the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true, employees: results });
    }
  });
});

app.put('/api/updateEmployee/:id', (req, res) => {
  const employeeId = req.params.id;
  const updatedDetails = req.body;

  const sql = 'UPDATE employees SET ? WHERE id = ?';

  db.query(sql, [updatedDetails, employeeId], (err, result) => {
    if (err) {
      console.error('Error updating employee data in the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Employee not found' });
      } else {
        res.json({ success: true, message: 'Employee updated successfully' });
      }
    }
  });
});

app.delete('/api/deleteEmployee/:id', (req, res) => {
  const employeeId = req.params.id;

  const sql = 'DELETE FROM employees WHERE id = ?';

  db.query(sql, [employeeId], (err, result) => {
    if (err) {
      console.error('Error deleting employee data from the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Employee not found' });
      } else {
        res.json({ success: true, message: 'Employee deleted successfully' });
      }
    }
  });
});

// Routes for projects
app.post('/api/addProject', (req, res) => {
  const {
    projectName,
    projectManager,
    startDate,
    endDate,
    projectStatus,
    budget
  } = req.body;

  // Format startDate and endDate to YYYY-MM-DD format
  const formattedStartDate = new Date(startDate).toISOString().split('T')[0];
  const formattedEndDate = new Date(endDate).toISOString().split('T')[0];

  const sql = `
    INSERT INTO projects 
    (projectName, projectManager, startDate, endDate, projectStatus, budget) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [
    projectName,
    projectManager,
    formattedStartDate, // Use the formatted date here
    formattedEndDate, // Use the formatted date here
    projectStatus,
    budget
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting project data into the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true, message: 'Project added successfully' });
    }
  });
});

app.get('/api/getProjects', (req, res) => {
  const sql = 'SELECT * FROM projects';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving project data from the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true, projects: results });
    }
  });
});

// ... (Additional routes for projects)

// Serve the React app with an absolute path
app.use(express.static(path.join(__dirname, '../build')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

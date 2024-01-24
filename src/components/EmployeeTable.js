import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/EmployeeTable.css';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/getEmployees')
      .then(response => {
        setEmployees(response.data.employees);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  const handleUpdateClick = async (employeeId) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/getEmployee/${employeeId}`);
      const employeeData = response.data;
      navigate(`/update/${employeeId}`);
    } catch (error) {
      console.error('Error fetching employee data for update:', error);
    }
  };

  const handleDeleteClick = async (employeeId) => {
    try {
      await axios.delete(`http://localhost:3001/api/deleteEmployee/${employeeId}`);
      console.log('Employee deleted successfully');
      setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== employeeId));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <table border="1" className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Job Title</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Marital Status</th>
            <th>Date of Hire</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.gender}</td>
              <td>{employee.address}</td>
              <td>{employee.maritalStatus}</td>
              <td>{employee.dateOfHire}</td>
              <td>{employee.salary}</td>
              <td>
                <Link to={`/update/${employee.id}`}>
                  <button className="update-button" onClick={() => handleUpdateClick(employee.id)}>Update</button>
                </Link>
                <button className="delete-button" onClick={() => handleDeleteClick(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

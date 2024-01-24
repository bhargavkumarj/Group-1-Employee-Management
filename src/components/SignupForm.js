import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    maritalStatus: '',
    dateOfHire: '',
    salary: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/getEmployee/${id}`);
          const employeeData = response.data;
          setFormData(employeeData);
        } catch (error) {
          console.error('Error fetching employee data for update:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Format dateOfBirth and dateOfHire to YYYY-MM-DD format
      const formattedFormData = {
        ...formData,
        dateOfBirth: formData.dateOfBirth, // No need to split T for date part only
        dateOfHire: formData.dateOfHire, // No need to split T for date part only
      };

      if (id) {
        await axios.put(`http://localhost:3001/api/updateEmployee/${id}`, formattedFormData);
        console.log('Employee updated successfully');
      } else {
        await axios.post('http://localhost:3001/api/addEmployee', formattedFormData);
        console.log('Employee added successfully');
      }

      navigate('/admin');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        maritalStatus: '',
        dateOfHire: '',
        salary: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="signup-form-container">
      <h2>Employee Details</h2>
      <form onSubmit={handleSubmit} className="empForm">
        {Object.entries(formData).map(([fieldName, fieldValue]) => (
          <div key={fieldName} className="form-group">
            <label className="empLabel">
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:
              {fieldName === 'dateOfBirth' || fieldName === 'dateOfHire' ? (
                <input
                  type="date"
                  name={fieldName}
                  value={fieldValue}
                  onChange={handleChange}
                  className="empBox"
                />
              ) : fieldName === 'maritalStatus' ? (
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name={fieldName}
                      value="married"
                      checked={fieldValue === 'married'}
                      onChange={handleChange}
                    />
                    <span>Married</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name={fieldName}
                      value="single"
                      checked={fieldValue === 'single'}
                      onChange={handleChange}
                    />
                    <span>Single</span>
                  </label>
                </div>
              ) : fieldName === 'gender' ? (
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name={fieldName}
                      value="male"
                      checked={fieldValue === 'male'}
                      onChange={handleChange}
                    />
                    <span>Male</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name={fieldName}
                      value="female"
                      checked={fieldValue === 'female'}
                      onChange={handleChange}
                    />
                    <span>Female</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name={fieldName}
                      value="others"
                      checked={fieldValue === 'others'}
                      onChange={handleChange}
                    />
                    <span>Others</span>
                  </label>
                </div>
              ) : (
                <input
                  type="text"
                  name={fieldName}
                  value={fieldValue}
                  onChange={handleChange}
                  className="empBox"
                />
              )}
            </label>
          </div>
        ))}
        <div className="emp-form-group">
          <button type="submit" className="empButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

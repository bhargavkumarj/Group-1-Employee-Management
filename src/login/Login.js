import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import EmpLogin from '../assets/emp_login.jpeg';

function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ userId: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (credentials.userId === 'employee@gmail.com' && credentials.password === 'employee') {
      
      navigate('/employee');
    } else if (credentials.userId === 'admin@gmail.com' && credentials.password === 'admin') {
      
      navigate('/admin');
    } else {
      
      alert('Invalid credentials. Please try again.');
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${EmpLogin})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="login-container" style={backgroundStyle}>
      <div className="form-div">
        <form className="login-form" onSubmit={handleSubmit}>
          <table className="form-table">
            <h2 className="form-title">Sign In</h2>
            <input
              type="text"
              id="id"
              className="fadeIn second"
              name="userId"
              placeholder="Username"
              value={credentials.userId}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
            <input type="submit" className="fadeIn fourth" value="Sign In" />
          </table>
        </form>
      </div>
    </div>
  );
}

export default Login;

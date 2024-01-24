import React from 'react';
import BannerImage from '../assets/Banner-image.jpg'
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home()
 {
    
  return (
    <div className='home' style={{ backgroundImage:`url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>Employee Management System</h1>
        <p>Welcome</p>
        <Link to="/signup">
        <button>Add Employee</button>
        </Link>
      </div>
    </div>
  )
}

export default Home

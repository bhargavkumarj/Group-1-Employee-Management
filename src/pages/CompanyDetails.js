import React from 'react';

import companyImage from '../assets/peoples.png'; 
import '../styles/CompanyDetails.css';


function CompanyDetails() {
  return (
    <div className='companyDetails'>
     
      <div className='companycont'>
        <h1>Employee Management System</h1>
        <div className='compAddr'>
            <h3>Address</h3>
            <p>
            Plot No 1/C, Sy No 83/1, Raidurgam panmaktha Hyderabad Knowledge City,</p>
            <p> 
            Serilingampally, Hyderabad, Telangana 500081.       
            </p>

        </div>
        <div className='compPhone'>
            <h3>Mobile Number</h3>
            <p>+91 9856459001</p>
            <p>+91 9856338609</p>
        </div>
        <div className='compEmail'>
            <h3>Email Address</h3>
            <p>Email: jane.manager@example.com</p>
        </div>
        <div className='compTime'>
            <h3>Timings</h3>
            <p>Open 24 hrs</p>
        </div>
      </div>
      <div className='people-image'>
        {/* Display the image */}
        <img src={companyImage} alt="Company Pic" />
      </div>
    </div>
  )
}

export default CompanyDetails;

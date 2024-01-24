// src/pages/AccorionPage.js.js
import React from 'react';
import Accordion from '../components/Accordion';
import '../styles/AccordionPage.css';

const items = [
  {
    title: 'Personal Details',
    content: `Full Name: John Doe   
    Date of Birth: January 1, 1990
    Gender: Male
    Mobile No: +91 9234567890 
    Email: john.doe@gmail.com
    Marital Status: Single
    Address: Kothapet,Hyderabad,telangana`,
  },
  {
    title: 'Professional Details',
    content: `Employee ID: E123456
    Job Title: Software Engineer
    Date of Hire: January 1, 2020
    Employment Status: Full-time
    Salary: $80,000
    Work Location: Hyderabad Knowledge City, Serilingampally, Hyderabad, Telangana 500081`,
  },
  {
    title: 'Finance Details',
    content: `Salary: $80,000
    Bank Account: XXXX-XXXX-XXXX-1234
    Tax Information: Single, 0 exemptions
    Bonuses: $5,000 (Annual performance bonus)
    Deductions: $500 (Health insurance)
    401(k) Contributions: 5% of salary
    Stock Options: Yes
    Expense Reimbursements: $1,000 (Annual)`,
  },
];

const AccordionPage = () => {
  return (
    <div className='page-container'>
      <div className='accord-container'>
        <h1>Employee Details</h1>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default AccordionPage;

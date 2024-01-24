//components/Sidebar.js
import React from 'react';
import '../App.css';
import '../styles/Sidebar.css';
import {SidebarData} from './SidebarData';
import { Link } from 'react-router-dom';
import EmployeeTable from './EmployeeTable';
// import CompanyDetails from './CompanyDetails'; // Make sure to import CompanyDetails


function Sidebar() {
  return (
    <div className='container'>
        <div className='Sidebar'id="column">
        <ul className='SidebarList'>
        {
            SidebarData.map((val,key) => {
                return(
                    <li key={key} className='row' id={window.location.pathname === val.link ? "active" : ""} 
                    onClick={()=>window.location.pathname = val.link}>
                        <div id="icon" className='side-icon'>{val.icon}</div>
                        <div id="title" className='side-title'>{val.title}</div>
                    </li>
                );
            })
        }
        </ul>
      </div>
      <div id="column" className='empContainerbox'>
        
        {/* Button to Add Employee */}
        <Link to="/signup" className='employee_button'>
          <button>Add Employee</button>
        </Link>
        

        {/* Content based on the selected link */}
        <section id="employee">
          <EmployeeTable />
        </section>

      </div>
    </div>
  )
}

export default Sidebar

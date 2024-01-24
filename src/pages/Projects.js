// pages/Projects.js
import React from 'react';
import ProjectTable from '../components/ProjectTable';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projectsPage'>
      {/* Button to Add Project */}
      <Link to="/projectsignup" className='project_button'>
        <button>Add Project</button>
      </Link>
      
      {/* Display ProjectTable */}
      <ProjectTable />
    </div>
  );
}

export default Projects;

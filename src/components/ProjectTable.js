// src/components/ProjectTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProjectTable.css';

const ProjectTable = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/getProjects');
      setProjects(response.data.projects);
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
  };

  useEffect(() => {
    // Fetch project data when the component mounts
    fetchProjects();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className='projectTableContainer'>
      <table className='projectTable'>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Project Manager</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Project Status</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.projectName}</td>
              <td>{project.projectManager}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
              <td>{project.projectStatus}</td>
              <td>{project.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;

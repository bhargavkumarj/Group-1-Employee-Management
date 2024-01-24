import React, { useState } from 'react';
import '../styles/ProjectForm.css';

const ProjectForm = () => {
  const initialProjectData = {
    projectName: '',
    projectManager: '',
    startDate: '',
    endDate: '',
    projectStatus: 'inProgress',
    budget: 0,
  };

  const [projectData, setProjectData] = useState(initialProjectData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting project data:', projectData);

      const response = await fetch('http://localhost:3001/api/addProject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      console.log('Server response:', response);

      if (response.ok) {
        console.log('Project added successfully');
        // Clear all form fields after successful submission
        setProjectData(initialProjectData);
      } else {
        const errorText = await response.text();
        console.error('Error adding project:', errorText);
      }
    } catch (error) {
      console.error('Error adding project:', error.message);
    }
  };

  return (
    <div className='projectContainer'>
      <form onSubmit={handleSubmit} className='projectForm'>
      <h2 className='projectHeading'>Project Details</h2>

      <label htmlFor="projectName" className='ProjectLabel'>
        Project Name:
      </label>
      <input
        type="text"
        id="projectName"
        name="projectName"
        value={projectData.projectName}
        onChange={handleChange}
        required
        className="projectName"
      />

      <label htmlFor="projectManager" className='ProjectLabel'>
        Project Manager:
      </label>
      <input
        type="text"
        id="projectManager"
        name="projectManager"
        value={projectData.projectManager}
        onChange={handleChange}
        required
        className="projectManager"
      />

      <label htmlFor="startDate" className='ProjectLabel'>
        Start Date:
      </label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={projectData.startDate}
        onChange={handleChange}
        required
        className="startDate"
      />

      <label htmlFor="endDate" className='ProjectLabel'>
        End Date:
      </label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={projectData.endDate}
        onChange={handleChange}
        required
        className="endDate"
      />

      <label htmlFor="projectStatus" className='ProjectLabel'>
        Project Status:
      </label>
      <select
        id="projectStatus"
        name="projectStatus"
        value={projectData.projectStatus}
        onChange={handleChange}
        required
        className="projectStatus"
      >
        <option value="inProgress">In Progress</option>
        <option value="completed">Completed</option>
        <option value="onHold">On Hold</option>
        <option value="canceled">Canceled</option>
      </select>

      <label htmlFor="budget" className='ProjectLabel'>
        Budget:
      </label>
      <input
        type="number"
        id="budget"
        name="budget"
        value={projectData.budget}
        onChange={handleChange}
        required
        className="budget"
      />

      <button type="submit" className='projectButton'>
        Submit
      </button>
    </form>
    </div>
  );
};

export default ProjectForm;

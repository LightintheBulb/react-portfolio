import React from 'react';
import Project from '../components/Projects';

export default function Portfolio() {
  return (
    <div>
    <div className='section-header mt-4 mb-4'><h1><u>Projects</u></h1>
    </div>

    <div className='custom-portfolio-container card'>
    <div className='px-4 py-3 mx-auto'>
      <Project />
    </div>
  </div>
  </div>
);
}
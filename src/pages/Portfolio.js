import React from 'react';
import Project from '../components/Projects';

export default function Portfolio() {
  return (
    <div className='mx-auto'><h1>Portfolio</h1>
    <div className='custom-portfolio-container card'>
    <div className='px-4 py-3 mx-auto'>
      <h2 className='contact-header p-2' style={{ position: 'center' }}>Projects</h2>
      <hr style={{ borderTop: 'solid 10px rgb(0, 0, 0)' }} />
      <Project />
    </div>
  </div>
  </div>
);
}

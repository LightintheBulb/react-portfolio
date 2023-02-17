import React from 'react';
import './About.css';
import aboutPhoto from '../assets/aboutPhoto_0001.jpeg';

export default function About() {
  return (
    <div className='container-fluid custom-about-container pb-1'>
      <div className='card mx-auto custom-card'>
        <div className='card-body'>
          <div className='col-sm-6 col-md-2 pr-3 mb-4'>
          <figure className='about-figure-image'>
          {/* <img src={aboutPhoto} className='profile-pic mx-4 mt-4' alt='Profile Pic 1'/> */}
          <img src={aboutPhoto} className='profile-pic' alt='Profile Pic 1'/>
          {/* <img src={aboutPhoto} className='img-fluid mb-3 cmb-headshot' alt='Profile Pic 1'/> */}
          </figure>
          </div>
          <div className='card-content mx-4'>
          {/* <div className='col-sm-12 col-md-9 mr-2 mb-4'> */}
            <h2 className='card-title mt-4 mb-4'>
              <u>About Me</u>
            </h2>
            <hr style={{ borderTop: 'solid 2px rgb(255, 189, 131)' }} />
            <p className='about-card-text'>
                Hello! My name is [Your Name], and I'm a [Your Profession] with a
                passion for building amazing software that solves real-world problems.
                I'm driven by the belief that technology can change the world, and I'm
                constantly looking for new ways to use my skills to make a positive
                impact.
            </p>
            <p className='about-card-text'>
                I have [Number] years of experience working with [Your
                Key Skills/Technologies], and I'm always eager to learn new things. I
                believe in the importance of staying up-to-date with the latest
                developments in the tech industry, and I make a point to keep my skills
                sharp by attending conferences, reading tech blogs, and collaborating
                with other developers.
            </p>
            <p className='about-card-text'>
                In my free time, I enjoy [Your Personal Interests/Hobbies], and I find
                that these activities help me stay creative and energized. I'm a big
                believer in work-life balance, and I strive to maintain a healthy
                balance between my professional and personal pursuits.<br></br>
                If you're interested in working together or learning more about my work,
                please don't hesitate to [Your Call to Action (e.g. "get in touch",
                "view my portfolio", "check out my GitHub", etc.)]. I look forward to
                hearing from you!
            </p>
            <p className='about-card-text'>Outside of coding, I enjoy music, sports, and all things movies, television, and gaming!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
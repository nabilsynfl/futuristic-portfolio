import React from 'react';
import './about.css';

const About = () => {
  return (
    <>
      <div className="bg-color"></div>
      <div className="container-content">
        <div className="about-content">
          <div className="title">
            <h1>WHO IS NABIL SYAHNAUFAL</h1>
          </div>

          <div className='about-paraf'>
            <div className="about-text">
              <h1>The short introduction of my life</h1>
              <p>
              I have always been fascinated by the endless possibilities of the internet and the ways it can be leveraged to make our lives better. I decided to pursue a career in web engineering to help build innovative and impactful web-based solutions that can solve complex problems and make a difference in people's lives.
              </p>
              <h1>Career and development</h1>
              <p>
              Throughout my career, I have worked with a wide range of technologies, from front-end frameworks like React and Angular to back-end frameworks like Node.js and Django. I am passionate about staying up-to-date with the latest industry trends and tools and continually learning new skills to improve my craft.
              </p>
              <h1>More can be added in the left side for summary</h1>
              <p>
              As a web engineer, my top priority is to ensure the reliability, scalability, and security of the web applications I develop. I enjoy collaborating with cross-functional teams and working closely with clients to understand their needs and provide them with the best possible solutions.
              </p>
            </div>

            <div className="human">
              <img src="/home-screen-icon/human.svg" alt="" />
              <div className="top left"></div>
              <div className="top right"></div>
              <div className="bottom right"></div>
              <div className="bottom left"></div> 
            </div>
          </div>
        </div>

        <div className="top left"></div>
        <div className="top right"></div>
        <div className="bottom right"></div>
        <div className="bottom left"></div>
      </div>
    </>
  )
}

export default About
import React from 'react';
import './skil.css';

const Skill = () => {
  return (
    <>
      <div className="bg-color"></div>
      <div className="container-content">
        <div className="tech">
          <h1>Technologies I Used</h1>
          <div className="container">
            <div className="filter">
              <label>Filter : </label>
              <input type="checkbox" htmlFor="All"/>
              <h4>All</h4>
              <input type="checkbox" htmlFor="FrontEnd"/>
              <h4>Front End</h4>
              <input type="checkbox" htmlFor="BackEnd"/>
              <h4>Back End</h4>
              <input type="checkbox" htmlFor="cms" />
              <h4>CMS</h4>
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

export default Skill
import React from 'react'
import './right-sidebar.css';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
            <div className="achievment">
                <div className="active-quest">
                    <h1>ACTIVE QUEST</h1>
                </div>
                <div className="skill-up">
                    <h3>THE REACT SKILL-UP LINE</h3>
                </div>
                
                <div className="child">
                    <h4>QUEST NAME</h4>
                    <h1>REACT WEBSITE</h1>

                    <h4>GOAL</h4>
                    <p>BUILD THIS WEBSITE. IMPLEMENT<br></br> A FULL REACT WEBSITE WITH<br></br> MULTIPLE ROUTES. UI<br></br> ELEMENTS AND TRICKY STYLING<br></br> MAKE IT ALL WORK GRAT!</p>

                    <h4>REWARDS</h4>
                </div>

                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <div className="setting">
                    <div className='sound-effect'>
                        <label><h1>SOUND EFFECT</h1></label>
                        <input type="checkbox" />
                    </div>
                    <div className="music">
                        <label><h1>MUSIC</h1></label>
                        <input type="checkbox" />
                    </div>
            </div>
    </div>
  )
}

export default RightSidebar
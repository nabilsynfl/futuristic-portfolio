import React from 'react';
import './home.css';

const Home = () => {
  return (
    <>
     <div className='bg-color'>Home</div>
      <div className='baner'>
        <div className='judul'>
          <h1>HI!</h1>
        </div>
        <div className='paraf'>
          <h4>WELCOME TO NIKOLAI WEBSITE</h4>
          <p>I HAVE CREATED THIS WEBSITE TO FEEL LIKE A SCI-FI INTERFACE. ALL <br></br> TEXT INSIDE TRIES TO REFLECT THIS.</p>
          <p className='parafcuy'>YOU WILL FIND 'ACHIEVEMENTS OR 'QUEST' THAT SHOW THE PROGRESS IN MY <br></br> PROFESSIONAL LIFE AND ARE REALTED TO WHAT I AM WORKING ON.</p>
          <a href='../page/home-screen'><button>ENTER THE SYSTEM</button></a>
        </div>
      </div>
    </>
  )
}

export default Home
import React from 'react';
import './header.css';

export async function getServerSideProps() {
  const currentTime = new Date().toString();

  return {
    props: {
      currentTime
    }
  };
}

const Header = ({currentTime}) => {
  return (
    <header className="header">
      <nav>
        <div className='left-side'>
          <h4><span>48</span> LEVEL</h4>
          <div className='icon-header'>
            <img src="../header-icon/+.svg" alt="" />
          </div>
          <h4><span>1,425</span> COINS AWARDED</h4>
        </div>

        <div className="timer">
          <h4>CREDITS</h4>
          <h4>SERVER TIME: <span>8:42</span></h4>
          <h4>LOCAL TIME : <span>15:42</span></h4>    
        </div>
      </nav>
    </header>
  )
}

export default Header
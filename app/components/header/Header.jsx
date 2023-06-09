"use client"

import {useState, useEffect} from 'react';
import './header.css';

const Header = () => {
  const [seconds,setSeconds] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [openModal, setModal] = useState(false);

  let timer;
  useEffect(() => {
    timer=setInterval(() => {
      setSeconds(seconds+1);
      if(seconds===59){
        setMinutes(minutes+1)
        if(minutes===60){
          setHours(hours+1);
        }
        setSeconds(0)
      }
    }, 1000)

    return ()=> clearInterval(timer);
  });

  let showDate = new Date();
  let getHours = showDate.getHours();
  let getMinutes = showDate.getMinutes();

  return (
    <header className="header">
      <nav>
        <div className='left-side'>
          <h4><span>48</span> LEVEL</h4>
          <h4><span>1,425</span> VISITOR</h4>
        </div>

        <div className="timer">
          <button onClick={() => {setModal(true)}}><h4>CREDITS</h4></button>
          <h4>SERVER TIME: <span>{hours}:{minutes}:{seconds}</span></h4>
          <h4>LOCAL TIME : <span>{getHours}:{getMinutes}</span></h4>    
        </div>
      </nav>
      {openModal &&
            <div className="credits">
              <div className="judul">
                <h1>CREDITS</h1>
                <button onClick={() => {setModal(false)}}>x</button>
              </div>
              <p>EVERYTHING INVOLVED IN THIS PROJECT</p>
              <div className="data-credits">
                <table>
                  <tr>
                    <td>DEVELOPED BY</td>
                    <td>DESIGNED BY</td>
                    <td>AUDIO EFFECT</td>
                    <td>MUSIC</td>
                  </tr>
                  <tr>
                    <td>Nabil Syahnaufal (Nikolai Mutzki)</td>
                    <td>Alex DIMITROV @XAVORTM</td>
                    <td>CLICK, HOVER, TYPING AND ALL OTHER</td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
      }
    </header>
  )
}

export default Header
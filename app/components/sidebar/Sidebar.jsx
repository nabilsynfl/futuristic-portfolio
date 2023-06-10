"use client";

import {useState, useEffect} from 'react';
import Image from 'next/image';
import './sidebar.css';

const Sidebar = () => {
    const [openConnection, setConnection ] = useState(false);

  return (
    <>
        <div className="container-sidebar">
            <div className="side-bar">
                <div className="profile">
                    <div className="foto-container">
                        <Image
                        src="/home-screen-icon/profile.png"
                        alt="profile"
                        width={164}
                        height={148}
                        priority={true}
                        />
                    </div>
                    <div className="data">
                        <div className="name">
                            <label>NAME</label>
                            <h1>NIKOLAI MUTZSKI</h1>
                        </div>

                        <div className="occupation">
                            <label>OCCUPATION</label>
                            <h1>WEB DEVELOPER</h1>
                        </div>
                    </div>
                    <div className="form">
                        <label>AVAILABILITY</label>
                        <button className="hire">
                            <span>OPEN FOR HIRE</span>
                        </button>

                        <label>SOCIAL</label>
                        <button className='social' onClick={() => {setConnection(true)}}>
                            <span>OPEN CONNECTION</span>
                            <span className='bluetooth'>
                                <img src="/home-screen-icon/Frame.svg" alt="" />
                            </span>
                        </button>

                        {openConnection &&
                                <div className="credits">
                                <div className="judul">
                                    <h1>CREDITS</h1>
                                    <button onClick={() => {setConnection(false)}}>x</button>
                                </div>
                                <p>EVERYTHING INVOLVED IN THIS PROJECT</p>
                                <div className="data-credits">
                                    <table>
                                    <tr>
                                        <td>DEVELOPED BY</td>
                                        <td>Nabil Syahnaufal (Nikolai Mutzki)</td>
                                    </tr>
                                    <tr>
                                        <td>DESIGNED BY</td>
                                        <td>Alex DIMITROV @XAVORTM</td>
                                    </tr>
                                    <tr>       
                                        <td>AUDIO EFFECT</td>  
                                        <td>CLICK, HOVER, TYPING AND ALL OTHER</td>
                                    </tr>
                                    </table>
                                </div>
                                </div>
                        }
                    </div>
                </div>

                <div className="moto">
                    <h1>MOTTO: </h1>
                    <p>SAEPE OMNIS NEQUE<br></br> NUMQUAM RECUSANDAE <br></br>Laudantum</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar
import React from 'react';
import Image from 'next/image';
import './sidebar.css';

const Sidebar = () => {
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
                        <button className='social'>
                            <span>OPEN CONNECTION</span>
                            <span className='bluetooth'>
                                <img src="/home-screen-icon/Frame.svg" alt="" />
                            </span>
                        </button>
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
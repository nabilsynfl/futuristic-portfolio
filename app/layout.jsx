"use client"

import { useState, useEffect } from 'react';
import './globals.css'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import RightSidebar from './components/sidebar/rightSidebar';
import Navbar from './components/navbar/Navbar';

export const metadata = {
  title: 'Nabil Syahnaufal',
  description: 'Portfolio Nabil Syahnaufal',
}

export default function RootLayout({ children }) {
  const [openModal, setModal] = useState(false);
  const [openConnection, setConnection ] = useState(false);
  const [openForHire, setOpenForHire] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setConnection(false);
        setModal(false);
        setOpenForHire(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <html lang="en">
        <body>
          {openModal &&
              <div className="credits">
                <div className="judul">
                  <h1>CREDITS</h1>
                </div>
                <p>EVERYTHING INVOLVED IN THIS PROJECT</p>
                <div className="data-credits">
                  <div className="data">
                      <h1>DEVELOPED BY</h1>
                      <h4>NABIL SYAHNAUFAL @NIKOLAI_MUTZKI</h4>
                    </div>
                    <div className="data">
                      <h1>DESIGNED BY</h1>
                      <h4 className='special'>ALEX DIMITROV @XAVORTM</h4>
                    </div>
                    <div className="data">
                      <h1>AUDIO EFFECTS</h1>
                      <h4>CLICK, HOVER, TYPING AND ALL OTHER</h4>
                   </div>
                </div>
              </div>
           }

          {openConnection &&
            <div className='button'>
              <div className="open-connection">
                <div className="judul">
                    <h1>HOW SHOULD I CALL YOU</h1>
                    <input type="text" placeholder='YOUR NAME' />
                    <h1>SENDING FROM</h1>
                    <input type="email" placeholder='YOUR.NAME@ACME.COM' />
                    <h1>TRANSMITTED DATA</h1>
                    <textarea name="transmitted" id="message" cols="30" rows="10"></textarea>
                </div>
              </div>
              <div className='send'>
                <button className='enter'>SEND MESSAGE [ENTER]</button>
                <button className='esc'>DISCARD [ESC]</button>
              </div>
            </div>                     
          }

          {openForHire &&
            <div className='button'>
              <div className="open-connection">
                <div className="judul">
                    <h1>HOW SHOULD I CALL YOU</h1>
                    <input type="text" placeholder='YOUR NAME' />
                    <h1>SENDING FROM</h1>
                    <input type="email" placeholder='YOUR.NAME@ACME.COM' />
                    <h1>TRANSMITTED DATA</h1>
                    <textarea name="transmitted" id="message" cols="30" rows="10"></textarea>
                </div>
              </div>
              <div className='send'>
                <button className='enter'>SEND MESSAGE [ENTER]</button>
                <button className='esc'>DISCARD [ESC]</button>
              </div>
          </div>                         
          }
          <div className={`normal ${openModal ? 'animation' : 'normal'} ${openConnection ? 'animation' : 'normal'} ${openForHire ? 'animation' : 'normal'} `}>
            <Header setModal={setModal}/>
            <Sidebar setConnection={setConnection} setOpenForHire={setOpenForHire}/>
            <RightSidebar />
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </>
  )
}

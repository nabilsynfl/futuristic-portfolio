"use client"

import { useState } from 'react';
import './globals.css'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import RightSidebar from './components/sidebar/rightSidebar';
import Navbar from './components/navbar/Navbar';

export const metadata = {
  title: 'Nikolai',
  description: 'Portfolio Nabil Syahnaufal',
}

export default function RootLayout({ children }) {
  const [openModal, setModal] = useState(false);
  const [openConnection, setConnection ] = useState(false);

  return (
    <>
      <html lang="en">
        <body>
          {openModal &&
              <div className="credits">
                <div className="judul">
                  <h1>CREDITS</h1>
                  <button onClick={() => {setModal(false)}}>x</button>
                </div>
                <p>EVERYTHING INVOLVED IN THIS PROJECT</p>
                <div className="data-credits">
              
                </div>
              </div>
           }

          {openConnection &&
            <div className="credits">
              <div className="judul">
                  <h1>CREDITS</h1>
                  <button onClick={() => {setConnection(false)}}>x</button>
              </div>
              <p>EVERYTHING INVOLVED IN THIS PROJECT</p>
              <div className="data-credits">
                  
              </div>
            </div>                     
          }
          <div className={`normal ${openModal ? 'animation' : 'normal'} ${openConnection ? 'animation' : 'normal'}`}>
            <Header setModal={setModal}/>
            <Sidebar setConnection={setConnection}/>
            <RightSidebar />
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </>
  )
}

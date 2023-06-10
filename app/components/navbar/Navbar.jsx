import React from 'react'
import './navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <Link style={{color: 'inherit', textDecoration: 'inherit'}} rel='preload' as="page/beginning" href='/page/beginning'>
                <div className="container">
                    <div className="container-navbar">
                        <div className="container-header">
                            <h1>BEGINNING</h1>
                        </div>
                        <div className="container-paraf">
                            <p>LOREM IPSUM COMOSUENTO<br></br>NAMO VALUETERM SET<br></br>LABORE SREPE</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        <Link style={{color: 'inherit', textDecoration: 'inherit'}} rel='preload' as="page/about" href='/page/about'>
            <div className="container">
                <div className="container-navbar">
                    <div className="container-header">
                        <h1>About</h1>
                    </div>
                    <div className="container-paraf">
                        <p>LOREM IPSUM COMOSUENTO<br></br>NAMO VALUETERM SET<br></br>LABORE SREPE</p>
                    </div>
                </div>
            </div>
        </Link>
        <Link style={{color: 'inherit', textDecoration: 'inherit'}} rel='preload' as="page/project" href='/page/project'>
            <div className="container">
                <div className="container-navbar">
                    <div className="container-header">
                        <h1>Project</h1>
                    </div>
                    <div className="container-paraf">
                        <p>LOREM IPSUM COMOSUENTO<br></br>NAMO VALUETERM SET<br></br>LABORE SREPE</p>
                    </div>
                </div>
            </div>
        </Link>
        <Link style={{color: 'inherit', textDecoration: 'inherit'}} rel='preload' as="page/skills" href='/page/skills'>
            <div className="container">
                <div className="container-navbar">
                    <div className="container-header">
                        <h1>Skills</h1>
                    </div>
                    <div className="container-paraf">
                        <p>LOREM IPSUM COMOSUENTO<br></br>NAMO VALUETERM SET<br></br>LABORE SREPE</p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Navbar
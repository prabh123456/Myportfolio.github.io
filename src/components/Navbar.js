import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin ,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
    if (darkmode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };
  const twitterpath='https://x.com/HarpinderSand20?t=mCbWPORS2Jw607gZFV-WxA&s=09';
  const linktwitter = () => {
    window.open(twitterpath ,'_blank');
  };
  const linkedinpath='https://www.linkedin.com/in/harpinder5911?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
   const linkLinkedin = ()=>{
    window.open(linkedinpath,'_blank');
   };
  return (
    <>
      <div>
        <nav className={`navbar ${darkmode ? 'dark-mode' : 'light-mode'}`}>
          <img className='logo'src={darkmode ? 'https://i.imgur.com/aqzVahv.png' :'https://i.imgur.com/RfM5RC0.png'}></img>
           <button onClick={toggleMenu} className='toggle-button'>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} /> </button> 
          <ul  className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li className={`a11 ${darkmode ? 'a11' : ''}`}><Link to="/Home">Home</Link></li>
            <li className={`a11 ${darkmode ? 'a11' : ''}`}><Link to="/About">About</Link></li>
            <li className={`a11 ${darkmode ? 'a11' : ''}`}><Link to="/Contact">Contact Me</Link></li>
          <li ><FontAwesomeIcon icon={faXTwitter} onClick={linktwitter} className='x' /></li>
          <li ><FontAwesomeIcon icon={faLinkedin} onClick={linkLinkedin} className='in' /></li>
         <li ><div className="moon" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={darkmode ? faSun : faMoon} /></div></li> 
           
         
          </ul>
        </nav>
      </div>
    </>
  );
}; 
export default Navbar;






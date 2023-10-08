import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
const Home = () => {
  const [darkmode, setDarkmode] = useState(false);
  const resumepath="https://i.imgur.com/iWju0rm.png";
  const myimage ='https://i.imgur.com/7Xo1MT6.jpg';
  
  const openresume = ()=>{
       window.open(resumepath,'_blank');
  };
  const navigate = useNavigate(); 

  const openabout = () => {
    navigate('/about'); 
  };
  return (
    <>
    <div className='clr'>
      <p className='c1'>Hello! Glad you're here.</p>
    </div>
    <div className='container'>
      <img className='img1' src={myimage} alt="My Image" />
      <div className='content-container'>
     <p className='h1'>My name is Harpinder Singh Sandhu</p> 
     <p className='h2'>I am currently a Master's student at Baba Farid College</p>
     <button onClick={openresume} className={`btn1 dark-button ${darkmode ? 'dark-button': 'light-button'}`} >RESUME  </button>
     <button onClick={openabout} className={`btn1 btn2 dark-button ${darkmode ? 'dark-button': 'light-button'}`}>KNOW MORE <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></button>
     </div>
     </div>
   
    </>
  )
}

export default Home;




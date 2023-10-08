import React from 'react';
import  './About.css';
const About = () => {
  const myimg2='https://i.imgur.com/NRA9FiN.jpg';
  return (
    <div>
        <h1 className='h12'>ABOUT ME </h1>
        < div className ='container'>
       <img className='img2' src={myimg2} />
        <div className='para'>
      <p>Hello, I'm <span>Harpinder Singh Sandhu</span>, a dedicated MBA student with a passion for business and a drive for continuous learning and growth. Currently pursuing my <span>Master of Business Administration at Baba Farid College of Managment and Technology</span>, I am on a journey to expand my horizons and unlock the full spectrum of possibilities that the world of business offers</p>
      <br />
      <p>I embarked on my academic journey with a strong foundation in Bachelors of Commerce, which provided me with valuable insights into business. My unwavering commitment to academic excellence earned me 73%, which reinforced my belief in the power of dedication and perseverance.</p>
      <br />
      <p>Thank you for visiting my portfolio, and I look forward to connecting with you!
</p>
</div>
    </div>
    </div>
    
  )
}

export default About;

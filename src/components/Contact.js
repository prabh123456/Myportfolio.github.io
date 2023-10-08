
import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');

  function saveUser() { // Changed the function name to saveUser
    const Data = { name, email, textarea };

    fetch('https://mocki.io/v1/c643a223-3eba-46a8-8348-60f17b17a21b', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', // Corrected the header field name
      },
      body: JSON.stringify(Data),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <>
      <div className="d1">
        <h1 className="h11">CONTACT ME</h1>

        <p className="p1">If you have any questions or would like to get in touch, feel free to contact me using the following methods:</p>
        <p className="p2"><FontAwesomeIcon icon={faPhone} /> Phone: +91-9780705911</p>
        <p className="p3"><FontAwesomeIcon icon={faEnvelope} /> Email: <span className="p5">hssandhu300@gmail.com</span></p>
        <p className="p4"><FontAwesomeIcon icon={faLocationDot} /> Address: VPO Sukhanwala, Distt. Faridkot, Punjab</p>
        <p className="p6">Please fill out the form below to discuss any work opportunity</p>
        <div className="box">
          <div className="box1">
            <label htmlFor="name"></label>
            <input
              type="text"
              className={`dark-form ${darkmode ? 'dark-form' : 'light-form'}`}
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <label htmlFor="email"></label>
            <input
              type="text"
              className={`dark-form ${darkmode ? 'dark-form' : 'light-form'}`}
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <textarea id="myTextarea" 
              className={`dark-form ${darkmode ? 'dark-form' : 'light-form'}`}
              id="text"
              cols="40"
              rows="5"
              placeholder="Your Message"
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
            ></textarea>
            <br></br>
            <button
              className={`btn2 dark-button ${darkmode ? 'dark-button' : 'light-button'}`}
              onClick={saveUser} // Fixed the function name
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

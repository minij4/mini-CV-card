import React from 'react';
import Me from '../photos/me.jpg';
import Mail from '../photos/mail.png';
import LinkedIn from '../photos/linkedin.png';
export default function Info() {
  return (
    <div className='info'>
      <img src={Me} className="me"/>
      <div className='info-text'>
        <p className='info-name'>Emilija Biti</p>
        <p className='info-role'>Web Developer</p>
        <p className='info-site'>minija.site</p>
      </div>
      <div className='info-social'>
        <a href="#" className="social-mail" target="_blank"><img src={Mail} /> Email</a>
        <a href="https://www.linkedin.com/in/minija" className="social-linkedin" target="_blank"><img src={LinkedIn} /> LinkedIn</a>
      </div>
    </div>
  );
}
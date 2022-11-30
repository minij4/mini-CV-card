import React from 'react';
import Facebook from '../photos/fb.png';
import Github from '../photos/gh.png';
import Instagram from '../photos/insta.png';

export default function Footer() {
  return (
    <div className='footer'>
        <a href="https://www.facebook.com/3m1l1j4/" className='social-instagram' target="_blank"><img src={Facebook} /></a>
        <a href="https://github.com/minij4" className='social-facebook' target="_blank"><img src={Github} /></a>
        <a href="https://www.instagram.com/e_minija/" className='social-github' target="_blank"><img src={Instagram} /></a>
    </div>
  );
}
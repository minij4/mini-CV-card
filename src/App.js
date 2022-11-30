import React from 'react';
import Info from './components/Info';
import Interests from './components/Interests';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='container'>
      <Info />
      <Interests />
      <Experience />
      <Footer />
    </div>
  );
}
import React from 'react'
import w1 from '../assets/w1.png';
import w2 from '../assets/w2.png';
import w3 from '../assets/w3.png';
import ps1 from '../assets/ps1.png';
import ps2 from '../assets/ps2.png';
import ps3 from '../assets/ps3.png';
import b1 from '../assets/22.png';
import b2 from '../assets/23.png';
import b3 from '../assets/24.png';
import b4 from '../assets/25.png';
import b5 from '../assets/26.png';
import b6 from '../assets/27.png';
import './Others.scss';

function Others() {
  return (
    <div className='others'>
      <div className='content'>
        <h1 className='title'>Other Websites</h1>
        <div className='images'>
          <img src={w1} alt='w1'></img>
          <img src={w2} alt='w2'></img>
          <img src={w3} alt='w3'></img>
        </div>
      </div>
      <div className='content'>
        <h1 className='title'>Blender</h1>
        <div className='images'>
          <img src={b1} alt='b1'></img>
          <img src={b2} alt='b2'></img>
          <img src={b3} alt='b3'></img>
          <img src={b4} alt='b4'></img>
          <img src={b5} alt='b5'></img>
          <img src={b6} alt='b6'></img>
        </div>
      </div>
      <div className='content'>
        <h1 className='title'>Photoshop</h1>
        <div className='images'>
          <img className='landscape' src={ps1} alt='ps1'></img>
          <img src={ps2} alt='ps2'></img>
          <img src={ps3} alt='ps3'></img>
        </div>
      </div>
    </div>
  )
}

export default Others;

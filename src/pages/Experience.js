import React from 'react'
import Work from '../components/Work';
import eldev from '../assets/eldev.png';
import yabb from '../assets/yabb.png';
import ypb from '../assets/ypb.png';
import './Experience.scss';

function Experience() {
  return (
    <div className='experience'>
      <Work 
      title='YAYASAN PETA BENCANA'
      job='Front End Engineer'
      desc='Website Feature Updates using Angular JS and Typescript (Extending website features)'
      src={ypb}
      alt='ypb'
      />
      <Work 
      title='YAYASAN ANAK BANGSA BISA'
      job='Front End Engineer'
      desc='Learning website path development using ReactJS, Typescript, Redux, MaterialUI, etc.'
      src={yabb}
      alt='yabb'
      />
      <Work 
      title='ELDEV SOLUSINDO'
      job='Front End Engineer'
      desc='Build website for school attendance using Laravel'
      src={eldev}
      alt='eldev'
      />
    </div>
  )
}

export default Experience

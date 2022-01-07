import React from 'react';

function Work({title, job, desc, src, alt}) {
  return (
    <div className='work'>
      <div className='left'>
        <h1>{title}</h1>
        <h2>{job}</h2>
        <p>{desc}</p>
      </div>
      <div className='right'>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default Work

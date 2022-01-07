import Box from '../components/Box';
import React from 'react';
import './Home.scss';
import Content from '../components/Content';

function Home() {
  return (
    <div className="Main">
      <Content className="content" />
      <Box className="box" />
    </div>
  )
}

export default Home;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Experience from './Experience';
import Home from './Home';

const Routing = () => {
  return (
    <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/experience' element={<Experience/>} />
        </Routes>
    </Router>
  );
};

export default Routing;

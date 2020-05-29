import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Body from './components/body/Body'
import Navbar from './components/navbar/Navbar'
import FeatureImageModule from './components/feature-image/FeatureModule';



function App() {
  return (
    <div >
      <Navbar />
      <Body />
    </div>
  );
}

export default App;

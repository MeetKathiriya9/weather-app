import '../App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar';
import Home from './Home';
import Weather from './Weather';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>

          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/weather" element={<Weather></Weather>}></Route>
          </Routes>

        </Router>
      </div>
    )
  }
}

export default App

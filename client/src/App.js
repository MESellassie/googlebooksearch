import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Jumbotron from './components/Jumbotron';

import './App.css';

function App() {
  return (

    <Router>
      <Navbar/>
      <Container>
      <Jumbotron></Jumbotron>
      </Container>
    </Router>

  );
}

export default App;

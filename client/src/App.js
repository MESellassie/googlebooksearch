import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookSearch from "./pages/BookSearch";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (

    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={BookSearch}/>
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;

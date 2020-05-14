import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookSearch from "./pages/BookSearch";
import SaveBook from "./pages/SaveBook"
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (

    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={BookSearch}/>
        <Route exact path="/saved" component={SaveBook}/>
        <Route exact path="/saved/:id" component={SaveBook}/>

      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;

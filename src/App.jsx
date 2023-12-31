import React from 'react'
import Head from './components/common/heading/Head'
import "../src/index.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Cursos from './components/cursos/Cursos';
import img_l from "../src/logo_low.png"


const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
              <Route path="/" exact component= {Home}/>
              <Route path="/about" exact component= {About}/>
              <Route path="/courses" exact component= {Cursos}/>
            </Switch>
        </Router>
      );
    };

export default App

import React from 'react'
import Head from './components/common/heading/Head'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Header from './components/common/heading/Header';



const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
            </Switch>
        </Router>
      );
    };

export default App

import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import BottomBar from './components/BottomBar';

import "./App.css"

function App() {
  return (
    <div className="app">
      <div class="ui compact menu">
        <div class="ui simple dropdown item">
          <i class="big inverted bars icon"></i>
          <div class="menu" style={{backgroundColor: "transparent"}}>
            <div class="item"><Link to="/">Home</Link></div>
            <div class="item"><Link to="/about">About</Link></div>
            <div class="item"><Link to="/projects">Projects</Link></div>
            <div class="item"><a href="./Resume.pdf" download="Mohamed Kharaev Resume">Resume</a></div>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>

      <BottomBar />
    </div>
  );
}

export default App;

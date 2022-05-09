import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import Database from "./pages/database";
import Home from "./pages/home";
import Projects from "./pages/projects";


function App() {
  return (
    <Router>
    
      <body className=" bg-[url(./components/images/background.jpg)] bg-local  h-full min-h-screen ">
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home}>
            
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/database">
            <Database />
          </Route>
        </Switch>
        
      </body>
      
    </Router>
  );
}

export default App;

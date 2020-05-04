import React, { Component, Fragment } from "react";
import { Router, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import {BrowserRouter} from "react-router-dom";

const One = () => <h1>One</h1>;
const Two = () => <h1>Two</h1>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/comment" exact component={One} />
          <Route path="/file" exact component={Two} />
      </BrowserRouter>
    </div>
  );
}

export default App;

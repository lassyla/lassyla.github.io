import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'; 
import './App.css';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
          <Content/>
          </div>
        </Router>
    );
  }
}

export default App;

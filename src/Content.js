import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'; 
import './App.css';
import Gallery from './Gallery.js';
import Project from './Project.js';
import './Content.css';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      current: "best"
    };
  }

  render() {
    return (
        <div className="Content">
        <br></br>
            <div className="Header">
              Hello! My name is Alyssa. I like to write code and make art. <br></br>
               {/* I'm studying Computer Science and Fine Arts at Carnegie Mellon University. <br></br>email twitter github  */}
              <br></br>
              <div id="buttons">
                <Link className={"button " + (this.state.current === "2d" ? "active" : "")} to="/" onClick={() => this.setState({current: "2d"})}>2D </Link>
                <Link className={"button " + (this.state.current === "3d" ? "active" : "")} to="/" onClick={() => this.setState({current: "3d"})}>3D </Link>
                <Link className={"button " + (this.state.current === "code" ? "active" : "")} to="/" onClick={() => this.setState({current: "code"})}>code </Link>
                <Link className={"button " + (this.state.current === "all" ? "active" : "")} to="/" onClick={() => this.setState({current: "all"})}>all </Link>
              </div>
            </div>
            <Switch>
              <Route path='/proj1' component={() => <Project link="proj1"/>} />
              <Route path='/huevember' component={() => <Project link="huevember"/>} />
              <Route path='/genbook' component={() => <Project link="genbook"/>} />
              <Route path='/comic' component={() => <Project link="comic"/>} />
              <Route path='/mocap' component={() => <Project link="mocap"/>} />
              <Route path='/tidal' component={() => <Project link="tidal"/>} />
              <Route path='/misc' component={() => <Project link="misc"/>} />
              <Route path='/fanart' component={() => <Project link="fanart"/>} />
              <Route path='/stickers' component={() => <Project link="stickers"/>} />
              <Route path='/blender' component={() => <Project link="blender"/>} />
              <Route path='/processing' component={() => <Project link="processing"/>} />
              <Route path='/shelves' component={() => <Project link="shelves"/>} />
              <Route path='/bot' component={() => <Project link="bot"/>} />
              <Route path='/snowgum' component={() => <Project link="snowgum"/>} />
              <Route path='/sort' component={() => <Project link="sort"/>} />
              <Route path='/AP' component={() => <Project link="AP"/>} />
              <Route path='/rpg' component={() => <Project link="rpg"/>} />
              <Route path='/toonboom' component={() => <Project link="toonboom"/>} />
              <Route path='/webdev' component={() => <Project link="webdev"/>} />
              <Route path='/hackathon' component={() => <Project link="hackathon"/>} />
              <Route path='/' component={() => <Gallery current={this.state.current}/>} />
            </Switch>
        </div>
    );
  }
}


export default App;

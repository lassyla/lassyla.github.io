import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'; 
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
              <Route path={process.env.PUBLIC_URL + '/proj1'} component={() => <Project link="proj1"/>} />
              <Route path={process.env.PUBLIC_URL + '/huevember'} component={() => <Project link="huevember"/>} />
              <Route path={process.env.PUBLIC_URL + '/genbook'} component={() => <Project link="genbook"/>} />
              <Route path={process.env.PUBLIC_URL + '/comic'} component={() => <Project link="comic"/>} />
              <Route path={process.env.PUBLIC_URL + '/mocap'} component={() => <Project link="mocap"/>} />
              <Route path={process.env.PUBLIC_URL + '/tidal'} component={() => <Project link="tidal"/>} />
              <Route path={process.env.PUBLIC_URL + '/misc'} component={() => <Project link="misc"/>} />
              <Route path={process.env.PUBLIC_URL + '/fanart'} component={() => <Project link="fanart"/>} />
              <Route path={process.env.PUBLIC_URL + '/stickers'} component={() => <Project link="stickers"/>} />
              <Route path={process.env.PUBLIC_URL + '/blender'} component={() => <Project link="blender"/>} />
              <Route path={process.env.PUBLIC_URL + '/processing'} component={() => <Project link="processing"/>} />
              <Route path={process.env.PUBLIC_URL + '/shelves'} component={() => <Project link="shelves"/>} />
              <Route path={process.env.PUBLIC_URL + '/bot'} component={() => <Project link="bot"/>} />
              <Route path={process.env.PUBLIC_URL + '/snowgum'} component={() => <Project link="snowgum"/>} />
              <Route path={process.env.PUBLIC_URL + '/sort'} component={() => <Project link="sort"/>} />
              <Route path={process.env.PUBLIC_URL + '/AP'} component={() => <Project link="AP"/>} />
              <Route path={process.env.PUBLIC_URL + '/rpg'} component={() => <Project link="rpg"/>} />
              <Route path={process.env.PUBLIC_URL + '/toonboom'} component={() => <Project link="toonboom"/>} />
              <Route path={process.env.PUBLIC_URL + '/webdev'} component={() => <Project link="webdev"/>} />
              <Route path={process.env.PUBLIC_URL + '/hackathon'} component={() => <Project link="hackathon"/>} />
              <Route path={process.env.PUBLIC_URL + '/'} component={() => <Gallery current={this.state.current}/>} />
            </Switch>
        </div>
    );
  }
}


export default App;

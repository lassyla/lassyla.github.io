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
      current: "home"
    };
  }

  render() {
    return (
        <div className="Content">
        <br></br>
            <div className="Header">
              <div id="name">Alyssa H. Lee</div>
              <br></br>
              <div id="buttons">
                <Link className={"button " + (this.state.current === "home" ? "active" : "")} to="/" onClick={() => this.setState({current: "home"})}>home</Link>
                <Link className={"button " + (this.state.current === "3d" ? "active" : "")} to="/3d" onClick={() => this.setState({current: "3d"})}>3D </Link>
                <Link className={"button " + (this.state.current === "2d" ? "active" : "")} to="/2d" onClick={() => this.setState({current: "2d"})}>2D </Link>
                <Link className={"button " + (this.state.current === "code" ? "active" : "")} to="/code" onClick={() => this.setState({current: "code"})}>code </Link>
                <Link className={"button " + (this.state.current === "about" ? "active" : "")} to="/about" onClick={() => this.setState({current: "about"})}>about</Link>

              </div>
            </div>
            <Switch>
              <Route path={process.env.PUBLIC_URL + '/painter'} component={() => <Project link="painter"/>} />
              <Route path={process.env.PUBLIC_URL + '/graphics'} component={() => <Project link="graphics"/>} />
              <Route path={process.env.PUBLIC_URL + '/huevember'} component={() => <Project link="huevember"/>} />
              <Route path={process.env.PUBLIC_URL + '/genbook'} component={() => <Project link="genbook"/>} />
              <Route path={process.env.PUBLIC_URL + '/misc3d'} component={() => <Project link="misc3d"/>} />
              <Route path={process.env.PUBLIC_URL + '/methods'} component={() => <Project link="methods"/>} />
              <Route path={process.env.PUBLIC_URL + '/comic'} component={() => <Project link="comic"/>} />
              <Route path={process.env.PUBLIC_URL + '/mocap'} component={() => <Project link="mocap"/>} />
              <Route path={process.env.PUBLIC_URL + '/tidal'} component={() => <Project link="tidal"/>} />
              <Route path={process.env.PUBLIC_URL + '/misc'} component={() => <Project link="misc"/>} />
              <Route path={process.env.PUBLIC_URL + '/fanart'} component={() => <Project link="fanart"/>} />
              <Route path={process.env.PUBLIC_URL + '/stickers'} component={() => <Project link="stickers"/>} />
              <Route path={process.env.PUBLIC_URL + '/shelves'} component={() => <Project link="shelves"/>} />
              <Route path={process.env.PUBLIC_URL + '/bot'} component={() => <Project link="bot"/>} />
              <Route path={process.env.PUBLIC_URL + '/gif'} component={() => <Project link="gif"/>} />
              <Route path={process.env.PUBLIC_URL + '/sort'} component={() => <Project link="sort"/>} />
              <Route path={process.env.PUBLIC_URL + '/toonboom'} component={() => <Project link="toonboom"/>} />
              <Route path={process.env.PUBLIC_URL + '/hackathon'} component={() => <Project link="hackathon"/>} />
              <Route path={process.env.PUBLIC_URL + '/design'} component={() => <Project link="design"/>} />
              <Route path={process.env.PUBLIC_URL + '/home'} component={() => <Project link="home"/>} />
              <Route path={process.env.PUBLIC_URL + '/about'} component={() => <Project link="about"/>} />
              <Route path={process.env.PUBLIC_URL + '/webdev'} component={() => <Project link="webdev"/>} />
              <Route path={process.env.PUBLIC_URL + '/ink'} component={() => <Project link="ink"/>} />
              <Route path={process.env.PUBLIC_URL + '/eggbot'} component={() => <Project link="eggbot"/>} />
              <Route path={process.env.PUBLIC_URL + '/ea'} component={() => <Project link="ea"/>} />
              <Route path={process.env.PUBLIC_URL + '/2d'} component={() => <Gallery current="2d"/>} />
              <Route path={process.env.PUBLIC_URL + '/3d'} component={() => <Gallery current="3d"/>} />
              <Route path={process.env.PUBLIC_URL + '/about'} component={() => <Project link="about"/>} />
              <Route path={process.env.PUBLIC_URL + '/pup'} component={() => <Project link="pup"/>} />
              <Route path={process.env.PUBLIC_URL + '/sim'} component={() => <Project link="sim"/>} />
              <Route path={process.env.PUBLIC_URL + '/realtime'} component={() => <Project link="realtime"/>} />
              <Route path={process.env.PUBLIC_URL + '/code'} component={() => <Gallery current="code"/>} />
              <Route path={process.env.PUBLIC_URL + '/'} component={() => <Project link="home"/>} />

            </Switch>
        </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'; 
import Project from './Project.js';

class Gallery extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      categories: { "2d" : ["comic", "misc", "fanart", "stickers", "AP", "toonboom", "gif"],
                    "3d" : ["sim", "pup", "grown", "realtime", "painter", "eggbot", "ink", "huevember", "mocap", "tidal", "blender", "shelves", "bot", "misc3d"],
                    "code" : ["painter","game", "eggbot", "ink", "genbook", "mocap", "tidal", "karen", "processing", "shelves", "bot", "snowgum", "sort", "hackathon", "webdev"],
                    "best": ["huevember", "tidal", "misc", "genbook", "mocap", "fanart"], 
                    "all" : ["blendertools", "20sec", "huevember", "genbook", "comic", "mocap", "tidal", "misc", "fanart", "stickers", "blender", "processing", "shelves", "bot", "snowgum", "sort", "AP", "hackathon", "rpg", "toonboom", "webdev"],
                    "projects": ["blendertools","film","misc","zoetrope","bugs","fruit","huevember","20sec", "sim","game","realtime","pup","unity","ink","eggbot","painter","tidal","webdev","mocap","shelves","bot"],
                    "" : []
                  },
    };
  }
  render() {

    return (
        
        <div className="Gallery">
        
          <Box link="blendertools" filetype=".png" year="2023-current" desc="" title="Misc Blender Tools" filter={this.state.categories[this.props.current]}/> 
          <Box link="bugs" filetype=".gif" year="2024" desc="blender" title="Procedural Bugs" filter={this.state.categories[this.props.current]}/> 
          <Box link="20sec" filetype=".png" year="2025" desc="godot, blender" title="20 Second Game Jam" filter={this.state.categories[this.props.current]}/> 
          <Box link="film" filetype=".png" year="2025" desc="houdini" title="Film VFX" filter={this.state.categories[this.props.current]}/> 
          <Box link="zoetrope" filetype=".gif" year="2023" desc="blender" title="Zoetrope" filter={this.state.categories[this.props.current]}/> 
          <Box link="fruit" filetype=".png" year="2020" desc="unity, blender" title="Fruit Fight" filter={this.state.categories[this.props.current]}/> 
          <Box link="sim" filetype=".png" year="2020"  desc="houdini, blender, maya" title="Misc Simulations" filter={this.state.categories[this.props.current]}/> 
          <Box link="game" filetype=".png" year="2020" desc="C++"title="CMU Game Programming" filter={this.state.categories[this.props.current]}/> 
          <Box link="graphics" filetype=".png" year="2020" desc="" title="15-462 Computer Graphics" filter={this.state.categories[this.props.current]}/> 
          <Box link="eggbot" filetype=".png" year="2019"  desc="three.js, twitter bot" title="Eggbot" filter={this.state.categories[this.props.current]}/> 
          <Box link="grown" filetype=".png"year="2020" desc="maya"  title="'Grown' Short Film" filter={this.state.categories[this.props.current]}/> 
          <Box link="ink" filetype=".gif" year="2019" desc="unity" title="Ink Game" filter={this.state.categories[this.props.current]}/> 
          <Box link="pup" filetype=".png" year="2019" desc="" title="Pixar PUP" filter={this.state.categories[this.props.current]}/> 
          <Box link="realtime" filetype=".png" year="2019"  desc="unity"title="CMU Real Time Animation" filter={this.state.categories[this.props.current]}/> 
          <Box link="huevember" filetype=".png" year="2018" desc="maya" title="Huevember" filter={this.state.categories[this.props.current]}/> 
          <Box link="genbook" filetype=".png" year="2019" desc=""title="Generative Book" filter={this.state.categories[this.props.current]}/> 
          <Box link="mocap" filetype=".gif" year="2018" desc="three.js"title="Garbage People" filter={this.state.categories[this.props.current]}/> 
          <Box link="painter" filetype=".png" year="2018" desc="three.js"title="Planet Painter" filter={this.state.categories[this.props.current]}/> 
          <Box link="misc3d" filetype=".png" year="" desc=""title="3D illustration" filter={this.state.categories[this.props.current]}/> 
          <Box link="tidal" filetype=".png" year="2018" desc="three.js" title="Tidal Clock" filter={this.state.categories[this.props.current]}/> 
          <Box link="misc" filetype=".png" year="" desc="photoshop"title="Drawings" filter={this.state.categories[this.props.current]}/> 
          <Box link="fanart" filetype=".png" year="" desc=""title="Fanart" filter={this.state.categories[this.props.current]}/> 
          <Box link="stickers" filetype=".png" year="" desc=""title="Stickers" filter={this.state.categories[this.props.current]}/> 
          <Box link="sort" filetype=".gif" year="" desc=""title="Selection Sort Game" filter={this.state.categories[this.props.current]}/> 
          <Box link="design" filetype=".png" year="" desc=""title="design" filter={this.state.categories[this.props.current]}/> 
          <Box link="hackathon" filetype=".png" year="" desc=""title="Hackathons" filter={this.state.categories[this.props.current]}/> 
          <Box link="comic" filetype=".png" year="2019" desc=""title="24 hr comic" filter={this.state.categories[this.props.current]}/> 
          <Box link="gif" filetype=".gif" year="2020" desc=""title="GIF" filter={this.state.categories[this.props.current]}/> 
          <Box link="webdev" filetype=".png" year="2017" desc=""title="old website" filter={this.state.categories[this.props.current]}/> 
          <Box link="toonboom" filetype=".png" year="2017" desc=""title="2D Animations" filter={this.state.categories[this.props.current]}/> 
          <Box link="bot" filetype=".png" year="2017"desc="" title="Bot-a-Razzi" filter={this.state.categories[this.props.current]}/> 
          <Box link="shelves" filetype=".png" year="2017" desc=""title="Shelves" filter={this.state.categories[this.props.current]}/> 

        </div>           
    );
  }

}

class Box extends Component { 
    render() { 
      if(this.props.filter.includes(this.props.link))
        return (
            <Link to={"/" + this.props.link} className="Box">
                {/* <div className="Overlay"> {this.props.title} </div> */}
                <img src={require("./images/thumbnails/" + this.props.link + this.props.filetype)}/> 
                <div className="title"> 
                  {this.props.title}
                </div>
                <div className="desc"> 
                  {this.props.desc} 
                </div>
                <div className="year"> 
                  {this.props.year}
                </div>
            </Link>
        ); 
      else return (<div id="nothing"></div> ); 
    }
}
export default Gallery;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'; 
import Project from './Project.js';

class Gallery extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      categories: { "2d" : ["comic", "misc", "fanart", "stickers", "AP", "toonboom", "gif"],
                    "3d" : ["sim", "pup", "realtime", "painter", "eggbot", "ink", "huevember", "mocap", "tidal", "blender", "shelves", "bot", "misc3d"],
                    "code" : ["painter", "eggbot", "ink", "genbook", "mocap", "tidal", "karen", "processing", "shelves", "bot", "snowgum", "sort", "hackathon", "webdev"],
                    "best": ["huevember", "tidal", "misc", "genbook", "mocap", "fanart"], 
                    "all" : ["huevember", "genbook", "comic", "mocap", "tidal", "misc", "fanart", "stickers", "blender", "processing", "shelves", "bot", "snowgum", "sort", "AP", "hackathon", "rpg", "toonboom", "webdev"],
                    "" : []
                  },
    };
  }
  render() {

    return (
        
        <div className="Gallery">
        
          <Box link="pup" filetype=".png"  desc="Pixar PUP" filter={this.state.categories[this.props.current]}/> 
          <Box link="realtime" filetype=".png"  desc="Unity" filter={this.state.categories[this.props.current]}/> 
          <Box link="sim" filetype=".png"  desc="Simulations" filter={this.state.categories[this.props.current]}/> 
          <Box link="graphics" filetype=".png"  desc="15-462 Computer Graphics" filter={this.state.categories[this.props.current]}/> 
          <Box link="ink" filetype=".gif"  desc="Ink Game" filter={this.state.categories[this.props.current]}/> 
          <Box link="huevember" filetype=".png"  desc="Huevember" filter={this.state.categories[this.props.current]}/> 
          <Box link="eggbot" filetype=".png"  desc="Eggbot" filter={this.state.categories[this.props.current]}/> 
          <Box link="genbook" filetype=".png" desc="Generative Book" filter={this.state.categories[this.props.current]}/> 
          <Box link="mocap" filetype=".gif" desc="Motion Capture" filter={this.state.categories[this.props.current]}/> 
          <Box link="painter" filetype=".png" desc="Planet Painter" filter={this.state.categories[this.props.current]}/> 
          <Box link="misc3d" filetype=".gif" desc="3D models" filter={this.state.categories[this.props.current]}/> 
          <Box link="tidal" filetype=".png" desc="Tidal Clock" filter={this.state.categories[this.props.current]}/> 
          <Box link="misc" filetype=".png" desc="Original Art" filter={this.state.categories[this.props.current]}/> 
          <Box link="fanart" filetype=".png" desc="Fanart" filter={this.state.categories[this.props.current]}/> 
          <Box link="stickers" filetype=".png" desc="Stickers" filter={this.state.categories[this.props.current]}/> 
          <Box link="sort" filetype=".gif" desc="Selection Sort Game" filter={this.state.categories[this.props.current]}/> 
          <Box link="design" filetype=".png" desc="design" filter={this.state.categories[this.props.current]}/> 
          <Box link="hackathon" filetype=".png" desc="Hackathons" filter={this.state.categories[this.props.current]}/> 
          <Box link="comic" filetype=".png" desc="24 hr comic" filter={this.state.categories[this.props.current]}/> 
          <Box link="gif" filetype=".gif" desc="GIF" filter={this.state.categories[this.props.current]}/> 
          <Box link="webdev" filetype=".png" desc="old website" filter={this.state.categories[this.props.current]}/> 
          <Box link="toonboom" filetype=".png" desc="2D Animations" filter={this.state.categories[this.props.current]}/> 
          <Box link="bot" filetype=".png" desc="Bot-a-Razzi" filter={this.state.categories[this.props.current]}/> 
          <Box link="shelves" filetype=".png" desc="Shelves" filter={this.state.categories[this.props.current]}/> 

        </div>           
    );
  }

}

class Box extends Component { 
    render() { 
      if(this.props.filter.includes(this.props.link))
        return (
            <Link to={"/" + this.props.link} className="Box">
                <div className="Overlay"> {this.props.desc} </div>
                <img src={require("./images/thumbnails/" + this.props.link + this.props.filetype)}/> 
            </Link>
        ); 
      else return (<div id="nothing"></div> ); 
    }
}
export default Gallery;

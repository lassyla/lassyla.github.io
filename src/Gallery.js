import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'; 

class Gallery extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      categories: { "2d" : ["comic", "misc", "fanart", "stickers", "AP", "toonboom"],
                    "3d" : ["huevember", "genbook", "mocap", "tidal", "blender", "shelves", "bot"],
                    "code" : ["genbook", "mocap", "tidal", "processing", "shelves", "bot", "snowgum", "sort", "hackathon", "rpg", "webdev"],
                    "best": ["huevember", "tidal", "misc", "genbook", "mocap", "fanart"], 
                    "all" : ["huevember", "genbook", "comic", "mocap", "tidal", "misc", "fanart", "stickers", "blender", "processing", "shelves", "bot", "snowgum", "sort", "AP", "hackathon", "rpg", "toonboom", "webdev"]
                  },
      current: "all"
    };
  }
  render() {
    return (
        
        <div className="Gallery">
          <Box link="huevember" filetype=".png"  desc="Huevember" filter={this.state.categories[this.props.current]}/> 
          <Box link="genbook" filetype=".png" desc="Generative Book: Medical Facts" filter={this.state.categories[this.props.current]}/> 
          <Box link="comic" filetype=".png" desc="24 hr comic" filter={this.state.categories[this.props.current]}/> 
          <Box link="mocap" filetype=".gif" desc="Motion Capture" filter={this.state.categories[this.props.current]}/> 
          <Box link="tidal" filetype=".gif" desc="Tidal Clock" filter={this.state.categories[this.props.current]}/> 
          <Box link="misc" filetype=".png" desc="Original Paintings" filter={this.state.categories[this.props.current]}/> 
          <Box link="fanart" filetype=".png" desc="Fanart" filter={this.state.categories[this.props.current]}/> 
          <Box link="stickers" filetype=".png" desc="Stickers" filter={this.state.categories[this.props.current]}/> 
          {/* <Box link="blender" filetype=".gif" desc="Blender" filter={this.state.categories[this.props.current]}/>  */}
          {/* <Box link="processing" filetype=".gif" desc="Processing/P5 sketches" filter={this.state.categories[this.props.current]}/>  */}
          <Box link="shelves" filetype=".png" desc="Shelves" filter={this.state.categories[this.props.current]}/> 
          <Box link="bot" filetype=".png" desc="Bot-a-Razzi" filter={this.state.categories[this.props.current]}/> 
          {/* <Box link="snowgum" filetype=".png" desc="Snowgum" filter={this.state.categories[this.props.current]}/>  */}
          <Box link="sort" filetype=".gif" desc="Selection Sort Game" filter={this.state.categories[this.props.current]}/> 
          {/* <Box link="AP" filetype=".jpg" desc="AP Art Portfolio" filter={this.state.categories[this.props.current]}/> 
          <Box link="hackathon" filetype=".png" desc="Hackathons" filter={this.state.categories[this.props.current]}/> 
          <Box link="rpg" filetype=".gif" desc="RPGmaker game" filter={this.state.categories[this.props.current]}/> 
          <Box link="toonboom" filetype=".gif" desc="2D Animations" filter={this.state.categories[this.props.current]}/> 
          <Box link="webdev" filetype=".png" desc="Web Development Portfolio" filter={this.state.categories[this.props.current]}/>  */}
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

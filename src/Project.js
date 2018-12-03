import React, { Component } from 'react';
import ModalImage from 'react-modal-image'

class Project extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    switch(this.props.link) {
      case "huevember": 
        return (
          <div className="Project">
            <h>Huevember</h>
            <ModalImage className="smallImg" small={require("./images/huevember/pink.png")} large={require("./images/huevember/pink.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/orange.png")} large={require("./images/huevember/orange.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/yellow.png")} large={require("./images/huevember/yellow.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/green.png")} large={require("./images/huevember/green.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/blue.png")} large={require("./images/huevember/blue.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/purple.png")} large={require("./images/huevember/purple.png")} hideDownload="true" hideZoom="true"/>
            <br></br>
            All of these illustrations were created using Maya and Photoshop. <br></br> Also, I wrote a Python script to make eggs. I'm pretty happy with it.<br></br>
            <img src={require("./images/huevember/egg_gen.gif")}/>
            <br></br>
          </div>
        );
      case "genbook": 
        return (
          <div className="Project">
            <h>Generative Book: Medical Facts</h>
            <ModalImage className="smallImg" small={require("./images/60212/ss2.png")} large={require("./images/60212/ss2.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/60212/ss3.png")} large={require("./images/60212/ss3.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/60212/ss0.png")} large={require("./images/60212/ss0.png")} hideDownload="true" hideZoom="true"/>
            <br></br>
            This was a project for 60-212. The prompt was to write software that generates chapter for a book. You can read about my process <a href="http://cmuems.com/2018/60212f/lass/11/16/lass-book/">here</a>!
          </div>
        );
      case "comic": 
        return (
          <div className="Project">
            <h>24 Hour Comic</h>
            <br></br> A comic that I made in one day! <br></br>
            <ModalImage className="smallImg" small={require("./images/comic/1.png")} large={require("./images/comic/1.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/comic/2.png")} large={require("./images/comic/2.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/comic/3.png")} large={require("./images/comic/3.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/comic/4.png")} large={require("./images/comic/4.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/comic/5.png")} large={require("./images/comic/5.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/comic/6.png")} large={require("./images/comic/6.png")} hideDownload="true" hideZoom="true"/>
          </div>
        );
      case "mocap": 
        return (
          <div className="Project">
            <h>Motion Capture</h>

            <ModalImage className="smallImg" small={require("./images/60212/randomloops.gif")} large={require("./images/60212/randomloops.gif")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/60212/shortwalk.gif")} large={require("./images/60212/shortwalk.gif")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/60212/class_labels.png")} large={require("./images/60212/class_labels.png")} hideDownload="true" hideZoom="true"/>
            <br></br>
            This was a project for 60-212. You can read about my process <a href="http://cmuems.com/2018/60212f/lass/10/12/lass-body/">here</a>, and play with the online version <a href="https://lassyla.me/People/">here</a>!

          </div>
        );
      case "tidal": 
        return (
          <div className="Project">
            <h>Tidal Clock</h>

            <ModalImage className="smallImg" small={require("./images/60212/clock2.gif")} large={require("./images/60212/clock2.gif")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/60212/clock1.png")} large={require("./images/60212/clock1.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/60212/clock3.gif")} large={require("./images/60212/clock3.gif")} hideDownload="true" hideZoom="true"/>
            <br></br>
            This was a project for 60-212. You can view it <a href="https://lassyla.me/clocks/">here</a>, and read about my process <a href="http://cmuems.com/2018/60212f/lass/09/21/lass-clock/">here</a>!
          </div>
        );
      case "misc": 
        return (
          <div className="Project">
            <h>Misc. original art</h>

            <ModalImage className="smallImg" small={require("./images/misc/jell.gif")} large={require("./images/misc/jell.gif")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/misc/camping3.png")} large={require("./images/misc/camping3.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/misc/cloud.png")} large={require("./images/misc/cloud.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/misc/camping1.png")} large={require("./images/misc/camping1.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/misc/garden.png")} large={require("./images/misc/garden.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/misc/frogpond.png")} large={require("./images/misc/frogpond.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/misc/camping2.png")} large={require("./images/misc/camping2.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/misc/box.png")} large={require("./images/misc/box.png")} hideDownload="true" hideZoom="true"/>
          </div>
        );
      case "fanart": 
        return (
          <div className="Project">
            <h>Fan art</h>
            <ModalImage className="smallImg" small={require("./images/fanart/spirited away2.png")} large={require("./images/fanart/spirited away2.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/fanart/kiki2.png")} large={require("./images/fanart/kiki2.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/fanart/azura3.png")} large={require("./images/fanart/azura3.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/fanart/corrin2.png")} large={require("./images/fanart/corrin2.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/fanart/howls2.png")} large={require("./images/fanart/howls2.png")} hideDownload="true" hideZoom="true"/>
          </div>
        );
      case "stickers": 
        return (
          <div className="Project">
            <h>Stickers</h>
            <ModalImage className="smallImg" small={require("./images/stickers/breakfast stickers.png")} large={require("./images/stickers/breakfast stickers.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/stickers/dessert square.png")} large={require("./images/stickers/dessert square.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/stickers/final_stickers_white.png")} large={require("./images/stickers/final_stickers_white.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/stickers/fried_egg.png")} large={require("./images/stickers/fried_egg.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/stickers/robutsflat.png")} large={require("./images/stickers/robutsflat.png")} hideDownload="true" hideZoom="true"/>
          </div>
        );
      case "blender": 
        return (
          <div className="Project">

          </div>
        );
      case "processing": 
        return (
          <div className="Project">
          </div>
        );
      case "shelves": 
        return (
          <div className="Project">
            <h>Shelves</h>
            A project for Concept Studio. You can experience it <a href="https://lassyla.me/Shelves/index.html">here</a>. Learned three.js and blender!  <br></br>

            <ModalImage small={require("./images/shelves/1.png")} large={require("./images/shelves/1.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage small={require("./images/shelves/2.png")} large={require("./images/shelves/2.png")} hideDownload="true" hideZoom="true"/>
            <br></br>
          </div>
        );
      case "bot": 
        return (
          <div className="Project">
          <h>Bot-a-Razzi</h>

          Final project for Concept Studio, created with Rain Du, Connie Ye, and Lexin Yuan. 
          It is an AR experience where the user is being swarmed by camera robots, and outsiders can view their lives being broadcasted on social media. 
          We used blender, makehuman, and a-frame.
          <br></br><a href="https://www.youtube.com/watch?v=R-ySfk5PLh8&feature=youtu.be">here's a video!</a>
          <br></br>          <br></br>
          <ModalImage small={require("./images/bot/1.png")} large={require("./images/bot/1.png")} hideDownload="true" hideZoom="true"/>
          <br></br> 
          <a href="https://connieye.com/bot-a-razzi/social-media-interface.html">bystander view</a> 
          <br></br>          <br></br>
          <ModalImage small={require("./images/bot/2.png")} large={require("./images/bot/2.png")} hideDownload="true" hideZoom="true"/>
          <br></br>
          <a href="https://connieye.com/bot-a-razzi/index.html">user view </a>

          </div>
        );
      case "snowgum": 
        return (
          <div className="Project">
          </div>
        );
      case "sort": 
        return (
          <div className="Project">
          <h>Selection Sort Game</h>
            A game I made using Unity that challenges you to do a selection sort! You can play <a href="https://lassyla.me/lassyla.github.io-old/sorts/index.html">here</a>.
            <br></br>
            <ModalImage small={require("./images/sorts/sprites.png")} large={require("./images/sorts/sprites.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage small={require("./images/sorts/DUDE.png")} large={require("./images/sorts/DUDE.png")} hideDownload="true" hideZoom="true"/>
            <br></br>
            <ModalImage small={require("./images/sorts/sort.gif")} large={require("./images/sorts/sort.gif")} hideDownload="true" hideZoom="true"/>

          </div>
        );
      case "AP": 
        return (
          <div className="Project">
          </div>
        );
      case "hackathon": 
        return (
          <div className="Project">
          </div>
        );
      case "RPG": 
        return (
          <div className="Project">
          </div>
        );
      case "toonboom": 
        return (
          <div className="Project">
          </div>
        );
      case "webdev": 
        return (
          <div className="Project">
          </div>
        );


    }
    return (
      <div className="Project">
        this page doesn't exist
      </div>
    );
  }
}


export default Project;

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
            In November 2018, I challenged myself to learn Maya and use it in combination with Photoshop to create these colorful illustrations. 
            <br></br>
            <ModalImage className="smallImg" small={require("./images/huevember/pink.png")} large={require("./images/huevember/pink.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/orange.png")} large={require("./images/huevember/orange.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/yellow.png")} large={require("./images/huevember/yellow.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/green.png")} large={require("./images/huevember/green.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/blue.png")} large={require("./images/huevember/blue.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/purple.png")} large={require("./images/huevember/purple.png")} hideDownload="true" hideZoom="true"/>            
            <br></br> Also, I wrote a Python script to make eggs. I'm pretty happy with it.<br></br>
            <img src={require("./images/huevember/egg_gen.gif")}/> <br></br>
            Some progress shots: <br></br>
            <ModalImage className="smallImg" small={require("./images/huevember/greenwip.png")} large={require("./images/huevember/greenwip.png")} hideDownload="true" hideZoom="true"/>            
            <ModalImage className="smallImg" small={require("./images/huevember/orange_render.png")} large={require("./images/huevember/orange_render.png")} hideDownload="true" hideZoom="true"/>            
            <ModalImage className="smallImg" small={require("./images/huevember/bluewip.png")} large={require("./images/huevember/bluewip.png")} hideDownload="true" hideZoom="true"/>            

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
            <br></br> A short and silly comic that I made in half a day, inspired by <a href="http://www.24hourcomicsday.com/">24 hour comics day</a>. It was my first time making a comic, and I had a lot of fun! <br></br> <br></br>
            <ModalImage className="medImg" small={require("./images/comic/1.png")} large={require("./images/comic/1.png")} hideDownload="true" hideZoom="true"/>
            <br></br><ModalImage className="medImg" small={require("./images/comic/2.png")} large={require("./images/comic/2.png")} hideDownload="true" hideZoom="true"/>
            <br></br><ModalImage className="medImg" small={require("./images/comic/3.png")} large={require("./images/comic/3.png")} hideDownload="true" hideZoom="true"/>
            <br></br><ModalImage className="medImg" small={require("./images/comic/4.png")} large={require("./images/comic/4.png")} hideDownload="true" hideZoom="true"/>
            <br></br><ModalImage className="medImg" small={require("./images/comic/5.png")} large={require("./images/comic/5.png")} hideDownload="true" hideZoom="true"/>
            <br></br><ModalImage className="medImg" small={require("./images/comic/6.png")} large={require("./images/comic/6.png")} hideDownload="true" hideZoom="true"/>
          </div>
        );
      case "mocap": 
        return (
          <div className="Project">
            <h>Motion Capture</h>

            <img className="medImg" src={require("./images/60212/randomloops.gif")}/>
            <br></br>
            You can read about my process <a href="http://cmuems.com/2018/60212f/lass/10/12/lass-body/">here</a>, and play with the online version <a href="https://lassyla.me/People/">here</a>!
            <br></br>
            <br></br>
            This was a project for 60-212. The assignment was to use motion capture data in a creative way. I wrote an application using three.js that takes a string input as a random seed to create a "garbage character". The characters you see here were created with the usernames of my classmates. 
            <br></br><br></br> I used GLSL to create random materials for the characters, like gradients and stripes. 
            <br></br>
            <ModalImage className="smallImg" small={require("./images/60212/shortwalk.gif")} large={require("./images/60212/shortwalk.gif")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/60212/class_labels.png")} large={require("./images/60212/class_labels.png")} hideDownload="true" hideZoom="true"/>

          </div>
        );
      case "tidal": 
        return (
          <div className="Project">
            <h>Tidal Clock</h>

            <img className="medImg" src={require("./images/60212/clock2.gif")} />
            <br></br>
            You can view it <a href="https://lassyla.me/clocks/">here</a>, and read about my process <a href="http://cmuems.com/2018/60212f/lass/09/21/lass-clock/">here</a>!
            <br></br><br></br>This was a project for 60-212. It is a clock that completes a cycle every 745 minutes, which marks the difference between a high and low tide. The tidal pool gets revealed at low tide and covered at high tide. I originally set the clock to show the tide of Virginia Beach, though it might need calibration! 
            <br></br>I used Blender to create the beach shore, and three.js/GLSL to program the cycle of the clock, water movement, and sky color. 
            <br></br>
            <br></br>
            <ModalImage className="smallImg" small={require("./images/60212/clock1.png")} large={require("./images/60212/clock1.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/60212/clock3.gif")} large={require("./images/60212/clock3.gif")} hideDownload="true" hideZoom="true"/>
          </div>
        );
      case "misc": 
        return (
          <div className="Project">
            <h>Original Paintings</h>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/misc/jell.gif")} large={require("./images/misc/jell.gif")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/camping1.png")} large={require("./images/misc/camping1.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/camping2.png")} large={require("./images/misc/camping2.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/artfriends.png")} large={require("./images/misc/artfriends.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/idk.jpg")} large={require("./images/misc/idk.jpg")} hideDownload="true" hideZoom="true"/>
            </div>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/misc/goodbye room.png")} large={require("./images/misc/goodbye room.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/camping3.png")} large={require("./images/misc/camping3.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/cloud.png")} large={require("./images/misc/cloud.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/garden.png")} large={require("./images/misc/garden.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/phipps.png")} large={require("./images/misc/phipps.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/catalyst.jpg")} large={require("./images/misc/catalyst.jpg")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/airhead.jpg")} large={require("./images/misc/airhead.jpg")} hideDownload="true" hideZoom="true"/>
            </div>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/misc/frogpond.png")} large={require("./images/misc/frogpond.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/box.png")} large={require("./images/misc/box.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/forest_monster.png")} large={require("./images/misc/forest_monster.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/flamingo.jpg")} large={require("./images/misc/flamingo.jpg")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/misc/artie.png")} large={require("./images/misc/artie.png")} hideDownload="true" hideZoom="true"/>
            </div>

          </div>
        );
      case "fanart": 
        return (
          <div className="Project">
            <h>Fan art</h>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/fanart/spirited away2.png")} large={require("./images/fanart/spirited away2.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/fanart/kiki2.png")} large={require("./images/fanart/kiki2.png")} hideDownload="true" hideZoom="true"/>
            </div>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/fanart/azura3.png")} large={require("./images/fanart/azura3.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/fanart/corrin2.png")} large={require("./images/fanart/corrin2.png")} hideDownload="true" hideZoom="true"/>
            </div>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/fanart/howls2.png")} large={require("./images/fanart/howls2.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/fanart/undertale.png")} large={require("./images/fanart/undertale.png")} hideDownload="true" hideZoom="true"/>
            </div>
          </div>
        );
      case "stickers": 
        return (
          <div className="Project">
            <h>Stickers</h>
            I love making stickers to give to my friends! If you want a sticker, just ask :) <br></br> <br></br> <br></br>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/stickers/teentitans.png")} large={require("./images/stickers/teentitans.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/egg4.png")} large={require("./images/stickers/egg4.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/garbo.png")} large={require("./images/stickers/garbo.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/dessert square.png")} large={require("./images/stickers/dessert square.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/egg2.png")} large={require("./images/stickers/egg2.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/robutsflat.png")} large={require("./images/stickers/robutsflat.png")} hideDownload="true" hideZoom="true"/>

            </div>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/stickers/microfell.png")} large={require("./images/stickers/microfell.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/egg6.png")} large={require("./images/stickers/egg6.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/trashbot.png")} large={require("./images/stickers/trashbot.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/final_stickers_white.png")} large={require("./images/stickers/final_stickers_white.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/egg3.png")} large={require("./images/stickers/egg3.png")} hideDownload="true" hideZoom="true"/>

            </div>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/stickers/egg5.png")} large={require("./images/stickers/egg5.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/frog.png")} large={require("./images/stickers/frog.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/breakfast stickers.png")} large={require("./images/stickers/breakfast stickers.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/egg1.png")} large={require("./images/stickers/egg1.png")}  hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/stickers/fried_egg.png")} large={require("./images/stickers/fried_egg.png")} hideDownload="true" hideZoom="true"/>
            </div>
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
          It is a VR experience where the user is being swarmed by camera robots, and outsiders can view their lives being broadcasted on social media. 
          We used blender, makehuman, and a-frame.
          <br></br><a href="https://www.youtube.com/watch?v=R-ySfk5PLh8&feature=youtu.be">here's a video!</a>
          <br></br>          <br></br>
          <img className="medImg" src={require("./images/bot/1.png")}/>
          <br></br> 
          <a href="https://connieye.com/bot-a-razzi/social-media-interface.html">bystander view</a> 
          <br></br>          <br></br>
          <img className="medImg" src={require("./images/bot/2.png")} />
          <br></br>
          <a href="https://connieye.com/bot-a-razzi/index.html">user view </a>

          </div>
        );
      case "sort": 
        return (
          <div className="Project">
          <h>Selection Sort Game</h>
            <img src={require("./images/sorts/sort.gif")} /> <br></br>
            A game I made using Unity that challenges you to do a selection sort! You can play <a href="https://lassyla.me/lassyla.github.io-old/sorts/index.html">here</a>. 
            <br></br>
            <ModalImage small={require("./images/sorts/sprites.png")} large={require("./images/sorts/sprites.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage small={require("./images/sorts/DUDE.png")} large={require("./images/sorts/DUDE.png")} hideDownload="true" hideZoom="true"/>
            <br></br> The sprites were drawn by me. I made this in 2017. 
            <br></br>

          </div>
        );
      case "hackathon": 
        return (
          <div className="Project">
          <h>Hackathons</h>
          Here are some of my hackathon projects, completed with a team in 24 hours or less. 
          <br></br><br></br>
          <img className="medImg" src={require("./images/hackathons/codejest.png")} />
          <br></br><a href="https://lassyla.me/CodeJest/index.html">Code Jest</a>: 
          The winner of HackED in 2017, with Lisa Lo and Lauren Zhang. It is a game in the style of a text adventure, with a code-teaching twist. I programmed the front end interface and did the illustrations. 
          <br></br><br></br><br></br>
          <img className="medImg" src={require("./images/hackathons/snowgum.png")} />
          <br></br><a href="https://connieye.com/Snow-Gum/temp.html#snow-gum">Snow Gum</a>:
          HackCMU 2017 with Cece Brower and Connie Ye. We made a game that defeats monsters when you correctly pronounce their color in Spanish. I animated the monsters and coded the basic game mechanics in HTML canvas. 
          
          <br></br><br></br><br></br>
          <img className="medImg" src={require("./images/hackathons/wf.png")}/>
          <br></br><a href="http://wikifractal.herokuapp.com/">Wiki Fractal</a>:
          HackTJ 2016 with Varun Iyengar, Alex Wang, and Alex Fried that takes a search term and branches off into relevant wikipedia pages. I created the front end interface. We were in the top 10!
          <br></br><br></br><br></br>

          <img className="medImg" src={require("./images/hackathons/rsg.png")}/>
          <br></br><a href="https://lassyla.me/RandomSentences/">RSG+d</a>:
          My very first hackathon, Pilot Philly 2014, with Chris Niu and Andrew Wang. It is a simple web app that generates random sentences along with an illustration. I was responsible for all of the drawings. 
          
          </div>
        );

      case "toonboom": 
        return (
          <div className="Project">
          <h>2D Animation</h>
          <br></br> These are some of my attempts at 2D animation! They are done in Toon Boom Studio. They are all from 2017 and earlier. <br></br>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/8kb6DQRK9o0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/-N6Re6cZ17o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/jQoMUqmzaWs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/JA13OpkzECE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/RwoboZ_4BuQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/AUd70Vv_uIQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        );

      case "misc3d": 
        return (
          <div className="Project">
            <h>3D models</h>
            3D doodles made with Maya, Substance Painter, and Blender.
            <br></br>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/3d/anna2.png")} large={require("./images/3d/anna2.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/3d/bun.png")} large={require("./images/3d/bun.png")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/3d/sloog.png")} large={require("./images/3d/sloog.png")} hideDownload="true" hideZoom="true"/>
            </div>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/3d/angie.gif")} large={require("./images/3d/angie.gif")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/3d/sleepy.gif")} large={require("./images/3d/sleepy.gif")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/3d/teknos.jpg")} large={require("./images/3d/teknos.jpg")} hideDownload="true" hideZoom="true"/>
            </div>
            <div className="col">
              <ModalImage className="smallImg" small={require("./images/3d/anna.gif")} large={require("./images/3d/anna.gif")} hideDownload="true" hideZoom="true"/>
              <ModalImage className="smallImg" small={require("./images/3d/ella.gif")} large={require("./images/3d/ella.gif")} hideDownload="true" hideZoom="true"/>
            </div>

          </div>
        );

      case "webdev": 
        return (
          <div className="Project">
            <h>Old Website</h>
            In late 2017, I created a personal website. <br></br>In 2018, I learned React and decided to completely redo my site with a new design (you're looking at it now!). <br></br><a href="http://lassyla.me/lassyla.github.io-old/">You can view the old one here.</a>
          </div>
        );
      case "painter": 
        return (
          <div className="Project">
            <h>Planet Painter</h>
            <img className="medImg" src={require("./images/painter/flowers.gif")}></img> 
            <br></br>You can play with it <a href="https://lassyla.me/TravelCube/shader3.html">here</a>, but be warned it is still in-progress! 
            <br></br><br></br>
            A personal project I am working on, where you paint flowers on a planet with your mouse! It is currently a work in progress. I want to add functionality that lets the user choose the colors, and possibly paint other surfaces (trees, water, rocks, etc.). 
            <br></br>I am using three.js and GLSL to create this project. The flowers are all made procedurally from polar equations. Ever since I learned about rose curves in high school, I've wanted to create an art project with them! <br></br>
            <br></br>
          </div>
        );
      case "home": 
        return (
          <div className="Project"><br></br> 
          <div id="frontpage">
          <iframe width="900" height="500" src="https://www.youtube.com/embed/YiEgutYiNzA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br></br><ModalImage className="smallImg" small={require("./images/painter/flowers2.gif")} large={require("./images/painter/flowers2.gif")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="medImg" small={require("./images/3d/anna2.png")} large={require("./images/3d/anna2.png")} hideDownload="true" hideZoom="true"/> 
            <ModalImage className="medImg" small={require("./images/3d/bun.png")} large={require("./images/3d/bun.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/orange.png")} large={require("./images/huevember/orange.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/huevember/green.png")} large={require("./images/huevember/green.png")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/60212/shortwalk.gif")} large={require("./images/60212/shortwalk.gif")} hideDownload="true" hideZoom="true"/>
            <ModalImage className="smallImg" small={require("./images/60212/clock2.gif")} large={require("./images/60212/clock2.gif")} hideDownload="true" hideZoom="true"/>
            </div>
          </div>
        );
      case "about": 
        return (
          <div className="Project">
            <h>About Me</h>
            Hi! I'm Alyssa Lee. I love to write code and make art.
            <br></br> <br></br>
            I'm a sophomore in the <a href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html">Computer Science and Arts</a> program at Carnegie Mellon University. 
            <br></br> <br></br>
            In my free time, I like to learn new things! Currently, I am teaching myself 3D modeling, scripting, and animation. 
            <br></br> <br></br>
            I also love community service! I am a proud member of <a href="https://apo.org/">Alpha Phi Omega</a>, the national service fraternity. 
            <br></br>
            <br></br><a href="&#x6D;&#x61;&#x69;&#x6C;&#x74;&#x6F;&#x3A;&#x20;&#x61;&#x6C;&#x79;&#x73;&#x73;&#x61;&#x6C;&#x40;&#x61;&#x6E;&#x64;&#x72;&#x65;&#x77;&#x2E;&#x63;&#x6D;&#x75;&#x2E;&#x65;&#x64;&#x75;&#xA;">&#x20;&#x61;&#x6C;&#x79;&#x73;&#x73;&#x61;&#x6C;&#x40;&#x61;&#x6E;&#x64;&#x72;&#x65;&#x77;&#x2E;&#x63;&#x6D;&#x75;&#x2E;&#x65;&#x64;&#x75;&#xA;</a>
            <br></br><a href="https://twitter.com/lassylaa">twitter @lassylaa</a>
            <br></br><a href="https://github.com/lassyla">github @lassyla</a>
            <br></br><a href="https://www.instagram.com/lassylaa/">instagram @lassylaa</a>

            <br></br> <br></br>
            
          </div>
        );
    }
    return (
      <div className="Project">
        this page doesn't exist. yikes! 
      </div>
    );
  }
}


export default Project;

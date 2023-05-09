import React from 'react'
import "./TextBlocks.css"
import LeafletMap from './LeafletMap';

import android1 from "../../src/assets/images/versions/android_001_small.png"
import android2 from "../../src/assets/images/versions/android_003_small.jpg"
import android3 from "../../src/assets/images/versions/android_005_small.png"
import android4 from "../../src/assets/images/versions/android_013_small.png"
import version5 from "../../src/assets/images/versions/protoMarch16_small.png"
import version6 from "../../src/assets/images/versions/protoAugust16_small.png"
import version7 from "../../src/assets/images/versions/backerdemo_small.jpg"
import version8 from "../../src/assets/images/versions/version_1_1_4_small.jpg"
import version9 from "../../src/assets/images/versions/version_1_1_7_small.jpg"

import androidicon from "../../src/assets/images/platforms/androidicon.png"
import winicon from "../../src/assets/images/platforms/winicon.png"
import osxicon from "../../src/assets/images/platforms/osxicon.png"

function TextBlocks() {
  return (
    <div className='text-block-container'>
    <div className="text-block" id='devolution'>
      <h1>
      Devolution - Lounly Mountains: Downhill
      </h1>
      <br />
      <a target="_blank" rel="noopener noreferrer" href="https://devolution.online">Devolution</a> is exploring and dissecting the creative process of game development, encountering new characteristics with every new edition.
      Each Devolution event / exhibition focuses on the evolution of a game through the exhibition of prototypes and interim versions and an in-depth conversation with the developers.
      <br />
      <br />
      <div className='text-block-columns'>
        <div className="text-table-block">
          
Looking at games and game development from the perspective of Devolution lets you discover new and inspiring aspects of how games are growing into shape. In contrast to the usual reception of the results, Devolution reveals the whole road up to them.
        </div>
        <div className="text-table-block">
        Historically physical exhibitions of several in-between versions of a game (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://devolution.online/category/events/1thecuriousexpedition/"
                >The Curious Expedition</a>, <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://devolution.online/category/events/2shifthappens/"
                >Shift Happens</a>, <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://devolution.online/category/events/3thumper/"
                >Thumper</a>, <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://devolution.online/category/events/4superhot/"
                >SUPERHOT</a>, <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://devolution.online/category/events/5summitexhibition/"
                >Ape Out, Hidden Folks, Kingdom</a>, ) and a summit (<a
                href="https://devolution.online/gdasgardeningsummit/"
                >Game Design as Gardening</a
              >). Since 2020 - with the exhibition of <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://devolution.online/6/"
              >Baba Is You & Dicey Dungeons</a
            > - turning into hybrid, or even: total digital.
        </div>
      </div>
      <br />
      Each Devolution event / exhibition focuses on the evolution of a game through the exhibition of prototypes and interim versions and an in-depth conversation with the developers.<br />
      <br />



      <div className='text-small-centered-block'>
      <h3 align="center">
      How to grow a game?
      </h3>
      <br />
      <p style={{ fontStyle: 'italic' }}>
        “Games develop in a way that I can only describe as organic, 
        in that they tend to start as a core and then grow outward.”</p> 
        <p align="right">- David Oreilly (Everything, Mountain)</p>
      </div>
    </div>

    <div className="text-block" id='total-digital'>
      <h1>
      Total Digital
      </h1>
      <br/>
      <div className='text-block-columns'>
        <div className="text-table-block">                  
        The online exhibition showcasing the development process of Lonely Mountains: Downhill is available for permanent viewing, offering visitors an opportunity to explore an interactive timeline of the game's evolution, downloadable and playable early prototypes and in-between versions of the game.
        </div>
        <div className="text-table-block">
        The exhibition works as a unique archive for…<br />
        <ul>
          <li>Researchers to discover new aspects of how games are growing</li>
          <li>Game designers & developers interested to learn and be inspired</li>
          <li>Tutors and lecturers searching for inspiring use cases</li>
          <li>Just everybody interested in games and game development</li>
        </ul>
        </div>
      </div>
    </div>

    <div className="text-block" id='evolution'>
      <h1>
        The Evolution of Lonely Mountains: Downhill
      </h1>
      <br />
      Lonely Mountains: Downhill is a low-poly style third-person mountain biking game, where the player tries to connect with nature and complete courses on different mountains.
      The game was developed by Berlin developer studio Megagon Industries.<br />
      <br />
      <div className='text-block-columns'>
      <iframe className="text-table-block" width="520" height="315" src="https://www.youtube.com/embed/sYr0hDZ3-QY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe className="text-table-block" width="520" height="315" src="https://www.youtube.com/embed/eQ9P-ff85yA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>

    <div className="text-block" id='timeline'>
    <h1>
      Explore the Timeline!
    </h1>
      <br />
      The timeline of the development of Lonely Mountains: Downhill for deeper insights into the development process of the game. Explore and find interesting connections!<br />
      <br />
      <LeafletMap/>
    </div>

    <div className="text-block" id='versions'>
      <h1>
      Play the Versions!
      </h1>
      <br />
      Downloadable early prototypes and in-between versions of Lonely Mountains: Downhill. Play, observe and compare for inspiring insights!<br />
      To play the newest version of the game visit <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">lonelymountains.com</a>.<br />
      <br />
      <p><small><strong>Disclaimer: </strong><br />
      The versions of the game available here are historic development versions. We provide them for research purposes only and without warranty or support. They may not be fully functional, we cannot guarantee their compatibility with your device.
      The versions’ network features may be non-functional or limited. By downloading and using these versions, you agree that we do not take any responsibility for any issues that may occur as a result of such.<br />
      Please note that we have tested these versions to the best of our knowledge.</small></p>
      <br />
      <div className="versions-container" >
        <div className='versions-wrapper'>
        <ul className='versions-items'>
          <div className='version-item'>
          <h3>Android 001</h3>
          July 16th 2015<br />
          <img src={android1} width="150" height="150" alt="Andoid_001"></img>
          <br />
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={androidicon} width="40" height="40" alt="Andoid_001"></img>
            </a><br />
            <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
            </div>
            <div className='version-item'>
              <h3>Android 003</h3>
            October 19th 2015<br />
            <img src={android2} width="150" height="150" alt="Andoid_003"></img> <br />
            <br />
            <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
              <img src={androidicon} width="40" height="40" alt="Andoid_001"></img>
              </a><br />
              <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>          
          </div>
          <div className='version-item'>
          <h3>Android 005</h3>
          January 22nd 2016<br />
           <img src={android3} width="150" height="150" alt="Andoid_005"></img> <br />
           <br />
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={androidicon} width="40" height="40" alt="Andoid_001"></img>
            </a><br />
            <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
          </div>
          <div className='version-item'>
          <h3>Android 013</h3>
          June 29th 2016<br />
           <img src={android4} width="150" height="150" alt="Andoid_013"></img> <br />
           <br />
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={androidicon} width="40" height="40" alt="Andoid_001"></img>
            </a><br />
            <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
          </div>
        </ul>     
        </div>
      </div>
    </div>

    <div className="text-block">
      <h1>
      A MAZE. / Berlin 2023
      </h1>
      <br />
      The <a target="_blank" rel="noopener noreferrer" href="https://2023.amaze-berlin.de/schedule/">on-site exhibition</a> focuses on the development process of Lonely Mountains: Downhill by displaying several in-between versions of the game,
      from early prototypes to later iterations. Visitors can explore the creative process behind the development,
      encountering new insights with each version they play and each comparison they make.<br />
      <br />
     

      </div>

      <div className="text-block">
      <h1>Credits</h1>
      <br />

      



      </div>

    </div>
  )
}

export default TextBlocks

import React from 'react'
import "./TextBlocks.css"
import LeafletMap from './LeafletMap';
import Cards from './Cards'

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
    <div className="text-block">
      <h1>
      Devolution - Lounly Mountains: Downhill
      </h1>
      <br />
      <a target="_blank" rel="noopener noreferrer" href="https://devolution.online">Devolution</a> is exploring and dissecting the creative process of game development, encountering new characteristics with every new edition.
      Each Devolution event / exhibition focuses on the evolution of a game through the exhibition of prototypes and interim versions and an in-depth conversation with the developers.
      <br />
      <br />
      <table>
        <tr>
          <td width="49%">
            Looking at games and game development from the perspective of Devolution lets you discover new and inspiring aspects of how games are growing into shape. In contrast to the usual reception of the results, Devolution reveals the whole road up to them.
          </td>
          <td width="2%">
          </td>
          <td width="49%">
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
          </td>
        </tr>
      </table>

      <br />
      Each Devolution event / exhibition focuses on the evolution of a game through the exhibition of prototypes and interim versions and an in-depth conversation with the developers.<br />
      <br />

      <h3 align="center">
      How to grow a game?
      </h3>

      <br />

      <table>
      <tr>
        <td width="30%">
        </td>
        <td width="40%">
        <p style={{ fontStyle: 'italic' }}>
        “Games develop in a way that I can only describe as organic, in that they tend to start as a core and then grow outward.”</p>
        <p align="right">- David Oreilly (Everything, Mountain)</p>
        </td>
        <td width="30%">
        </td>
      </tr>
      </table>



    </div>

    <div className="text-block">
      <h1>
      Total Digital
      </h1>
      <br />

      <table>
      <tr>
        <td width="49%">
        The online exhibition showcasing the development process of Lonely Mountains: Downhill is available for permanent viewing, offering visitors an opportunity to explore an interactive timeline of the game's evolution, downloadable and playable early prototypes and in-between versions of the game.
        </td>
        <td width="2%">
        </td>
        <td width="49%">
        The exhibition works as a unique archive for…<br />
        <ul>
          <li>Researchers to discover new aspects of how games are growing</li>
          <li>Game designers & developers interested to learn and be inspired</li>
          <li>Tutors and lecturers searching for inspiring use cases</li>
          <li>Just everybody interested in games and game development</li>
        </ul>
        </td>
      </tr>
      </table>

    </div>

    <div className="text-block">
      <h1>
        The Evolution of Lonely Mountains: Downhill
      </h1>
      <br />
      Lonely Mountains: Downhill is a low-poly style third-person mountain biking game, where the player tries to connect with nature and complete courses on different mountains.
      The game was developed by Berlin developer studio Megagon Industries.<br />
      <br />
      <table>
        <tr>
        <td width="49%">
          <iframe width="520" height="315" src="https://www.youtube.com/embed/sYr0hDZ3-QY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </td>
        <td width="2%">
        </td>
        <td width="49%">
          <iframe width="520" height="315" src="https://www.youtube.com/embed/eQ9P-ff85yA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </td>
        </tr>
      </table>
    </div>

    <div className="text-block">
    <h1>
      Explore the Timeline!
    </h1>
      <br />
      The timeline of the development of Lonely Mountains: Downhill for deeper insights into the development process of the game. Explore and find interesting connections!<br />
      <br />
      <LeafletMap/>
    </div>

    <div className="text-block">
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
      <div className="versions">
      <table className="versions">
        <tr>
        <td width="20%">
          <h3>adsf</h3>
          asdf<br />
           <img src={android1} width="150" height="150" alt="Andoid_001"></img> <br />
           <br />
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={androidicon} width="40" height="40" alt="Andoid_001"></img>
            </a><br />
            <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
        </td>
        <td width="20%">
          <h3>adsf</h3>
          adsf<br />
           <img src={android2} width="150" height="150" alt="Andoid_001"></img> <br />
           <br />
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={androidicon} width="40" height="40" alt="Andoid_001"></img>
            </a><br />
            <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
        </td>
        <td width="20%">
          <h3>adsf</h3>
          asdfa<br />
           <img src={android3} width="150" height="150" alt="Andoid_001"></img> <br />
           <br />
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={androidicon} width="40" height="40" alt="Andoid_001"></img>
            </a><br />
            <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
        </td>
        <td width="20%">
          <h3>adsf</h3>
          asdfasd<br />
           <img src={android4} width="150" height="150" alt="Andoid_001"></img> <br />
           <br />
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={androidicon} width="40" height="40" alt="Andoid_001"></img>
            </a><br />
            <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
        </td>
        <td width="20%">
        </td>
        </tr>
        <tr>
          <br />
          <br />
        </tr>
        <tr>
        <td width="20%">
          <h3>adsf</h3>
          asdf<br />
           <img src={version5} width="150" height="150" alt="Andoid_001"></img> <br />
           <br />
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={winicon} width="40" height="40" alt="Andoid_001"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
             <img src={osxicon} width="40" height="40" alt="Andoid_001"></img>
             </a><br />
            <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
        </td>
        <td width="20%">
          <h3>adsf</h3>
          adsf<br />
           <img src={version6} width="150" height="150" alt="Andoid_001"></img> <br />
           <br />
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={winicon} width="40" height="40" alt="Andoid_001"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
             <img src={osxicon} width="40" height="40" alt="Andoid_001"></img>
             </a><br />
            <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
        </td>
        <td width="20%">
          <h3>adsf</h3>
          asdfa<br />
           <img src={version7} width="150" height="150" alt="Andoid_001"></img> <br />
           <br />
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={winicon} width="40" height="40" alt="Andoid_001"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
             <img src={osxicon} width="40" height="40" alt="Andoid_001"></img>
             </a><br />
            <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
        </td>
        <td width="20%">
          <h3>adsf</h3>
          asdfasd<br />
           <img src={version8} width="150" height="150" alt="Andoid_001"></img> <br />
           <br />
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={winicon} width="40" height="40" alt="Andoid_001"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
             <img src={osxicon} width="40" height="40" alt="Andoid_001"></img>
             </a><br />
            <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
        </td>
        <td width="20%">
          <h3>adsf</h3>
          asdf<br />
          <img src={version9} width="150" height="150" alt="Andoid_001"></img> <br />
          <br />
          <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
           <img src={winicon} width="40" height="40" alt="Andoid_001"></img>
           </a>
           <a target="_blank" rel="noopener noreferrer" href="https://lonelymountains.com/">
            <img src={osxicon} width="40" height="40" alt="Andoid_001"></img>
            </a><br />
           <small>asdfadf adflkkl aldkfalkj asdlfakdfj asdjflkj laksdj ooow asdlfl alls</small>
        </td>
        </tr>
      </table>
      </div>

    </div>

    <Cards />

    <div className="text-block">
      <h1>
      A MAZE. / Berlin 2023
      </h1>
      <br />
      The <a target="_blank" rel="noopener noreferrer" href="https://2023.amaze-berlin.de/schedule/">on-site exhibition</a> focuses on the development process of Lonely Mountains: Downhill by displaying several in-between versions of the game,
      from early prototypes to later iterations. Visitors can explore the creative process behind the development,
      encountering new insights with each version they play and each comparison they make.<br />
      <br />
      <table>
        <tr>
        <td width= "50%">
          <h2>
          Exhibition Tours
          </h2>
          <br />
          For the ultimate insight into the development of Lonely Mountains: Downhill and its design decisions, join the <a target="_blank" rel="noopener noreferrer" href="https://2023.amaze-berlin.de/schedule/">guided tours</a> through the exhibition held by the developers themselves, complementing the exhibited versions with background information, secrets and anecdotes.
        </td>
        <td width="2%">
        </td>
        <td width= "50%">
          <h3>
          Schedule
          </h3>
          <br />
          Thursday, 11th of May 2023, 14:00 - 15:00<br /> with Daniel Helbig
          <br /> <br />
          Friday, 12th of May 2023, 14:00 - 15:00<br />  with Jan Bubenik
          <br /> <br />
          Saturday, 13th of May 2023, 14:00 - 15:00<br /> with Anna Bloser
        </td>
        </tr>
      </table>

      </div>

      <div className="text-block">
      <h1>Credits</h1>
      <br />

      <table>
      <tr>

      <td width= "34%">
      <h3>Partners</h3>
      <br />
      Devolution #7 - Lonely Mountains: Downhill is a cooperation between <a target="_blank" rel="noopener noreferrer" href="https://devolution.online/">Devolution</a>
      , <a target="_blank" rel="noopener noreferrer" href="https://2023.amaze-berlin.de/">A MAZE. / Berlin 2023</a>, <a target="_blank" rel="noopener noreferrer" href="https://megagonindustries.com/">Megagon Industries</a>
      and UE University of Europe for Applied Sciences.<br />
      <br />
      Huge THANK YOU to the developers for their trust, cooperation and support!
      </td>
      <td width="2%">
      </td>
      <td width= "64%">
      <h3>Team</h3>
      <ul>
        <li>Almat Kabdolov: (Concept Art, Graphic Design)</li>
        <li>Anna Margrét Jónudóttir: (Exhibition Moderation, Timeline, Website)</li>
        <li>Christoph Maureder: (Tech Advising)</li>
        <li>Diana-Maria Niculescu: ( Exhibition Moderation, PR, Social Media)</li>
        <li>Eyal Peleg Harris: (Producer)</li>
        <li>Hanna Kołodziejczyk: (Graphic Design)</li>
        <li>Jan Teo Jia Xian: (Exhibition Director)</li>
        <li>Juan Osorio: (Timeline)</li>
        <li>Levent Cracea: (Exhibition, PR, Video Editing)</li>
        <li>Maria Shchurova: (Website)</li>
        <li>Mark Komives: (Graphic Design)</li>
        <li>Mascha Camino: (Advising)</li>
        <li>Nayan Bhat: (Devolution #6 Website Update)</li>
        <li>Pavlo Vasylevych: (Producer)</li>
        <li>Csongor Baranyai: (Creative Direction, Curation)</li>
      </ul>

      </td>

      </tr>
      </table>



      </div>

    </div>
  )
}

export default TextBlocks

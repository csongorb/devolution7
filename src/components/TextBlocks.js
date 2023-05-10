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
      Devolution - Lounely Mountains: Downhill
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
      The timeline of the development of Lonely Mountains: Downhill for deeper insights into the development process of the game. Explore and find interesting connections!
      The timeline is interactive, with links to interviews, podcasts, videos and more, so use your mouse to click on the elements.<br />
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
          <img src={android1} className="centeredImage" width="150" height="150" alt="Android_001"></img>
          <br />
          <div className='version-item-platforms'>
           <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/150716_downhill_001.apk">
            <img src={androidicon} width="40" height="40" alt="Android_001"></img>
            </a>
            </div>
            <small>First Prototype</small>
            </div>
            <div className='version-item'>
              <h3>Android 003</h3>
            October 19th 2015<br />
            <img src={android2} className="centeredImage" width="150" height="150" alt="Android_003"></img>
            <br />
            <div className='version-item-platforms'>
            <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/151019_downhill_003.apk">
              <img src={androidicon} width="40" height="40" alt="Android_003"></img>
              </a>
              </div>
              <small>Polished Prototype</small>
          </div>
          <div className='version-item'>
          <h3>Android 005</h3>
          January 22nd 2016<br />
           <img src={android3} className="centeredImage" width="150" height="150" alt="Android_005"></img>
           <br />
           <div className='version-item-platforms'>
           <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/160122_downhill_005.apk">
            <img src={androidicon} width="40" height="40" alt="Android_005"></img>
            </a>
            </div>
            <small>Controller Experimentation <br />
            on Mobile</small>
          </div>
          <div className='version-item'>
          <h3>Android 013</h3>
          June 29th 2016<br />
           <img src={android4} className="centeredImage" width="150" height="150" alt="Android_013"></img>
           <br />
           <div className='version-item-platforms'>
           <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/160629_downhill_013.apk">
            <img src={androidicon} width="40" height="40" alt="Android_013"></img>
            </a>
            </div>
            <small>First Mountains & <br />
            Transition to PC</small>
          </div>
          <div className='version-item'>
            <h3>Proto March 16</h3>
            March 23rd 2016<br />
           <img src={version5} className="centeredImage" width="150" height="150" alt="Proto March 16"></img>
           <br />
           <div className='version-item-platforms'>
           <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/160323_Proto_March16.zip">
            <img src={winicon} width="40" height="40" alt="Proto March 16"></img>
            </a>
             </div>
            <small>Controller Experimentation
            <br />on PC</small>
          </div>
          <div className='version-item'>
          <h3>Proto August 16</h3>
          August 16th 2016<br />
           <img src={version6} className="centeredImage" width="150" height="150" alt="Proto August 16"></img>
           <br />
           <div className='version-item-platforms'>
           <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/160816_Proto_August16.zip">
            <img src={winicon} width="40" height="40" alt="Proto August 16"></img>
            </a>
             </div>
            <small>First Mountains
            <br />& Transition from Mobile</small>
          </div>
          <div className='version-item'>
          <h3>Backer Demo</h3>
          November 18th 2017<br />
           <img src={version7} className="centeredImage" width="150" height="150" alt="Backer Demo"></img>
           <br />
           <div className='version-item-platforms'>
           <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/171118_BackerDemo_v1.zip">
            <img src={winicon} width="40" height="40" alt="Backer Demo"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/171118_BackerDemo_v1_MacOS.zip">
             <img src={osxicon} width="40" height="40" alt="Backer Demo"></img>
             </a>
             </div>
            <small>Backer Demo</small>
          </div>
          <div className='version-item'>
          <h3>Dev Access 1.1.4</h3>
          May 3rd 2018<br />
           <img src={version8} className="centeredImage" width="150" height="150" alt="Dev Access 0.1.4"></img>
           <br />
           <div className='version-item-platforms'>
           <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/180503_DevAccess_0_1_4.zip">
            <img src={winicon} width="40" height="40" alt="Dev Access 1.1.4"></img>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/180503_DevAccess_0_1_4_MacOS.zip">
             <img src={osxicon} width="40" height="40" alt="Dev Access 1.1.4"></img>
             </a>
             </div>
            <small>New Terrain System <br />
            & Growing Mountains</small>
          </div>
          <div className='version-item'>
          <h3>Dev Access 1.1.7</h3>
          September 10th 2018<br />
          <img src={version9} className="centeredImage" width="150" height="150" alt="Dev Access 0.1.7"></img>
          <br />
          <div className='version-item-platforms'>
           <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/180910_DevAccess_0_1_7.zip">
           <img src={winicon} width="40" height="40" alt="Dev Access 1.1.7"></img>
           </a>
           <a target="_blank" rel="noopener noreferrer" href="http://devolution.online/lmd/180910_DevAccess_0_1_7_MacOS.zip">
            <img src={osxicon} width="40" height="40" alt="Dev Access 1.1.7"></img>
            </a>
            </div>
           <small>Progression System <br />
           & More Mountains</small>
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
      <div className='text-block-columns'>
        <div className="text-table-block">
        <h3>
          Exhibition Tours
          </h3>
          <br />
          For the ultimate insight into the development of Lonely Mountains: Downhill and its design decisions, join the <a target="_blank" rel="noopener noreferrer" href="https://2023.amaze-berlin.de/schedule/">guided tours</a> through the exhibition held by the developers themselves, complementing the exhibited versions with background information, secrets and anecdotes.
        </div>
        <div className="text-table-block">
        <h3>
          Schedule
        </h3>
        <br />
          Thursday, 11th of May 2023, 14:00 - 15:00<br /> with Daniel Helbig
          <br /> <br />
          Friday, 12th of May 2023, 14:00 - 15:00<br />  with Jan Bubenik
          <br /> <br />
          Saturday, 13th of May 2023, 14:00 - 15:00<br /> with Anna Bloser
        </div>
      </div>
      </div>

      <div className="text-block">
      <h1>Credits</h1>
      <br />
      <div className='text-block-columns'>
      <div className="text-table-block">
        <h3>Partners</h3>
        <br />
        Devolution #7 - Lonely Mountains: Downhill is a cooperation between <a target="_blank" rel="noopener noreferrer" href="https://devolution.online/">Devolution</a>
        , <a target="_blank" rel="noopener noreferrer" href="https://2023.amaze-berlin.de/">A MAZE. / Berlin 2023</a>, <a target="_blank" rel="noopener noreferrer" href="https://megagonindustries.com/">Megagon Industries</a> and UE University of Europe for Applied Sciences.<br />
        <br />
        Huge THANK YOU to the developers for their trust, cooperation and support!
      </div>
      <div className="text-table-block">
      <h3>Team</h3>
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/al.085/">Almat Kabdolov</a> (Concept Art, Graphic Design)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anna-margret-jonudottir-912226274/">Anna Margrét Jónudóttir</a> (Exhibition Moderation, Timeline, Website)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christoph-maureder-093088211/">Christoph Maureder</a> (Tech Advising)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rzldzl_/">Diana-Maria Niculescu</a> (Exhibition Moderation, PR, Social Media)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/eyal-peleg-harris-393ba6273/">Eyal Peleg Harris</a> (Producer)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/supersymetria/">Hanna Kołodziejczyk</a> (Graphic Design)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://janwatever.artstation.com/">Jan Teo Jia Xian</a> (Exhibition Director)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juan-camilo-osorio-arizabaleta-85a5621b0/">Juan Osorio</a> (Timeline)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/cracea.levent/">Levent Cracea</a> (Exhibition, PR, Video Editing)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://maria-shchurova.github.io/">Maria Shchurova</a> (Website)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-komives-524951183/">Mark Komives</a> (Graphic Design)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/maschacamino">Mascha Camino</a> (Advising)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/nayan_kira?s=20">Nayan Bhat</a> (Devolution #6 Website Update)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pavlo-vasylevych-969099243/">Pavlo Vasylevych</a> (Producer)</li>
        <li><a target="_blank" rel="noopener noreferrer" href="http://csongorb.com/">Csongor Baranyai</a> (Creative Direction, Curation)</li>
      </ul>
      </div>
      </div>





      </div>

    </div>
  )
}

export default TextBlocks

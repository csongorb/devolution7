import React from 'react'
import "./TextBlocks.css"
import LeafletMap from './LeafletMap';
import Cards from './Cards'

function TextBlocks() {
  return (
    <div className='text-block-container'>
    <div className="text-block">
      <h1>
        Devolution #7
      </h1>
      Devolution is a game design focused project exploring the creative process and challenges of game development, consisting of exhibitions, tours, interviews, an archive, and more.
      <br /> <br />
      Each Devolution event / exhibition focuses on the evolution of a game through the exhibition of prototypes and interim versions and an in-depth conversation with the developers.
      <br /> <br />

      <h3>
      How to grow a game?
      </h3>

      <p style={{ fontStyle: 'italic' }}>
      “Games develop in a way that I can only describe as organic, in that they tend to start as a core and then grow outward.” <br />
      -David Oreilly (Everything, Mountain)
      </p>

    </div>

    <div className="text-block">
    <h1>
      Total Digital
    </h1>

      <p>
      The online exhibition showcasing the development process of Lonely Mountains: Downhill is available for permanent viewing, offering visitors an opportunity to explore an interactive timeline of the game's evolution, downloadable and playable early prototypes and in-between versions of the game.
      <br /> <br />
      The exhibition works as a unique archive for…  <br />
      <ul>
        <li>Researchers to discover new aspects of how games are growing into shape</li>
        <li>Game designers and game developers interested to learn and be inspired</li>
        <li>Tutors and lecturers searching for inspiring use cases to teach with</li>
        <li>Just everybody interested in games to see and explore how they are developed</li>
      </ul>
      </p>

    </div>

    <div className="text-block">
    <h1>
      Lonely Mountains Downhill
    </h1>
    Lonely Mountains: Downhill is a low-poly style mountain biking game developed by Berlin developer Megagon Industries. The game is a third-person biking game, where the player tries to connect with nature and complete courses on different mountains.
    </div>

    <div className="text-block">
        <LeafletMap/>
    </div>

    <div className="text-block">
      <h1>
      Downloadable Versions
      </h1>
      <strong>Disclaimer: </strong>
      The versions of the game available are historic development versions and may not be fully functional, we cannot guarantee their compatibility with your device.
      We provide them for research purposes only and without warranty or support. By downloading and using these versions, you agree that we do not take any responsibility for any issues that may occur as a result of such.
      The versions’ network features may be non-functional or limited. Please note that we have tested these versions to the best of our knowledge.

    </div>

    <Cards />

    <div className="text-block">
      <h1>
      A MAZE. / Berlin 2023
      </h1>
      The on-site exhibition focuses on the development process of Lonely Mountains: Downhill by displaying several in-between versions of the game, from early prototypes to later iterations. Visitors can explore the creative process behind the development, encountering new insights with each version they play and each comparison they make.
      <br />
      <table>
        <tr>
        <td vertical-align="top" width= "50%">
          <h2>
          Exhibition Tours
          </h2>
          For the ultimate insight into the development of Lonely Mountains: Downhill and its design decisions, join the guided tours through the exhibition held by the developers themselves, complementing the exhibited versions with background information, secrets and anecdotes.
        </td>

        <td vertical-align="top">
          <h3>
          Schedule
          </h3>
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
      <h1>
      Credits
      </h1>

      <table>
      <tr>

      <td width= "50%" vertical-align="top">
        Devolution #7 - Lonely Mountains: Downhill is a cooperation between <a target="_blank" rel="noopener noreferrer" href="https://devolution.online/">Devolution</a>
        , A MAZE. / Berlin 2023, <a target="_blank" rel="noopener noreferrer" href="https://megagonindustries.com/"><br />Megagon Industries</a> and UE University of Europe for Applied Sciences.
      </td>
      <td>
      <h3>Team</h3>

      Almat Kabdolov: (Concept Art, Graphic Design) <br />
      Anna Margrét Jónudóttir: (Exhibition Moderation, Timeline, Website) <br />
      Christoph Maureder: (Tech Advising) <br />
      Diana-Maria Niculescu: ( Exhibition Moderation, PR, Social Media) <br />
      Eyal Peleg Harris: (Producer) <br />
      Hanna Kołodziejczyk: (Graphic Design) <br />
      Jan Teo Jia Xian: (Exhibition Director) <br />
      Juan Osorio: (Timeline) <br />
      Levent Cracea: (Exhibition, PR, Video Editing) <br />
      Maria Shchurova: (Website) <br />
      Mark Komives: (Graphic Design) <br />
      Mascha Camino: (Advising) <br />
      Nayan Bhat: (Devolution #6 Website Update) <br />
      Pavlo Vasylevych: (Producer) <br />
      Csongor Baranyai: (Creative Direction, Curation) <br />

      </td>

      </tr>
      </table>



      </div>

    </div>
  )
}

export default TextBlocks

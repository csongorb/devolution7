import React from 'react'
import "./TextBlocks.css"
import LeafletMap from './LeafletMap';

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
      
      
      <ul style={{listStyleType:"none"}}>
        <li>
        Devolution #7- Lonely Mountains: Downhill is a cooperation between <a target="_blank" rel="noopener noreferrer" href="https://devolution.online/">Devolution</a>
        , A MAZE. / Berlin 2023, 
          <a target="_blank" rel="noopener noreferrer" href="https://megagonindustries.com/"><br />Megagon Industries</a> and UE University of Europe for Applied Sciences.<br /> <br /> 
        </li>
      </ul>

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
      A MAZE. / Berlin 2023
      </h1>

      
      The on-site exhibition focuses on the development process of Lonely Mountains: Downhill by displaying several in-between versions of the game, from early prototypes to later iterations. Visitors can explore the creative process behind the development, encountering new insights with each version they play and each comparison they make. 
      <br /> <br /> 
      Lonely Mountains: Downhill is a low-poly style mountain biking game developed by Berlin developer Megagon Industries. The game is a third-person biking game, where the player tries to connect with nature and complete courses on different mountains.
      <br /> <br /> 
      <h2>
      Exhibition Tours
      </h2>
      For the ultimate insight into the development of Lonely Mountains: Downhill and its design decisions, join the guided tours through the exhibition held by the developers themselves, complementing the exhibited versions with background information, <br /> secrets and anecdotes.
      <br /> <br /> 

      <h3>
      Schedule:
      </h3>

      Thursday, 11th of May 2023, 14:00 - 15:00<br /> with Daniel Helbig
      <br /> <br /> 
      Friday, 12th of May 2023, 14:00 - 15:00<br />  with Jan Bubenik
      <br /> <br /> 
      Saturday, 13th of May 2023, 14:00 - 15:00<br /> with Anna Bloser
      <br />

      
  
    </div>
    <div className="text-block">
    <h1>
      Total Digital
    </h1>
    
      <p>
      The online exhibition showcasing the development process of Lonely Mountains: Downhill is available for permanent viewing, offering visitors an opportunity to explore an interactive timeline of the game's evolution, downloadable and playable early prototypes and in-between versions of the game.
      <br /> <br /> 
      The exhibition works as a unique archive for…  <br /> 
      - Researchers to discover new aspects of how games are growing into shape <br /> 
      - Game designers and game developers interested to learn and be inspired <br /> 
      - Tutors and lecturers searching for inspiring use cases to teach with <br /> 
      - Just everybody interested in games to see and explore how they are developed
      </p>
      
    </div>
    <div className="text-block">
        <LeafletMap/>
    </div>
    </div>

  )
}


export default TextBlocks
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
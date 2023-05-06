import React from 'react'
import CardItem from './CardItem'
import "./Card.css"

//todo deal with images better
import image1 from "../../src/assets/images/lmd_1.jpg"
import image2 from "../../src/assets/images/lmd_2.jpg"
import image3 from "../../src/assets/images/lmd_3.jpg"
import image4 from "../../src/assets/images/lmd_4.jpg"
import image5 from "../../src/assets/images/lmd_5.jpg"
import image6 from "../../src/assets/images/lmd_6.jpg"

function Cards() {
  return (
    <div className='cards'>
        <h1>Download versions</h1>
        <strong>Disclaimer: </strong>
                The versions of the game available are historic development versions and may not be fully functional, we cannot guarantee their compatibility with your device. 
                We provide them for research purposes only and without warranty or support. By downloading and using these versions, you agree that we do not take any responsibility for any issues that may occur as a result of such. 
                The versions’ network features may be non-functional or limited. Please note that we have tested these versions to the best of our knowledge.
        
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={image1}
                    text="Version 1"
                    label="Version"
                    path="/wip-page"
                    />
                    <CardItem 
                    src={image2}
                    text="Version 2"
                    label="Version"
                    path="/wip-page"
                    />
                    <CardItem 
                    src={image3}
                    text="Version 3"
                    label="Version"
                    path="/wip-page"
                    />
                    <CardItem 
                    src={image4}
                    text="Version 4"
                    label="Version"
                    path="/wip-page"
                    />
                    <CardItem 
                    src={image5}
                    text="Version 5"
                    label="Version"
                    path="/wip-page"
                    />           
                    <CardItem 
                    src={image6}
                    text="Version 6"
                    label="Version"
                    path="/wip-page"
                    />
                </ul>

    <div className="text-block">
      <h1>
      A MAZE. / Berlin 2023
      </h1>
      
      The on-site exhibition focuses on the development process of Lonely Mountains: Downhill by displaying several in-between versions of the game, from early prototypes to later iterations. Visitors can explore the creative process behind the development, encountering new insights with each version they play and each comparison they make. 
      <br /> <br /> 
      Lonely Mountains: Downhill is a low-poly style mountain biking game developed by Berlin developer Megagon Industries. The game is a third-person biking game, where the player tries to connect with nature and complete courses on different mountains.
      
      <table>
        <tr>
        <th vertical-align= "top" width= "50%"> 
        <h2>
      Exhibition Tours
      </h2>
      For the ultimate insight into the development of Lonely Mountains: Downhill and its design decisions, join the guided tours through the exhibition held by the developers themselves, complementing the exhibited versions with background information, secrets and anecdotes.<br /><br /> <br /> 
      </th>

      <th vertical-align= "top">
      <h3>
      Schedule:
      </h3>

      Thursday, 11th of May 2023, 14:00 - 15:00<br /> with Daniel Helbig
      <br /> <br /> 
      Friday, 12th of May 2023, 14:00 - 15:00<br />  with Jan Bubenik
      <br /> <br /> 
      Saturday, 13th of May 2023, 14:00 - 15:00<br /> with Anna Bloser
      <br /></th>
        </tr>
      </table>
      <br /> <br /> 
       

      
      </div>
                <div className="text-block">
                <h1>
      Credits <br /> 
      </h1>
     
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
                </div>


      
            </div>
        </div>
    </div>
  )
}

export default Cards
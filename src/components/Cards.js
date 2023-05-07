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

        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src={image1}
                    text="Android 1: First Prototype"
                    label="July 16th 2015"
                    path="/wip-page"
                    />
                    <CardItem
                    src={image2}
                    text="Android 3: Polished Prototype"
                    label="October 19th 2015"
                    path="/wip-page"
                    />
                    <CardItem
                    src={image2}
                    text="Android 5: Controler Experimentation Mobile"
                    label="January 22nd 2016"
                    path="/wip-page"
                    />
                    <CardItem
                    src={image2}
                    text="Android 13: First Mountains & Transition To PC"
                    label="June 29th 2016"
                    path="/wip-page"
                    />
                  </ul>

                  <ul className='cards__items'>
                    <CardItem
                    src={image3}
                    text="Prototype March16: Controler Experimentation PC"
                    label="March 23rd 2016"
                    path="/wip-page"
                    />
                    <CardItem
                    src={image4}
                    text="Prototype August16: First Mountains & Transition PC"
                    label="August 16th 2016"
                    path="/wip-page"
                    />
                    <CardItem
                    src={image5}
                    text="Backer Demo 1.0"
                    label="November 18th 2017"
                    path="/wip-page"
                    />
                    <CardItem
                    src={image6}
                    text="Dev-Access 0.1.4: New Terrain System / Growing Mountains"
                    label="May 3rd 2018"
                    path="/wip-page"
                    />
                    <CardItem
                    src={image6}
                    text="Dev-Acces 0.1.7: Progression System & More Mountains"
                    label="September 10th 2018"
                    path="/wip-page"
                    />
                </ul>

                </div>
              </div>
            </div>
  )
}

export default Cards

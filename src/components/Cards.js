import React from 'react'
import CardItem from './CardItem'
import "./Card.css"

//todo deal with images better
import android1 from "../../src/assets/images/versions/android_001.png"
import android2 from "../../src/assets/images/versions/android_003.jpg"
import android3 from "../../src/assets/images/versions/android_005.png"
import android4 from "../../src/assets/images/versions/android_013.png"
import version5 from "../../src/assets/images/versions/protoMarch16.png"
import version6 from "../../src/assets/images/versions/protoAugust16.png"
import version7 from "../../src/assets/images/versions/backerdemo.jpg"
import version8 from "../../src/assets/images/versions/version_1_1_4.jpg"
import version9 from "../../src/assets/images/versions/version_1_1_7.jpg"

function Cards() {
  return (
    <div className='cards'>

        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src={android1}
                    text="Android 1: First Prototype"
                    label="July 16th 2015"
                    path="/wip-page"
                    />
                    <CardItem
                    src={android2}
                    text="Android 3: Polished Prototype"
                    label="October 19th 2015"
                    path="/wip-page"
                    />
                    <CardItem
                    src={android3}
                    text="Android 5: Controler Experimentation Mobile"
                    label="January 22nd 2016"
                    path="/wip-page"
                    />
                    <CardItem
                    src={android4}
                    text="Android 13: First Mountains & Transition To PC"
                    label="June 29th 2016"
                    path="/wip-page"
                    />
                  </ul>

                  <ul className='cards__items'>
                    <CardItem
                    src={version5}
                    text="Prototype March16: Controler Experimentation PC"
                    label="March 23rd 2016"
                    path="/wip-page"
                    />
                    <CardItem
                    src={version6}
                    text="Prototype August16: First Mountains & Transition PC"
                    label="August 16th 2016"
                    path="/wip-page"
                    />
                    <CardItem
                    src={version7}
                    text="Backer Demo 1.0"
                    label="November 18th 2017"
                    path="/wip-page"
                    />
                    <CardItem
                    src={version8}
                    text="Dev-Access 0.1.4: New Terrain System / Growing Mountains"
                    label="May 3rd 2018"
                    path="/wip-page"
                    />
                    <CardItem
                    src={version9}
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

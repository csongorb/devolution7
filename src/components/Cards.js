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
                    text="First Prototype"
                    label="Android 1"
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



1) 150716 Android 1 ("First Prototype")
2) 151019 Android 3 ("Polished Prototype")
3) 160122 Android 5 ("Controler Experimentation Mobile")
4) 160323 Prototype March16 ("Controler Experimentation PC")
5) 160629 Android 13 ("First Mountains & Transition Mobile")
6) 160816 (previously known as) Prototype Jule16 ("First Mountains & Transition PC")
7) 171118 BackerDemo v1 ("Backer Demo")
8) 180503 Dev-Access 0.1.4 ("New Terrain System / Growing Mountains")
9) 180910 Dev-Acces 0.1.7 ("Progression System & More Mountains")


                



                </div>
              </div>
            </div>
  )
}

export default Cards

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
        <h1>check out these cards!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={image1}
                    text="Version 1"
                    label="Version"
                    path="/services"
                    />
                    <CardItem 
                    src={image2}
                    text="Version 2"
                    label="Version"
                    path="/services"
                    />
                </ul> 
                
                <ul className='cards__items'>
                    <CardItem 
                    src={image3}
                    text="Version 3"
                    label="Version"
                    path="/services"
                    />
                    <CardItem 
                    src={image4}
                    text="Version 4"
                    label="Version"
                    path="/services"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src={image5}
                    text="Version 5"
                    label="Version"
                    path="/services"
                    />
               
                    <CardItem 
                    src={image6}
                    text="Version 6"
                    label="Version"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
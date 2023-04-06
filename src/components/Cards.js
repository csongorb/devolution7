import React from 'react'
import CardItem from './CardItem'
import "./Card.css"

//todo deal with images better
import image1 from "../../src/assets/images/lmd_1.jpg"

function Cards() {
  return (
    <div className='cards'>
        <h1>check out this card!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={image1}
                    text="Version 1"
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
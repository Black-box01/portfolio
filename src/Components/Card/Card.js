'use client';
import React from 'react'
import './Card.css'
import {themeContext} from '../../Context'
import {useContext} from 'react'

const Card = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='card' style={props.height}>
        <img src={props.emoji} alt='emoji' />
        <span>{props.heading}</span>
        <span style={{
          color : darkMode? 'white': ''
        }}>{props.detail}</span>
        <button className='e-button' ><a href='https://www.linkedin.com/'>Learn More</a></button>
    </div>
  )
}

export default Card
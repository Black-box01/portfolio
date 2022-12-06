'use client';
import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = (props) => {
  return (
    <div className='floatingdiv'>
        <img src={props.image} alt='crown' />
            <span>{props.txt1} <br /> {props.txt2}</span>   
    </div>
    
  )
}

export default FloatingDiv
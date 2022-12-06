'use client';
import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import {API, graphqlOperation } from 'aws-amplify'
import { listFOOTERS } from '../../graphql/queries'
import { useState, useEffect} from 'react'

const Footer = () => {

  const [main, setMain] = useState([]);

    useEffect(() => {
      API.graphql(graphqlOperation(listFOOTERS)).then((result) => {
        setMain(result?.data?.listFOOTERS?.items[0])
      })
    }, []);

    
  return (
    <div className='footer'>
        <img src={Wave} alt='Wave' style={{width: '100%'}}/>
        <div className='f-content'>
            <div className='f-icons' >
            <a href={main.instagram}><Instagram color='white' size='3rem' /></a>
            <a href={main.linkedIn}><LinkedIn color='white' size='3rem' /></a>
            <a href={main.github}><Github color='white' size='3rem' /></a>
              
            </div>
            <span>{main.allRights}</span>
            <span><strong><em>E-MAIL:</em></strong>{main.email}</span>
            <span>{main.developer}</span>
        </div>
    </div>
  )
}

export default Footer
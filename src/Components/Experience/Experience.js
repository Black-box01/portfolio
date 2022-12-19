'use client';
import React, { useState, useEffect, useContext} from 'react'
import './Experience.css'
import {themeContext} from '../../Context'
import {API, graphqlOperation } from 'aws-amplify'
import { listEXPERIENCES } from '../../graphql/queries'


const Experience = () => {

  const [main, setMain] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listEXPERIENCES)).then((result) => {
      setMain(result?.data?.listEXPERIENCES?.items[0])
    })
  }, []);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' id='Experience'>

        <div className='achievement'>
          <div className='circle' style={{
            color : darkMode? '#242D49': ''
          }}>{main.yearsExperience}</div>
          <span>years</span>
          <span>Experience</span>
        </div>

        <div className='achievement'>
          <div className='circle' style={{
            color : darkMode? '#242D49': ''
          }}>{main.completedProjects}</div>
          <span>Completed</span>
          <span>Projects</span>
        </div>

        <div className='achievement'>
          <div className='circle' style={{
            color : darkMode? '#242D49': ''
          }}>{main.companiesWord}</div>
          <span>Companies</span>
          <span>Work</span>
        </div>
    </div>
  )
}

export default Experience
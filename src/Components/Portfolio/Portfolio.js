'use client';
import React from 'react'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import PortfolioPhone from './PortfolioPhone'
import PortfolioLaptop from './PortfolioLaptop'
import {API, graphqlOperation } from 'aws-amplify'
import { listPORTFOLIOS } from '../../graphql/queries'
import { useState, useEffect} from 'react'


const Portfolio = () => {

  const [main, setMain] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listPORTFOLIOS)).then((result) => {
      setMain(result?.data?.listPORTFOLIOS?.items[0])
    })
  }, []);


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
        {/* Header session */}

        <span style={{
          color : darkMode? 'white': ''
        }}>{main.recent}</span>
        <span>{main.portfolio}</span>
        <span className='note'>{main.text}</span>
        
        
        <PortfolioPhone />

        <PortfolioLaptop />

        
    </div>
  )
}

export default Portfolio
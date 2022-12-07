'use client';
import React, { useState, useEffect, useContext} from 'react'
import './Services.css'
import Heart from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
// import Resume from '../../Documents/Resume.pdf'
import {themeContext} from '../../Context'
import {API, graphqlOperation } from 'aws-amplify'
import { listSERVICES } from '../../graphql/queries'
import { listRESUMES } from '../../graphql/queries'


const Services = () => {

    const [main, setMain] = useState([]);
    const [resu, setResu] = useState([]);

    useEffect(() => {
      API.graphql(graphqlOperation(listSERVICES)).then((result) => {
        setMain(result?.data?.listSERVICES?.items[0])
      })
    }, []);

    useEffect(() => {
      API.graphql(graphqlOperation(listRESUMES)).then((result) => {
        setResu(result?.data?.listRESUMES?.items[0])
      })
    }, []);


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
        <div className='awesome' >
            <span style={{
                background : darkMode? '#242D49': '',
                color : darkMode? 'white': ''
              }}>{main.awesome}</span>
            <span>{main.services}</span>
            <span style={{
                background : darkMode? '#242D49': '',
                color : darkMode? 'white': '', width: '530px'
              }}>{main.text}
             </span>
             <a href={resu.source} download>
                <button className='button a-button'>Download Resume</button>
             </a>
             <div className='blur a-blur' style={{background: '#ABF1FF94'}}></div>
        </div>
        <div className='cards'>

                    {/* FIRST CARD*/}
            <div style={{left: '14rem'}}>
                <Card
                    emoji= {Heart}
                    heading={'Design'}
                    detail={main.cardDesign}
                />
            </div>

                    {/* SECOND CARD*/}
            <div style={{left: '-4rem', top: '12rem'}}
            >
                <Card
                    emoji= {Glasses}
                    heading={'Developer'}
                    detail={main.cardDeveloper}
                    height={{height: '14rem'}}
                />
            </div>

                    {/* THIRD CARD*/}
            <div style={{left: '12rem', top: '19rem'}}
            >
                <Card
                    emoji= {Humble}
                    heading={'UI/UX'}
                    detail={main.cardUi}
                />
            </div>
            <div className='blur b-blur' style={{background: 'var(--purple)'}}></div>

        </div>
    </div>
  )
}

export default Services
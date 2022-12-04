import React from 'react'
import './Services.css'
import Heart from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from '../../Documents/Resume.pdf'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import {motion} from 'framer-motion'
import {API, graphqlOperation } from 'aws-amplify'
import { listSERVICES } from '../../graphql/queries'
import { useState, useEffect} from 'react'


const Services = () => {

    const [main, setMain] = useState([]);

    useEffect(() => {
      API.graphql(graphqlOperation(listSERVICES)).then((result) => {
        setMain(result?.data?.listSERVICES?.items[0])
      })
    }, []);

    const transition = {duration: 1, type: 'spring'}
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
             <a href={Resume} download>
                <button className='button a-button'>Download Resume</button>
             </a>
             <div className='blur a-blur' style={{background: '#ABF1FF94'}}></div>
        </div>
        <div className='cards'>

                    {/* FIRST CARD*/}
            <motion.div style={{left: '14rem'}} 
            initial={{left: '25rem'}}
            whileInView={{left: '14rem'}}
            transition={transition}>
                <Card
                    emoji= {Heart}
                    heading={'Design'}
                    detail={main.cardDesign}
                />
            </motion.div>

                    {/* SECOND CARD*/}
            <motion.div style={{left: '-4rem', top: '12rem'}}
            initial={{left: '-15rem'}}
            whileInView={{left: '-4rem'}}
            transition={transition}
            >
                <Card
                    emoji= {Glasses}
                    heading={'Developer'}
                    detail={main.cardDeveloper}
                    height={{height: '14rem'}}
                />
            </motion.div>

                    {/* THIRD CARD*/}
            <motion.div style={{left: '12rem', top: '19rem'}}
            initial={{top: '25rem'}}
            whileInView={{top: '19rem'}}
            transition={transition}
            >
                <Card
                    emoji= {Humble}
                    heading={'UI/UX'}
                    detail={main.cardUi}
                />
            </motion.div>
            <div className='blur b-blur' style={{background: 'var(--purple)'}}></div>

        </div>
    </div>
  )
}

export default Services
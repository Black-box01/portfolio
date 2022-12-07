'use client';
import React, { useState, useEffect, useContext} from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {themeContext} from '../../Context'
import { Link } from 'react-scroll'
import {API, graphqlOperation } from 'aws-amplify'
import { listWORKS } from '../../graphql/queries'


const Works = () => {

    const [main, setMain] = useState([]);

    useEffect(() => {
      API.graphql(graphqlOperation(listWORKS)).then((result) => {
        setMain(result?.data?.listWORKS?.items[0])
      })
    }, []);

   
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        <div className='awesome' >
            <span style={{
                color : darkMode? 'white': ''
              }}>{main.works}</span>
            <span>{main.brands}</span>
            <span style={{
                color : darkMode? 'white': ''
              }}>{main.text}
            </span>
                <button className='button a-button'><Link spy={true} to='Contact' smooth={true} >Hire Me </Link></button>
            <div className='blur a-blur' style={{background: '#ABF1FF94'}}></div>
        </div>

                {/* Right Side */}

        <div className='w-right'>
            <div 
            className='w-mainCircle'>
                <div className='w-secCircle'>
                    <img src={Upwork} alt='Upwork' />
                </div>
                <div className='w-secCircle'>
                    <img src={Fiverr} alt='Fiverr'/>
                </div>
                <div className='w-secCircle'>
                    <img src={Amazon} alt='Amazon' />
                </div>
                <div className='w-secCircle'>
                    <img src={Shopify} alt='Shopify' />
                </div>
                <div className='w-secCircle'>
                    <img src={Facebook} alt='Facebook' />
                </div>
            </div>  

            {/* Background Circle */}
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>
        </div>

    </div>
  )
}

export default Works
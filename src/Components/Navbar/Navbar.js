import React, { useState, useEffect, useContext} from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {themeContext} from '../../Context'
import { Link } from 'react-scroll'
import {API, graphqlOperation } from 'aws-amplify'
import { listNAVBARS } from '../../graphql/queries'



const Navbar = () => {

    const [main, setMain] = useState([]);
  
      useEffect(() => {
        API.graphql(graphqlOperation(listNAVBARS)).then((result) => {
          setMain(result?.data?.listNAVBARS?.items[0])
        })
      }, []);
  
      
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='n-wrapper' style={{
        background : darkMode? '#242D49': '',
        color : darkMode? 'white': ''
      }} >
        <div className='n-left'>
            <div className='n-name' style={{
                color : darkMode? 'white': ''
              }}>
                {main.name}
            </div>
            <Toggle />
        </div>
        <div className='n-right' style={{
            color : darkMode? 'white': ''
          }}>
            <div className='n-list'>
                <ul>
                <Link spy={true} to='Intro' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} >
                    <li>Services</li>
                </Link>
                <Link spy={true} to='Experience' smooth={true} >
                    <li>Experience</li>
                </Link>
                <Link spy={true} to='Portfolio' smooth={true} >
                    <li>Portfolio</li>                
                    </Link>
                <Link spy={true} to='Testimonials' smooth={true} >
                    <li>Testimonials</li>
                </Link>   
                </ul>
            </div>
            <a href='tel:09024787192' className='button n-button'>
                Click to Call: 📞
            </a>
        </div>
    </div>
  )
}

export default Navbar
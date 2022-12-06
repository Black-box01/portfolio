'use client';
import React from 'react'
import './intro.css'
import Github from '../../../src/img/github.png'
import LinkedIn from '../../../src/img/linkedin.png'
import Instagram from '../../../src/img/instagram.png'
import thumbup from '../../../src/img/thumbup.png'
import Crown from '../../../src/img/crown.png'
import Glasses from '../../../src/img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import music from '../../Documents/music.mp3'
import { Howl } from 'howler'
import music1 from '../../img/music1.png'
import music2 from '../../img/music2.png'
import { Link } from 'react-scroll'
import {API, graphqlOperation } from 'aws-amplify'
import { listINTROes } from '../../graphql/queries'
import { useState, useEffect} from 'react'

const Intro = () => {

  const [main, setMain] = useState([]);

    useEffect(() => {
      API.graphql(graphqlOperation(listINTROes)).then((result) => {
        setMain(result?.data?.listINTROes?.items[0])
      })
    }, []);
    
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const sound = new Howl({
      src: music,
      html5: true,
    });
    
    console.log(main)


  return (
    <div className='intro' id='Intro'>
        <div className='i-left'  
        >
            <div className='i-name'>
                <span style={{
                    background : darkMode? '#242D49': '',
                    color : darkMode? 'white': ''
                  }}>{main.firstText}</span>
                <span>{main.name}</span>
                <span style={{
                    background : darkMode? '#242D49': '',
                    color : darkMode? 'white': ''
                  }}>{main.description} <em>{main.emphasesedText}</em> 
                 {main.descriptionCont}
                 </span>
            </div>
            <button className='button i-button'><Link spy={true} to='Contact' smooth={true} >
            Hire me
        </Link></button>
            <div className='i-icons'>
                <a href={main.githubLink}>
                    <img src={Github} alt='Github' title='Github'/>
                </a>
                <a href={main.linkedinLink}>
                    <img src={LinkedIn} alt='LinkedIn' title='Linkedin'/>
                </a>
                <a href={main.instagramLink}>
                    <img src={Instagram} alt='Instagram' title='Instagram'/>
                </a>
            </div>
        </div>


        <div className='i-right'>
                <img src={main.blueBkImage} alt='Vector1' className='v1' />
                <img src={main.orangeBkImage} alt='Vector2' className='v2'/>
                <img src={main.characterImage} alt='boy' className='v3'/>
                <img src={Glasses} alt='Glasses' />
                <div style={{top: '-4%', left: '68%'}} className='floating-div'>
                    <FloatingDiv image={Crown} 
                    txt1={main.floatingrightText} txt2='Developer'/>
                </div>
                <div style={{top: '18rem'}} className='floating-div'>
                    <FloatingDiv image={thumbup} 
                    txt1={main.floatingleftText} txt2='Designer'/>
                </div>
                <div className='blur' style={{background:
                     '#C1F5FF', 
                     top: '17rem', width:
                      '21rem', height: 
                      '11rem', left: 
                      '-9rem',
                    position: 'absolute', 
                    filter: 'blur(72px)', 
                    zIndex: '-9', 
                    borderRadius: '50%'}} >
                </div>
                <div className='blur' style={{background:
                    'rgb(238 210 255)', 
                    top: '-18%', width:
                     '22rem', height: 
                     '14rem', left: 
                     '56%',
                   position: 'absolute', 
                   filter: 'blur(72px)', 
                   zIndex: '-9', 
                   borderRadius: '50%'}} >
                </div>
        </div>
        <div className='fixed' style={{
          background : darkMode? '#242D49': '',
          color : darkMode? 'white': ''
        }}> 
                  <img src={music1} alt='image1'  onClick={() => sound.play()} />
                  <img src={music2} alt='image2'  onClick={() => sound.pause()} />
        </div>
    </div>
  )
}

export default Intro
import React from 'react'
import './Portfolio.css'
import Phone from '../../img/phone.png'
import ScreenShot1 from '../../img/screenshot1.png'
import {API, graphqlOperation } from 'aws-amplify'
import { listPORTFOLIOPHONES } from '../../graphql/queries'
import { useState, useEffect} from 'react'

function PortfolioPhone() {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listPORTFOLIOPHONES)).then((result) => {
      setFiles(result?.data?.listPORTFOLIOPHONES?.items)
    })
  }, []);


 
  const fil = [
    {
        PhoneFrame: Phone,
        PhoneImage: ScreenShot1,
        projectTitle: 'YOUTUBE PROJECT WEB',
        projectDec: 'Pretium sagittis dignissim in lobortis maximus justo finibus facilisis taciti viverra enim est eleifend auctor habitant inceptos efficitur ultricies pede dis libero elit feugiat arcu etiam posuere nisi sociosqu vitae natoque himenaeos torquent suscipit fermentum rhoncus non a turpis curae erat eu primis parturient gravida cras venenatis consectetur platea quam',
        button: 'View More'
    },
    {
      PhoneFrame: Phone,
      PhoneImage: ScreenShot1,
      projectTitle: 'YOUTUBE PROJECT WEB',
      projectDec: 'Pretium sagittis dignissim in lobortis maximus justo finibus facilisis taciti viverra enim est eleifend auctor habitant inceptos efficitur ultricies pede dis libero elit feugiat arcu etiam posuere nisi sociosqu vitae natoque himenaeos torquent suscipit fermentum rhoncus non a turpis curae erat eu primis parturient gravida cras venenatis consectetur platea quam',
      button: 'View More'
  },
    {
      PhoneFrame: Phone,
      PhoneImage: ScreenShot1,
      projectTitle: 'YOUTUBE PROJECT WEB',
      projectDec: 'Pretium sagittis dignissim in lobortis maximus justo finibus facilisis taciti viverra enim est eleifend auctor habitant inceptos efficitur ultricies pede dis libero elit feugiat arcu etiam posuere nisi sociosqu vitae natoque himenaeos torquent suscipit fermentum rhoncus non a turpis curae erat eu primis parturient gravida cras venenatis consectetur platea quam',
      button: 'View More'
  }
]
  return (
    <div>
      {files.map((file, index) => {
          return(
            <div className='project' key={index} >
            <div className='phone'>
                <img src={file.imgPhone} alt='Phone' />
                <div className='phoneScreen'>
                  <img src={file.imgContent} alt='ScreenShot' className='phoneApp' />
                </div>
            </div>
    
            <div className='projectDetail'>
            <h1 className='projectTitle'>{file.projectTitle}</h1>
              <p className='projectDes'>{file.projectDescription}</p>
              <button className='button projectButton'><a href={file.btnLink}>{file.btnText}</a></button>
            </div>
        </div>
          )
      })}
    </div>
  )
}

export default PortfolioPhone
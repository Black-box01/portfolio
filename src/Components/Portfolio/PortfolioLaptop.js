import React from 'react'
import './Portfolio.css'
import Laptop from '../../img/laptop.png'
import ScreenShot2 from '../../img/screenshot2.png'
import {API, graphqlOperation } from 'aws-amplify'
import { listPORTFOLIOLAPTOPS } from '../../graphql/queries'
import { useState, useEffect} from 'react'

function PortfolioLaptop() {

    const [files, setFiles] = useState([]);
  
    useEffect(() => {
      API.graphql(graphqlOperation(listPORTFOLIOLAPTOPS)).then((result) => {
        setFiles(result?.data?.listPORTFOLIOLAPTOPS?.items)
      })
    }, []);
  
  
    const fis = [
        {
            laptopFrame: Laptop,
            laptopImage: ScreenShot2,
            projectTitle: 'YOUTUBE PROJECT WEB',
            projectDec: 'Pretium sagittis dignissim in lobortis maximus justo finibus facilisis taciti viverra enim est eleifend auctor habitant inceptos efficitur ultricies pede dis libero elit feugiat arcu etiam posuere nisi sociosqu vitae natoque himenaeos torquent suscipit fermentum rhoncus non a turpis curae erat eu primis parturient gravida cras venenatis consectetur platea quam',
            button: 'View More'
        },
        {
            laptopFrame: Laptop,
            laptopImage: ScreenShot2,
            projectTitle: 'YOUTUBE PROJECT WEB',
            projectDec: 'Pretium sagittis dignissim in lobortis maximus justo finibus facilisis taciti viverra enim est eleifend auctor habitant inceptos efficitur ultricies pede dis libero elit feugiat arcu etiam posuere nisi sociosqu vitae natoque himenaeos torquent suscipit fermentum rhoncus non a turpis curae erat eu primis parturient gravida cras venenatis consectetur platea quam',
            button: 'View More'
        },
        {
            laptopFrame: Laptop,
            laptopImage: ScreenShot2,
            projectTitle: 'YOUTUBE PROJECT WEB',
            projectDec: 'Pretium sagittis dignissim in lobortis maximus justo finibus facilisis taciti viverra enim est eleifend auctor habitant inceptos efficitur ultricies pede dis libero elit feugiat arcu etiam posuere nisi sociosqu vitae natoque himenaeos torquent suscipit fermentum rhoncus non a turpis curae erat eu primis parturient gravida cras venenatis consectetur platea quam',
            button: 'View More'
        }
    ]

  return (
    <div>
    {files.map((file, index) => {
        return(
                <div key={index} className='project'>
                        <div className='laptop'>
                            <img src={file.imgLaptop} alt='laptop' />
                            <div className='laptopScreen'>
                                <img src={file.imgContent} alt='ScreenShot' className='laptopApp' />
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

export default PortfolioLaptop
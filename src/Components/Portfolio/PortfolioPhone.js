'use client';
import React, { useState, useEffect} from 'react'
import './Portfolio.css'
import {API, graphqlOperation } from 'aws-amplify'
import { listPORTFOLIOPHONES } from '../../graphql/queries'

function PortfolioPhone() {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listPORTFOLIOPHONES)).then((result) => {
      setFiles(result?.data?.listPORTFOLIOPHONES?.items)
    })
  }, []);


 
  return (
    <div>
      {files.map((file, index) => {
          return(
            <div className='project' key={index} >
            <div className='phone'>
                <img src={file.imgPhone} alt='Phone' style={{borderRadius: '50px'}} />
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
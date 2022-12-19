'use client';
import React, { useState, useEffect} from 'react'
import './Portfolio.css'
import {API, graphqlOperation } from 'aws-amplify'
import { listPORTFOLIOLAPTOPNEWS } from '../../graphql/queries'

function PortfolioLaptop() {

    const [files, setFiles] = useState([]);
  
    useEffect(() => {
      API.graphql(graphqlOperation(listPORTFOLIOLAPTOPNEWS)).then((result) => {
        setFiles(result?.data?.listPORTFOLIOLAPTOPNEWS?.items)
      })
    }, []);
  

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
                    <button className='button projectButton'><a href={file.btnLink}>{file.btnTex}</a></button>
                    </div>
                </div>
        )
    })}       
    </div>
  )
}

export default PortfolioLaptop
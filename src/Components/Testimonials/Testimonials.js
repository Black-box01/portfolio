'use client';
import React, { useState, useEffect, useContext} from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import {themeContext} from '../../Context'
import {API, graphqlOperation } from 'aws-amplify'
import { listTESTIMONIALS } from '../../graphql/queries'


const Testimonials = () => {

    const [clients, setClients] = useState([]);
  
      useEffect(() => {
        API.graphql(graphqlOperation(listTESTIMONIALS)).then((result) => {
            setClients(result?.data?.listTESTIMONIALS?.items)
        })
      }, []);
  
     
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className='t-heading'>
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className='blur t-blur1' style={{background: 'var(--purple)'}}></div>
            <div className='blur t-blur2' style={{background: 'var(--orangeCard)'}}></div>
        </div>

        {/* slider */}

        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
        >
            {clients.map((client, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className='testimonials' >
                            <img src={client.img} alt='Client' />
                            <span style={{
                                color : darkMode? 'white': ''
                              }}>{client.review}</span>
                        </div>
                        
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  );
};

export default Testimonials
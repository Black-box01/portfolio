import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import {API, graphqlOperation } from 'aws-amplify'
import { listTESTIMONIALS } from '../../graphql/queries'
import { useState, useEffect} from 'react'


const Testimonials = () => {

    const [clients, setClients] = useState([]);
  
      useEffect(() => {
        API.graphql(graphqlOperation(listTESTIMONIALS)).then((result) => {
            setClients(result?.data?.listTESTIMONIALS?.items)
        })
      }, []);
  
     
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const clien = [
        {
            img: profilePic1,
            review: 'Fusce tempus ornare eget primis ipsum tortor non curae ultricies pharetra nostra blandit donec suscipit nam magnis class torquent sagittis taciti velit luctus est natoque odio s'
        },
        {
            img: profilePic2,
            review: 'feugiat tellus sapien rutrum quisque penatibus pellentesque elementum libero euismod aliquet venenatis nec nulla himenaeos laoreet bibendum molestie'
        },
        {
            img: profilePic3,
            review: 'non curae ultricies pharetra nostra blandit donec suscipit nam magnis class torquent sagittis taciti velit luctus est natoque odio suspendisse aptent inceptos adipiscing placerat pr'
        },
        {
            img: profilePic4,
            review: 'pendisse aptent inceptos adipiscing placerat pretium feugiat tellus sapien rutrum quisque penatibus pellentesque elementum libero euismod aliquet venenatis nec nulla'
        }
    ]

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
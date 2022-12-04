import React, {useState, useEffect} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import {themeContext} from '../../Context'
import {useContext} from 'react'
import { useRef } from 'react';
import {API, graphqlOperation } from 'aws-amplify'
import { listCONTACTS } from '../../graphql/queries'


const Contact = () => {

    const [main, setMain] = useState([]);
  
      useEffect(() => {
        API.graphql(graphqlOperation(listCONTACTS)).then((result) => {
          setMain(result?.data?.listINTROS?.items[0])
        })
      }, []);
  
     
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x1yi334', 'template_8dq0ks4', form.current, 'Og0Fxjq6DshRY8PLV')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form' id='Contact'>
        <div className='w-left'>
            <div className='awesome head' >
                <span style={{
                    color : darkMode? 'white': ''
                  }}>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
            </div>
        </div>

        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='user' placeholder='Name' />
                <input type='email' name='user_email' className='user' placeholder='Email' />
                <textarea name='message' className='user' placeholder='Message' />
                <input type='submit' value='Send' className='button' />
                <div>{done && 'Thanks, Your message has been received! ✔✔✔' }</div>
                <div className='blur c-blur1' style={{background: 'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
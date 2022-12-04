import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import {useContext, useEffect, useState} from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Amplify } from 'aws-amplify'
import config from '../src/aws-exports'

Amplify.configure({...config, Analytics: {disabled: true}})


function App() {

  const  [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="App"
      style={{
        background : darkMode? '#242D49': '',
        color : darkMode? 'white': ''
      }}
    >
    {
      loading?
      <div className="loading">
        <ClimbingBoxLoader
        size={30}
        color={'#F37A24'}
        loading={loading}
        />
        <span>I'M KACHI</span>
        <span>FULL STACK</span>
        <span>MOBILE & WEB DEVELOPMENT</span>
        <span>😎😘</span>
      </div>
      

      :
      <>
        <Navbar  />
        <Intro />
        <Services />
        <Experience />
        <Works />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    }
      
    </div>
  );
}

export default App;

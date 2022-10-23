import React from 'react' ;
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Service from './components/Service/Service.js';
import Testimonial from './components/Testimonial/Testimonial';
import Subscription from './components/Subscription/Subscription.js';
import "./App.css"
import ScrollToTop from "react-scroll-to-top";
const App = () => {
  return (
    <>
    <Navbar />
    <Home/>
    <About/>
    <Service/>
    <Testimonial/>
    <Subscription/>

    <ScrollToTop smooth
    color='white'
    height='20'
    width='20'
    style={{borderRadius:"90px",backgroundColor:"#38004c"}}
    />
    </>
  )
}

export default App;
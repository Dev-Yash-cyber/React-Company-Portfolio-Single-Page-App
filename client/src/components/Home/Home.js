import React from 'react'
import "./home.css"
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div className='container-fluid home'>
     <div className='container home-content'> 
    <p>
       <h1><b>Portfolio</b> 
       </h1>
       <h1>
        <Typewriter
         options={{
         strings: ['Web Developer','Software Developer','Android App Developer','IOS App Developer','UI/UX Designer','Cloud Computing','BlockChain Developer'],
         autoStart: true,
         loop: true,
         delay: 10,
         }}
        />
       </h1>
   
      
        <br></br>
        <br></br>
        <h4>This is Yash Barot Completed BE on <b>Information Technology</b>.Our Website company Is more Popular among the World.</h4>
      </p>
      <span className="view-details-home-button">View Details</span>
     </div>
    </div>
  );
};

export default Home;
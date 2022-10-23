import React from 'react'
import "./about.css"
import about from "../../images/bui.jpg"

import {FcSlrBackSide ,FcShop ,FcWorkflow} from "react-icons/fc";

const Abouts = () => {
  return (
    <div className='container about-section'>
      <div className='row'>
        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>

          <div className='about-image'>
            <img src={about} height="400px" width="400px" alt="about_image"/>
          </div>

        </div> 
      
      <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
        
        <div className="about-details">

            <div className='about-title'>
               <h5>About</h5>
               <span className="line"></span>
            </div>
            
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking its layout.</p>
           <div className='card-design'>
               <div className='about-list-item'>
                  <div className='about-details-icon'>
                   <p>
                      <FcSlrBackSide size={50}/>
                  </p>
                </div>
                   <div>
                      <h6>Perfect Day Out</h6>
                      <p>
                        It is a long establishedfact that a reader will be distractedby the content.
                      </p>
                   </div>
                
              </div>
            </div>
            <div className='card-design'>
               <div className='about-list-item'>
                  <div className='about-details-icon'>
                   <p>
                      <FcShop size={50}/>
                  </p>
                </div>
                   <div>
                      <h6>Perfect Day Out</h6>
                      <p>
                        It is a long establishedfact that a reader will be distractedby the content.
                      </p>
                   </div>
                
              </div>
            </div>
            <div className='card-design'>
               <div className='about-list-item'>
                  <div className='about-details-icon'>
                   <p>
                      <FcWorkflow size={50}/>
                  </p>
                </div>
                   <div>
                      <h6>Perfect Day Out</h6>
                      <p>
                        It is a long establishedfact that a reader will be distractedby the content.
                      </p>
                   </div>
                
              </div>
            </div>
            
          </div>
       </div>      
     </div>
   </div>
  )
};

export default Abouts;

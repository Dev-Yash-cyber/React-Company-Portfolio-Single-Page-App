import React from 'react'
import "./service.css"
import { FcOk } from "react-icons/fc";

const Service = () => {

    const servicedata = [

        {
            id:1,
            service1: "Web Developer",
            service2: "Software Developer",
            service3: "Android App Developer",
            service4: "IOS App Developer",
        },
        {
            id:2,
            service1: "Web Developer",
            service2: "Software Developer",
            service3: "Android App Developer",
            service4: "IOS App Developer",
        },
        {
            id:3,
            service1: "Web Developer",
            service2: "Software Developer",
            service3: "Android App Developer",
            service4: "IOS App Developer",
        },
        {
            id:4,
            service1: "Web Developer",
            service2: "Software Developer",
            service3: "Android App Developer",
            service4: "IOS App Developer",
        },
        {
            id:5,
            service1: "Web Developer",
            service2: "Software Developer",
            service3: "Android App Developer",
            service4: "IOS App Developer",
        },
        {
            id:6,
            service1: "Web Developer",
            service2: "Software Developer",
            service3: "Android App Developer",
            service4: "IOS App Developer",
        },
        {
            id:7,
            service1: "Web Developer",
            service2: "Software Developer",
            service3: "Android App Developer",
            service4: "IOS App Developer",
        },
        {
            id:8,
            service1: "Web Developer",
            service2: "Software Developer",
            service3: "Android App Developer",
            service4: "IOS App Developer",
        },
      ];

      const colors = [

        "#FFBF00",
        "#FF7F50",
        "#DE3163",
        "#6495ED",
        "#DFFF00",
        "#40E0D0",
        "#d62828",
        "#f77f00"



      ]


  return (
    <div className='container service-section'>



         {/* Section-title */}

        <div className='section_title'>

            <h5>Services</h5>

            <span className='line'></span>            
        
        </div>

        <div className='row'>
            {
                servicedata.map((item,index)=>(
                    
                     <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12' key={index}>
                        
                        <div className='services'>


                            <span className='service-number' style={{backgroundColor:colors[index]}}>
                                <p>{item.id}</p>
                            </span>


                            <div className='list-of-service'>                               
                                <p> 
                                    <FcOk size={20} style={{margin:"5px"}}/> {item.service1}
                                    <span className='service_item_underline'></span>
                                </p> 
                                <p> 
                                    <FcOk size={20} style={{margin:"5px"}}/> {item.service2}
                                    <span className='service_item_underline'></span>
                                </p>
                                <p> 
                                    <FcOk size={20} style={{margin:"5px"}}/> {item.service3}
                                    <span className='service_item_underline'></span>
                                </p>
                                <p> 
                                    <FcOk size={20} style={{margin:"5px"}}/> {item.service4}
                               
                                </p>
                                </div>

                            



                        </div>

                     </div>
                

                
                ))
            }

        </div>



    </div>
  )
}

export default Service
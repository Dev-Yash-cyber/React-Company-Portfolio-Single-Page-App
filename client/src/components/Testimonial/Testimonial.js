import React, { useState } from 'react'
import "./testimonial.css"

const Testimonial = () => {

    const data =[

        {
            "img":"https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Jon Doe",
            "position":"Web Developer"
        },
        {
            "img":"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Meet Hingu",
            "position":"Android App Developer"
        },
        {
            "img":"https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Raj Patel",
            "position":"Full Stack Developer"
        },
        {
            "img":"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Rudra Bhatia",
            "position":"Blockchain Developer"
        },
        {
            "img":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Yash Barot",
            "position":"IOS App Developer"
        },
        {
            "img":"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Lauren ",
            "position":"UI/UX Designer"
        },
        {
            "img":"https://images.pexels.com/photos/769690/pexels-photo-769690.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Tony Walker",
            "position":"Cloud Computing"
        },
        {
            "img":"https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Shruti Ahuja",
            "position":"React Developer"
        },
        {
            "img":"https://images.pexels.com/photos/938642/pexels-photo-938642.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"John Larusso",
            "position":"MEAN Stack Developer"
        },
        {
            "img":"https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Jon Doe",
            "position":"Web Developer"
        },
        {
            "img":"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Meet Hingu",
            "position":"Android App Developer"
        },
        {
            "img":"https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Raj Patel",
            "position":"Full Stack Developer"
        },
        {
            "img":"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Rudra Bhatia",
            "position":"Blockchain Developer"
        },
        {
            "img":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Yash Barot",
            "position":"IOS App Developer"
        },
        {
            "img":"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Lauren ",
            "position":"UI/UX Designer"
        },
        {
            "img":"https://images.pexels.com/photos/769690/pexels-photo-769690.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Tony Walker",
            "position":"Cloud Computing"
        },
        {
            "img":"https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"Shruti Ahuja",
            "position":"React Developer"
        },
        {
            "img":"https://images.pexels.com/photos/938642/pexels-photo-938642.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content":"It is not every day that you come across a passionate and trustworthy financial advisor",
            "name":"John Larusso",
            "position":"MEAN Stack Developer"
        },
    ];

    const[showMorePost,setShowMorePost] = useState(9);

    const loadMore = ()=>{
        setShowMorePost((prev)=> prev + 3);
    };

  return (
    <div className='container testimonial-section'>


    <div className='section_title'>

        <h5>Testimonial</h5>
        <span className='line'></span>            
    </div>

    <div className='row'>


       
         {data.slice(0,showMorePost).map((item,index)=>(
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

                <div className={index==1 ? "marked-content-card":'content-card'}>
                    <img src={item.img} alt="image"/>
                    <p>{item.content}</p>
                    <p><span className='name'>{item.name}</span></p>
                    <p>{item.position}</p>

                </div>

            </div>
         ))}

         {showMorePost>=data.length ? null: (
            <span className='load_more_button' onClick={loadMore}>
                Load More
            </span>
         )}

        </div>
    </div>
  );
};

export default Testimonial;
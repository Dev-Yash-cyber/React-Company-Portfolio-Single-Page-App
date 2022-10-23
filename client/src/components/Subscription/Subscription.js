import React from 'react'
import "./subscription.css"
const Subscription = () => {
  return (
    <div className='container-fluid subscription'>
        <div className='container'>
            <div className='row'>
               <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>

                <div className='subscription_title'>
                    <h5>News Letter. Subscibe Today</h5>
                </div>

                <div className='subscription-form'>
                    <input type="text" placeholder='Your-Email'/>
                </div>

                <div className='subsciption_button'>
                    <p>Subscribe Now</p>
                </div>

               </div>
            </div>
        </div>
    </div>
  )
}

export default Subscription
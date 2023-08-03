import React from 'react'
import "../components/leftContainer.css"
const LeftContainer = () => {
  return (
   <>
    <div className='Left_container'>
        <div className='timeline'>
            {/* <img src='signup-left-img.svg' alt='' /> */}
            <div className='vriti-logo'>
                <img src='logo.png' />
            </div>
            <div className='line'>
            <div className='img_text'>
                <div className='vector-img'>
                    <img src='Vector.svg' alt='one' />
                    <img src='Vector.svg' alt='two' />
                    <img src='Vector.svg' alt='three' />
                    <img src='Vector.svg' alt='four' />
                </div>  
                <div className='vector-img-two'>
                    <h2>SIGN UP</h2>
                    <h2>UPLOAD CV</h2>
                    <h2>PERSONAL DETAILS</h2>
                    <h2>PROFESSIONAL DETAILS</h2>
                </div>
            </div>
        </div>
        </div>
    </div>
   </>
  )
}

export default LeftContainer

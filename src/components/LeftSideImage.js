import React from 'react'
import '../components/LeftSideImage.css'
const LeftSideImage = () => {
    return (
        <>
        <div className='line'>
            <div className='timeline'>
                    <img src='signup-left-img.svg' alt='' />
            </div>           
                 <div className='vriti-logo'>
                     <img src='vriti-logo.svg' />
                 </div>

                    <div className='vector-img'>
                      <img src='Vector.svg' alt='' />
                       <h2>SING UP</h2>
                    </div>  
                 <div className='vector-img-two'>
                      <img src='Vector.svg' alt='' />
                       <h2>UPLOAD CV</h2>
                 </div>  
                 <div className='vector-img-three'>
                      <img src='Vector.svg' alt='' />
                       <h2>PERSONAL DETAILS</h2>
                 </div>  
                 <div className='vector-img-four'>
                      <img src='Vector.svg' alt='' />
                       <h2>PROFESSIONAL DETAILS</h2>
                 </div> 
                 </div> 
        </>
    )
}

export default LeftSideImage

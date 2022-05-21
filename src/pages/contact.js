import React from 'react'
import Pdf from '../components/resume/LeijanLegaspiResume.pdf'
const Contact = () => {
  return (
      <div className='h-screen flex justify-center items-center'>
          
          <a href={Pdf} target="_blank"> Download Pdf</a>
      </div>
    )
}

export default Contact
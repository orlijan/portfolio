import React from 'react'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
      <div className='h-screen flex justify-center items-center bg-ltan'>
          <header className=' '>Here is a list of my projects that I have completed!</header>
          
          
          
      </div>
    )
}

export default Projects
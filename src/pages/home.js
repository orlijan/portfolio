import React from 'react'
import profile from "../components/images/profile.jpg";

const Home = () => {
  return (
    <>

    <div className=" h-full min-h-screen   flex grow bg-gradient-to-t flex-col justify-center items-center   divide-zinc-600 text-left ">
    <header className='text-xl xl:text-5xl font-medium tracking-widest text-zinc-600 transition  motion-safe:animate-fadeIn flex-shrink  '>Hello!<br></br> Thanks for looking at<br></br> my website!</header>

    <img
      class="w-64 h-64 drop-shadow-3xl m-8 rounded-full transition ease-in-out delay-700  hover:-translate-y-1 hover:scale-100   motion-safe:animate-fadeIn "
      src={profile}
      alt="Rounded avatar"
    /><div className=''>
    {/* <p class="text-xl  font-light p-8 hover:drop-shadow-4xl leading-loose translate-x-6  flex-auto  max-w-3xl text-gray-800  hover:-translate-y-1 hover:scale-100  duration-100 "> */}
    <p class="text-2xl font-light p-2 hover:drop-shadow-4xl  flex-auto max-w-3xl ">
      I'm Leijan Legaspi and I like
      being creative. I have a degree in computer science and taken
      multiple graphic design courses.<br></br> Here are some technologies I have worked with.
      <ul class="list-disc columns-3 text-sm marker:text-green-800 list-inside">
      <li className=''>React</li> 
      <li className=''>Node.js</li> 
      <li className=''>Javascript</li> 
      <li className=''>React Tables</li> 
      <li className=''>R</li> 
      <li className=''>Android Studio</li> 
      <li className=''>Adobe xd</li> 
      <li className=''>Photoshop</li> 
      <li className=''>Jquery</li>
      </ul>
    </p>
    
    please
      hire me.<br></br> Please check out my current and future projects on the dropdown menu above.
    </div>
    
  </div>
  </>
    )
}

export default Home
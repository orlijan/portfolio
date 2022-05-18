import React from 'react'
import profile from "../components/images/profile.jpg";

const Home = () => {
  return (
    <>
    <div className=" h-full min-h-screen   flex grow bg-gradient-to-t flex-col justify-center items-center  divide-y divide-dashed divide-zinc-600">
    <img
      class="w-64 h-64 drop-shadow-3xl m-8 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 "
      src={profile}
      alt="Rounded avatar"
    /><div className='backdrop-blur-2xl'>
    {/* <p class="text-xl  font-light p-8 hover:drop-shadow-4xl leading-loose translate-x-6  flex-auto  max-w-3xl text-gray-800  hover:-translate-y-1 hover:scale-100  duration-100 "> */}
    <p class="text-xl font-light p-2 hover:drop-shadow-4xl  flex-auto max-w-3xl ">
      Hello! Thanks for looking at my website! I'm Leijan Legaspi and I like
      being creative. I have a degree in computer science and have taken
      multiple graphic design courses. Here are some technologies I have worked with.
      <ul class="list-disc text-sm marker:text-green-800 list-inside">
      <li className=''>React</li> 
      <li className=''>Node.js</li> 
      <li className=''>Javascript</li> 
      <li className=''></li> 
      </ul>
    </p>
    
    please
      hire me.<br></br> Please check out my current and future projects
    </div>
    <p>like and subscribe for more content</p>
  </div>
  </>
    )
}

export default Home
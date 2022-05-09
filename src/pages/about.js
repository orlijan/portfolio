import React from "react";
import profile from "../components/images/profile.jpg";
const About = () => {
  return (
    <>
    
      <div className=" h-full min-h-screen   flex grow bg-gradient-to-t flex-col justify-center items-center  divide-y divide-dashed divide-zinc-600">
        <img
          class="w-64 h-64 drop-shadow-3xl m-8 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-300 "
          src={profile}
          alt="Rounded avatar"
        />
        <p class="text-xl font-light p-8 backdrop-blur-sm hover:drop-shadow-4xl leading-loose translate-x-6  flex-auto m-7 max-w-3xl text-gray-800 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-100 ">
          Hello! Thanks for looking at my website! I'm Leijan Legaspi and I like
          being creative. I have a degree in computer science and have taken
          multiple graphic design courses. This website was made with
          tailwindcss and react! The database is made from react-tables. please
          hire me.<br></br> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          
          
        </p>
        <p>like and subscribe for more content</p>
      </div>
      
    </>
  );
};

export default About;

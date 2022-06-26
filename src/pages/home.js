import React, { useEffect } from "react";
import profile from "../components/images/profile.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import "../index.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    //
    //  <div className=" h-full min-h-screen   flex grow bg-gradient-to-t flex-col justify-center items-center   divide-zinc-600 text-left ">
    //     <header className="text-xl xl:text-5xl font-medium tracking-widest text-lgreen transition font-bold  motion-safe:animate-fadeIn flex-shrink  ">
    //       Hello!<br></br> Thanks for looking at<br></br> my website!
    //     </header>

    // <img
    //   class="w-64 h-64 drop-shadow-3xl m-8 rounded-full transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-100   motion-safe:animate-fadeIn "
    //   src={profile}
    //   alt="Rounded avatar"
    // />
    //     <div className="">
    //       {/* <p class="text-xl  font-light p-8 hover:drop-shadow-4xl leading-loose translate-x-6  flex-auto  max-w-3xl text-gray-800  hover:-translate-y-1 hover:scale-100  duration-100 "> */}
    //       <p class="text-sm font-light p-2 hover:drop-shadow-4xl  flex-auto max-w-3xl  ">
    //         I'm Leijan Legaspi and I like being creative. I have a degree in
    //         computer science and taken multiple graphic design courses.<br></br>{" "}
    //         Here are some technologies I have worked with.
    //       </p>
    //       <div data-aos="fade-up">
    //         <ul class="list-disc columns-3 text-sm  marker:text-lgreen list-inside">
    //           <li className="">React</li>
    //           <li className="">Node.js</li>
    //           <li className="">Javascript</li>
    //           <li className="">React Tables</li>
    //           <li className="">R</li>
    //           <li className="">Android Studio</li>
    //           <li className="">Adobe xd</li>
    //           <li className="">Photoshop</li>
    //           <li className="">Jquery</li>
    //         </ul>
    //         please hire me.<br></br> Please check out my current and future
    //         projects on the dropdown menu above.
    //       </div>
    //     </div>
    //     <div className="grids"></div>
    //     <div className="boxes">1</div>
    //     <div className="boxes">2</div>
    //     <div className="boxes">3</div>
    //     <div></div>
    //   </div>  </>
    <>
      <div className="grid place-items-center  ">
      <div class="bg"></div>
        <div className="bg bg2 h-screen w-screen"><div class="bg bg3 h-screen w-screen"></div></div>
        
        <div class="bg bg4"></div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="title"
        >
          <h6>Hi</h6>
          <h1>I am a</h1>
        </div>
        <div className="title leftslide flex-row">
          <div>1</div>
          <div>1</div>

          <div>1</div>
          <img
            class="object-scale-down h-20 w-20 drop-shadow-3xl m-8 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-100   motion-safe:animate-fadeIn "
            src={profile}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="center-center"
          className="title"
        >
          I am Leijan Legaspi
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          className="title"
        >
          I like making websites
          <ul class="list-disc columns-3 text-sm  marker:text-lgreen list-inside">
            <li className="">React</li>
            <li className="">Node.js</li>
            <li className="">Javascript</li>
            <li className="">React Tables</li>
            <li className="">R</li>
            <li className="">Android Studio</li>
            <li className="">Adobe xd</li>
            <li className="">Photoshop</li>
            <li className="">Jquery</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

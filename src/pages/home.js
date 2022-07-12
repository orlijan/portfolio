import React, { useEffect } from "react";
import profile from "../components/images/profile.jpg";
import tasktracker from "../components/images/tasktracker.png";
import Aos from "aos";
import lithooverhaul from "../components/images/tradelitho.png";
import "aos/dist/aos.css";
import mtg from "../components/images/mtg.png"
import { Link } from "react-router-dom";
import insta from "../components/images/instagram.png";
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
    //     <div >
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
      <div class="backg"></div>
      <div class="backg bg2"></div>
      <div class="backg bg3"></div>

      {/* <div className="container">
      
        <div >
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          >
          
          <header >Hello</header>
          <article >this is supposed to be the article of the thi8ng. al;sdkfjasldddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfkjads;lfkjs</article>
        </div>
        <div className="" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
          <p>My name is Leijan Legaspi</p>
          
          <img
            class="object-scale-down h-20 w-20 drop-shadow-3xl m-8 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-100   motion-safe:animate-fadeIn "
            src={profile}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          className="title text-left "
        >
          <header > About me </header>
          <div><header>hello</header>
          <article>
            <h2>
              <p></p>
            </h2>
          </article>
          </div>
          
        </div>
        <p className="text-lg">My name is Leijan Legaspi and I enjoy making web applications. I graduated from Sacramento State University
            with a bachelor's degree in computer science.
          </p>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          className="title"
        >
          
          I like making websites
          <ul class="list-disc columns-3 text-sm  marker:text-lgreen list-inside">
            <li >React</li>
            <li >Node.js</li>
            <li >Javascript</li>
            <li >React Tables</li>
            <li >R</li>
            <li >Android Studio</li>
            <li >Adobe xd</li>
            <li >Photoshop</li>
            <li >Jquery</li>
          </ul>
        </div>
      </div>
      </div>
    
     */}

      <div className="container">
        <div className=" pt-28 pb-16">
          <div className="box  justify-self-center  motion-safe:animate-fadeIn  ">
            <h3 className="text-lbrown font-mono">Hi, My name is</h3>
            <header>
              Leijan Legaspi.<br></br>
            </header>
            <p className="font-medium">I like to make websites.</p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          className="box bg-ltan rounded-2xl"
          id="aboutme"
        >
          <header className="">About me</header>
          <div className="flex">
            <div className="pr-9 overflow-auto">
              <p className="text-sm">
                Hello, my name is Leijan Legaspi. I have a bachelors degree in
                computer science from Sacramento State University. My interest
                started with my interactions with web pages and videogames. I was interested
                how menu systems, logos, and how player feedback worked. I also
                have an interest in graphic design, taking a few courses which
                had helped me improve my skills in front end websites and user
                experiences. Outside of developing websites, my main hobbies are
                photography which you can check out in the projects menu, cooking, and Magic The Gathering.
              </p>
            </div>
            <div></div>
            <img
              class="w-22 h-24 drop-shadow-3xl  rounded-full transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-100   motion-safe:animate-fadeIn "
              src={profile}
              alt="Rounded avatar"
            />
          </div>
        </div>
        

        <div id="projects" className="box">
          <header>Projects</header>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="bottom-bottom"
            className="flex-col"
          >
            <header>Task-Tracker</header>
            
            <p className="p-2">
              A task tracking application that displays typed entries.
            </p>
            <a href="https://orlijan.github.io/react-task-tracker/">
            <img 
              className="object-scale-down h-48 w-96 "
              src={tasktracker}
              alt="..."
            ></img></a>
          </div>
          <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
            <header>Magic the Gathering Database Lookup</header>
            <p className="p-2">
              
              A table that helps users identify current Magic the Gathering cards
              by typing card information such as Card name, Mana cost, color
              identity, or rarity.
            </p>
            
            <Link  to="/database"><img className="object-scale-down transition ease-in-out h-48 w-96 hover:-translate-y-1 " src={mtg}></img></Link>

            
          </div>
         
          <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
            <header>Litho Overhaul</header>
            <p className="p-2">My senior project that we were assigned to relaunch and modernize our sponsor's company website.</p>
            <a href="https://xd.adobe.com/view/0f8b4f62-076b-4c45-a741-5fc1129476f5-5ad8/grid"><img className="object-scale-down h-48 w-96" src={lithooverhaul}></img></a>
          </div>
          <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
            <header>Instagram wall</header>
            <p className="p-2">
              implemented juicer.io token authentication to embed my instagram
              photos to this website.
            </p>
            <Link  to="/about"><img className="object-scale-down transition ease-in-out h-48 w-96 hover:-translate-y-1 " src={insta}></img></Link>
          </div>
          <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
            <header>Wikipedia Web Scraper</header>
            <p>
              A webscraper that fetches all the p tags in a wikipedia page and
              displays them
            </p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor-placement="bottom-bottom"
          className="box"
        >
          <header>Contact me</header>
          <p>You can reach me through my email at</p>
          <a href="mailto:leijanlegaspi@csus.edu">leijanlegaspi@csus.edu</a>
          <br></br>
          <p>or</p>
          <a href="mailto:leijanlegaspi@gmail.com">
            leijanlegaspi@gmail.com
          </a>{" "}
        </div>
      </div>
    </>
  );
};

export default Home;

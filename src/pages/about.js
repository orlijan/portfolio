import React from "react";
import profile from "../components/images/profile.jpg";
import JuicerFeed from "react-juicer-feed";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://assets.juicer.io/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <body>
        <div className=" px-3 bg-ltan">
          <div className="box  m-auto">
            
            <p className=" italic text-center">
              Here is a gallery from my instagram with the help of the juicer.io
              api
            </p>
          </div>

          <link
            href="https://assets.juicer.io/embed.css"
            media="all"
            rel="stylesheet"
            type="text/css"
          />
          <ul class="juicer-feed" data-feed-id="leijanlegaspi">
            <h1 class="referral">
              <a href="https://www.juicer.io"></a>
            </h1>
          </ul>
        </div>
      </body>
    </>
  );
};

export default About;

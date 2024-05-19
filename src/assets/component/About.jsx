import React from "react";
import myImage from "../img/WhatsApp Image 2024-05-05 at 9.32.43 AM.jpeg"; // Import the image

function About() {
  return (
    <>
      <div className="hero min-h-screen bg-gray-200">
        <div className="hero-content flex-col lg:flex-row gap-36">
          <img className="h-96 shadow-lg border border-black" src={myImage} />
          <div>
            <h1 className=" font-bold pl-2 pb-3">
              <span className="text-green-600">01</span>.About Me.....
            </h1>
            <h1 className="text-5xl font-bold"> A better workflow</h1>
            <p className="py-6">
              Hello! My name is{" "}
              <span className="text-green-600">Sweta Sharma</span>and I enjoy
              creating things that live on the internet. <br />
              My internet in web development started <br />
              back in 2022 when I just entered in my college .At that time I{" "}
              <br />
              learnd the basics abut HTML & CSS and it's look like macgic for
              me!{" "}
            </p>

            <p className="py-2">
              Fast-forward to today, and I've the privilege of working as{" "}
              <span className="text-green-600"> a freelance.</span> <br />
              My main focus these daysis to make myself more br capaibe to give
              my best result
            </p>

            <p>
              Currently, I also Learning Javscript & React so that covers <br />
              everything you need from me as a fullstack Web-developer.{" "}
            </p>

            <p className="pb-9">
              Here are a Few technologies I've been working with recently
            </p>
            <div>
              <ul className="flex gap-7 text-rose-600 text-xl">
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

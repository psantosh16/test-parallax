"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useEffect } from "react";


const Home = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.to("#second", {
      x: -1000,
      scale: 2,
      duration: 5,
    })
      .to(
        "#third",
        {
          x: 1000,
          scale: 2,
          duration: 5,
        },
        "-=5"
      )
      .fromTo(
        "#title",
        {
          y: 100,
          scale: 0.5,
        },
        {
          y: -10,
          scale: 1,
        },
        "-=2"
      )
      .to(
        "#first",
        {
          scrollTrigger: {
            trigger: "#container",
            start: "top top",
            end: "bottom 80%",
            scrub: true,
            markers: true,
          },
          y: -10,
          scale: 2,
        },
        "-=2"
      );
  }, []);




  return (
    <div>
      <div
        className="w-full h-[100px] bg-black absolute -top-0 blur-3xl  z-[999]  "
        id="top-blur"
      ></div>
      <div
        id="container"
        className=' overflow-hidden  w-full h-screen relative  bg-[url("https://dubaiastronomy.com/wp-content/uploads/2019/02/Earth-Horizon.jpg")]  bg-contain bg-no-repeat  '
      >
        <h1
          id="title"
          className="text-[10rem] mb-10 font-bold absolute top-[10%] right-[30%] z-0"
        >
          {/* CESA */}
          <img src="/images/circle.gif"></img>
        </h1>
        <div id="images" className="w-full h-screen relative">
          <div
            className="image-wrapper absolute bottom-2 z-20   scale-105"
            id="first"
          >
            <img src="/images/earth.png"></img>
          </div>
          <div
            className="image-wrapper absolute top-[32%] -left-[26%] rotate-180  z-20 w-full h-screen p-24"
            id="second"
          >
            <img src="/images/cloud1.png"></img>
          </div>
          <div
            className="image-wrapper absolute -top-[22%] -right-[22%]  z-20 w-full h-screen p-24"
            id="third"
          >
            <img src="/images/cloud2.png"></img>
          </div>

          {/* <div className="image-wrapper" id="third">
               <img></img>
            </div>
            <div className="image-wrapper" id="fourth">
               <img></img>
            </div> */}
        </div>
      </div>
      <div
        className="w-[120%] h-[180px] bg-black absolute -bottom-10 blur-xl  z-[999]  "
        id="bottom-blur"
      ></div>
      <div className="w-full h-screen bg-black">Second page</div>
    </div>
  );
};

export default Home;

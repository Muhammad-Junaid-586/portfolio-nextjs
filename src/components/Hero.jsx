"use client";

import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
// import junaid from "@/assets/junaid2.jpg";
// import junaidCv from "../assets/junaid-8-months-exp.pdf";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Hero = () => {
  const roles = ["WordPress Developer", "Frontend Developer", "UI/UX Designer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayAfterComplete = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), delayAfterComplete);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }
    };

    const typingInterval = setInterval(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting]);

  useEffect(() => {}, []);

  return (
    <div
      className="flex flex-col md:flex-row md:items-center md:justify-center w-[90%] mx-auto py-24"
      id="home"
    >
      {/* Left content */}
      <div className="text-left md:w-[60%]" data-aos="fade-up">
        <h3 className="text-lg md:text-xl font-semibold text-gray-600">
          Hello, It's Me
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 my-4">
          Muhammad Junaid
        </h1>
        <h3 className="text-lg md:text-[25px] font-medium text-gray-700">
          I'm a <span className="text-blue-500 font-bold">{displayedText}</span>
        </h3>

        {/* Social Links */}
        <div className="flex justify-start my-6 space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl md:text-3xl text-gray-700 hover:text-blue-600 transition" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl md:text-3xl text-gray-700 hover:text-blue-700 transition" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl md:text-3xl text-gray-700 hover:text-pink-500 transition" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl md:text-3xl text-gray-700 hover:text-red-600 transition" />
          </a>
        </div>

        {/* Download CV */}
        <a
          href="/assets/junaid-8-months-exp.pdf"
          download="Muhammad-Junaid-CV.pdf"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>

      {/* Right content: Profile image */}
      <div
        className="md:w-[40%] mt-10 md:mt-0 flex justify-center items-center"
        data-aos="fade-up-left"
      >
        <Image
          src="/assets/junaid2.jpg"
          alt="Muhammad Junaid"
          width={300}
          height={300}
          className="rounded-full shadow-lg object-cover w-[65vw] h-[65vw] md:w-[30vw] md:h-[30vw]"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;

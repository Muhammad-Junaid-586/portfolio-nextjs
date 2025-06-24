"use client";

import React, { useEffect } from "react";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export const projects = {
  html: [
    {
      id: 1,
      name: "Facebook Clone",
      image: "/assets/facebook1.jpeg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/html&css/facebook%20project/facebook.html",
    },
    {
      id: 2,
      name: "Home Landing Page",
      image: "/assets/home2.jpg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/html&css/Projects/2ndproject.html",
    },
    {
      id: 3,
      name: "Electronic Store",
      image: "/assets/electronic.jpeg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/html&css/ecommerce%20in%20css/code%20for%20eccomerace%20website/index.html",
    },
  ],
  bootstrap: [
    {
      id: 1,
      name: "Portfolio Website",
      image: "/assets/portfolio.jpeg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Bootstrap%20Projects/Portfolio%20website/index.html",
    },
    {
      id: 2,
      name: "Landing Page Website",
      image: "/assets/home2.jpg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Bootstrap%20Projects/second%20project/index.html",
    },
    {
      id: 3,
      name: "Foodies Website",
      image: "/assets/foodies.jpg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Bootstrap%20Projects/Foodies%20website/index.html",
    },
  ],
  javascript: [
    {
      id: 1,
      name: "Pacman Game",
      image: "/assets/pacman.jpg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/javascript/pacman%20game/index.html",
    },
    {
      id: 2,
      name: "Math for Kids",
      image: "/assets/mathforkid.jpg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/javascript/math%20for%20kids/index.html",
    },
    {
      id: 3,
      name: "Calculator",
      image: "/assets/calculator.jpeg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/javascript/calculator/index.html",
    },
  ],
  reactjs: [
    {
      id: 1,
      name: "Youtube Clone",
      image: "/assets/youtube.jpg",
      link: "https://youtube-clone-t.netlify.app/",
    },
    {
      id: 2,
      name: "Instagram Clone",
      image: "/assets/instagram.jpg",
      link: "https://insta-clone-on-react-tailwind.netlify.app/",
    },
    {
      id: 3,
      name: "Online Store",
      image: "/assets/onlineStore.jpg",
      link: "https://react-online-store-tailwind.netlify.app/",
    },
  ],
  nextProjects: [
    {
      id: 1,
      name: "Food Landing Page",
      image: "/assets/foodies.jpg",
      link: "https://food-nextjs-one.vercel.app/",
    },
    { id: 2, name: "Coming Soon", image: "/assets/html.jpeg", link: "#" },
    { id: 3, name: "In Progress", image: "/assets/html.jpeg", link: "#" },
  ],
  urraan: [
    {
      id: 1,
      name: "CatchUp",
      image: "/assets/task1.jpg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/task1/index.html",
    },
    {
      id: 2,
      name: "Red Cards Form",
      image: "/assets/task2.jpg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/task2/index.html",
    },
    {
      id: 3,
      name: "Keefers Layout",
      image: "/assets/task1.jpg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/task4%20responsive/index.html",
    },
  ],
  urraanjs: [
    {
      id: 1,
      name: "Red Card Form Validation",
      image: "/assets/task1.jpg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/js%20tasks/form%20validation%20in%20javascript/project/index.html",
    },
    {
      id: 2,
      name: "Random Bubbles Generator",
      image: "/assets/task2.jpg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/js%20tasks/random%20bubble/index.html",
    },
    {
      id: 3,
      name: "Image Slider",
      image: "/assets/task1.jpg",
      link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/js%20tasks/slider-project%20completed/index2.html",
    },
  ],
};

export const ProjectSection = ({ category, projects, showSeeAll = true }) => {
  const displayCategory =
    category.toLowerCase() === "html"
      ? "HTML & CSS"
      : category.toLowerCase() === "urraanjs"
      ? "URRAAN JS"
      : category.toUpperCase();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="w-full mb-4">
        <hr className="h-[10px] bg-blue-500 border-none rounded-full" />
      </div>

      <h3
        className="text-4xl font-bold text-center text-gray-700 my-6"
        data-aos="zoom-out-left"
      >
        {displayCategory} <span className="text-blue-500">PROJECTS</span>
      </h3>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 pt-4"
        data-aos="zoom-in-down"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-[15px] shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div
              style={{
                backgroundColor: "rgba(59, 130, 246, 0.5)", // Blue color with 50% opacity
              }}
              className="absolute inset-0 bg-blue-500  flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <div className="text-white text-center flex flex-col justify-center items-center cursor-pointer">
                <a href={project.link} target="_blank">
                  <FaLink className="text-3xl mb-2" />
                </a>
                <h4 className="text-xl font-semibold">{project.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showSeeAll && (
        <div className="text-center my-12" data-aos="flip-down">
          <Link
            href={`/projects/${category}`}
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
          >
            See All {displayCategory} Projects
          </Link>
        </div>
      )}
    </>
  );
};

export default { ProjectSection, projects };

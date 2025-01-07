import React from "react";
import { useRouter } from "next/router";

interface Project {
  title: string;
  thumbnail: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    thumbnail: "/images/project1.png", // Replace with actual image path
    link: "/project1",
  },
  {
    title: "Project 2",
    thumbnail: "/images/project2.png", // Replace with actual image path
    link: "/project2",
  },
  {
    title: "Project 3",
    thumbnail: "/images/project3.png", // Replace with actual image path
    link: "/project3",
  },
  {
    title: "Project 4",
    thumbnail: "/images/project4.png", // Replace with actual image path
    link: "/project4",
  },
];

export default function Projects() {
  const router = useRouter();

  const handleProjectClick = (link: string) => {
    router.push(link);
  };

  return (
    <section id="projects">
      <h2 className="text-center md:text-[40px] text-[22px] font-[600]">
        Projects that Speak for Themselves
      </h2>
      <p className="text-[16px] font-[400] text-center">
        Over the years, I’ve had the pleasure of collaborating on projects that
        span industries and ideas. From web <br /> applications that streamline
        daily tasks to platforms that redefine how people connect, each project
        tells a story of <br /> creativity, perseverance, and meticulous design.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-8 max-w-[1280px] mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 w-full sm:w-[48%] lg:w-[48%] cursor-pointer hover:shadow-lg hover:shadow-neutral-700 transition-transform transform hover:scale-105"
            onClick={() => handleProjectClick(project.link)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="text-gray-500">→</span>
            </div>
            <div className="bg-gray-600 h-48 rounded-md flex items-center justify-center mt-4">
              <img
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                className="h-full w-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

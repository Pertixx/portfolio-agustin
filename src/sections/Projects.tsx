"use client";

import { AnimatedTooltip } from "@/components/Tooltip";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import BootstrapIcon from "@/assets/icons/bootstrap.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import { Card } from "@/components/Card";
import CheckIcon from "@/assets/icons/check-circle.svg";
import { CustomButton } from "@/components/CustomButton";
import HTMLIcon from "@/assets/icons/html5.svg";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import RailsIcon from "@/assets/icons/rails.svg";
import ReactIcon from "@/assets/icons/react.svg";
import { SectionHeader } from "@/components/SectionHeader";
import hosannaCover from "@/assets/images/hosanna-cover.jpg";
import newsroomCover from "@/assets/images/newsroom-cover.png";

const portfolioProjects = [
  {
    company: "StartNode",
    year: "2022",
    title: "Hosanna",
    results: [
      { title: "Ruby on Rails and React Native" },
      { title: "Available on Play Store and Apple Store" },
      { title: "Covers content of general and religious interest" },
    ],
    techs: [
      {
        id: 1,
        name: "React Native",
        icon: ReactIcon
      },
      {
        id: 2,
        name: "Java Script",
        icon: JavaScriptIcon
      },
      {
        id: 3,
        name: "Ruby on Rails",
        icon: RailsIcon
      },
    ],
    link: "https://hosanna.cx/",
    image: hosannaCover,
  },
  {
    company: "StartNode",
    year: "2023",
    title: "Sagrada Mujer Web",
    results: [
      { title: "Launched a daily content platform for women" },
      { title: "Implemented a responsive design for better mobile experience" },
      { title: "Integrated social media sharing features" },
      { title: "Optimized for SEO to increase organic traffic" },
    ],
    techs: [
      {
        id: 1,
        name: "Ruby on Rails",
        icon: RailsIcon
      },
      {
        id: 2,
        name: "Java Script",
        icon: JavaScriptIcon
      },
      {
        id: 3,
        name: "HTML",
        icon: HTMLIcon
      },
      {
        id: 4,
        name: "CSS",
        icon: CSSIcon
      },
      {
        id: 5,
        name: "Bootstrap",
        icon: BootstrapIcon
      },
    ],
    link: "https://sagradapalabra.com/mujer",
    image: newsroomCover,
  },
  {
    company: "Ola Guild Games",
    year: "2023-2024",
    title: "NewsRoom GG",
    results: [
      { title: "Create engaging content with AI" },
      { title: "Enhance stories with multimedia" },
      { title: "Organize and amplify with tags" },
      { title: "Seamless storage and image conversion" },
      { title: "JSON API for dynamic delivery" },
    ],
    techs: [
      {
        id: 1,
        name: "Ruby on Rails",
        icon: RailsIcon
      },
      {
        id: 2,
        name: "Java Script",
        icon: JavaScriptIcon
      },
      {
        id: 3,
        name: "HTML",
        icon: HTMLIcon
      },
      {
        id: 4,
        name: "CSS",
        icon: CSSIcon
      },
      {
        id: 5,
        name: "Bootstrap",
        icon: BootstrapIcon
      },
    ],
    link: "https://newsroom.gg/",
    image: newsroomCover,
  }
];

export const ProjectsSection = () => {
  return (
    <div id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="See how i transformed concepts into engaging digital experiences." />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card key={index} className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky" style={{
              top: `calc(64px + ${index * 40}px)`
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckIcon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-4">
                    <AnimatedTooltip items={project.techs} />
                    <a href={project.link} target="_blank">
                      <CustomButton 
                        text="Visit Live Site"
                        wrapperClassName="h-12 w-full md:w-auto rounded-xl"
                        className="rounded-xl"
                        icon={ArrowUpIcon}
                      />
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} 
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-3xl" 
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

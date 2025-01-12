"use client";

import CSSIcon from "@/assets/icons/css3.svg";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import GitHubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import RailsIcon from "@/assets/icons/rails.svg";
import ReactIcon from "@/assets/icons/react.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import map from "@/assets/images/agustin-map.png";
import meditationsImage from "@/assets/images/meditations-book.png";
import { motion } from "framer-motion";
import smileMemoji from "@/assets/images/agustin-memoji.png";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: JavaScriptIcon
  },
  {
    title: "TypeScript",
    icon: TypeScriptIcon
  },
  {
    title: "React Native",
    icon: ReactIcon
  },
  {
    title: "React",
    icon: ReactIcon
  },
  {
    title: "HTML5",
    icon: HTMLIcon
  },
  {
    title: "CSS3",
    icon: CSSIcon
  },
  {
    title: "Ruby on Rails",
    icon: RailsIcon
  },
  {
    title: "GitHub",
    icon: GitHubIcon
  },
]

const hobbies = [
  {
    title: "Fitness",
    emoji: "🏋🏼",
    left: "5%",
    top: "5%"
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%"
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "65%",
    top: "40%"
  },
  {
    title: "Music",
    emoji: "🎸",
    left: "10%",
    top: "35%"
  },
  {
    title: "Basketball",
    emoji: "🏀",
    left: "20%",
    top: "65%"
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me." />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={meditationsImage} alt="book image" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="My Toolbox" 
                description="Explore the technologies and tools used to craft exceptional digital experiences." 
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]" />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader className="px-6 py-6" title="Beyond the Code" description="Explore my interest and hobbies beyond the digital realm." />
              <div className="relative flex-1" ref={constraintRef}>
                {
                  hobbies.map((hobby, index) => (
                    <motion.div 
                      key={index} 
                      className="inline-flex items-center gap-2 px-6 
                      bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full 
                      py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))
                }
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={map} alt="map" className="h-full w-full object-cover" />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                size-20 rounded-full after:content-[''] 
                after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="smiling emoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

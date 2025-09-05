import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { FaVideo } from "react-icons/fa";
import AboutMeImage from "../assets/pic2.png";

export default function About() {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "ReactJS", icon: <SiReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "ExpressJS", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Render", icon: <SiRender className="text-purple-500" /> },
    { name: "CapCut", icon: <FaVideo className="text-pink-400" /> },
  ];

  const row1 = skills.slice(0, 5);
  const row2 = skills.slice(5, 10);
  const row3 = skills.slice(10, 14);
  const row4 = [...skills.slice(14), ...skills.slice(0, 2)];

  const MarqueeRow = ({ items, direction }) => (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex gap-8 py-3"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        {[...items, ...items].map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-white min-w-[100px]"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-xs mt-1">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section
      id="about"
      className="bg-gray-900 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-10 gap-4 items-start">
        
        {/* Left Section (70%) */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center bg-slate-500 backdrop-blur-md rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, easeIn: "easeIn", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-medium tracking-wide text-white w-fit">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            About Me
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Curious about my journey, mindset, and what I bring to the table?
          </h2>
          <p className="mt-2 text-zinc-300 text-base leading-relaxed">
            Let’s take a deeper look. I’m a passionate developer who thrives on
            solving problems, creating engaging user experiences, and building
            modern web applications with clean, scalable code. With a growth
            mindset and curiosity to learn, I bring creativity and technical
            expertise to every project.
          </p>
          <div className="mt-4">
            <img
              src={AboutMeImage}
              alt="About me"
              className="rounded-xl shadow-lg w-[95%] h-[335px] object-contain"
            />
          </div>
        </motion.div>

        {/* Right Section (30%) */}
        <motion.div
          className="lg:col-span-3 h-[590px] bg-slate-500 backdrop-blur-md rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, easeIn: "easeIn", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium tracking-wide text-white w-fit">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            My Tech Stack
          </p>
          <h3 className="mt-4 text-lg text-gray-300">
            A collection of the Software, Platform that power my creative and work.
          </h3>
          <div className="mt-6 space-y-6">
            <MarqueeRow items={row1} direction="left" />
            <MarqueeRow items={row2} direction="right" />
            <MarqueeRow items={row3} direction="left" />
            <MarqueeRow items={row4} direction="right" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

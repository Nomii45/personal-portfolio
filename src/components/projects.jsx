import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Clock, Rocket } from "lucide-react";

import Google from "../assets/google.png";
import ChatApp from "../assets/chatt.png";
import Portfolio from "../assets/portfolio.png";
import ECommerce from "../assets/ecommerce.png";

export default function ProjectsSection() {
  const projects = [
    {
      id: "google",
      title: "Google Clone UI",
      desc: "A pixel-precise Google homepage clone with responsive search bar, keyboard and shortcuts.",
      img: Google,
      tags: ["React", "Google Api", "Responsive"],
      status: "Deployed",
      duration: "131 days",
      live: "#",
      code: "https://github.com/Nomii45/Google-Clone",
    },
    {
      id: "chatapp",
      title: "Realtime Chat App",
      desc: "A clean chat UI with message bubbles, typing indicator, and scroll-to-latest — built for mobile & desktop.",
      img: ChatApp,
      tags: ["React", "Tailwind", "Context API", "Node"],
      status: "Final Checking",
      duration: "3 week",
      live: "https://pulse-talk-mern-stack-chat-app.vercel.app/",
      code: "https://github.com/Nomii45/PulseTalk-MERN-Stack-Chat-App",
    },
    {
      id: "portfolio",
      title: "Developer Portfolio",
      desc: "A sleek, performant personal site with sections for projects, skills, and contact — the one you’re viewing now.",
      img: Portfolio,
      tags: ["React", "Tailwind", "Node"],
      status: "Deployed",
      duration: "3 days",
      live: "https://nouman-naqbool-portfolio.vercel.app/",
      code: "https://github.com/Nomii45/personal-portfolio",
    },
    {
      id: "ecommerce",
      title: "E-Commerce App",
      desc: "Modern ecommerce UI with product cards, filters, cart and checkout.",
      img: ECommerce,
      tags: ["React", "Tailwind", "Framer Motion", "Node"],
      status: "Completed",
      duration: "1 week",
      live: "https://github.com/Nomii45/LexCart",
      code: "https://github.com/Nomii45/LexCart",
    },
  ];

  const loopProjects = useMemo(() => [...projects, ...projects], [projects]);

  const SPEED_PX_PER_SEC = 80;
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(60);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const distancePx = el.scrollWidth * 0.5;
    setDuration(distancePx / SPEED_PX_PER_SEC);
  }, [loopProjects.length]);

  return (
    <section
      id="projects"
      className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium tracking-wide text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Rocket className="h-3.5 w-3.5" />
            PROJECT SHOWCASE
          </motion.p>

          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            UI/UX & Web Development
          </motion.h2>

          <motion.p
            className="mt-3 text-zinc-600"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            A curated selection of recent builds — crafted with React,
            Tailwind and Node, optimized for every screen.
          </motion.p>
        </header>

        {/* Marquee */}
        <div
          className="relative mt-10 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{
              animation: `marquee ${duration}s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {loopProjects.map((p, idx) => (
  <motion.div
    key={`${p.id}-${idx}`}
    className="flex w-80 flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-zinc-200 flex-shrink-0"
    initial={{ opacity: 0, y: 100 }} // start below
    whileInView={{ opacity: 1, y: 0 }} // slide up into view
    exit={{ opacity: 0, y: -100 }} // slide out upwards
    transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="relative h-48 w-full overflow-hidden">
      <img
        src={p.img}
        alt={p.title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>

    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
        {p.title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-zinc-600">{p.desc}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-200 px-2.5 py-1 text-[11px] font-medium text-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
          <Clock className="h-4 w-4" /> {p.duration}
        </span>
        <div className="flex gap-2">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-orange-600"
          >
            <ExternalLink className="h-4 w-4" /> Live
          </a>
          <a
            href={p.code}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-zinc-900"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        </div>
      </div>
    </div>
  </motion.div>
))}

          </div>

          <style>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

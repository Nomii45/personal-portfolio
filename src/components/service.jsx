// import React, { useState, useEffect, useRef } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { FaProjectDiagram, FaUsers } from "react-icons/fa";

// import Html from "../assets/html.png";
// import Css from "../assets/css.png";
// import Reactt from "../assets/react.png";
// import Node from "../assets/node.png";
// import Mongo from "../assets/mongo.png";

// const services = [
//   {
//     title: "Front-End Development",
//     icons: [Html, Css, Reactt],
//     description:
//       "Building responsive, dynamic, and high-performance websites using modern HTML5, CSS, JavaScript libraries like React.js.",
//   },
//   {
//     title: "Back-End Development",
//     icons: [Node, Mongo],
//     description:
//       "Creating secure and scalable server-side applications with Node.js, Express, and MongoDB.",
//   },
// ];

// // Count up hook
// function useCountUp(end, duration, startCount) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!startCount) return;
//     let start = 0;
//     const step = Math.ceil(end / (duration / 16));
//     const interval = setInterval(() => {
//       start += step;
//       if (start >= end) {
//         start = end;
//         clearInterval(interval);
//       }
//       setCount(start);
//     }, 16);
//     return () => clearInterval(interval);
//   }, [startCount, end, duration]);
//   return count;
// }

// const TiltCard = ({ children, className = "" }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useTransform(y, [-50, 50], [8, -8]); // invert
//   const rotateY = useTransform(x, [-50, 50], [-8, 8]);

//   const [pos, setPos] = useState({ x: 50, y: 50 });

//   function handleMouseMove(e) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const offsetX = e.clientX - rect.left - rect.width / 2;
//     const offsetY = e.clientY - rect.top - rect.height / 2;
//     x.set(offsetX);
//     y.set(offsetY);

//     // Shine effect position in %
//     const px = ((e.clientX - rect.left) / rect.width) * 100;
//     const py = ((e.clientY - rect.top) / rect.height) * 100;
//     setPos({ x: px, y: py });
//   }

//   function handleMouseLeave() {
//     x.set(0);
//     y.set(0);
//     setPos({ x: 50, y: 50 });
//   }

//   return (
//     <motion.div
//       className={`relative overflow-hidden ${className}`}
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Shine layer */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-200"
//         style={{
//           background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)`,
//         }}
//       />
//       {children}
//     </motion.div>
//   );
// };

// export default function ServiceAndStats() {
//   const [animateNow, setAnimateNow] = useState(false);
//   const statsRef = useRef(null);
//   const [startCount, setStartCount] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setAnimateNow(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );
//     const section = document.getElementById("service-stats-section");
//     if (section) observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setStartCount(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );
//     if (statsRef.current) observer.observe(statsRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const projectCount = useCountUp(10, 9500, startCount);
//   const reviewCount = useCountUp(100, 2500, startCount);

//   return (
//     <section
//       id="service-stats-section"
//       className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24 px-6 md:px-20"
//     >
//       {/* heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 80 }}
//         animate={animateNow ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.9 }}
//         className="text-center mb-20"
//       >
//         <h2 className="text-4xl md:text-5xl font-extrabold">
//           <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
//             My Services
//           </span>
//         </h2>
//         <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto mt-4">
//           Here’s what I offer to help you build an amazing website presence.
//         </p>
//       </motion.div>

//       {/* Services */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 100 }}
//             animate={animateNow ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.9, delay: index * 0.2 }}
//           >
//             <TiltCard className="relative group bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all">
//               {/* icons */}
//               <div className="flex justify-center mb-6">
//                 <div className="flex gap-5">
//                   {service.icons.map((icon, i) => (
//                     <div
//                       key={i}
//                       className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-100 to-pink-500 flex items-center justify-center shadow-lg"
//                     >
//                       <img src={icon} alt="" className="w-10 h-10 object-contain" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <h3 className="text-3xl md:text-4xl font-bold text-center mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-base md:text-lg opacity-90 text-center">
//                 {service.description}
//               </p>
//             </TiltCard>
//           </motion.div>
//         ))}
//       </div>

//       {/* Stats */}
//       <div
//         ref={statsRef}
//         className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
//       >
//         {[ // two stat cards
//           {
//             icon: <FaProjectDiagram className="text-3xl" />,
//             count: projectCount,
//             label: "Completed Projects",
//           },
//           {
//             icon: <FaUsers className="text-3xl" />,
//             count: reviewCount.toLocaleString(),
//             label: "Client Reviews",
//           },
//         ].map((stat, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 80 }}
//             animate={startCount ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.9, delay: i * 0.2 }}
//           >
//             <TiltCard className="relative bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-xl text-center hover:shadow-2xl transition-all">
//               <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center mx-auto mb-4">
//                 {stat.icon}
//               </div>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//                 {stat.count}+
//               </h2>
//               <p className="text-base md:text-lg opacity-80 mt-2">{stat.label}</p>
//             </TiltCard>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaProjectDiagram, FaUsers, FaCode, FaServer } from "react-icons/fa";

import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Reactt from "../assets/react.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";

const services = [
  {
    title: "Front-End Development",
    icons: [Html, Css, Reactt],
    description:
      "Building responsive, dynamic, and high-performance websites using modern HTML5, CSS, JavaScript libraries like React.js.",
  },
  {
    title: "Back-End Development",
    icons: [Node, Mongo],
    description:
      "Creating secure and scalable server-side applications with Node.js, Express, and MongoDB.",
  },
];

function useCountUp(end, duration, startCount) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCount) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 16);
    return () => clearInterval(interval);
  }, [startCount, end, duration]);
  return count;
}

const TiltCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setPos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-200"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

export default function ServiceAndStats() {
  const [animateNow, setAnimateNow] = useState(false);
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateNow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    const section = document.getElementById("service-stats-section");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const projectCount = useCountUp(10, 9500, startCount);
  const reviewCount = useCountUp(100, 2500, startCount);

  return (
    <section
      id="service-stats-section"
      className="relative bg-base-100 text-base-content py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* floating icons */}
      <motion.div
        className="absolute top-10 left-10 text-primary/20 text-6xl pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaCode />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-12 text-secondary/20 text-7xl pointer-events-none"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <FaServer />
      </motion.div>

      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={animateNow ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Services
          </span>
        </h2>
        <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto mt-4">
          Here’s what I offer to help you build an amazing website presence.
        </p>
      </motion.div>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={animateNow ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: index * 0.2 }}
          >
            <TiltCard className="relative group bg-base-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex justify-center mb-6">
                <div className="flex gap-5">
                  {service.icons.map((icon, i) => (
                    <div
                      key={i}
                      className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg"
                    >
                      <img
                        src={icon}
                        alt=""
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-3">
                {service.title}
              </h3>
              <p className="text-base md:text-lg opacity-90 text-center">
                {service.description}
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div
        ref={statsRef}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {[
          {
            icon: <FaProjectDiagram className="text-3xl" />,
            count: projectCount,
            label: "Completed Projects",
          },
          {
            icon: <FaUsers className="text-3xl" />,
            count: reviewCount.toLocaleString(),
            label: "Client Reviews",
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            animate={startCount ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: i * 0.2 }}
          >
            <TiltCard className="relative bg-base-200 rounded-3xl p-10 shadow-xl text-center hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {stat.count}+
              </h2>
              <p className="text-base md:text-lg opacity-80 mt-2">
                {stat.label}
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

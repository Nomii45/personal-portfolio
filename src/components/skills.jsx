// import React, { useEffect, useRef, useState } from "react";

// const skills = [
//   { name: "HTML", level: 80, color: "from-orange-400 to-orange-500" },
//   { name: "CSS", level: 75, color: "from-blue-400 to-blue-500" },
//   { name: "JavaScript", level: 60, color: "from-yellow-300 to-yellow-400" },
//   { name: "React", level: 65, color: "from-cyan-400 to-cyan-500" },
//   { name: "Node.js", level: 50, color: "from-green-400 to-green-500" },
//   { name: "MongoDB", level: 55, color: "from-emerald-400 to-emerald-500" },
// ];

// export default function Skills() {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // helper to pick animation direction based on index
//   const getAnimationClass = (index) => {
//     // 0,3 slide right; 2,5 slide left; 1,4 slide up
//     if (index === 0 || index === 3) return "translate-x-[-40px]"; // from right
//     if (index === 1 || index === 4) return "translate-y-[40px]"; // from below
//     if (index === 2 || index === 5) return "translate-x-[40px]"; // from left
//   };

//   return (
//     <section ref={sectionRef} className="bg-slate-900 text-slate-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* heading */}
//         <div
//           className={`transition-all duration-700 ease-out delay-200 ${
//             visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
//           }`}
//         >
//           <p className="m-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium tracking-wide text-white w-fit mx-auto">
//             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//             Tech Skills
//           </p>
//           <h3 className="text-3xl md:text-3xl font-bold text-purple-400 text-center mb-1">
//             Technologies and tools I use regularly
//           </h3>
//           <p className="mt-1 text-slate-400 text-center max-w-2xl mx-auto mb-8">
//             A snapshot of the frameworks and tools I work with most often.
//           </p>
//         </div>

//         {/* skills grid */}
//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className={`bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg transform transition-all duration-700 ease-out ${
//                 visible
//                   ? "opacity-100 translate-x-0 translate-y-0"
//                   : `opacity-0 ${getAnimationClass(index)}`
//               }`}
//               style={{
//                 transitionDelay: visible ? `${index * 150 + 200}ms` : "0ms",
//               }}
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <span className="text-lg font-semibold">{skill.name}</span>
//                 <span className="text-sm text-slate-400">{skill.level}%</span>
//               </div>

//               <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
//                 <div
//                   className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
//                   style={{ width: visible ? `${skill.level}%` : "0%" }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", level: 80, color: "from-orange-400 to-orange-500" },
  { name: "CSS", level: 75, color: "from-blue-400 to-blue-500" },
  { name: "JavaScript", level: 60, color: "from-yellow-300 to-yellow-400" },
  { name: "React", level: 65, color: "from-cyan-400 to-cyan-500" },
  { name: "Node.js", level: 50, color: "from-green-400 to-green-500" },
  { name: "MongoDB", level: 55, color: "from-emerald-400 to-emerald-500" },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getAnimationClass = (index) => {
    if (index === 0 || index === 3) return "translate-x-[-40px]";
    if (index === 1 || index === 4) return "translate-y-[40px]";
    if (index === 2 || index === 5) return "translate-x-[40px]";
  };

  // Different card styles
  const boxStyles = [
    "bg-slate-800/60 border border-orange-400/20",
    "bg-gradient-to-br from-slate-800/70 to-slate-900/70",
    "bg-slate-800/60 ring-1 ring-blue-400/20",
    "bg-slate-800/60 shadow-xl shadow-purple-500/10",
    "bg-gradient-to-tr from-slate-800/60 to-slate-900/60 border border-green-400/10",
    "bg-slate-800/50 backdrop-blur-lg border border-emerald-400/20",
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-slate-900 text-slate-100 py-20 px-6 rounded-3xl shadow-2xl mb-1 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 to-slate-900/20 rounded-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* heading */}
        <div
          className={`transition-all duration-700 ease-out delay-200 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <p className="m-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium tracking-wide text-white w-fit mx-auto shadow-md">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Tech Skills
          </p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-purple-400 text-center mb-2">
            Technologies and tools I use regularly
          </h3>
          <p className="mt-1 text-slate-400 text-center max-w-2xl mx-auto mb-10">
            A snapshot of the frameworks and tools I work with most often.
          </p>
        </div>

        {/* skills grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${boxStyles[index % boxStyles.length]} 
                group p-6 rounded-3xl transform transition-all duration-700 ease-out 
                hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]
                ${
                  visible
                    ? "opacity-100 translate-x-0 translate-y-0"
                    : `opacity-0 ${getAnimationClass(index)}`
                }`}
              style={{
                transitionDelay: visible ? `${index * 150 + 200}ms` : "0ms",
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-sm text-slate-400">{skill.level}%</span>
              </div>

              <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:brightness-110`}
                  style={{ width: visible ? `${skill.level}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

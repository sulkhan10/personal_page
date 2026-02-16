"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FaAppStore, FaGithub, FaGlobe, FaGooglePlay } from "react-icons/fa";

const dataPorto = [
    {
      title: "DParagon (iOS/Android)",
      desc: "Mobile app to book exclusive boarding house.",
      techStack: "React Native",
      period: "January 2026",
      note: "App Store (iOS) / Play Store (Android)",
      image: [
        "/dpandroid.png",
        "/dpios.png"
      ],
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.dparagon.app&hl=id",
        ios: "https://apps.apple.com/id/app/dparagon/id1439995162",
      },
    },
    {
      title: "MyRDL (Android)",
      desc: "Mobile app to manage employees' attendance.",
      techStack: "React Native",
      period: "January 2026",
      note: "Play Store (Android)",
      image: [
        '/myrdlandroid.png'
      ],
      links: {
        playstore : 'https://play.google.com/store/apps/details?id=com.absensidparagon'
      },
    },
    {
      title: "Djurkam (iOS/Android)",
      desc: "Mobile app to book exclusive boarding house, hotels, villas.",
      techStack: "React Native",
      period: "January 2026",
      note: "App Store (iOS) / Play Store (Android)",
      image: [
        '/djurkamandroid.png',
        '/djurkamios.png'
      ],
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.djuragankamar.ids",
        ios: "https://apps.apple.com/id/app/djurkam/id1451477967",
      },
    },
    {
      title: "Djurkam Mitra (iOS/Android)",
      desc: "Mobile app to manage exclusive boarding house, hotels, villas.",
      techStack: "React Native",
      period: "January 2026",
      note: "App Store (iOS) / Play Store (Android)",
      image: [
        "/djurkammitraandroid.png",
        "/djurkammitraios.png"
      ],
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.aldrich.djurkammitras",
        ios: "https://apps.apple.com/id/app/djurkam-mitra/id1540687660",
      },
    },
    {
      title: "KOSMO App iOS",
      desc: "Mobile app for home services and monthly billing payments.",
      techStack: "React Native, React, PHP, MySQL",
      period: "October 2024",
      note: "Showcase",
      image: [
        "/kosmoiosapp.png",

      ],
      links: {
        ios: "https://apps.apple.com/id/app/kosmo-komunitas-modern/id1540687660",
      },
    },
    {
      title: "KOSMO App Android",
      desc: "Mobile app for home services and monthly billing payments.",
      techStack: "React Native, React, PHP, MySQL",
      period: "October 2024",
      note: "Showcase",
      image: [
        "/kosmoandroid.png",
      ],
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.smartcommunityid&hl=id&pli=1",
      },
    },
    {
      title: "NutriCalc",
      desc: "Web app to count BMI, energy intake, and food calories.",
      techStack: "ReactJS, SQLite",
      period: "January 2025",
      note: "Repo",
      image: [
        "/nutricalc.png",
      ],
      links: {
        showcase:
          "https://nutri-calc-lwlnqs90e-gals-projects-8328d421.vercel.app/",
      },
    },
    {
      title: "The SG Times",
      desc: "Web-based news portal.",
      techStack: "ReactJS, SQLite",
      period: "November 2024",
      note: "Showcase",
      image: [
        "/sgtimes.png",
      ],
      links: {
        showcase: "https://news-portal-angular-zzie.vercel.app/",
      },
    },
    {
      title: "wilieeffendi.com",
      desc: "landing page untuk freelancer",
      techStack: "NextJS",
      period: "2024",
      note: "Showcase",
       image: [
        "/wilie.png",
      ],
      links: {
        showcase: "https://www.wilieeffendi.com/",
      },
    },
   
    {
      title: "JPM Jasa Web",
      desc: "landing page untuk perusahaan",
      techStack: "WordPress",
      period: "2024",
      note: "Showcase",
       image: [
        "/jpm.png",
      ],
      links: {
        showcase: "https://jpmjasaweb.com",
      },
    },
    
    {
      title: "GORO Digital (iOS/Android)",
      desc: "Mobile local marketplace application.",
      techStack: "React Native",
      period: "January 2026",
      note: "App Store (iOS) / Play Store (Android)",
      image: [
        "/goroandroid.png",
        "/goroios.png"
      ],
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.djuraganvoucher.member",
        ios: "https://apps.apple.com/id/app/goro-digital/id1510869798",
      },
    },
    {
      title: "Livy Mobile Application",
      desc: "Mobile app for self-improvement counseling and AI chatbot.",
      techStack:
        "React Native, Jotai, React, Vue, Express JS, MongoDB, PostgreSQL, Jest",
      period: "March 2023",
      note: "Repo / Showcase",
      image: [
        '/livy1.png',
        '/livy2.png',
        '/livy3.png',
        '/livy4.png'
      ],
      links: {
        showcase:'https://drive.google.com/file/d/10ovPMyLpA2Rqn7BsFb3hFipAv_uua70i/view',
        repo:'https://github.com/h8-hackathon/livy'
      },
    },
    {
      title: "Sulkhans Food Web Application",
      desc: "Web app to display restaurant menus.",
      techStack: "ReactJS, Express.js, PostgreSQL, AWS",
      period: "February 2023",
      note: "Repo / Showcase",
      image: [
        '/sulkhans.png'
      ],
      links: {
        showcase:'https://drive.google.com/file/d/1kp0Uxjb8X-SSBDazuIknjLjWGont_l2G/view?usp=sharing',
        repo:'https://github.com/sulkhan10/sulkhans-food'
      },
    },
    
  ];

export default function Projects() {
  return (
    <section id="works" className="relative z-10 bg-black text-white py-24 px-6 md:px-20 -mt-[100vh]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <h2 className="text-5xl md:text-8xl font-syne font-bold uppercase leading-tight">
          Selected <br /> Works
        </h2>
        
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {dataPorto.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group cursor-default flex flex-col h-full"
            whileHover={{ y: -10 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-neutral-900 border border-white/10">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                
                {/* Date Pill - Desktop Overlay */}
                <div className="absolute top-4 left-4 z-20 hidden md:block">
                     <span className="font-mono text-xs bg-black/50 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white">
                        {project.period}
                     </span>
                </div>

                {/* Image */}
                <Image
                    src={project.image[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                {/* Floating Links - Desktop Overlay */}
                <div className="absolute bottom-4 right-4 z-20 hidden md:flex gap-2">
                     {project.links.playstore && (
                        <a href={project.links.playstore} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform" title="Play Store">
                            <FaGooglePlay size={16} />
                        </a>
                     )}
                     {project.links.ios && (
                        <a href={project.links.ios} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform" title="App Store">
                            <FaAppStore size={18} />
                        </a>
                     )}
                     {project.links.showcase && (
                        <a href={project.links.showcase} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform" title="Showcase">
                            <FaGlobe size={18} />
                        </a>
                     )}
                     {project.links.repo && (
                        <a href={project.links.repo} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform" title="Repository">
                            <FaGithub size={18} />
                        </a>
                     )}
                </div>
            </div>

            {/* Mobile Info Bar (Date & Links) */}
            <div className="flex md:hidden justify-between items-center mb-4">
                 <span className="font-mono text-xs border border-white/20 px-3 py-1 rounded-full text-neutral-400">
                    {project.period}
                 </span>
                 <div className="flex gap-2">
                     {project.links.playstore && (
                        <a href={project.links.playstore} target="_blank" rel="noreferrer" className="p-2 bg-white text-black rounded-full" title="Play Store">
                            <FaGooglePlay size={14} />
                        </a>
                     )}
                     {project.links.ios && (
                        <a href={project.links.ios} target="_blank" rel="noreferrer" className="p-2 bg-white text-black rounded-full" title="App Store">
                            <FaAppStore size={16} />
                        </a>
                     )}
                     {project.links.showcase && (
                        <a href={project.links.showcase} target="_blank" rel="noreferrer" className="p-2 bg-white text-black rounded-full" title="Showcase">
                            <FaGlobe size={16} />
                        </a>
                     )}
                     {project.links.repo && (
                        <a href={project.links.repo} target="_blank" rel="noreferrer" className="p-2 bg-white text-black rounded-full" title="Repository">
                            <FaGithub size={16} />
                        </a>
                     )}
                 </div>
            </div>
            
            <div className="flex flex-col justify-between flex-grow border-b border-white/20 pb-8">
                <div>
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg md:text-xl font-syne font-bold leading-tight max-w-full">{project.title}</h3>
                     </div>
                     <p className="text-neutral-400 font-manrope text-sm mb-4 line-clamp-2" title={project.desc}>{project.desc}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.split(",").map((tech, i) => (
                        <span key={i} className="text-xs font-mono text-neutral-500 bg-neutral-900/50 px-2 py-1 rounded">
                            {tech.trim()}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

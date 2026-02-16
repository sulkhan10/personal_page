"use client";

import { motion } from "motion/react";

const services = [
  "Web Development",
  "Mobile Apps",
  "Technical Consulting",
];

const educationData = [
  {
    school: "Hacktiv8",
    location: "Jakarta, Indonesia",
    program: "Full Stack JavaScript Immersive Program",
    period: "November 2022 - March 2023",
    note: "Score: 91/100 (Transcript)",
  },
  {
    school: "Universitas Gadjah Mada",
    location: "Yogyakarta, Indonesia",
    program: "Faculty of Medicine",
    period: "July 2013 - July 2018 (Unfinished)",
  },
  {
    school: "SMA Negeri 1 Muntilan",
    location: "Magelang, Indonesia",
    program: "Math and Science",
    period: "July 2010 - July 2013",
  },
];

const experienceData = [
  {
    role: "Mobile Developer",
    company: "PT Royal D'Paragon Land",
    location: "Yogyakarta, Indonesia",
    period: "March 2025 - February 2026",
  },
  {
    role: "Full Stack Developer",
    company: "PT Transforme Indonesia",
    location: "Jakarta, Indonesia",
    period: "May 2023 - March 2025",
  },
  {
    role: "Freelance Front End Developer",
    location: "Yogyakarta, Indonesia",
    period: "February 2023 - May 2023",
  },
];

const certificationData = [
  {
    issuer: "Dicoding",
    title: "Learn Basic Javascript Programming",
    issued: "September 2022",
    expires: "September 2025",
    credential: "ERZRM3OMWPYV",
  },
  {
    issuer: "Dicoding",
    title: "Learn Basic Web Programming",
    issued: "September 2022",
    expires: "September 2025",
    credential: "N9ZO7WQD6ZG5",
  },
  {
    issuer: "Dicoding",
    title: "Learn Basic Front-End Web Programming",
    issued: "September 2022",
    expires: "September 2025",
    credential: "1RXYMK121XVM",
  },
  {
    issuer: "Dicoding",
    title: "Learn Basic DevOps",
    issued: "September 2022",
    expires: "September 2025",
    credential: "MRZM43V1NXYQ",
  },
];

const marqueeText = "CREATIVE DEVELOPER • SOFTWARE ENGINEER • UI/UX ENTHUSIAST • ";

export default function OtherSections() {
  return (
    <div className="bg-black text-white relative z-10 pb-20">
      
      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-sm font-mono text-neutral-500 mb-4">( WHO I AM )</h2>
            </div>
            <div>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-4xl font-syne leading-relaxed mb-8"
                >
                    Driven and passionate software developer with over 2 years of experience. 
                    I specialize in creating dynamic, user-centric web and mobile applications. 
                    My dedication to continuous learning allows me to deliver high-quality solutions.
                </motion.p>
                <div className="flex flex-wrap gap-4">
                    {["JavaScript", "TypeScript", "React", "Next.js", "React Native", "Node.js", "Tailwind CSS"].map((tech, i) => (
                         <span key={i} className="px-4 py-2 border border-white/20 rounded-full font-mono text-sm hover:bg-white hover:text-black transition-colors cursor-default">
                            {tech}
                         </span>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 px-6 md:px-20 border-t border-white/10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            
            {/* Experience */}
            <div>
                 <h2 className="text-sm font-mono text-neutral-500 mb-12">( EXPERIENCE )</h2>
                 <div className="flex flex-col gap-12">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="group">
                             <h3 className="text-2xl font-syne font-bold mb-1 group-hover:text-neutral-400 transition-colors">{exp.role}</h3>
                             <p className="text-lg text-neutral-300 mb-2">{exp.company || "Freelance"}</p>
                             <div className="flex justify-between items-center text-sm font-mono text-neutral-500">
                                <span>{exp.period}</span>
                                <span>{exp.location}</span>
                             </div>
                        </div>
                    ))}
                 </div>
            </div>

            {/* Education */}
            <div>
                 <h2 className="text-sm font-mono text-neutral-500 mb-12">( EDUCATION )</h2>
                 <div className="flex flex-col gap-12">
                    {educationData.map((edu, index) => (
                        <div key={index} className="group">
                             <h3 className="text-2xl font-syne font-bold mb-1 group-hover:text-neutral-400 transition-colors">{edu.school}</h3>
                             <p className="text-lg text-neutral-300 mb-2">{edu.program}</p>
                             <div className="flex justify-between items-center text-sm font-mono text-neutral-500">
                                <span>{edu.period}</span>
                                <span>{edu.location}</span>
                             </div>
                             {edu.note && <p className="mt-2 text-xs font-mono text-neutral-600">{edu.note}</p>}
                        </div>
                    ))}
                 </div>
            </div>

         </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 border-t border-white/10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                 <h2 className="text-sm font-mono text-neutral-500 mb-4">( SERVICES )</h2>
            </div>
            <div className="flex flex-col gap-8">
                {services.map((service, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-4xl md:text-6xl font-syne font-bold hover:text-neutral-500 transition-colors cursor-default"
                    >
                        {service}
                    </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 md:px-20 border-t border-white/10">
         <h2 className="text-sm font-mono text-neutral-500 mb-12">( LICENSES & CERTIFICATIONS )</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationData.map((cert, index) => (
                <div key={index} className="border border-white/10 p-6 rounded-xl hover:bg-neutral-900 transition-colors">
                    <h3 className="font-syne font-bold text-lg mb-2">{cert.title}</h3>
                    <p className="text-neutral-400 text-sm mb-4">{cert.issuer}</p>
                    <div className="text-xs font-mono text-neutral-600">
                        <p>Issued: {cert.issued}</p>
                        <p>Expires: {cert.expires}</p>
                    </div>
                </div>
            ))}
         </div>
      </section>

      {/* Infinite Marquee */}
      <section className="py-20 overflow-hidden">
        <div className="flex whitespace-nowrap">
            <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex gap-8 text-8xl md:text-[10rem] font-bold font-syne text-transparent stroke-text opacity-30"
                style={{ WebkitTextStroke: "1px white" }}
            >
                {marqueeText.repeat(4)}
            </motion.div>
            <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex gap-8 text-8xl md:text-[10rem] font-bold font-syne text-transparent stroke-text opacity-30"
                style={{ WebkitTextStroke: "1px white" }}
            >
                {marqueeText.repeat(4)}
            </motion.div>
        </div>
      </section>

    </div>
  );
}

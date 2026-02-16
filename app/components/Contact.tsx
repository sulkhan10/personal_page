"use client";

import { motion } from "motion/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const contactLinks = [
    { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/6285858999264" },
    { icon: <FaEnvelope />, label: "Email", href: "mailto:sulkhangalangsakti@gmail.com" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/sulkhangalangsakti/" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/sulkhan10" },
  ];

  return (
    <section id="contact" className="relative z-10 bg-black text-white min-h-screen flex flex-col justify-between pt-32 pb-10 px-6 md:px-20 overflow-hidden">
        
        {/* Contact Info */}
        <div className="flex flex-col items-center justify-center flex-grow">
            <h2 className="text-4xl md:text-6xl font-syne font-bold mb-12 text-center">Let's Work Together</h2>
            
            <div className="flex gap-8 md:gap-16">
                {contactLinks.map((link, index) => (
                    <motion.a 
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                        whileHover={{ y: -20, scale: 1.2, color: "#a3a3a3" }}
                        className="text-4xl md:text-6xl transition-colors"
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </div>
            
            <div className="mt-12 text-center font-manrope text-neutral-400">
                <p>Magelang, Indonesia</p>
                <p>+62 858 5899 9264</p>
                <p>sulkhangalangsakti@gmail.com</p>
            </div>
        {/* Footer Reveal (Screenfit Text) */}
        <motion.div 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="w-full mt-20"
        >
            <h1 className="text-[8vw] font-syne font-bold leading-none text-center uppercase text-neutral-800 select-none">
                GALANG SAKTI
            </h1>
            <div className="flex justify-between mt-4 text-xs md:text-sm font-mono text-neutral-600 uppercase border-t border-neutral-800 pt-4">
                <span>© {new Date().getFullYear()} Galang Sakti</span>
                <span>All Rights Reserved</span>
            </div>
        </motion.div>
        </div>


    </section>
  );
}

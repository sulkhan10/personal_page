"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Works", href: "#works" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    initial: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as any,
      },
    },
    exit: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as any,
      },
    },
  };

  const linkVariants = {
    initial: { y: 80, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as any,
        delay: 0.1 * i,
      },
    }),
    exit: { y: 80, opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as any } },
  };

  return (
    <>
      {/* Floating Navbar */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-40 mix-blend-difference text-white">
        <Link href="/" className="text-xl font-bold font-syne uppercase tracking-wider">
          Galang Sakti
        </Link>
        <button
          onClick={toggleMenu}
          className="text-3xl hover:opacity-70 transition-opacity"
        >
          <CgMenuRight />
        </button>
      </nav>

      {/* Fullscreen Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-white text-black z-50 flex flex-col justify-center items-center px-6"
          >
            {/* Close Button */}
            <div className="absolute top-0 right-0 p-6 md:p-10">
               <button onClick={toggleMenu} className="text-3xl hover:opacity-70 transition-opacity">
                <CgClose />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 items-center">
              {navLinks.map((link, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div
                    custom={i}
                    variants={linkVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-5xl md:text-8xl font-syne font-bold uppercase hover:text-neutral-500 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Footer Info */}
             <div className="absolute bottom-10 w-full flex flex-col md:flex-row justify-between px-10 items-center text-center md:text-left gap-4">
                <div className="font-manrope text-sm text-neutral-500">
                    <p>Based in Indonesia</p>
                    <p>Available for freelance</p>
                </div>
                <div className="flex gap-6 text-2xl">
                    <a href="https://wa.me/6285858999264" className="hover:scale-110 transition-transform"><FaWhatsapp/></a>
                    <a href="mailto:sulkhangalangsakti@gmail.com" className="hover:scale-110 transition-transform"><FaEnvelope/></a>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import OtherSections from "./components/OtherSections";
import Preloader from "./components/Preloader";
import Projects from "./components/Projects";
import SequenceScroll from "./components/SequenceScroll";
import useLenis from "./hooks/useLenis";

export default function Home() {
  useLenis();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <main className="relative bg-black min-h-screen">
      {loading && <Preloader progress={progress} onComplete={() => setLoading(false)} />}
      
      <Navbar />

      <SequenceScroll 
        onLoadComplete={handleLoadComplete} 
        onProgress={setProgress}
      />

      <Projects />
      <OtherSections />
      <Contact />
    </main>
  );
}

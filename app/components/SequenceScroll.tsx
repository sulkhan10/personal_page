"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 192;
const IMAGES_DIR = "/sequence";

const generateImagePath = (index: number) => {
  const paddedIndex = String(index + 1).padStart(3, "0");
  return `${IMAGES_DIR}/ezgif-frame-${paddedIndex}.jpg`;
};

interface SequenceScrollProps {
  onLoadComplete: () => void;
  onProgress: (progress: number) => void;
}

export default function SequenceScroll({ onLoadComplete, onProgress }: SequenceScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload Images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let count = 0;

      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = generateImagePath(i);
        img.onload = () => {
          count++;
          setLoadedCount(count);
          onProgress((count / FRAME_COUNT) * 100);
          if (count === FRAME_COUNT) {
            onLoadComplete();
          }
        };
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    loadImages();
  }, [onLoadComplete, onProgress]);

  // Render Canvas
  useEffect(() => {
    const updateCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const currentFrameIndex = Math.round(currentIndex.get());
      const img = images[currentFrameIndex];

      if (img) {
        // Calculate Aspect Ratio (Object-Fit: Cover)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    // Initial render
    updateCanvas(); 
    
    // Subscribe to scroll changes
    const unsubscribe = currentIndex.on("change", updateCanvas);
    
    // Handle resize
    window.addEventListener("resize", updateCanvas);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", updateCanvas);
    }
  }, [images, currentIndex]);


  // Text Overlay Opacity Maps
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15], [0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]); // Stays visible at the end

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
        
        {/* Overlay Text 1 */}
        <motion.div 
            style={{ opacity: opacity1 }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 text-center px-4"
        >
             <h1 className="text-4xl md:text-7xl font-bold font-syne mb-2">Hi, I'm Galang Sakti.</h1>
             <p className="text-xl md:text-2xl text-neutral-300 font-manrope">Software Developer</p>
        </motion.div>

        {/* Overlay Text 2 */}
        <motion.div 
            style={{ opacity: opacity2 }}
            className="absolute inset-0 flex items-center justify-start pointer-events-none z-10 px-10 md:px-32"
        >
             <p className="text-3xl md:text-5xl font-syne max-w-2xl leading-tight">I craft digital experiences with code and creativity.</p>
        </motion.div>

         {/* Overlay Text 3 */}
         <motion.div 
            style={{ opacity: opacity3 }}
            className="absolute inset-0 flex items-center justify-end pointer-events-none z-10 px-10 md:px-32"
        >
             <p className="text-4xl md:text-6xl font-syne font-bold font-italic">Innovation through interaction.</p>
        </motion.div>

         {/* Overlay Text 4 */}
         <motion.div 
            style={{ opacity: opacity4 }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 text-center px-4"
        >
             <h2 className="text-4xl md:text-6xl font-syne font-bold mb-8">Ready to bring your vision to life?</h2>
             <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg font-syne hover:bg-neutral-200 transition-colors"
             >
                Let's Talk
             </motion.button>
        </motion.div>

      </div>
       {/* Preload Progress (Optional Viz) */}
        {loadedCount < FRAME_COUNT && (
            <div className="fixed top-0 right-0 p-4 text-xs font-mono text-white z-50">
                Loaded: {loadedCount}/{FRAME_COUNT}
            </div>
        )}
    </div>
  );
}

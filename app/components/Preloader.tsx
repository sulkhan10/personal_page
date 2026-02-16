"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface PreloaderProps {
  progress: number;
  onComplete: () => void;
}

export default function Preloader({ progress, onComplete }: PreloaderProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 1000); // Wait for exit animation
      }, 500);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-syne font-bold"
            >
              Galang Sakti
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-manrope text-neutral-400"
            >
              Software Developer
            </motion.div>
            
            <div className="w-64 h-1 bg-white/20 mt-8 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <motion.div className="font-manrope text-sm mt-2">
              {Math.round(progress)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

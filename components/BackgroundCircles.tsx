"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundCircles() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth motion
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  // Wider range for more visible motion
  const translateX = useTransform(smoothX, [-1, 1], [-40, 40]);
  const translateY = useTransform(smoothY, [-1, 1], [-40, 40]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth) * 2 - 1;
      const y = (event.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.6, 1], scale: [1, 1.02, 1] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      className="relative flex justify-center items-center"
    >
      {/* ✨ Core bright glow */}
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="absolute h-[240px] w-[240px] mt-64 md:mt-52 bg-gradient-to-br from-teal-300 via-emerald-400 to-teal-500 blur-3xl rounded-full opacity-90"
      />

      {/* 🌈 Inner neon ring */}
      <motion.div
        style={{ x: translateX, y: translateY }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        className="absolute border-[3px] border-emerald-400/80 rounded-full h-[320px] w-[320px] mt-64 md:mt-52 shadow-[0_0_50px_15px_rgba(52,211,153,0.5)]"
      />

      {/* 🟢 Mid ring with soft glow */}
      <motion.div
        style={{ x: translateX, y: translateY }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
        className="absolute border-[3px] border-teal-400/70 rounded-full h-[500px] w-[500px] mt-64 md:mt-52 shadow-[0_0_80px_20px_rgba(20,184,166,0.4)]"
      />

      {/* 🔵 Outer ring with defined aura */}
      <motion.div
        style={{ x: translateX, y: translateY }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        className="absolute border-[2px] border-cyan-300/60 rounded-full h-[800px] w-[800px] mt-64 md:mt-52 shadow-[0_0_120px_40px_rgba(6,182,212,0.3)]"
      />

      {/* 🌌 Ambient radial glow */}
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="absolute h-[950px] w-[950px] mt-64 md:mt-52 bg-gradient-radial from-emerald-400/30 via-transparent to-transparent blur-[180px] rounded-full"
      />
    </motion.div>
  );
}

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Hero from "./components/Hero";
import CharacterScroll from "./components/CharacterScroll";
import ThemeParks from "./components/ThemeParks";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, [mouseX, mouseY]);

  if (!isLoaded) {
    return (
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 border-4 border-vought-gold border-t-transparent rounded-full mb-8"
        />
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-vought-gold font-black tracking-[0.5em] text-xl uppercase"
        >
          Initializing Vought Network...
        </motion.h2>
      </div>
    );
  }

  return (
    <main className="relative bg-black selection:bg-vought-gold selection:text-vought-blue">
      {/* Custom Cursor */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-vought-gold rounded-full pointer-events-none z-[9999] hidden md:block"
      />
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-2 h-2 bg-vought-gold rounded-full pointer-events-none z-[9999] hidden md:block"
      />

      <Navbar />
      
      <div id="hero" className="relative">
        <Hero />
      </div>
      
      <div id="the-seven" className="relative">
        <CharacterScroll />
      </div>
      
      <div id="vought-land" className="relative">
        <ThemeParks />
      </div>
      
      <div id="movies" className="relative">
        <Movies />
      </div>
      
      <Footer />
    </main>
  );
}

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { ChevronDown, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-vought-blue">
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ 
          x: springX, 
          y: springY,
          scale: 1.1,
          opacity: 0.4
        }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://picsum.photos/seed/vought-hq/1920/1080?blur=5" 
          alt="Vought HQ" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vought-blue/80 via-transparent to-black" />
      </motion.div>

      {/* Animated Scanlines Overlay */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* Floating Particles/Data Streams */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "110%", 
              opacity: Math.random() * 0.5 
            }}
            animate={{ 
              y: "-10%",
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-vought-gold/30 to-transparent"
          />
        ))}
      </div>

      {/* Large Background Text */}
      <motion.div 
        style={{ y: y1, opacity: 0.05 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none"
      >
        <h2 className="text-[25vw] font-black tracking-tighter text-white whitespace-nowrap">
          VOUGHT
        </h2>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glitch Layers */}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.h1 
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 0.5, x: 5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-0 text-6xl sm:text-8xl md:text-9xl font-black text-vought-red/50 tracking-tighter blur-[2px]"
                >
                  THE SEVEN
                </motion.h1>
                <motion.h1 
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 0.5, x: -5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse", delay: 0.05 }}
                  className="absolute inset-0 text-6xl sm:text-8xl md:text-9xl font-black text-cyan-500/50 tracking-tighter blur-[2px]"
                >
                  THE SEVEN
                </motion.h1>
              </>
            )}
          </AnimatePresence>

          <motion.h1 
            className="text-6xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter relative"
            animate={{ 
              color: isHovered ? "#d4af37" : "#ffffff",
              textShadow: isHovered 
                ? "0 0 30px rgba(212, 175, 55, 0.8)" 
                : "0 0 20px rgba(255, 255, 255, 0.2)"
            }}
          >
            THE SEVEN
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 1.5, ease: "circOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-vought-gold to-transparent mt-4 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          />
        </motion.div>

        <div className="mt-12 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-2xl text-xl md:text-2xl font-light text-white/60 tracking-[0.2em] uppercase"
          >
            Saving the world, <span className="text-white font-bold">one corporate sponsorship</span> at a time.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="px-8 py-3 border border-vought-gold/20 bg-vought-gold/5 backdrop-blur-md relative group cursor-default">
              <div className="absolute inset-0 bg-vought-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <span className="relative text-vought-gold text-xs font-black tracking-[0.5em] uppercase">
                A VOUGHT INTERNATIONAL PRODUCTION
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 1)", color: "#0a192f" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-vought-gold text-vought-gold font-black uppercase tracking-[0.2em] text-sm transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              Explore the Roster
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase group-hover:text-vought-gold transition-colors">
          Scroll to Ascend
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <ChevronDown className="text-vought-gold w-6 h-6" />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-vought-gold/20 rounded-full blur-md"
          />
        </motion.div>
      </motion.div>

      {/* Corner Watermark */}
      <div className="absolute bottom-8 right-8 opacity-10 hidden md:block">
        <Shield className="w-32 h-32 text-vought-gold" />
      </div>
    </section>
  );
}

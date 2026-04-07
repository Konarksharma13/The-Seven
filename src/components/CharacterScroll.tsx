import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "motion/react";

const characters = [
  {
    name: "Homelander",
    power: "Laser Eyes & Flight",
    description: "The leader of The Seven. With the face of a movie star and the powers of a god, he is considered the greatest superhero alive.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/5/5b/Homelander-S3.png/revision/latest/scale-to-width-down/1000?cb=20220604010605",
    color: "#ff0000",
    animation: "lasers"
  },
  {
    name: "Starlight",
    power: "Light Manipulation",
    description: "The girl next door with superpowers. She can absorb electricity and project blinding bursts of light.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/f/fa/Starlight-S3.png/revision/latest/scale-to-width-down/1000?cb=20220604010441",
    color: "#ffffff",
    animation: "spark"
  },
  {
    name: "Translucent",
    power: "Invisibility",
    description: "The Seven's invisible superhero, thanks to his carbon metamaterial skin that bends light and makes him bulletproof.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/6/63/TheSeven-Translucent.png/revision/latest?cb=20200913202918",
    color: "#888888",
    animation: "disappear"
  },
  {
    name: "Queen Maeve",
    power: "Super Strength",
    description: "A warrior, a feminist, and a humanitarian. The second most powerful member of The Seven.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/2/27/Queen-Maeve-S3.png/revision/latest/scale-to-width-down/1000?cb=20220604010748",
    color: "#d4af37",
    animation: "impact"
  },
  {
    name: "A-Train",
    power: "Super Speed",
    description: "The fastest man alive. A speedster who can run at speeds exceeding 1,000 miles per hour.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/6/65/A-Train-S3.png/revision/latest/scale-to-width-down/1000?cb=20220604010944",
    color: "#0064ff",
    animation: "speed"
  },
  {
    name: "The Deep",
    power: "Aquatic Telepathy",
    description: "Guardian of the Seven Seas. He can breathe underwater and communicate with all aquatic lifeforms.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/f/f8/Deep-S3.png/revision/latest/scale-to-width-down/1000?cb=20220604011135",
    color: "#00ffc8",
    animation: "waves"
  },
  {
    name: "Black Noir",
    power: "Stealth & Combat",
    description: "The Seven's superpowered ninja. Silent, stealthy, and enigmatic with heightened senses.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/8/8b/Black-Noire-S3.png/revision/latest/scale-to-width-down/1000?cb=20240827035226",
    color: "#323232",
    animation: "stealth"
  }
];

export default function CharacterScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Horizontal movement for the character list
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);
  
  return (
    <div ref={containerRef} className="relative h-[300vh] md:h-[500vh] bg-black">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Section Title Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 select-none">
          <h2 className="text-[25vw] font-black leading-none whitespace-nowrap">THE SEVEN</h2>
        </div>

        {/* Horizontal Character List */}
        <motion.div 
          style={{ x }} 
          className="flex gap-8 md:gap-12 px-6 md:px-[10vw] items-center"
        >
          {characters.map((char, index) => (
            <CharacterCard key={char.name} char={char} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function CharacterCard({ char, index }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  function handleMouseMove(event: React.MouseEvent) {
    if (!cardRef.current || isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        rotateX: isMobile ? 0 : springRotateX,
        rotateY: isMobile ? 0 : springRotateY,
        perspective: 1000
      }}
      className="relative flex-shrink-0 w-[80vw] md:w-[32vw] aspect-[3/4] group cursor-none"
    >
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{
          opacity: isHovered ? 0.4 : 0.1,
          scale: isHovered ? 1.2 : 1,
        }}
        className="absolute inset-0 blur-[120px] rounded-full pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: char.color }}
      />
      
      <div className="relative h-full w-full glass-panel rounded-3xl overflow-hidden flex flex-col border-white/20 shadow-2xl">
        {/* Image Container */}
        <div className="relative h-full w-full overflow-hidden">
          <motion.img
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? "grayscale(0%)" : "grayscale(100%) brightness(0.7)",
              opacity: char.animation === 'disappear' && isHovered ? 0.05 : 1
            }}
            transition={{ duration: 0.8, ease: "circOut" }}
            src={char.image}
            alt={char.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          {/* Cinematic Power Overlays */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none"
              >
                {/* Homelander Lasers */}
                {char.animation === "lasers" && (
                  <>
                    <motion.div 
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 0.1, repeat: Infinity }}
                      className="absolute top-[28%] left-[42%] w-4 h-4 bg-red-500 rounded-full blur-md shadow-[0_0_40px_red]"
                    />
                    <motion.div 
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
                      className="absolute top-[28%] left-[54%] w-4 h-4 bg-red-500 rounded-full blur-md shadow-[0_0_40px_red]"
                    />
                    <motion.div 
                      animate={{ height: ["0%", "200%"], opacity: [0, 1, 0] }}
                      transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                      className="absolute top-[28%] left-[48%] w-1 bg-red-600 shadow-[0_0_50px_red] rotate-[15deg] origin-top"
                    />
                  </>
                )}

                {/* Starlight Spark */}
                {char.animation === "spark" && (
                  <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, x: "50%", y: "50%" }}
                        animate={{ 
                          scale: [0, 1.5, 0],
                          opacity: [0, 1, 0],
                          x: [`${50}%`, `${50 + (Math.random() - 0.5) * 100}%`],
                          y: [`${50}%`, `${50 + (Math.random() - 0.5) * 100}%`]
                        }}
                        transition={{ 
                          duration: 0.5 + Math.random(), 
                          repeat: Infinity,
                          delay: Math.random()
                        }}
                        className="absolute w-2 h-2 bg-white rounded-full blur-[2px] shadow-[0_0_15px_white]"
                      />
                    ))}
                    <motion.div 
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 0.1, repeat: Infinity }}
                      className="absolute inset-0 bg-white/20 mix-blend-overlay"
                    />
                  </div>
                )}

                {/* Translucent Refraction */}
                {char.animation === "disappear" && !isMobile && (
                  <motion.div 
                    animate={{ 
                      backdropFilter: ["blur(0px) saturate(100%)", "blur(10px) saturate(200%)", "blur(0px) saturate(100%)"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white/5 backdrop-blur-sm"
                  />
                )}

                {/* A-Train Speed Streaks */}
                {char.animation === "speed" && (
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{ 
                          duration: 0.2 + Math.random() * 0.2, 
                          repeat: Infinity,
                          delay: Math.random() * 0.5,
                          ease: "linear"
                        }}
                        className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                        style={{ top: `${20 + i * 15}%` }}
                      />
                    ))}
                  </div>
                )}

                {/* The Deep Caustics */}
                {char.animation === "waves" && (
                  <motion.div 
                    animate={isMobile ? { opacity: [0.1, 0.2, 0.1] } : { 
                      background: [
                        "radial-gradient(circle at 20% 30%, rgba(0,255,200,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 70%, rgba(0,255,200,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 30%, rgba(0,255,200,0.1) 0%, transparent 50%)"
                      ]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className={`absolute inset-0 mix-blend-screen ${isMobile ? 'bg-cyan-500/10' : ''}`}
                  />
                )}

                {/* Black Noir Smoke */}
                {char.animation === "stealth" && (
                  <motion.div 
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent">
            <motion.div
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <h3 className="text-4xl md:text-5xl font-black text-vought-gold mb-1 drop-shadow-2xl">{char.name}</h3>
              <p className="text-vought-gold/80 font-bold tracking-[0.3em] text-xs mb-4 uppercase">{char.power}</p>
              
              <motion.div
                initial={false}
                animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm mb-6">
                  {char.description}
                </p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 text-vought-gold font-black uppercase tracking-widest text-[10px] group/btn"
              >
                Book Tickets 
                <span className="w-8 h-px bg-vought-gold group-hover/btn:w-12 transition-all duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

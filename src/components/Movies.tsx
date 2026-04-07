import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "motion/react";
import { Play, Star } from "lucide-react";

const movies = [
  {
    title: "DAWN OF THE SEVEN",
    year: "2024",
    description: "The cinematic event of the decade. Witness the origin of Earth's mightiest team as they unite against the ultimate threat.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/a/ab/Dawn-of-the-seven.jpg/revision/latest?cb=20220520190954",
    rating: "9.8/10",
    genre: "Action / Drama",
    color: "#d4af37"
  },
  {
    title: "HOMELANDER: THE BEGINNING",
    year: "2023",
    description: "Discover the man behind the cape. A deeply personal look at the childhood and rise of the world's greatest hero.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/5/5b/Homelander-S4.png/revision/latest?cb=20240614091600",
    rating: "9.9/10",
    genre: "Biographical / Epic",
    color: "#8b0000"
  },
  {
    title: "STARLIGHT: RISING",
    year: "2024",
    description: "A beacon of hope in a dark world. Follow Annie January as she finds her place among the stars of The Seven.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/3/39/Starlight_s3.jpg/revision/latest/scale-to-width-down/1000?cb=20221115060118",
    rating: "9.5/10",
    genre: "Inspirational",
    color: "#ffffff"
  },
  {
    title: "A-TRAIN: INTO THE SPEED",
    year: "2022",
    description: "Life at 1,000 miles per hour. An adrenaline-fueled journey through the life of the fastest man alive.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/e/eb/A_Train_Noir_Deep_S4_Logoless.jpg/revision/latest/scale-to-width-down/1000?cb=20240624113531",
    rating: "9.2/10",
    genre: "Action / Thriller",
    color: "#0064ff"
  },
  {
    title: "THE DEEP: OCEAN'S GUARDIAN",
    year: "2023",
    description: "The mysteries of the deep revealed. A breathtaking underwater odyssey with the king of the seven seas.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/6/67/Deep_Durability.png/revision/latest/scale-to-width-down/1000?cb=20240903200552",
    rating: "8.9/10",
    genre: "Adventure / Nature",
    color: "#00ffc8"
  },
  {
    title: "BLACK NOIR: SILENT NIGHT",
    year: "2024",
    description: "The shadow strikes. A gritty, noir-inspired masterpiece following the team's most mysterious member.",
    image: "https://static.wikia.nocookie.net/amazons-the-boys/images/8/8c/S2e5.png/revision/latest/scale-to-width-down/1000?cb=20200916205843",
    rating: "9.7/10",
    genre: "Noir / Action",
    color: "#323232"
  }
];

export default function Movies() {
  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-vought-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-vought-gold" />
              <span className="text-vought-gold font-bold tracking-[0.4em] text-sm uppercase">Vought Studios Presents</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-black text-white leading-tight"
            >
              CINEMATIC <br />
              <span className="text-vought-gold">LEGACIES</span>
            </motion.h2>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 border border-vought-gold/30 text-vought-gold font-bold uppercase tracking-widest text-sm hover:bg-vought-gold/10 transition-colors"
          >
            Explore Full Library
          </motion.button>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {movies.map((movie, index) => (
            <MovieCard key={movie.title} movie={movie} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MovieCard({ movie, index }: any) {
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        rotateX: isMobile ? 0 : springRotateX,
        rotateY: isMobile ? 0 : springRotateY,
        perspective: 1000
      }}
      className="relative group cursor-none"
    >
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{
          opacity: isHovered ? 0.3 : 0.05,
          scale: isHovered ? 1.2 : 1,
        }}
        className="absolute inset-0 blur-[100px] rounded-full pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: movie.color }}
      />

      <div className="relative aspect-[2/3] glass-panel rounded-2xl overflow-hidden border-white/10 shadow-2xl">
        {/* Poster Container */}
        <div className="relative h-full w-full overflow-hidden">
          <motion.img
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? "brightness(0.4)" : "brightness(0.8)"
            }}
            transition={{ duration: 0.8, ease: "circOut" }}
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <motion.div
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-vought-gold font-bold text-[10px] tracking-[0.3em] uppercase">{movie.genre}</span>
                <div className="flex items-center gap-1 text-vought-gold">
                  <Star className="w-3 h-3 fill-vought-gold" />
                  <span className="text-[10px] font-black">{movie.rating}</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight drop-shadow-2xl">{movie.title}</h3>
              
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6">
                      {movie.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full py-3 bg-vought-gold text-vought-blue font-black text-[10px] uppercase tracking-widest rounded-lg flex items-center justify-center gap-2"
                    >
                      <Play className="w-3 h-3 fill-vought-blue" />
                      Watch Now
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isHovered && (
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{movie.year}</span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                    <Play className="w-3 h-3 text-white/40" />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

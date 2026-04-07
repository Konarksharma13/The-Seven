import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { Shield, Menu, Search, User, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      unsubscribe();
    };
  }, [scrollY]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: "The Seven", href: "#the-seven" },
    { name: "Vought Land", href: "#vought-land" },
    { name: "Movies", href: "#movies" },
    { name: "News", href: "#news" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[100] px-4 py-3 md:px-8 md:py-4 lg:px-12 lg:py-6"
    >
      <motion.div 
        animate={{
          backgroundColor: isScrolled ? "rgba(10, 25, 47, 0.95)" : "rgba(255, 255, 255, 0.05)",
          borderColor: isScrolled ? "rgba(212, 175, 55, 0.3)" : "rgba(255, 255, 255, 0.1)",
          backdropFilter: isScrolled 
            ? (isMobile ? "blur(12px)" : "blur(16px)") 
            : (isMobile ? "blur(8px)" : "blur(12px)"),
        }}
        className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4 rounded-full border shadow-2xl transition-all duration-300"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
          <Shield className="text-vought-gold w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
          <span className="text-lg md:text-2xl font-black text-white tracking-tighter uppercase">Vought</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/80 hover:text-vought-gold font-bold uppercase tracking-widest text-[10px] xl:text-xs transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          <Search className="text-white/60 hover:text-vought-gold w-4 h-4 md:w-5 md:h-5 cursor-pointer transition-colors hidden sm:block" />
          <User className="text-white/60 hover:text-vought-gold w-4 h-4 md:w-5 md:h-5 cursor-pointer transition-colors hidden sm:block" />
          <div className="h-6 w-px bg-white/10 hidden lg:block" />
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-4 md:px-6 py-1.5 md:py-2 bg-vought-gold text-vought-blue font-black text-[10px] md:text-xs rounded-full uppercase tracking-widest"
          >
            Join Vought+
          </motion.button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white/60 hover:text-vought-gold w-6 h-6 cursor-pointer lg:hidden flex items-center justify-center transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 overflow-hidden"
          >
            <div className="bg-vought-blue/95 backdrop-blur-xl border border-vought-gold/20 rounded-3xl p-6 flex flex-col gap-6 shadow-2xl">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/80 hover:text-vought-gold font-bold uppercase tracking-[0.2em] text-sm transition-colors py-2 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-6">
                  <Search className="text-white/60 hover:text-vought-gold w-5 h-5 cursor-pointer" />
                  <User className="text-white/60 hover:text-vought-gold w-5 h-5 cursor-pointer" />
                </div>
                <button className="px-6 py-3 bg-vought-gold text-vought-blue font-black text-xs rounded-full uppercase tracking-widest">
                  Join Vought+
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div 
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-vought-gold origin-left"
      />
    </motion.nav>
  );
}

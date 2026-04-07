import { motion } from "motion/react";
import { Ticket, Star, MapPin } from "lucide-react";

export default function ThemeParks() {
  return (
    <section className="relative py-32 px-4 bg-[#f0f0f0] text-vought-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0 bg-repeat opacity-20" 
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/batthern.png')" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left: Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-[-2deg]">
              <img 
                src="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/786/443/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/entertainment/meet-greet/disney/FY26_DLRHisp_Disneylandia_Web-Integration_Digital-Banners-5424750-2A-16x9.jpg?2025-12-02T18:23:22+00:00" 
                alt="Vought Land" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vought-blue/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-4xl font-black mb-2">VOUGHT LAND</h3>
                <p className="text-vought-gold font-bold tracking-widest uppercase text-sm">Orlando, Florida</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-48 h-48 bg-vought-gold rounded-full flex flex-col items-center justify-center text-vought-blue p-4 shadow-xl border-4 border-white"
            >
              <Star className="w-10 h-10 mb-2 fill-vought-blue" />
              <span className="text-xl font-black text-center leading-tight">VOTED #1 HERO PARK</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl font-black text-vought-blue mb-6 leading-tight">
                EXPERIENCE THE SEVEN <br />
                <span className="text-vought-gold">IN REAL LIFE</span>
              </h2>
              <p className="text-xl text-vought-blue/70 mb-8 leading-relaxed">
                Step into the world of your favorite heroes. From the Homelander Flight Simulator to the A-Train Velocity Coaster, Vought Land offers an immersive experience that brings the power of The Seven to your fingertips.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-vought-gold/10 rounded-full flex items-center justify-center">
                    <Ticket className="text-vought-gold w-6 h-6" />
                  </div>
                  <span className="font-bold text-vought-blue/80">VIP FastPass</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-vought-gold/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-vought-gold w-6 h-6" />
                  </div>
                  <span className="font-bold text-vought-blue/80">Global Locations</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#0a192f", color: "#d4af37" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-vought-gold text-vought-blue font-black text-xl rounded-full shadow-xl transition-colors flex items-center gap-4"
              >
                GET TICKETS NOW <span className="text-2xl">→</span>
              </motion.button>
              
              <p className="mt-6 text-xs text-vought-blue/40 italic">
                *Vought International is not responsible for any injuries, collateral damage, or psychological trauma sustained during park visits.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

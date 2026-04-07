import { motion } from "motion/react";
import { Facebook, Twitter, Instagram, Youtube, Shield, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-vought-blue py-20 px-4 border-t border-vought-gold/20 relative overflow-hidden">
      {/* Background Logo (Faded) */}
      <div className="absolute bottom-[-10%] right-[-5%] opacity-5 pointer-events-none">
        <Shield className="w-[600px] h-[600px] text-vought-gold" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Shield className="text-vought-gold w-10 h-10" />
              <h2 className="text-3xl font-black text-white tracking-tighter">VOUGHT</h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Vought International is a global leader in superhero management, pharmaceutical research, and mass media. We are committed to a safer, stronger future for all Americans.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, color: "#d4af37" }}
                  href="#"
                  className="text-white/60 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-vought-gold font-black text-sm tracking-[0.3em] uppercase">Corporate</h3>
            <ul className="flex flex-col gap-4 text-white/60 text-sm font-bold">
              {["About Vought", "Investor Relations", "Careers", "Newsroom", "Sustainability"].map((link) => (
                <li key={link}>
                  <motion.a 
                    whileHover={{ x: 5, color: "#ffffff" }}
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    {link}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-vought-gold font-black text-sm tracking-[0.3em] uppercase">Entertainment</h3>
            <ul className="flex flex-col gap-4 text-white/60 text-sm font-bold">
              {["Vought Studios", "Vought Land", "The Seven Network", "Vought+ Streaming", "Merchandise"].map((link) => (
                <li key={link}>
                  <motion.a 
                    whileHover={{ x: 5, color: "#ffffff" }}
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    {link}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-vought-gold font-black text-sm tracking-[0.3em] uppercase">Stay Vigilant</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Subscribe to the Vought Insider for exclusive updates on The Seven and upcoming releases.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-vought-gold transition-colors"
              />
              <motion.button
                whileHover={{ backgroundColor: "#d4af37", color: "#0a192f" }}
                className="bg-white/10 text-white font-bold uppercase tracking-widest text-xs py-3 transition-colors"
              >
                Join the Network
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-bold tracking-widest uppercase">
            © 2026 Vought International. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-white/20 text-xs font-bold tracking-widest uppercase">
            <a href="#" className="hover:text-vought-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-vought-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-vought-gold transition-colors">Legal Notices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

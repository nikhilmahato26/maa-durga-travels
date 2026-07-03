import { motion } from 'framer-motion';
import { MessageSquare, Car, ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero_background.png';
import { getWhatsAppLink, buildGeneralBookingMsg } from '../data/site';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const msg = buildGeneralBookingMsg("Any", "", "", "", "");
    window.open(getWhatsAppLink(msg), '_blank');
  };

  const scrollToVehicles = () => {
    const element = document.querySelector('#car-rental');
    if (element) {
      const navHeight = 80;
      const position = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Deep, Premium Gradients & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/80 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 mb-6 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-100">
            #1 Car Rental & Taxi Service in Bihar & Jharkhand.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] font-heading"
        >
          Your Trusted <span className="text-accent">Travel Partner</span> <br className="hidden sm:inline" />
          in Bhagalpur, Patna & Deoghar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-3xl mx-auto mb-10 leading-relaxed font-body"
        >
          Affordable Car Rentals, Comfortable Outstation Trips (Starting at ₹12/km), Reliable One-Way Taxi Services,
          and Memorable Tour Packages — All Just One WhatsApp Away.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-primary-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-103 transition-all duration-300 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-current text-primary" />
            <span>Book on WhatsApp</span>
          </button>

          <button
            onClick={scrollToVehicles}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 shadow-lg backdrop-blur-md transform hover:scale-103 transition-all duration-300 cursor-pointer"
          >
            <Car className="w-5 h-5" />
            <span>Explore Vehicles</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8, y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={scrollToVehicles}
        >
          <span className="text-[11px] uppercase tracking-widest font-bold text-slate-300 mb-1">
            Scroll to Explore
          </span>
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink, buildGeneralBookingMsg } from '../data/site';

export default function FloatingButtons() {
  const handleWhatsAppClick = () => {
    const msg = buildGeneralBookingMsg("Any", "", "", "", "");
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <motion.button
          onClick={handleWhatsAppClick}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4.5 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-colors duration-300 relative group animate-bounce-slow"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing glow background */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:bg-[#128C7E]" />
          <MessageSquare className="w-6.5 h-6.5 fill-current text-white" />
        </motion.button>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden glass-panel border-t border-slate-200/80 shadow-premium p-3 bg-white/95 flex gap-3">
        {/* Call CTA */}
        <a
          href={`tel:${BUSINESS_INFO.phoneNumber}`}
          className="flex-1 flex items-center justify-center space-x-2 bg-slate-100 active:bg-slate-200 text-primary py-3 px-4 rounded-xl font-extrabold text-sm transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp CTA */}
        <button
          onClick={handleWhatsAppClick}
          className="flex-2 flex items-center justify-center space-x-2 bg-[#25D366] active:bg-[#128C7E] text-white py-3 px-4 rounded-xl font-extrabold text-sm transition-all shadow-md cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 fill-current text-white" />
          <span>Book on WhatsApp</span>
        </button>
      </div>
    </>
  );
}

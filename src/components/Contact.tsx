import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, Navigation, Clock } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink, buildGeneralBookingMsg } from '../data/site';

export default function Contact() {
  const handleWhatsAppClick = () => {
    const msg = buildGeneralBookingMsg("Any", "", "", "", "");
    window.open(getWhatsAppLink(msg), '_blank');
  };

  const handleDirectionsClick = () => {
    window.open(BUSINESS_INFO.googleMapsShareUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/5 text-primary text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/10">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 tracking-tight">
            Contact Us & Start Traveling
          </h2>
          <p className="text-brand-text-muted mt-3 text-sm md:text-base leading-relaxed">
            Have custom travel requirements or want to confirm vehicle availability? Reach out to us directly via call or WhatsApp.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white border border-slate-100/80 rounded-3xl p-6 md:p-8 shadow-premium flex flex-col justify-between"
          >
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase font-extrabold tracking-wider text-accent">Office Location</span>
                <h3 className="text-xl md:text-2xl font-bold text-primary mt-1">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              {/* Info Rows */}
              <div className="space-y-6 mb-10">
                {/* Address */}
                <div className="flex items-start">
                  <span className="p-2.5 bg-slate-100 rounded-xl text-primary mr-4">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Office Address</h4>
                    <p className="text-sm font-semibold text-slate-700 mt-1">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Call & WhatsApp */}
                <div className="flex items-start">
                  <span className="p-2.5 bg-slate-100 rounded-xl text-primary mr-4">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Phone & WhatsApp</h4>
                    <p className="text-sm font-bold text-slate-700 mt-1">
                      {BUSINESS_INFO.displayPhone}
                    </p>
                  </div>
                </div>

                {/* Support Hours */}
                <div className="flex items-start">
                  <span className="p-2.5 bg-slate-100 rounded-xl text-primary mr-4">
                    <Clock className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Working Hours</h4>
                    <p className="text-sm font-semibold text-slate-700 mt-1">
                      24×7 WhatsApp Booking Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-primary-dark font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-sm"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-current" />
                <span>WhatsApp Booking</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneNumber}`}
                  className="w-full flex items-center justify-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-primary font-bold py-3.5 px-4 rounded-xl transition-all duration-300 text-center text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={handleDirectionsClick}
                  className="w-full flex items-center justify-center space-x-1.5 bg-primary hover:bg-secondary text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 cursor-pointer text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Directions</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Google Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-slate-100/80 rounded-3xl overflow-hidden shadow-premium h-[450px] lg:h-auto min-h-[400px] flex"
          >
            <iframe
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              className="w-full h-full border-none"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maa Durga Travels Office Location"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

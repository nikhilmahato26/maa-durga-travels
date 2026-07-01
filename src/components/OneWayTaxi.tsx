import { motion } from 'framer-motion';
import { ArrowRight, Car, CheckCircle2, MessageSquare } from 'lucide-react';
import { TAXI_ROUTES, getWhatsAppLink, buildRouteBookingMsg } from '../data/site';

export default function OneWayTaxi() {
  const handleBookRoute = (from: string, to: string, type: string, price: number) => {
    const msg = buildRouteBookingMsg(from, to, type, price);
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section id="one-way-taxi" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-secondary/10 text-secondary text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-secondary/15">
            One-Way Drops
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 tracking-tight">
            Popular One-Way Taxi Routes
          </h2>
          <p className="text-brand-text-muted mt-3 text-sm md:text-base leading-relaxed">
            Travel without paying double! Pay only for your one-way journey to Patna, Deoghar, Purnia, and Gaya from Bhagalpur.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {TAXI_ROUTES.map((route, idx) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between hover:shadow-premium hover:bg-white transform hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Route Indicator */}
              <div>
                <div className="flex items-center space-x-2 text-primary font-bold mb-4">
                  <span className="text-sm bg-primary/10 text-primary px-2.5 py-1 rounded-md">{route.from}</span>
                  <ArrowRight className="w-4 h-4 text-accent animate-pulse-slow" />
                  <span className="text-sm bg-secondary/10 text-secondary px-2.5 py-1 rounded-md">{route.to}</span>
                </div>
                <p className="text-xs text-brand-text-muted mb-4 font-medium">
                  Direct highways, comfortable vehicles, professional highway drivers.
                </p>
              </div>

              {/* Pricing breakdown */}
              <div className="space-y-3 mb-6">
                {/* Sedan */}
                <div className="bg-white border border-slate-100 p-3 rounded-xl flex items-center justify-between shadow-xs">
                  <div className="flex items-center space-x-2">
                    <Car className="w-4.5 h-4.5 text-accent" />
                    <span className="text-xs font-semibold text-slate-700">Sedan Class</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-primary">₹{route.sedanPrice}</span>
                  </div>
                </div>

                {/* SUV */}
                <div className="bg-white border border-slate-100 p-3 rounded-xl flex items-center justify-between shadow-xs">
                  <div className="flex items-center space-x-2">
                    <Car className="w-4.5 h-4.5 text-secondary" />
                    <span className="text-xs font-semibold text-slate-700">SUV Class</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-primary">₹{route.suvPrice}</span>
                  </div>
                </div>

                {/* Innova Crysta */}
                <div className="bg-white border border-slate-100 p-3 rounded-xl flex items-center justify-between shadow-xs">
                  <div className="flex items-center space-x-2">
                    <Car className="w-4.5 h-4.5 text-primary" />
                    <span className="text-xs font-semibold text-slate-700">Innova Crysta</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-primary">₹{route.innovaPrice}</span>
                  </div>
                </div>
              </div>

              {/* Booking CTAs */}
              <div className="grid grid-cols-3 gap-1.5 mt-auto">
                <button
                  onClick={() => handleBookRoute(route.from, route.to, 'Sedan', route.sedanPrice)}
                  className="bg-slate-100 hover:bg-primary hover:text-white text-primary text-[10px] font-bold py-2.5 rounded-lg transition-all text-center cursor-pointer"
                >
                  Sedan
                </button>
                <button
                  onClick={() => handleBookRoute(route.from, route.to, 'SUV', route.suvPrice)}
                  className="bg-slate-100 hover:bg-secondary hover:text-white text-secondary text-[10px] font-bold py-2.5 rounded-lg transition-all text-center cursor-pointer"
                >
                  SUV
                </button>
                <button
                  onClick={() => handleBookRoute(route.from, route.to, 'Innova Crysta', route.innovaPrice)}
                  className="bg-accent hover:bg-accent-dark text-primary-dark text-[10px] font-bold py-2.5 rounded-lg transition-all text-center cursor-pointer"
                >
                  Innova
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Policy Bar */}
        <div className="mt-12 max-w-3xl mx-auto bg-slate-50 border border-slate-150 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <div className="flex items-center space-x-3 text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
            <span className="text-xs md:text-sm font-semibold">
              All prices include toll charges, state tax, and parking fees. No hidden fees.
            </span>
          </div>
          <button
            onClick={() => window.open(getWhatsAppLink("Hello Maa Durga Travels, I need custom route pricing."), '_blank')}
            className="flex items-center space-x-1.5 text-xs text-secondary hover:text-primary font-bold transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Request Other Route</span>
          </button>
        </div>

      </div>
    </section>
  );
}

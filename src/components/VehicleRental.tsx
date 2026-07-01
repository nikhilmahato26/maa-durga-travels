import { motion } from 'framer-motion';
import { Check, MessageSquare } from 'lucide-react';
import { VEHICLES, getWhatsAppLink, buildVehicleBookingMsg } from '../data/site';
import sedanImg from '../assets/sedan_car.png';
import suvImg from '../assets/suv_car.png';

export default function VehicleRental() {
  const getVehicleImage = (imgName: string) => {
    switch (imgName) {
      case 'sedan':
        return sedanImg;
      case 'suv':
        return suvImg;
      default:
        return sedanImg;
    }
  };

  const handleBookVehicle = (name: string) => {
    const msg = buildVehicleBookingMsg(name);
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section id="car-rental" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="bg-primary/5 text-primary text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/10">
            Our Premium Fleet
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 tracking-tight">
            Choose Your Travel Comfort
          </h2>
          <p className="text-brand-text-muted mt-3 text-sm md:text-base leading-relaxed">
            From fuel-efficient family sedans to spacious adventure-ready SUVs, find the perfect car suited to your journey.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {VEHICLES.map((vehicle, idx) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover border border-slate-100/50 flex flex-col group transform transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="relative h-60 md:h-64 bg-slate-100 overflow-hidden">
                <img
                  src={getVehicleImage(vehicle.image)}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-primary text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {vehicle.type}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-brand-text-muted font-medium mt-1">
                      Includes: {vehicle.examples.join(', ')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-accent">Starting At</p>
                    <p className="text-2xl font-extrabold text-primary">
                      ₹{vehicle.pricePerDay}
                      <span className="text-xs font-semibold text-brand-text-muted"> / Day</span>
                    </p>
                  </div>
                </div>

                <hr className="border-slate-100 my-4" />

                {/* Features List */}
                <div className="space-y-2.5 mb-8 flex-grow">
                  {vehicle.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start text-brand-text text-sm">
                      <span className="bg-success/10 text-success rounded-full p-0.5 mr-2.5 mt-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Booking CTA */}
                <button
                  onClick={() => handleBookVehicle(vehicle.name)}
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer transform hover:scale-102"
                >
                  <MessageSquare className="w-4.5 h-4.5 fill-current text-accent" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

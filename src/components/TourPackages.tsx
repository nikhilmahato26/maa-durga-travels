import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, MessageSquare, PhoneCall } from 'lucide-react';
import { TOUR_PACKAGES, getWhatsAppLink, buildPackageBookingMsg } from '../data/site';
import deogharImg from '../assets/deoghar_package.png';
import tarapithImg from '../assets/tarapith_package.png';
import bodhgayaImg from '../assets/bodhgaya_package.png';

// Destination images (using Unsplash for the new tours)
const DEST_IMAGES: Record<string, string> = {
  deoghar: 'https://ryasktourism.com/wp-content/uploads/2025/05/main-temple-of-baba-baijnath.jpg.webp',
  tarapith: 'https://5.imimg.com/data5/SELLER/Default/2025/10/554998734/KZ/EL/HN/121186906/tara-peeth-pilgrim-tour-packages-500x500.png',
  bodhgaya: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqJlTMQgmu6fet4F9ZF8IdX2k6xVyRFo0Awqdah7MqA&s=10',
  nepal: 'https://static.toiimg.com/thumb/msid-91006932,width-748,height-499,resizemode=4,imgsize-165776/.jpg',
  gangtok: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1YmU629lMyMyhYiwNsTGHbBqNMdFfEBQnzA9gWHNXFV_DaRJ1Y4Wghr-&s=10',
  darjeeling: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6lUplkHDkyjSdr89IO2pCDRED-8wfnk02t_16u4K6ImGJxx0KAcFS8AA&s=10',
  varanasi: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrfOSAc2vuuToxYwRUdkn8dlJUIG5hoT5WMxaj1g-ZgbQZK23GPvXPHo&s=10',
  uttarakhand: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrRiDLTgYbHOJF0-svC8AJ0w4j38OfRHc7IKLZShIHUkyGFcGnjNL1iQ&s=10',
};

export default function TourPackages() {
  const handleBookPackage = (name: string, price: number) => {
    const msg = price > 0
      ? buildPackageBookingMsg(name, price)
      : `Hello Maa Durga Travels & Car Rental,\n\nI am interested in the *${name}* package.\n\nCould you please share the pricing and itinerary details?\n\nThank you!`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section id="tour-packages" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="bg-primary/5 text-primary text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/10">
            Pilgrimage & Heritage Tours
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 tracking-tight">
            Popular Tour Packages
          </h2>
          <p className="text-brand-text-muted mt-3 text-sm md:text-base leading-relaxed">
            Embark on hassle-free, comfortable journeys with family. Handcrafted itineraries for pilgrimages, hills, and heritage destinations.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TOUR_PACKAGES.map((pkg, idx) => {
            const isPriceOnRequest = pkg.pricePerPerson === 0;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover border border-slate-100/50 flex flex-col group transform transition-all duration-300"
              >
                {/* Image banner with duration badge */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={DEST_IMAGES[pkg.image] || deogharImg}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Duration badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary text-[10px] font-extrabold px-3 py-1.5 rounded-full flex items-center shadow-md">
                    <Calendar className="w-3.5 h-3.5 text-accent mr-1" />
                    <span>{pkg.duration}</span>
                  </div>
                  {/* Price On Request badge */}
                  {isPriceOnRequest && (
                    <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-md">
                      Price On Request
                    </div>
                  )}
                </div>

                {/* Package Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {pkg.name}
                      </h3>
                      <div className="text-right flex-shrink-0 ml-2">
                        {isPriceOnRequest ? (
                          <div className="flex flex-col items-end">
                            <span className="text-[10px] uppercase tracking-wider font-bold text-secondary block">Pricing</span>
                            <span className="text-sm font-extrabold text-secondary">On Request</span>
                          </div>
                        ) : (
                          <>
                            <span className="text-[10px] uppercase tracking-wider font-bold text-accent block">Starting From</span>
                            <span className="text-xl font-extrabold text-primary">₹{pkg.pricePerPerson}</span>
                            <span className="text-[10px] font-semibold text-brand-text-muted block">/ Person</span>
                          </>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-brand-text-muted font-medium mb-5 flex items-center">
                      <MapPin className="w-3 h-3 text-secondary mr-1" /> Departures from Bhagalpur, Patna & Deoghar
                    </p>

                    <hr className="border-slate-100 my-4" />

                    {/* Highlights */}
                    <div className="space-y-2.5 mb-8">
                      {pkg.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mr-2.5 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  {isPriceOnRequest ? (
                    <button
                      onClick={() => handleBookPackage(pkg.name, 0)}
                      className="w-full bg-secondary hover:bg-primary text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer transform hover:scale-102 mt-auto"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Get Price on WhatsApp</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBookPackage(pkg.name, pkg.pricePerPerson)}
                      className="w-full bg-primary hover:bg-secondary text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer transform hover:scale-102 mt-auto"
                    >
                      <MessageSquare className="w-4.5 h-4.5 fill-current text-accent" />
                      <span>Book on WhatsApp</span>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

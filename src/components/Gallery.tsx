import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '../assets/hero_background.png';
import sedanImg from '../assets/sedan_car.png';
import suvImg from '../assets/suv_car.png';
import deogharImg from '../assets/deoghar_package.png';
import tarapithImg from '../assets/tarapith_package.png';
import bodhgayaImg from '../assets/bodhgaya_package.png';
import weddingCar1 from '../assets/wedding_car_1.jpg';
import weddingCar2 from '../assets/wedding_car_2.jpg';
import fleetSuvRed from '../assets/fleet_suv_red.jpg';
import weddingCar3 from '../assets/wedding_car_3.jpg';
import weddingBanner from '../assets/wedding_banner.jpg';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'wedding', name: 'Wedding Cars' },
    { id: 'fleet', name: 'Our Fleet' },
    { id: 'tours', name: 'Tours' },
    { id: 'travel', name: 'Road Trips' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Decorated Wedding Honda City',
      category: 'wedding',
      img: weddingCar1,
      desc: 'Beautifully flower-decorated sedan for the groom\'s grand arrival.'
    },
    {
      id: 2,
      title: 'Wedding Car with Pink Flowers',
      category: 'wedding',
      img: weddingCar2,
      desc: 'Elegantly adorned Honda City with pink and white floral decorations.'
    },
    {
      id: 3,
      title: 'Maa Durga Wedding Service',
      category: 'wedding',
      img: weddingBanner,
      desc: 'Add a touch of luxury and comfort to your special days with our wedding fleet.'
    },
    {
      id: 4,
      title: 'Luxury Groom Car (Mercedes GLC)',
      category: 'wedding',
      img: weddingCar3,
      desc: 'Premium Mercedes GLC decorated with pink flowers for a royal wedding experience.'
    },
    {
      id: 5,
      title: 'Maruti Grand Vitara SUV',
      category: 'fleet',
      img: fleetSuvRed,
      desc: 'Red Maruti Grand Vitara — stylish & spacious for all road conditions.'
    },
    {
      id: 6,
      title: 'Premium Sedans',
      category: 'fleet',
      img: sedanImg,
      desc: 'Comfortable & clean sedan outstation rides.'
    },
    {
      id: 7,
      title: 'Baba Baidyanath Darshan',
      category: 'tours',
      img: deogharImg,
      desc: 'Family tour package to Deoghar temple.'
    },
    {
      id: 8,
      title: 'Premium SUVs',
      category: 'fleet',
      img: suvImg,
      desc: 'Spacious, reliable SUVs for group travel.'
    },
    {
      id: 9,
      title: 'Tarapith Temple Drive',
      category: 'tours',
      img: tarapithImg,
      desc: 'Spiritual outstation trip to Tarapith.'
    },
    {
      id: 10,
      title: 'Bodh Gaya Buddhist Sites',
      category: 'tours',
      img: bodhgayaImg,
      desc: 'Peaceful tour packages to Mahabodhi temple.'
    },
    {
      id: 11,
      title: 'Scenic Outstation Routes',
      category: 'travel',
      img: heroBg,
      desc: 'Explore highways across Bhagalpur, Patna & Deoghar.'
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'wedding': return 'Wedding Cars';
      case 'fleet': return 'Our Fleet';
      case 'tours': return 'Tour Package';
      case 'travel': return 'Travel Route';
      default: return cat;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-primary/5 text-primary text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/10">
            Fleet & Travel Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 tracking-tight">
            Our Gallery
          </h2>
          <p className="text-brand-text-muted mt-3 text-sm md:text-base leading-relaxed">
            Take a visual tour of our beautifully decorated wedding cars, well-maintained fleet, and the amazing destinations we cover.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxImg({ src: item.img as string, title: item.title })}
                className="group relative rounded-2xl overflow-hidden shadow-premium bg-slate-50 border border-slate-100 h-80 cursor-pointer"
              >
                {/* Photo frame */}
                <img
                  src={item.img as string}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Glassmorphic Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] text-accent uppercase font-bold tracking-widest mb-1">
                    {getCategoryLabel(item.category)}
                  </span>
                  <h3 className="text-white text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs mt-1.5 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-white text-center mt-4 font-bold text-lg">{lightboxImg.title}</p>
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full text-primary font-bold text-lg flex items-center justify-center shadow-lg hover:bg-slate-100 cursor-pointer"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

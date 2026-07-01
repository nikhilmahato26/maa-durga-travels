import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { TESTIMONIALS } from '../data/site';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-10 left-10 text-slate-200/50 pointer-events-none select-none">
        <Quote className="w-48 h-48 rotate-180" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/5 text-primary text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/10">
            Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-brand-text-muted mt-3 text-sm md:text-base leading-relaxed">
            Read real feedback from families and business travelers who have rented our vehicles or booked tours.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="max-w-4xl mx-auto px-2">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              }
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="pb-12"
          >
            {TESTIMONIALS.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-slate-100/80 rounded-2xl p-6 md:p-8 shadow-premium h-full flex flex-col justify-between hover:shadow-premium-hover transition-shadow duration-300"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 text-accent fill-current" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-slate-600 text-sm italic leading-relaxed mb-6 font-medium">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                    <div>
                      <h4 className="text-sm font-bold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-[10px] text-brand-text-muted uppercase font-bold mt-0.5">
                        {testimonial.location}
                      </p>
                    </div>
                    <Quote className="w-8 h-8 text-primary/10 flex-shrink-0" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

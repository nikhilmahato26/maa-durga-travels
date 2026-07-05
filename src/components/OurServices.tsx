import { motion } from 'framer-motion';
import { MapPin, Plane, Heart, Car, Briefcase, Navigation, Route, Sparkles, MessageSquare } from 'lucide-react';
import { SERVICES, getWhatsAppLink } from '../data/site';

const iconMap: Record<string, React.ElementType> = {
  'map-pin': MapPin,
  'plane': Plane,
  'heart': Heart,
  'car': Car,
  'briefcase': Briefcase,
  'navigation': Navigation,
  'route': Route,
  'sparkles': Sparkles,
};

const gradients = [
  'from-primary/10 to-primary/5',
  'from-secondary/10 to-secondary/5',
  'from-accent/20 to-accent/10',
  'from-primary/10 to-secondary/5',
  'from-rose-100 to-rose-50',
  'from-blue-100 to-blue-50',
  'from-amber-100 to-amber-50',
  'from-emerald-100 to-emerald-50',
  'from-purple-100 to-purple-50',
  'from-orange-100 to-orange-50',
];

const iconColors = [
  'text-primary',
  'text-secondary',
  'text-amber-600',
  'text-primary',
  'text-rose-500',
  'text-blue-500',
  'text-amber-500',
  'text-emerald-500',
  'text-purple-500',
  'text-orange-500',
];

export default function OurServices() {
  const handleInquire = (title: string) => {
    const msg = `Hello Maa Durga Travels & Car Rental,\n\nI am interested in your *${title}* service.\n\nCould you please share more details and pricing?\n\nThank you!`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section id="our-services" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="bg-secondary/10 text-secondary text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-secondary/15">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-brand-text-muted mt-3 text-sm md:text-base leading-relaxed">
            From local cab rides to destination tours — we've got every journey covered with comfort, safety, and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || Car;
            const gradient = gradients[idx % gradients.length];
            const iconColor = iconColors[idx % iconColors.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 5) * 0.08 }}
                onClick={() => handleInquire(service.title)}
                className="group cursor-pointer bg-white border border-slate-100 rounded-2xl p-5 flex flex-col items-start hover:shadow-premium hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Icon bubble */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>

                <h3 className="text-sm font-bold text-primary mb-2 leading-tight group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-brand-text-muted leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* WhatsApp CTA on hover */}
                <div className="mt-4 flex items-center space-x-1.5 text-[11px] text-secondary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MessageSquare className="w-3 h-3 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </div>

                {/* Subtle shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 max-w-2xl mx-auto text-center"
        >
          <p className="text-brand-text-muted text-sm mb-5">
            Don't see what you need? We offer custom packages and services tailored to your requirements.
          </p>
          <button
            onClick={() => window.open(getWhatsAppLink("Hello Maa Durga Travels, I need a custom service. Please help me."), '_blank')}
            className="inline-flex items-center space-x-2 bg-primary hover:bg-secondary text-white font-bold py-3.5 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current text-accent" />
            <span>Contact Us on WhatsApp</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

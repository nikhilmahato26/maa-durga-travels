import { motion } from 'framer-motion';
import {
  DollarSign,
  UserCheck,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Users,
  Compass,
  Clock,
  ThumbsUp
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/site';

export default function WhyChooseUs() {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Affordable Pricing':
        return <DollarSign className="w-6 h-6 text-accent" />;
      case 'Experienced Drivers':
        return <UserCheck className="w-6 h-6 text-secondary" />;
      case 'Clean Vehicles':
        return <Sparkles className="w-6 h-6 text-accent" />;
      case 'Safe Journey':
        return <ShieldCheck className="w-6 h-6 text-secondary" />;
      case '24×7 WhatsApp Support':
        return <MessageCircle className="w-6 h-6 text-accent" />;
      case 'Family Friendly Service':
        return <Users className="w-6 h-6 text-secondary" />;
      case 'One Way Taxi Available':
        return <Compass className="w-6 h-6 text-accent" />;
      case 'Tour Packages':
        return <Compass className="w-6 h-6 text-secondary" />;
      case 'On Time Pickup':
        return <Clock className="w-6 h-6 text-accent" />;
      default:
        return <ThumbsUp className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="bg-primary/5 text-primary text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/10">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 tracking-tight">
            Our Commitment to Excellence
          </h2>
          <p className="text-brand-text-muted mt-3 text-sm md:text-base leading-relaxed">
            We deliver the highest standards of safety, comfort, and transparency. That is why customers trust us for outstation travel in Bhagalpur.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-slate-50 border border-slate-100 hover:border-slate-200/80 p-6 md:p-8 rounded-2xl flex flex-col items-start hover:shadow-premium hover:bg-white transition-all duration-300 group"
            >
              {/* Icon Frame */}
              <div className="p-3 bg-white group-hover:bg-primary/5 rounded-xl shadow-xs mb-5 transition-colors duration-300">
                {getIcon(item.title)}
              </div>

              {/* Title & Desc */}
              <h3 className="text-base md:text-lg font-bold text-primary mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed">
                {item.description || "Top-rated travel experience customized to meet your schedule and convenience."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

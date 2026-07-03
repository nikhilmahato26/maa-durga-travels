import { motion } from 'framer-motion';
import { Car, Send, CheckCircle, Compass, ChevronRight } from 'lucide-react';

export default function ServiceProcess() {
  const steps = [
    {
      number: "1",
      title: "Choose Vehicle",
      description: "Pick your preferred Sedan, SUV or tour package suited to your travel plans.",
      icon: <Car className="w-6 h-6 text-accent" />
    },
    {
      number: "2",
      title: "Send WhatsApp Booking",
      description: "Fill the quick form or click to generate a prefilled reservation inquiry.",
      icon: <Send className="w-6 h-6 text-secondary" />
    },
    {
      number: "3",
      title: "Confirm Details",
      description: "We verify availability, share final quotes, and confirm your driver details.",
      icon: <CheckCircle className="w-6 h-6 text-accent" />
    },
    {
      number: "4",
      title: "Enjoy Your Journey",
      description: "Our professional driver arrives on-time to give you a safe, comfortable ride.",
      icon: <Compass className="w-6 h-6 text-secondary" />
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/5 text-primary text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/10">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 tracking-tight">
            Our Simple Booking Process
          </h2>
          <p className="text-brand-text-muted mt-3 text-sm md:text-base leading-relaxed">
            Reserve your premium outstation ride in Bhagalpur, Patna & Deoghar in four simple steps without any complex registration.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Desktop arrow connector */}
              {idx < 3 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-slate-200 z-0">
                  <ChevronRight className="w-5 h-5 text-slate-300 absolute -right-2.5 -top-2" />
                </div>
              )}

              {/* Step Circle Frame */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-md relative z-10 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                {step.icon}
                <span className="absolute -top-2 -right-2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-xs">
                  {step.number}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-base md:text-lg font-bold text-primary mt-6 mb-2">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-brand-text-muted px-4 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useForm } from 'react-hook-form';
import { MapPin, Calendar, Car, Phone, Send } from 'lucide-react';
import { getWhatsAppLink, buildGeneralBookingMsg } from '../data/site';

interface BookingFormData {
  pickup: string;
  destination: string;
  date: string;
  vehicleType: string;
  phone: string;
  passengers: string;
}

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    defaultValues: {
      pickup: '',
      destination: '',
      date: '',
      vehicleType: 'Any',
      phone: '',
      passengers: '1'
    }
  });

  const onSubmit = (data: BookingFormData) => {
    const formattedMsg = buildGeneralBookingMsg(
      data.vehicleType,
      data.pickup,
      data.destination,
      data.date,
      `${data.passengers} Passengers (Contact: ${data.phone})`
    );
    window.open(getWhatsAppLink(formattedMsg), '_blank');
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 -mt-16 md:-mt-24 relative z-20">
      <div className="glass-panel rounded-2xl sm:rounded-3xl shadow-premium p-6 md:p-8 bg-white/90 border border-white/40">
        <div className="mb-6">
          <span className="bg-primary/10 text-primary text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Fast Booking
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-primary mt-2">
            Book Your Ride Instantly
          </h3>
          <p className="text-brand-text-muted text-xs md:text-sm mt-1">
            Choose your destination and prefill your WhatsApp booking details in one click.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-4 items-end">
          {/* Pickup Location */}
          <div className="relative">
            <label className="block text-xs font-semibold text-primary mb-1.5 flex items-center">
              <MapPin className="w-3.5 h-3.5 text-accent mr-1" /> Pickup Location
            </label>
            <input
              type="text"
              placeholder="e.g. Bhagalpur Station"
              {...register('pickup', { required: 'Pickup location is required' })}
              className={`w-full bg-slate-50 text-brand-text placeholder-slate-400 text-sm px-3.5 py-3 pl-3 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-secondary ${
                errors.pickup ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
              }`}
            />
            {errors.pickup && (
              <p className="text-red-500 text-[10px] mt-1 absolute">{errors.pickup.message}</p>
            )}
          </div>

          {/* Destination */}
          <div className="relative">
            <label className="block text-xs font-semibold text-primary mb-1.5 flex items-center">
              <MapPin className="w-3.5 h-3.5 text-secondary mr-1" /> Destination
            </label>
            <input
              type="text"
              placeholder="e.g. Patna Airport"
              {...register('destination', { required: 'Destination is required' })}
              className={`w-full bg-slate-50 text-brand-text placeholder-slate-400 text-sm px-3.5 py-3 pl-3 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-secondary ${
                errors.destination ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
              }`}
            />
            {errors.destination && (
              <p className="text-red-500 text-[10px] mt-1 absolute">{errors.destination.message}</p>
            )}
          </div>

          {/* Pickup Date */}
          <div className="relative">
            <label className="block text-xs font-semibold text-primary mb-1.5 flex items-center">
              <Calendar className="w-3.5 h-3.5 text-accent mr-1" /> Pickup Date
            </label>
            <input
              type="date"
              {...register('date', { required: 'Date is required' })}
              className={`w-full bg-slate-50 text-brand-text text-sm px-3.5 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-secondary ${
                errors.date ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
              }`}
            />
            {errors.date && (
              <p className="text-red-500 text-[10px] mt-1 absolute">{errors.date.message}</p>
            )}
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-xs font-semibold text-primary mb-1.5 flex items-center">
              <Car className="w-3.5 h-3.5 text-accent mr-1" /> Vehicle Type
            </label>
            <select
              {...register('vehicleType')}
              className="w-full bg-slate-50 text-brand-text text-sm px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
            >
              <option value="Any">Any Vehicle</option>
              <option value="Sedan (Dzire, Punch, Nexon)">Sedan (Dzire, Punch, etc.)</option>
              <option value="SUV (Scorpio, Ertiga, Rumion)">SUV (Scorpio, Ertiga, etc.)</option>
            </select>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label className="block text-xs font-semibold text-primary mb-1.5 flex items-center">
              <Phone className="w-3.5 h-3.5 text-secondary mr-1" /> Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g. 10-digit number"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Must be 10 digits'
                }
              })}
              className={`w-full bg-slate-50 text-brand-text placeholder-slate-400 text-sm px-3.5 py-3 pl-3 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-secondary ${
                errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-[10px] mt-1 absolute">{errors.phone.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 md:pt-0">
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-blue-800 text-white font-semibold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-102 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span className="text-sm font-bold">Book Instantly</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

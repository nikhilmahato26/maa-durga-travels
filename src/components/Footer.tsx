import { Phone, MessageSquare, MapPin, Mail, Compass } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink, buildGeneralBookingMsg } from '../data/site';
import logoImg from '../assets/logo.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBookNow = () => {
    const message = buildGeneralBookingMsg("Any", "", "", "", "");
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-primary-light/50">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-3 mb-4 select-none bg-white p-2.5 rounded-2xl border border-white/10 shadow-md">
              <img src={logoImg} alt="Maa Durga Travels & Car Rental" className="h-12 w-auto object-contain rounded-lg" />
              <div className="flex flex-col pr-2">
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-primary leading-none">
                  Bhagalpur • Patna
                </span>
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-secondary mt-1 leading-none">
                  • Deoghar
                </span>
              </div>
            </a>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6 font-medium max-w-sm">
              Your premium travel partner in Bhagalpur, Patna & Deoghar. Offering reliable sedan and SUV rentals, outstation one-way taxis, and spiritual packages since years.
            </p>
            <div className="flex space-x-3.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneNumber}`}
                className="p-2.5 bg-primary-light hover:bg-secondary rounded-xl transition-all duration-300 text-white shadow-sm"
                aria-label="Call Office"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
              <button
                onClick={handleBookNow}
                className="p-2.5 bg-accent hover:bg-accent-dark text-primary-dark rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Book on WhatsApp"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-current" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#car-rental"
                  onClick={(e) => handleLinkClick(e, '#car-rental')}
                  className="text-xs md:text-sm text-slate-300 hover:text-white transition-colors font-medium flex items-center"
                >
                  <Compass className="w-3.5 h-3.5 mr-2 text-accent/80" />
                  <span>Car Rental Fleet</span>
                </a>
              </li>
              <li>
                <a
                  href="#one-way-taxi"
                  onClick={(e) => handleLinkClick(e, '#one-way-taxi')}
                  className="text-xs md:text-sm text-slate-300 hover:text-white transition-colors font-medium flex items-center"
                >
                  <Compass className="w-3.5 h-3.5 mr-2 text-accent/80" />
                  <span>One Way Taxi Routes</span>
                </a>
              </li>
              <li>
                <a
                  href="#tour-packages"
                  onClick={(e) => handleLinkClick(e, '#tour-packages')}
                  className="text-xs md:text-sm text-slate-300 hover:text-white transition-colors font-medium flex items-center"
                >
                  <Compass className="w-3.5 h-3.5 mr-2 text-accent/80" />
                  <span>Spiritual Tour Packages</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="text-xs md:text-sm text-slate-300 hover:text-white transition-colors font-medium flex items-center"
                >
                  <Compass className="w-3.5 h-3.5 mr-2 text-accent/80" />
                  <span>Get Directions & Maps</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Office Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-5">
              Contact Details
            </h3>
            <ul className="space-y-4 text-xs md:text-sm text-slate-300 font-medium">
              <li className="flex items-start">
                <MapPin className="w-4.5 h-4.5 text-accent mr-3.5 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4.5 h-4.5 text-accent mr-3.5 flex-shrink-0 mt-0.5" />
                <span>
                  Call Office: <br />
                  <a href={`tel:${BUSINESS_INFO.phoneNumber}`} className="text-white hover:underline font-bold text-sm block mt-0.5">
                    {BUSINESS_INFO.displayPhone}
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4.5 h-4.5 text-accent mr-3.5 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:underline">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-center gap-4 text-[11px] md:text-xs text-slate-400 font-medium">
          <p>© {currentYear} {BUSINESS_INFO.name}. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-white">Privacy Policy</a>
            <span>•</span>
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-white">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

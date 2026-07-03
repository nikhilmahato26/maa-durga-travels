import { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink, buildGeneralBookingMsg } from '../data/site';
import logoImg from '../assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Car Rental', href: '#car-rental' },
    { name: 'One Way Taxi', href: '#one-way-taxi' },
    { name: 'Tour Packages', href: '#tour-packages' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleBookNow = () => {
    const message = buildGeneralBookingMsg("Any", "", "", "", "");
    window.open(getWhatsAppLink(message), '_blank');
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80; // height of navigation bar
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-premium py-4 border-b border-slate-100/80 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Logo Section */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-3 select-none flex-shrink-0">
            <img src={logoImg} alt="Maa Durga Travels & Car Rental" className="h-11 sm:h-14 w-auto object-contain rounded-lg border border-slate-100/80" />
            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-primary leading-none">
                Bhagalpur • Patna
              </span>
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-secondary mt-1 leading-none">
                • Deoghar
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-6 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[15px] font-semibold text-brand-text hover:text-secondary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Details & Book Button (Visible on Desktop only) */}
          <div className="hidden xl:flex items-center space-x-4 flex-shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneNumber}`}
              className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-primary font-bold px-4 py-2.5 rounded-full shadow-xs transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>{BUSINESS_INFO.displayPhone}</span>
            </a>
            <button
              onClick={handleBookNow}
              className="flex items-center space-x-1.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-102 transform transition-all duration-300 text-sm cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button (Visible below Desktop breakpoint) */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-brand-text hover:text-primary focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="xl:hidden animate-fade-in py-4 px-4 bg-white border-t border-slate-100 shadow-xl max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-semibold py-2.5 px-3 rounded-lg text-brand-text hover:bg-slate-50 hover:text-secondary transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3 px-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneNumber}`}
                className="flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-primary py-3 rounded-xl font-bold transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.displayPhone}</span>
              </a>
              <button
                onClick={handleBookNow}
                className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-primary-dark py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all text-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

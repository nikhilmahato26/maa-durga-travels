import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import VehicleRental from './components/VehicleRental';
import OneWayTaxi from './components/OneWayTaxi';
import TourPackages from './components/TourPackages';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceProcess from './components/ServiceProcess';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-body antialiased flex flex-col justify-between selection:bg-secondary selection:text-white pb-14 sm:pb-0">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Home & Interactive Form */}
        <div className="relative">
          <Hero />
          <BookingForm />
        </div>

        {/* Fleet Listings */}
        <VehicleRental />

        {/* Popular Routes drop prices */}
        <OneWayTaxi />

        {/* Travel packages */}
        <TourPackages />

        {/* Value Prop */}
        <WhyChooseUs />

        {/* Steps */}
        <ServiceProcess />

        {/* visual fleet and travel */}
        <Gallery />

        {/* Slider feedback */}
        <Testimonials />

        {/* FAQ list */}
        <FAQ />

        {/* contact and public maps */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Bottom Sticky bar for Mobile and pulsing bubble for Desktop */}
      <FloatingButtons />
    </div>
  );
}

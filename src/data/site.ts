export const BUSINESS_INFO = {
  name: "Maa Durga Travels & Car Rental",
  whatsappNumber: "7061627992",
  phoneNumber: "7061627992",
  displayPhone: "+91 7061627992",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Maa%20Durga%20Travels%20&%20Car%20Rental%20Bhagalpur&t=&z=14&ie=UTF8&iwloc=&output=embed",
  googleMapsShareUrl: "https://maps.app.goo.gl/ddkoVAjwiwN8wnPNA",
  email: "maadurgatravelsbgp@gmail.com",
  address: "Bhagalpur, Bihar, India"
};

export interface Vehicle {
  id: string;
  name: string;
  type: "Sedan" | "SUV";
  examples: string[];
  pricePerDay: number;
  features: string[];
  image: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: "sedan-cars",
    name: "Sedan Vehicles",
    type: "Sedan",
    examples: ["Dzire", "Punch", "Nexon", "Similar Sedan Vehicles"],
    pricePerDay: 1200,
    features: [
      "Air Conditioning (AC)",
      "Comfortable 5-Seater Seating",
      "Highly Fuel Efficient",
      "Ideal for Small Families & Business Trips"
    ],
    image: "sedan"
  },
  {
    id: "suv-vehicles",
    name: "SUV Vehicles",
    type: "SUV",
    examples: ["Scorpio", "Ertiga", "Rumion", "Similar SUVs"],
    pricePerDay: 1500,
    features: [
      "Spacious 7-8 Seater Cabin",
      "Perfect for Group & Family Travel",
      "Superior Long-Distance Ride Comfort",
      "Premium Styling & High Ground Clearance"
    ],
    image: "suv"
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    type: "SUV",
    examples: ["Innova Crysta", "Premium MUV"],
    pricePerDay: 2500,
    features: [
      "Ultra-Spacious 7-Seater Premium Cabin",
      "Captain Seats & Advanced Climate Control",
      "Perfect for VIP Travels, Events & Corporate Outings",
      "Ultimate Ride Quality & Quiet Highway Cruise"
    ],
    image: "innova"
  }
];

export interface TaxiRoute {
  id: string;
  from: string;
  to: string;
  sedanPrice: number;
  suvPrice: number;
  innovaPrice: number;
}

export const TAXI_ROUTES: TaxiRoute[] = [
  {
    id: "bgp-patna",
    from: "Bhagalpur",
    to: "Patna",
    sedanPrice: 6000,
    suvPrice: 6500,
    innovaPrice: 8500
  },
  {
    id: "bgp-deoghar",
    from: "Bhagalpur",
    to: "Deoghar",
    sedanPrice: 3000,
    suvPrice: 3500,
    innovaPrice: 5000
  },
  {
    id: "bgp-purnia",
    from: "Bhagalpur",
    to: "Purnia",
    sedanPrice: 3000,
    suvPrice: 3500,
    innovaPrice: 5000
  },
  {
    id: "bgp-gaya",
    from: "Bhagalpur",
    to: "Gaya",
    sedanPrice: 6000,
    suvPrice: 7000,
    innovaPrice: 8000
  }
];

export interface TourPackage {
  id: string;
  name: string;
  pricePerPerson: number;
  duration: string;
  highlights: string[];
  image: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "deoghar-tour",
    name: "Deoghar Tour",
    pricePerPerson: 1000,
    duration: "Full Day / Custom",
    highlights: [
      "Baba Baidyanath Temple Darshan",
      "Spiritual & Sacred Experience",
      "Comfortable Hassle-Free Travel",
      "Perfect for Family Pilgrimages"
    ],
    image: "deoghar"
  },
  {
    id: "tarapith-tour",
    name: "Tarapith Tour",
    pricePerPerson: 1500,
    duration: "1-2 Days Custom",
    highlights: [
      "Tarapith Temple & Sacred Shrines",
      "Smooth & Safe Long Distance Drive",
      "Customizable & Guided Trip Plans",
      "Comfortable & Well-Maintained Vehicle"
    ],
    image: "tarapith"
  },
  {
    id: "bodhgaya-tour",
    name: "Bodh Gaya Tour",
    pricePerPerson: 1500,
    duration: "1-2 Days Custom",
    highlights: [
      "Mahabodhi Temple & Great Buddha Statue",
      "Peaceful Buddhist Pilgrimage Sites",
      "Serene & Spiritual Group Experience",
      "Spacious Vehicle with Expert Guide Driver"
    ],
    image: "bodhgaya"
  }
];

export const WHY_CHOOSE_US = [
  { title: "Affordable Pricing", description: "Outstation round trips starting at just ₹12/km. Clear pricing with no hidden charges." },
  { title: "Experienced Drivers", description: "Highly skilled, licensed drivers familiar with all outstation routes." },
  { title: "Clean Vehicles", description: "Thoroughly sanitized, clean, and well-maintained fleet for your comfort." },
  { title: "Safe Journey", description: "Safety first with regularly inspected vehicles and safe driving practices." },
  { title: "24×7 WhatsApp Support", description: "Book, modify, or query anytime. We are always online on WhatsApp." },
  { title: "Family Friendly Service", description: "Polite drivers, child safety friendly, and comfortable seating layouts." },
  { title: "One Way Taxi Available", description: "Only pay for one direction on our popular outstation routes." },
  { title: "Tour Packages", description: "Handcrafted, affordable packages for pilgrimages and holiday trips." },
  { title: "On Time Pickup", description: "Punctuality is our guarantee. No delays, get started on your journey on time." }
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Very affordable service. Driver was polite and punctual. The car was clean and the ride to Patna was extremely smooth.",
    location: "Bihar"
  },
  {
    name: "Suman Devi",
    rating: 5,
    text: "Booked Deoghar tour with family. Excellent experience. The booking process on WhatsApp was quick, and the driver took care of everything.",
    location: "Deoghar Trip"
  },
  {
    name: "Amit Singh",
    rating: 5,
    text: "Clean vehicle and smooth journey. I regularly use their one-way taxi service for business trips to Purnia. Best rates in town.",
    location: "Purnia Trip"
  },
  {
    name: "Vikram Shah",
    rating: 5,
    text: "Best taxi service in Bhagalpur, Patna & Deoghar. Punctual pickup at 4 AM, highly professional driver, and neat Ertiga SUV. Recommended for family travel.",
    location: "Patna"
  }
];

export const FAQS = [
  {
    question: "Do you provide airport pickup?",
    answer: "Yes, we provide premium outstation pickup and drop-off services to Patna (PAT) airport, Ranchi (IXR) airport, Bagdogra (IXB) airport, and Deoghar airport directly from Bhagalpur, Patna & Deoghar."
  },
  {
    question: "Can I book a vehicle for multiple days?",
    answer: "Absolutely! You can book any vehicle from our fleet for single-day or multi-day outstation tours, family trips, weddings, or corporate travels. Contact us on WhatsApp for custom discounted rates."
  },
  {
    question: "Are your drivers experienced?",
    answer: "Yes, all our drivers are professionally licensed, highly experienced in highway driving, polite, punctual, and well-acquainted with routes throughout Bihar, Jharkhand, and West Bengal."
  },
  {
    question: "Is WhatsApp booking available?",
    answer: "Yes! WhatsApp booking is our primary and fastest channel. Simply click any booking button on our site, fill out your details, and send the message. We confirm and share driver details in minutes."
  },
  {
    question: "Do you provide outstation trips?",
    answer: "Yes, we specialize in outstation round trips, spiritual tour packages (Deoghar, Tarapith, Bodh Gaya), and one-way drops to major cities like Patna, Purnia, Gaya, and Ranchi."
  }
];

// WhatsApp URL generator helper
export const getWhatsAppLink = (message: string): string => {
  return `https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

// Prefilled message builders
export const buildGeneralBookingMsg = (vehicleType = "Any", pickup = "", destination = "", date = "", passengers = "") => {
  return `Hello Maa Durga Travels & Car Rental,

I would like to book a vehicle.

Vehicle: ${vehicleType}
Travel Date: ${date}
Pickup Location: ${pickup}
Destination: ${destination}
Passengers: ${passengers}

Please share availability.`;
};

export const buildVehicleBookingMsg = (vehicleName: string) => {
  return `Hello Maa Durga Travels & Car Rental,

I would like to book a vehicle.

Vehicle: ${vehicleName}

Please share details and availability.`;
};

export const buildRouteBookingMsg = (from: string, to: string, type: string, price: number) => {
  return `Hello Maa Durga Travels & Car Rental,

I would like to book a One-Way Taxi.

Route: ${from} → ${to}
Vehicle Class: ${type}
Expected Price: ₹${price}

Please share availability.`;
};

export const buildPackageBookingMsg = (packageName: string, startPrice: number) => {
  return `Hello Maa Durga Travels & Car Rental,

I would like to book a Tour Package.

Package: ${packageName}
Starting Price: ₹${startPrice} / Person

Please share itinerary details.`;
};

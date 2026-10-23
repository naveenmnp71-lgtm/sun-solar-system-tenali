import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sun, 
  Zap, 
  ShieldCheck, 
  Wrench, 
  Building2, 
  Home as HomeIcon, 
  Factory, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  Sliders, 
  Compass, 
  Layers, 
  Clock, 
  BatteryCharging, 
  Info,
  AlertTriangle,
  Send,
  Sparkles,
  UserCheck,
  Calculator,
  IndianRupee,
  Store,
  RefreshCw
} from 'lucide-react';

// Brand Color Constants:
// Solar Green: #168447 | Deep Green: #0B3D2E | Golden Yellow: #F5B82E
// Light Background: #F5F8F5 | Dark Text: #1F2937 | White: #FFFFFF

const SolarCustomStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes solarSunRotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes heroSunSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes heroSunFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
    }
    @keyframes ringSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes solarPanelShimmer {
      0% { transform: translateX(-150%) skewX(-20deg); opacity: 0; }
      40% { opacity: 0.6; }
      100% { transform: translateX(250%) skewX(-20deg); opacity: 0; }
    }
    @keyframes solarGlowPulse {
      0%, 100% { filter: drop-shadow(0 0 2px rgba(245, 184, 46, 0.4)); opacity: 0.95; }
      50% { filter: drop-shadow(0 0 9px rgba(245, 184, 46, 0.85)); opacity: 1; }
    }
    @keyframes solarRisingSun {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-1.5px); }
    }

    .animate-solar-rays {
      transform-origin: 32px 22px;
      animation: solarSunRotate 24s linear infinite;
    }
    .animate-solar-glow {
      animation: solarGlowPulse 3.5s ease-in-out infinite;
    }
    .animate-solar-rise {
      animation: solarRisingSun 4s ease-in-out infinite;
    }
    .animate-hero-sun-orbit {
      animation: heroSunSpin 12s linear infinite;
      transform-origin: center center;
    }
    .animate-hero-sun-float {
      animation: heroSunFloat 4.5s ease-in-out infinite;
    }
    .animate-proprietor-ring-spin {
      animation: ringSpin 10s linear infinite;
      transform-origin: center center;
    }
    .solar-panel-shimmer {
      position: absolute;
      top: 0;
      left: 0;
      width: 40%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(245, 184, 46, 0.4), transparent);
      animation: solarPanelShimmer 4s ease-in-out infinite;
    }

    .solar-logo-container:hover .animate-solar-rays {
      animation-duration: 8s;
    }
    .solar-logo-container:hover .solar-sun-disc {
      filter: drop-shadow(0 0 10px #F5B82E);
    }
    .solar-logo-container:hover .solar-panel-body {
      filter: drop-shadow(0 2px 8px rgba(22, 132, 71, 0.5));
    }

    .solar-interactive-card {
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .solar-interactive-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 14px 28px -8px rgba(11, 61, 46, 0.12), 0 0 0 1.5px rgba(245, 184, 46, 0.45);
    }

    .solar-button-glow {
      position: relative;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      overflow: hidden;
    }
    .solar-button-glow:hover {
      transform: translateY(-1.5px);
      box-shadow: 0 6px 18px -4px rgba(22, 132, 71, 0.4), 0 0 12px 1px rgba(245, 184, 46, 0.35);
    }

    .solar-nav-hover {
      position: relative;
      transition: color 0.2s ease;
    }
    .solar-nav-hover::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 0%;
      height: 2px;
      background: #F5B82E;
      transition: all 0.25s ease-out;
      transform: translateX(-50%);
      border-radius: 9999px;
    }
    .solar-nav-hover:hover::after {
      width: 75%;
    }

    @media (prefers-reduced-motion: reduce) {
      .animate-solar-rays,
      .animate-solar-glow,
      .animate-solar-rise,
      .animate-hero-sun-orbit,
      .animate-hero-sun-float,
      .animate-proprietor-ring-spin,
      .solar-panel-shimmer {
        animation: none !important;
      }
      .solar-interactive-card,
      .solar-button-glow {
        transition: none !important;
        transform: none !important;
      }
    }
  `}} />
);

const useSolarFavicon = () => {
  useEffect(() => {
    const svgFaviconContent = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <style>
          @keyframes spinRays { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes pulseSun { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
          .rays { transform-origin: 32px 20px; animation: spinRays 14s linear infinite; }
          .sun { transform-origin: 32px 20px; animation: pulseSun 3s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) { .rays, .sun { animation: none; } }
        </style>
        <g class="rays" stroke="#F5B82E" stroke-width="2.5" stroke-linecap="round" opacity="0.9">
          <line x1="32" y1="3" x2="32" y2="9" />
          <line x1="32" y1="31" x2="32" y2="37" />
          <line x1="15" y1="20" x2="9" y2="20" />
          <line x1="49" y1="20" x2="55" y2="20" />
          <line x1="19.98" y1="7.98" x2="24.22" y2="12.22" />
          <line x1="44.02" y1="7.98" x2="39.78" y2="12.22" />
        </g>
        <circle class="sun" cx="32" cy="20" r="13" fill="#F5B82E" />
        <polygon points="12,50 20,32 44,32 52,50" fill="#0B3D2E" stroke="#168447" stroke-width="2.2" stroke-linejoin="round" />
        <line x1="32" y1="32" x2="32" y2="50" stroke="#F5B82E" stroke-width="1.8" />
        <line x1="22" y1="32" x2="19" y2="50" stroke="#F5B82E" stroke-width="1.2" />
        <line x1="42" y1="32" x2="45" y2="50" stroke="#F5B82E" stroke-width="1.2" />
        <line x1="15.5" y1="41" x2="48.5" y2="41" stroke="#168447" stroke-width="1.6" />
        <path d="M29 50H35V57H29V50Z" fill="#168447" />
        <rect x="22" y="57" width="20" height="3" rx="1.5" fill="#0B3D2E" />
      </svg>
    `.trim();

    const svgBlob = new Blob([svgFaviconContent], { type: 'image/svg+xml' });
    const svgUrl = URL.createObjectURL(svgBlob);

    const createPngFavicon = (size) => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const scale = size / 64;
      ctx.scale(scale, scale);

      ctx.beginPath();
      ctx.arc(32, 20, 13, 0, Math.PI * 2);
      ctx.fillStyle = '#F5B82E';
      ctx.fill();

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#F5B82E';
      ctx.lineCap = 'round';
      const rays = [
        [32, 3, 32, 9], [32, 31, 32, 37],
        [15, 20, 9, 20], [49, 20, 55, 20],
        [19.98, 7.98, 24.22, 12.22], [44.02, 7.98, 39.78, 12.22]
      ];
      rays.forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      ctx.beginPath();
      ctx.moveTo(12, 50);
      ctx.lineTo(20, 32);
      ctx.lineTo(44, 32);
      ctx.lineTo(52, 50);
      ctx.closePath();
      ctx.fillStyle = '#0B3D2E';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#168447';
      ctx.stroke();

      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#F5B82E';
      ctx.beginPath();
      ctx.moveTo(32, 32); ctx.lineTo(32, 50);
      ctx.moveTo(22, 32); ctx.lineTo(19, 50);
      ctx.moveTo(42, 32); ctx.lineTo(45, 50);
      ctx.stroke();

      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#168447';
      ctx.beginPath();
      ctx.moveTo(15.5, 41); ctx.lineTo(48.5, 41);
      ctx.stroke();

      ctx.fillStyle = '#168447';
      ctx.fillRect(29, 50, 6, 7);
      ctx.fillStyle = '#0B3D2E';
      ctx.fillRect(22, 57, 20, 3);

      return canvas.toDataURL('image/png');
    };

    const png32Url = createPngFavicon(32);
    const png180Url = createPngFavicon(180);

    const ensureLink = (rel, type, href, sizes) => {
      let link = document.querySelector(`link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ''}`);
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        if (type) link.type = type;
        if (sizes) link.sizes = sizes;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    ensureLink('icon', 'image/svg+xml', svgUrl);
    if (png32Url) ensureLink('icon', 'image/png', png32Url, '32x32');
    if (png180Url) ensureLink('apple-touch-icon', 'image/png', png180Url, '180x180');

    if (!document.title.includes("Sun Solar System")) {
      document.title = "Sun Solar System • Clean Solar Energy in Tenali, AP";
    }

    return () => {
      URL.revokeObjectURL(svgUrl);
    };
  }, []);
};

const SunSolarLogo = ({ className = "h-10 w-auto", variant = "default", animated = true }) => {
  const isLight = variant === "light";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`solar-logo-container flex items-center gap-2.5 select-none transition-transform duration-200 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-label="Sun Solar System Emblem"
    >
      <div className="relative h-10 w-10 shrink-0">
        <svg 
          viewBox="0 0 64 64" 
          className="h-10 w-10 shrink-0 overflow-visible drop-shadow-sm" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoPanelShimmer" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#168447" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#F5B82E" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#168447" stopOpacity="0.1" />
            </linearGradient>
            
            <radialGradient id="sunCorona" cx="50%" cy="50%" r="50%">
              <stop offset="40%" stopColor="#F5B82E" stopOpacity="1" />
              <stop offset="85%" stopColor="#F5B82E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F5B82E" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle 
            cx="32" 
            cy="32" 
            r="30" 
            stroke="#F5B82E" 
            strokeWidth="1.75" 
            strokeDasharray="4 3" 
            opacity={isHovered ? "1" : "0.75"} 
            className={animated ? "animate-solar-rays" : ""}
          />
          
          <g 
            className={`${animated ? 'animate-solar-rays' : ''} transition-transform duration-500`}
            style={{ transformOrigin: '32px 22px' }}
          >
            <path 
              d="M32 3V9M32 35V41M13 22H7M57 22H51M18.57 8.57L22.81 12.81M45.43 12.81L41.19 8.57M18.57 35.43L22.81 31.19M45.43 31.19L41.19 35.43" 
              stroke="#F5B82E" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
            />
          </g>

          <g className={animated ? "animate-solar-rise" : ""}>
            <circle 
              cx="32" 
              cy="22" 
              r="13.5" 
              fill="url(#sunCorona)" 
              className={`solar-sun-disc ${animated ? 'animate-solar-glow' : ''} transition-all duration-300`} 
            />
            <circle 
              cx="32" 
              cy="22" 
              r="11.5" 
              fill="#F5B82E" 
            />
            <circle cx="29.5" cy="19.5" r="3" fill="#FFF7D6" opacity="0.6" />
          </g>
          
          <g className="solar-panel-body transition-all duration-300">
            <path 
              d="M13 47L20 32H44L51 47H13Z" 
              fill="#0B3D2E" 
              stroke="#168447" 
              strokeWidth="2.2" 
              strokeLinejoin="round"
            />
            
            <line x1="32" y1="32" x2="32" y2="47" stroke="#F5B82E" strokeWidth="1.6" />
            <line x1="23.5" y1="32" x2="21" y2="47" stroke="#F5B82E" strokeWidth="1.3" />
            <line x1="40.5" y1="32" x2="43" y2="47" stroke="#F5B82E" strokeWidth="1.3" />
            <line x1="16.5" y1="39.5" x2="47.5" y2="39.5" stroke="#168447" strokeWidth="1.5" />

            {isHovered && (
              <polygon 
                points="13,47 20,32 44,32 51,47" 
                fill="url(#logoPanelShimmer)" 
                opacity="0.8" 
                className="transition-opacity duration-300 pointer-events-none"
              />
            )}
            
            <path d="M30 47H34V54H30V47Z" fill="#168447" />
            <path d="M22 54H42V57.5H22V54Z" fill="#0B3D2E" rx="1.5" />
          </g>
        </svg>

        {isHovered && (
          <span className="absolute -top-1.5 -right-1.5 text-[#F5B82E] animate-pulse">
            <Sparkles className="w-3.5 h-3.5 fill-[#F5B82E]" />
          </span>
        )}
      </div>

      <div className="flex flex-col text-left leading-tight">
        <span className={`font-extrabold tracking-tight text-lg md:text-xl font-sans transition-colors duration-200 ${
          isLight 
            ? 'text-white' 
            : isHovered 
              ? 'text-[#168447]' 
              : 'text-[#0B3D2E]'
        }`}>
          SUN <span className="text-[#168447]">SOLAR</span>
        </span>
        <span className={`text-[10px] uppercase font-semibold tracking-widest transition-colors duration-200 ${
          isLight ? 'text-[#F5B82E]' : isHovered ? 'text-[#0B3D2E]' : 'text-[#168447]'
        }`}>
          SYSTEM • TENALI
        </span>
      </div>
    </div>
  );
};

const BUSINESS_INFO = {
  name: "Sun Solar System",
  proprietor: "Vijay Kumar",
  category: "Solar Energy Solutions",
  address: "Dwaraka Nagar, Morrispet, Tenali, Andhra Pradesh, India",
  pincode: "522201",
  region: "Guntur District, Andhra Pradesh",
  operatingHours: "Monday to Saturday: 9:00 AM – 6:30 PM (IST)",
  contactNumber: "+91 96425 86296",
  whatsappNumber: "+91 96425 86296",
  whatsappLink: "https://wa.me/919642586296",
  phoneLink: "tel:+919642586296",
  mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Sun%20Solar%20System%2C%20Dwaraka%20Nagar%2C%20Morrispet%2C%20Tenali%2C%20Andhra%20Pradesh"
};

const PROPOSED_SERVICES = [
  {
    id: "residential",
    title: "Residential Rooftop Solar Systems",
    icon: HomeIcon,
    shortDesc: "Tailored solar installations for independent homes, villas, and residential societies to generate clean power from available roof space.",
    suitableFor: "Single-family houses, apartments, residential villas with clear terrace access.",
    highlights: ["Reduces reliance on daytime grid power", "Net-metering compatible configurations", "Sturdy wind-resistant mounting structures"],
    statusNote: "Proposed Service: Subject to site technical feasibility and business confirmation in Tenali region."
  },
  {
    id: "commercial",
    title: "Commercial Solar Solutions",
    icon: Building2,
    shortDesc: "High-efficiency photovoltaic systems designed for offices, retail stores, educational facilities, and commercial complexes.",
    suitableFor: "Commercial complexes, private institutions, healthcare centres, retail hubs.",
    highlights: ["Offsets high commercial slab tariffs", "Peak daytime load balancing", "Clean energy footprint for enterprises"],
    statusNote: "Proposed Service: Customized engineering designs based on sanctioned commercial load."
  },
  {
    id: "industrial",
    title: "Industrial Solar Solutions",
    icon: Factory,
    shortDesc: "Robust, scalable solar photovoltaic plants engineered for factories, manufacturing units, agro-processing facilities, and warehouses.",
    suitableFor: "Paddy & agro-mills, cold storage units, fabrication facilities, small/medium industries.",
    highlights: ["Designed for heavy three-phase equipment support", "Extensive rooftop and shed-top layouts", "Long-term operational lifecycle"],
    statusNote: "Proposed Service: High-voltage system engineering subject to discom and structural audits."
  },
  {
    id: "installation",
    title: "Solar Panel Installation",
    icon: Wrench,
    shortDesc: "Standardized mechanical and electrical installation practices with compliant earthing, cabling, and safety isolators.",
    suitableFor: "RCC flat roofs, metal sheds, tiled roofs with custom elevation frames.",
    highlights: ["Hot-dip galvanized mounting structures", "Proper AC/DC surge protection devices (SPDs)", "Safe electrical interconnectivity"],
    statusNote: "Proposed Service: Executed according to Indian Electrical Codes and Central Electricity Authority norms."
  },
  {
    id: "consultation",
    title: "Solar System Consultation & Site Assessment",
    icon: Compass,
    shortDesc: "Detailed on-site structural evaluation, shadow analysis, electricity bill auditing, and capacity estimation.",
    suitableFor: "Property owners planning solar adoption before financial investment.",
    highlights: ["360° shadow and azimuth inspection", "Accurate roof measurement and load testing", "Objective component advisory"],
    statusNote: "Proposed Service: On-site surveys conducted in Tenali and surrounding Andhra Pradesh sectors."
  },
  {
    id: "maintenance",
    title: "Solar System Maintenance & Support",
    icon: ShieldCheck,
    shortDesc: "Periodic inspection routines, panel dusting & washing recommendations, inverter diagnostics, and electrical health checkups.",
    suitableFor: "Existing and newly installed residential and commercial solar installations.",
    highlights: ["Array cleaning guidance for high-efficiency yield", "Inverter error diagnostic checks", "Wiring and junction box insulation tests"],
    statusNote: "Proposed Service: Preventative service checkups to sustain long-term generation capacity."
  }
];

const SolarQuoteModal = ({ isOpen, onClose, onNavigateContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: '',
    propertyType: 'Home',
    monthlyBill: ''
  });

  const [formError, setFormError] = useState('');
  const [quoteResult, setQuoteResult] = useState(null);

  // Reset modal state when closed
  useEffect(() => {
    if (!isOpen) {
      setFormError('');
      setQuoteResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Validation
    if (!formData.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    const cleanMobile = formData.mobile.replace(/[^0-9]/g, '');
    if (cleanMobile.length !== 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!formData.location.trim()) {
      setFormError('Please enter your area or location (e.g., Dwaraka Nagar, Tenali).');
      return;
    }

    const billValue = Number(formData.monthlyBill);
    if (!formData.monthlyBill || isNaN(billValue) || billValue < 1 || !Number.isInteger(billValue)) {
      setFormError('Please enter a valid whole-number monthly electricity bill amount (minimum ₹1).');
      return;
    }

    // Recommendation logic as specified:
    // If monthly electricity bill <= ₹3000:
    //   Recommended Solar System: 3 kW
    //   Indicative Price: ₹2,20,000
    //   Note: Initial estimate disclaimer
    // If monthly electricity bill > ₹3000:
    //   Recommended Solar Options: 5 kW or 10 kW
    //   Final System Capacity and Price: Contact Us
    //   Explanation: Our team will help you explore a suitable solar system...
    if (billValue <= 3000) {
      setQuoteResult({
        tier: 'small',
        bill: billValue,
        recommendedSystem: '3 kW',
        indicativePrice: '₹2,20,000',
        note: 'This is an initial estimate. Final system capacity and price depend on your property, electricity usage, site assessment, equipment, and applicable policies.'
      });
    } else {
      setQuoteResult({
        tier: 'large',
        bill: billValue,
        recommendedSystem: '5 kW or 10 kW',
        priceDisplay: 'Contact Us',
        explanation: 'Our team will help you explore a suitable solar system based on your electricity consumption and property requirements.'
      });
    }
  };

  const resetForm = () => {
    setQuoteResult(null);
    setFormError('');
  };

  // WhatsApp click handler pre-filling details
  const getWhatsAppMessageUrl = () => {
    const message = `Hello Sun Solar System (Proprietor: Vijay Kumar), I obtained a solar quote recommendation on your website:%0A%0A- Name: ${encodeURIComponent(formData.name)}%0A- Mobile: ${encodeURIComponent(formData.mobile)}%0A- Location: ${encodeURIComponent(formData.location)}%0A- Property: ${encodeURIComponent(formData.propertyType)}%0A- Monthly Bill: Rs. ${encodeURIComponent(formData.monthlyBill)}%0A- Recommendation: ${quoteResult ? encodeURIComponent(quoteResult.recommendedSystem) : ''}%0A%0APlease arrange a site assessment or technical guidance.`;
    return `https://wa.me/919642586296?text=${message}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border-2 border-emerald-100 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
      >
        {/* Header Decorator */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#168447]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 id="quote-modal-title" className="text-xl font-extrabold text-[#0B3D2E]">
                Get Solar Quote
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Sun Solar System • Dwaraka Nagar, Tenali
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Error Banner */}
        {formError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        {/* Modal Body: Either Form or Result View */}
        {!quoteResult ? (
          <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                1. Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., Rajesh Rao"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168447] text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  2. Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  maxLength={10}
                  placeholder="10-digit number"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168447] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  3. Location / Area <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., Morrispet, Tenali"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168447] text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  4. Property Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168447] text-sm bg-white"
                >
                  <option value="Home">Home (Residential)</option>
                  <option value="Shop">Shop (Retail)</option>
                  <option value="Commercial Building">Commercial Building</option>
                  <option value="Industry">Industry / Warehouse</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                  5. Monthly Electricity Bill (₹) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-gray-400 font-bold text-sm">₹</span>
                  <input
                    type="number"
                    name="monthlyBill"
                    min="1"
                    step="1"
                    value={formData.monthlyBill}
                    onChange={handleInputChange}
                    placeholder="e.g., 2000"
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168447] text-sm font-semibold"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="solar-button-glow w-full bg-[#168447] hover:bg-[#0B3D2E] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <Sun className="w-4 h-4 text-[#F5B82E] animate-solar-rays" />
                <span>Get My Solar Recommendation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-gray-500 text-center">
              Guidance tailored for property owners in Tenali and Andhra Pradesh. No automated spam.
            </p>
          </form>
        ) : (
          <div className="space-y-5 animate-fadeIn">
            {/* Recommendation Result Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-[#F5F8F5] border-2 border-[#168447] rounded-2xl p-6 text-left relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#168447] text-white text-xs font-bold uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B82E]" />
                <span>Your Solar Recommendation</span>
              </div>

              <div className="space-y-4">
                {quoteResult.tier === 'small' ? (
                  <>
                    <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-xs">
                      <div className="text-xs text-gray-500 font-medium">Recommended Solar System:</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0B3D2E] mt-0.5">
                        {quoteResult.recommendedSystem}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-xs">
                      <div className="text-xs text-gray-500 font-medium">Indicative Price:</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#168447] mt-0.5">
                        {quoteResult.indicativePrice}
                      </div>
                    </div>

                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
                      <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>{quoteResult.note}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-xs">
                      <div className="text-xs text-gray-500 font-medium">Recommended Solar Options:</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0B3D2E] mt-0.5">
                        {quoteResult.recommendedSystem}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-xs">
                      <div className="text-xs text-gray-500 font-medium">Final System Capacity and Price:</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#168447] mt-0.5">
                        {quoteResult.priceDisplay}
                      </div>
                    </div>

                    <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-[#0B3D2E] leading-relaxed flex items-start gap-2 font-medium">
                      <Zap className="w-4 h-4 text-[#168447] shrink-0 mt-0.5" />
                      <span>{quoteResult.explanation}</span>
                    </div>
                  </>
                )}

                {/* Captured Customer summary */}
                <div className="text-[11px] text-gray-600 border-t border-gray-200 pt-3 flex flex-wrap justify-between gap-y-1">
                  <span>Customer: <strong>{formData.name}</strong></span>
                  <span>Property: <strong>{formData.propertyType}</strong></span>
                  <span>Location: <strong>{formData.location}</strong></span>
                  <span>Monthly Bill: <strong>₹{Number(formData.monthlyBill).toLocaleString('en-IN')}</strong></span>
                </div>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="space-y-2">
              <a
                href={getWhatsAppMessageUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="solar-button-glow w-full bg-[#168447] hover:bg-[#0B3D2E] text-white py-3 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4 text-[#F5B82E]" />
                <span>Discuss this Quote on WhatsApp</span>
              </a>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onNavigateContact();
                  }}
                  className="w-1/2 bg-white hover:bg-gray-50 text-[#0B3D2E] border border-gray-300 py-2.5 rounded-xl text-xs font-semibold transition"
                >
                  Visit Contact Page
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Recalculate</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Header = ({ activePage, setActivePage, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'solutions', label: 'Solar Solutions' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-emerald-100/60' 
        : 'bg-white py-4 border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#168447] rounded-xl p-1 transition"
            aria-label="Sun Solar System - Home"
          >
            <SunSolarLogo animated={true} />
          </button>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`solar-nav-hover px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-[#168447] bg-[#F5F8F5] font-semibold border-b-2 border-[#168447]' 
                      : 'text-gray-700 hover:text-[#168447] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="solar-button-glow bg-emerald-50 text-[#168447] hover:bg-emerald-100 border border-emerald-200 text-xs font-bold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#168447]" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="solar-button-glow bg-[#168447] hover:bg-[#0B3D2E] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition flex items-center gap-1.5 focus:ring-2 focus:ring-[#F5B82E]"
            >
              <Calculator className="w-4 h-4 text-[#F5B82E]" />
              <span>Get Solar Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#168447] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#168447] transition"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-gray-100 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-left transition ${
                      isActive 
                        ? 'text-[#168447] bg-[#F5F8F5] font-semibold border-l-4 border-[#168447]' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#168447]' : 'text-gray-400'}`} />
                  </button>
                );
              })}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="solar-button-glow w-full bg-[#168447] text-white py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 shadow text-sm"
                >
                  <Calculator className="w-4 h-4 text-[#F5B82E]" />
                  <span>Get Solar Quote</span>
                </button>
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#168447] hover:bg-[#0B3D2E] text-white py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 shadow text-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#F5B82E]" />
                  <span>WhatsApp / Contact: {BUSINESS_INFO.whatsappNumber}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const Footer = ({ setActivePage, onOpenQuoteModal }) => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B3D2E] text-white border-t-4 border-[#168447]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-4">
            <SunSolarLogo variant="light" animated={true} />
            <p className="text-gray-300 text-sm leading-relaxed">
              Committed to facilitating solar energy solutions for residential, commercial, and agricultural properties in Tenali and surrounding districts of Andhra Pradesh.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-amber-300 bg-[#168447]/30 p-2.5 rounded-xl border border-[#168447]/50">
              <UserCheck className="w-4 h-4 shrink-0 text-[#F5B82E]" />
              <span>Proprietor: <strong>{BUSINESS_INFO.proprietor}</strong></span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5B82E] mb-4">
              Website Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Sun Solar System' },
                { id: 'services', label: 'Proposed Solar Services' },
                { id: 'solutions', label: 'Solar Solutions & Technology' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => {
                      setActivePage(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white hover:translate-x-1 flex items-center gap-1.5 transition-transform duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#F5B82E]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={onOpenQuoteModal}
                  className="text-[#F5B82E] hover:text-white flex items-center gap-1.5 font-semibold text-xs"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Get Solar Quote Tool</span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5B82E] mb-4">
              Service Categories
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168447]"></span>
                Residential Rooftop Solar
              </li>
              <li className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168447]"></span>
                Commercial PV Installations
              </li>
              <li className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168447]"></span>
                Industrial Heavy Load Solar
              </li>
              <li className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168447]"></span>
                Site Feasibility & Shadow Audit
              </li>
              <li className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168447]"></span>
                Maintenance & System Diagnostics
              </li>
            </ul>
            <p className="text-[11px] text-gray-400 mt-3 italic">
              *Services subject to physical roof audit and site verification.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5B82E] mb-4">
              Verified Business Details
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <span className="text-white font-bold block text-base">{BUSINESS_INFO.name}</span>
                <span className="text-xs text-amber-300 font-medium">Proprietor: {BUSINESS_INFO.proprietor}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#F5B82E] shrink-0 mt-0.5" />
                <span className="leading-snug text-xs sm:text-sm">
                  {BUSINESS_INFO.address}<br />
                  <span className="text-xs text-gray-400">PIN: {BUSINESS_INFO.pincode}</span>
                </span>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#168447] hover:bg-emerald-600 text-white text-xs font-semibold px-3 py-2 rounded-xl transition border border-emerald-400/40 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#F5B82E]" />
                  <span>WhatsApp / Contact: {BUSINESS_INFO.whatsappNumber}</span>
                </a>
                <a
                  href={BUSINESS_INFO.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-950/70 hover:bg-emerald-900 text-gray-200 text-xs px-3 py-1.5 rounded-xl transition border border-emerald-600/30"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#F5B82E]" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. Proprietor: {BUSINESS_INFO.proprietor}. Dwaraka Nagar, Morrispet, Tenali, AP.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-gray-400">
            <span>*Photovoltaic output varies based on insolation and shade factors.</span>
            <span>•</span>
            <span className="text-[#F5B82E]">Solar Energy Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = ({ setActivePage, onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#F5F8F5] via-white to-[#F5F8F5] pt-8 md:pt-16 pb-16 md:pb-24 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#0B3D2E] text-xs md:text-sm font-semibold shadow-xs">
                <Sun className="w-4 h-4 text-[#F5B82E] animate-solar-rays" />
                <span>Solar Energy Solutions in Tenali, Andhra Pradesh</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B3D2E] tracking-tight leading-tight">
                Power Your Future with <span className="text-[#168447] underline decoration-[#F5B82E] decoration-4 underline-offset-4">Solar Energy</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Harness abundant sunlight to power your home or enterprise. Sun Solar System helps residential and commercial customers across Tenali and coastal Andhra Pradesh transition to clean, self-generated electricity through tailored rooftop photovoltaic systems.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="solar-button-glow bg-[#168447] hover:bg-[#0B3D2E] text-white px-7 py-3.5 rounded-xl font-bold shadow-md transition flex items-center justify-center gap-2 group"
                >
                  <Calculator className="w-4 h-4 text-[#F5B82E]" />
                  <span>Get a Solar Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    setActivePage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="solar-interactive-card border-2 border-[#0B3D2E] text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white px-7 py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 bg-white"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-gray-200">
                <div className="solar-interactive-card bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-xs text-gray-500 font-medium">Clean Energy</div>
                  <div className="text-lg font-bold text-[#0B3D2E]">100% Sun</div>
                  <div className="text-[11px] text-[#168447]">Zero Emissions</div>
                </div>
                <div className="solar-interactive-card bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-xs text-gray-500 font-medium">Roof Lifespan</div>
                  <div className="text-lg font-bold text-[#0B3D2E]">Long Term</div>
                  <div className="text-[11px] text-[#168447]">Tier-1 PV Panels</div>
                </div>
                <div className="solar-interactive-card bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-xs text-gray-500 font-medium">Grid Connection</div>
                  <div className="text-lg font-bold text-[#0B3D2E]">Bi-Directional</div>
                  <div className="text-[11px] text-[#168447]">Net Metering Ready</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[420px] sm:max-w-[460px] lg:max-w-none pt-4">
                
                {/* 1. MAIN SQUARE SOLAR IMAGE CONTAINER (aspect-ratio: 1 / 1) */}
                <div className="solar-interactive-card relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F5B82E]/60 ring-2 ring-emerald-600/10 bg-slate-900 group">
                  <img 
                    src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=85" 
                    alt="Realistic rooftop solar panel installation reflecting clear blue sky and sunlight"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1000&q=85";
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient overlay for bottom badge clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="solar-panel-shimmer pointer-events-none" />

                  {/* 2 & 3. CIRCULAR PROPRIETOR PORTRAIT WITH STATIONARY PHOTO AND SEPARATELY ROTATING OUTER BORDER */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col items-center">
                    {/* Outer wrapper maintaining exact position */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                      
                      {/* CRITICAL: ONLY THIS OUTER DECORATIVE BORDER OVERLAY ROTATES */}
                      <div 
                        className="animate-proprietor-ring-spin absolute inset-0 pointer-events-none rounded-full border-2 border-dashed border-[#F5B82E]"
                        style={{ filter: 'drop-shadow(0 0 5px rgba(245, 184, 46, 0.75))' }}
                        aria-hidden="true"
                      />

                      {/* STATIONARY PHOTO CONTAINER - DOES NOT ROTATE */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2.5px] bg-gradient-to-tr from-[#168447] via-[#F5B82E] to-[#0B3D2E] shadow-xl overflow-hidden">
                        <div className="w-full h-full rounded-full overflow-hidden bg-emerald-950 flex flex-col items-center justify-center text-center p-1.5 border border-[#F5B82E]/50">
                          {/* Placeholder badge: Clear notice that real proprietor photo can be uploaded */}
                          <div className="w-8 h-8 rounded-full bg-[#168447]/60 border border-[#F5B82E] flex items-center justify-center text-[#F5B82E] mb-1">
                            <UserCheck className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-extrabold text-white leading-tight">
                            Vijay Kumar
                          </span>
                          <span className="text-[8px] text-amber-300 font-semibold uppercase tracking-wider">
                            Proprietor
                          </span>
                        </div>
                      </div>

                      {/* Tiny verified corner pin */}
                      <div className="absolute -bottom-1 -left-1 bg-[#168447] text-white p-1 rounded-full border border-[#F5B82E] shadow-sm z-30" title="Proprietor: Vijay Kumar">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#F5B82E]" />
                      </div>
                    </div>

                    {/* Stationary label below circular portrait */}
                    <div className="mt-1.5 bg-[#0B3D2E]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#F5B82E]/60 text-white text-[10px] font-bold shadow-md whitespace-nowrap">
                      Vijay Kumar — Proprietor
                    </div>
                  </div>

                  {/* Architecture Info Ribbon at Bottom of Square Solar Image */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-emerald-100 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-emerald-100 text-[#168447]">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-[#0B3D2E]">Rooftop Solar PV Installation</div>
                        <div className="text-[10px] text-gray-500">Tier-1 Monocrystalline Modules • Net Metering Ready</div>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block text-[10px] bg-[#168447] text-white font-semibold px-2 py-1 rounded-md shadow-xs">
                      Tenali, AP
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: Professional Business Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="solar-interactive-card bg-white rounded-3xl border-2 border-emerald-100 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#168447] text-xs font-bold tracking-wide uppercase border border-emerald-200">
                <UserCheck className="w-4 h-4 text-[#F5B82E]" />
                <span>Proprietorship Details</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D2E]">
                Welcome to Sun Solar System
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                Led by Proprietor <strong className="text-[#0B3D2E] underline decoration-[#F5B82E] decoration-2">Vijay Kumar</strong>, Sun Solar System is focused on helping customers explore suitable solar energy solutions for their homes and businesses.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-gray-700">
                <div className="flex items-center gap-2.5 bg-[#F5F8F5] p-3 rounded-xl border border-emerald-100">
                  <UserCheck className="w-5 h-5 text-[#168447]" />
                  <div>
                    <span className="text-xs text-gray-500 block">Proprietor</span>
                    <strong className="text-[#0B3D2E]">Vijay Kumar</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-[#F5F8F5] p-3 rounded-xl border border-emerald-100">
                  <MapPin className="w-5 h-5 text-[#168447]" />
                  <div>
                    <span className="text-xs text-gray-500 block">Location</span>
                    <strong className="text-[#0B3D2E]">Tenali, Andhra Pradesh</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B3D2E] to-[#168447] rounded-2xl text-white text-center space-y-4 shadow-md">
              <SunSolarLogo variant="light" animated={true} />
              <div className="text-xs text-emerald-100">
                Direct WhatsApp consultation with Proprietor Vijay Kumar
              </div>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="solar-button-glow w-full bg-[#F5B82E] hover:bg-yellow-400 text-gray-950 font-bold py-2.5 px-4 rounded-xl text-sm transition flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp: {BUSINESS_INFO.whatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Why Choose Solar Energy? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#168447] font-bold text-xs sm:text-sm uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Smart Energy Transition
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B3D2E] mt-3">
            Why Choose Solar Energy?
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
            Transitioning to solar power provides measurable operational and environmental value for both households and businesses facing escalating conventional grid electricity costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="solar-interactive-card bg-[#F5F8F5] p-7 rounded-2xl border border-emerald-100 hover:border-[#168447]/40 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#168447] text-white flex items-center justify-center mb-5 shadow-sm">
              <Zap className="w-6 h-6 text-[#F5B82E]" />
            </div>
            <h3 className="text-xl font-bold text-[#0B3D2E] mb-2">Potential Electricity Bill Savings</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Generating your own electricity during daylight peak hours offsets consumption drawn from the distribution utility, offering meaningful relief against escalating power tariffs over time.
            </p>
            <div className="mt-4 pt-3 border-t border-emerald-200/60 text-xs text-gray-500">
              *Actual savings depend on sanctioned tariffs, consumer category, and roof exposure.
            </div>
          </div>

          <div className="solar-interactive-card bg-[#F5F8F5] p-7 rounded-2xl border border-emerald-100 hover:border-[#168447]/40 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#0B3D2E] text-white flex items-center justify-center mb-5 shadow-sm">
              <Sun className="w-6 h-6 text-[#F5B82E] animate-solar-rays" />
            </div>
            <h3 className="text-xl font-bold text-[#0B3D2E] mb-2">100% Clean Renewable Energy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Solar panels convert sunlight directly into clean direct current (DC) electricity without emissions, fuel combustion, or noise pollution, actively shrinking your carbon footprint.
            </p>
            <div className="mt-4 pt-3 border-t border-emerald-200/60 text-xs text-gray-500">
              *Zero operating emissions throughout panel operational lifespan.
            </div>
          </div>

          <div className="solar-interactive-card bg-[#F5F8F5] p-7 rounded-2xl border border-emerald-100 hover:border-[#168447]/40 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#168447] text-white flex items-center justify-center mb-5 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0B3D2E] mb-2">Reduced Grid Dependence</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              With on-grid net metering or battery-supported hybrid architectures, property owners insulate themselves from daytime peak power fluctuations and recurring rate revisions.
            </p>
            <div className="mt-4 pt-3 border-t border-emerald-200/60 text-xs text-gray-500">
              *Enables decentralized self-generation right above your premises.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: How Sun Solar System Assists You */}
      <section className="bg-gradient-to-r from-[#0B3D2E] to-[#168447] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[#F5B82E] font-semibold text-xs tracking-wider uppercase">
                Local Focus • Responsible Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                How Sun Solar System Can Help You Explore Solar
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Choosing a solar system is a multi-decade infrastructure decision. Rather than rushing into pre-packaged configurations, Sun Solar System works with homeowners and enterprise operators in Tenali to analyze specific roof dimensions, seasonal shadow patterns, and electricity consumption profiles before proposing an optimal system capacity.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm font-medium">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B82E]" /> Custom System Sizing
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B82E]" /> Transparent Feasibility Audits
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B82E]" /> Local Tenali Ground Support
                </span>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="solar-interactive-card bg-white text-gray-900 p-6 rounded-2xl shadow-xl max-w-sm w-full border border-gray-100 text-center space-y-4">
                <SunSolarLogo className="justify-center" animated={true} />
                <p className="text-xs text-gray-600">
                  Want to find your recommended solar system capacity and initial price estimate?
                </p>
                <button
                  onClick={onOpenQuoteModal}
                  className="solar-button-glow w-full bg-[#168447] hover:bg-[#0B3D2E] text-white py-2.5 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-[#F5B82E]" />
                  <span>Get Solar Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: 3-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#168447] font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Transparent Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B3D2E] mt-3">
            Our 3-Step Solar Journey
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            A straightforward, hassle-free path to evaluating and adopting solar power for your premises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="solar-interactive-card relative bg-white p-7 rounded-2xl border-2 border-gray-100 shadow-sm text-center group hover:border-[#168447]">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border-2 border-[#168447] text-[#168447] flex items-center justify-center font-extrabold text-xl mb-4 group-hover:bg-[#168447] group-hover:text-white transition">
              1
            </div>
            <h3 className="text-lg font-bold text-[#0B3D2E] mb-2">Step 1: Enquire</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Share your contact details, property type (residential, commercial, or industrial), and approximate monthly electricity consumption via our enquiry form.
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-semibold text-[#168447]">
              Initial Discovery & Requirement Review
            </div>
          </div>

          <div className="solar-interactive-card relative bg-white p-7 rounded-2xl border-2 border-gray-100 shadow-sm text-center group hover:border-[#168447]">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border-2 border-[#168447] text-[#168447] flex items-center justify-center font-extrabold text-xl mb-4 group-hover:bg-[#168447] group-hover:text-white transition">
              2
            </div>
            <h3 className="text-lg font-bold text-[#0B3D2E] mb-2">Step 2: Site Assessment</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We evaluate your roof structure, available shadow-free area, orientation towards the south, and electrical service panel readiness.
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-semibold text-[#168447]">
              Physical Audit & Proposed Capacity Sizing
            </div>
          </div>

          <div className="solar-interactive-card relative bg-white p-7 rounded-2xl border-2 border-gray-100 shadow-sm text-center group hover:border-[#168447]">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border-2 border-[#168447] text-[#168447] flex items-center justify-center font-extrabold text-xl mb-4 group-hover:bg-[#168447] group-hover:text-white transition">
              3
            </div>
            <h3 className="text-lg font-bold text-[#0B3D2E] mb-2">Step 3: Installation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Following structural confirmation, compliant mounting hardware, solar panels, and inverters are installed alongside necessary grid synchronisation safety isolators.
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-semibold text-[#168447]">
              Standards-Compliant Execution
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Responsible Savings Caveat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-5">
          <div className="p-3 bg-amber-100 rounded-xl text-amber-800 shrink-0">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base font-bold text-amber-900">
              Clear Notice on Financial Returns & Solar Generation
            </h4>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              Electricity bill reductions and payback periods differ for each customer based on roof shading, seasonal solar irradiance in Andhra Pradesh, actual appliance usage schedules, equipment efficiency, and local electricity distribution company (DISCOM) tariffs. Sun Solar System does not guarantee fixed savings amounts.
            </p>
          </div>
        </div>
      </section>

      {/* Final Home CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="solar-interactive-card bg-[#0B3D2E] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl border border-emerald-800">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Ready to Harness Clean Solar Power in Tenali?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Speak with Proprietor Vijay Kumar and our team to explore feasible solar options for your home, commercial complex, or warehouse.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="solar-button-glow bg-[#F5B82E] hover:bg-yellow-400 text-gray-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-gray-950" />
                <span>Get Instant Solar Quote</span>
              </button>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="solar-button-glow bg-[#168447] hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#F5B82E]" />
                <span>WhatsApp / Contact: {BUSINESS_INFO.whatsappNumber}</span>
              </a>
            </div>
            <div className="text-xs text-gray-400 pt-2 flex items-center justify-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#F5B82E]" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = ({ setActivePage }) => {
  return (
    <div className="space-y-16 py-8 md:py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-50 to-[#F5F8F5] border border-emerald-100 rounded-3xl p-8 md:p-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#168447] uppercase tracking-wider mb-2">
            <Sun className="w-4 h-4 text-[#F5B82E] animate-solar-rays" />
            <span>About Sun Solar System</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B3D2E]">
            Empowering Tenali with Clean, Reliable Solar Energy
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-3xl leading-relaxed">
            Located in Dwaraka Nagar, Morrispet, Tenali, Sun Solar System is dedicated to guiding residents, commercial establishments, and institutions across Andhra Pradesh toward practical, site-specific solar energy solutions.
          </p>
        </div>
      </section>

      {/* SECTION: Dedicated "Meet the Proprietor" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="solar-interactive-card bg-white rounded-3xl border-2 border-emerald-100 p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Solar-themed graphic emblem */}
            <div className="md:col-span-4 flex flex-col items-center justify-center bg-gradient-to-b from-[#0B3D2E] to-[#168447] rounded-2xl p-8 text-center text-white space-y-4 shadow-md">
              <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-[#F5B82E] flex items-center justify-center">
                <Sun className="w-12 h-12 text-[#F5B82E] animate-solar-rays" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#F5B82E] font-semibold">Leadership</span>
                <h3 className="text-xl font-extrabold text-white">{BUSINESS_INFO.proprietor}</h3>
                <span className="text-xs text-emerald-200">Proprietor, Sun Solar System</span>
              </div>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs bg-white text-[#0B3D2E] font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-[#F5B82E] transition"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#168447]" />
                  <span>Connect Directly</span>
                </a>
              </div>
            </div>

            {/* Structured Details */}
            <div className="md:col-span-8 space-y-5 text-gray-700">
              <div className="border-b pb-3">
                <span className="text-[#168447] font-bold text-xs uppercase tracking-wider block">Enterprise Profile</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D2E] mt-1">
                  Meet the Proprietor
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-3.5 rounded-xl bg-[#F5F8F5] border border-emerald-100">
                  <div className="text-xs text-gray-500 font-medium">Name:</div>
                  <div className="text-base font-bold text-[#0B3D2E] mt-0.5">{BUSINESS_INFO.proprietor}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F8F5] border border-emerald-100">
                  <div className="text-xs text-gray-500 font-medium">Designation:</div>
                  <div className="text-base font-bold text-[#168447] mt-0.5">Proprietor</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F8F5] border border-emerald-100">
                  <div className="text-xs text-gray-500 font-medium">Business:</div>
                  <div className="text-base font-bold text-[#0B3D2E] mt-0.5">{BUSINESS_INFO.name}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5F8F5] border border-emerald-100">
                  <div className="text-xs text-gray-500 font-medium">Location:</div>
                  <div className="text-sm font-semibold text-[#0B3D2E] mt-0.5">{BUSINESS_INFO.address}</div>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                As the proprietor of Sun Solar System, Vijay Kumar leads our initiatives in Tenali to deliver dependable, site-evaluated photovoltaic installations tailored for regional consumers and businesses across Andhra Pradesh.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Rooftop Context Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5 text-gray-700 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D2E]">
              Why Solar Energy is Essential for Homes and Businesses
            </h2>
            <p>
              Andhra Pradesh enjoys high annual solar irradiance, with over 300 sunny days each year. For homeowners, rooftop solar turns underutilized terrace surfaces into private power generators, reducing reliance on conventional thermal-heavy grid supply.
            </p>
            <p>
              For commercial offices, shops, cold storage facilities, and small industries in and around Tenali, electricity is one of the most significant recurring operating expenses. Solar photovoltaic systems operate during peak business hours, directly mitigating higher commercial slab charges.
            </p>
            <div className="bg-[#F5F8F5] p-4 rounded-xl border-l-4 border-[#168447] text-gray-800 text-sm">
              <strong className="text-[#0B3D2E] block mb-1">Our Core Commitment:</strong>
              We refrain from unrealistic promises or standardized packages. Every recommendation is made after examining your physical roof orientation, seasonal shading, and past utility billing patterns.
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="solar-interactive-card bg-[#0B3D2E] rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-emerald-800">
              <div className="flex items-center justify-between mb-6 border-b border-emerald-700/60 pb-4">
                <div className="flex items-center gap-3">
                  <SunSolarLogo variant="light" animated={true} />
                </div>
                <span className="text-xs bg-[#168447] text-white px-2.5 py-1 rounded-md font-mono">
                  AP Solar Sector
                </span>
              </div>

              <h3 className="text-base font-bold text-[#F5B82E] mb-3">
                Key Roof Evaluation Criteria
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B82E] shrink-0 mt-0.5" />
                  <span><strong>Roof Orientation & Tilt:</strong> South-facing arrays receive optimal direct sunlight throughout the year in Southern India.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B82E] shrink-0 mt-0.5" />
                  <span><strong>Structural Integrity:</strong> Verification that RCC slabs, sheet roofs, or truss designs can support dead weight and wind loads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B82E] shrink-0 mt-0.5" />
                  <span><strong>Shadow Obstruction Analysis:</strong> Identifying adjacent trees, water tanks, stairwell towers, and future constructions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B82E] shrink-0 mt-0.5" />
                  <span><strong>Sanctioned Electrical Load:</strong> Matching planned kilowatt capacity with discom limits and connected appliance needs.</span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-emerald-700/60 flex items-center justify-between text-xs text-emerald-200">
                <span>Location: Dwaraka Nagar, Tenali</span>
                <span>Coordinates: 16.243° N, 80.640° E</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F5F8F5] py-14 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#168447] font-bold text-xs uppercase tracking-wider">
              Strategic Direction
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D2E] mt-1">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="solar-interactive-card bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#168447] flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B3D2E]">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To simplify the transition to renewable energy for households and businesses in Tenali and surrounding rural and urban areas by providing honest consultations, technically sound rooftop system designs, and diligent post-installation guidance.
              </p>
            </div>

            <div className="solar-interactive-card bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Sun className="w-6 h-6 text-[#F5B82E] animate-solar-rays" />
              </div>
              <h3 className="text-xl font-bold text-[#0B3D2E]">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To become a trusted, accessible local solar energy resource in Andhra Pradesh, recognized for integrity, realistic client expectations, and engineering solutions that deliver clean kilowatt-hours reliably for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <button
          onClick={() => {
            setActivePage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="solar-button-glow inline-flex items-center gap-2 bg-[#168447] hover:bg-[#0B3D2E] text-white px-8 py-3.5 rounded-xl font-bold shadow-md transition"
        >
          <span>Contact Us Today</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};

const ServicesPage = ({ setActivePage }) => {
  return (
    <div className="space-y-12 py-8 md:py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#168447] font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Solar Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B3D2E] mt-3">
            Our Proposed Solar Services
          </h1>
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Sun Solar System provides structured services across the solar adoption lifecycle. Each category is engineered to address technical feasibility, mechanical stability, and energy yield.
          </p>
          
          <div className="mt-6 inline-flex items-center gap-2 text-xs text-amber-800 bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-200 max-w-2xl text-left">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Service Availability Note:</strong> The service categories below reflect our proposed service offerings. Actual delivery and capacity options are confirmed following physical site verification and customer agreement.
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPOSED_SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="solar-interactive-card bg-white rounded-2xl border-2 border-gray-100 hover:border-[#168447] shadow-sm flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#F5F8F5] text-[#168447] flex items-center justify-center group-hover:bg-[#168447] group-hover:text-white transition-colors duration-200 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#168447]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B3D2E] group-hover:text-[#168447] transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Key Features:</div>
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#168447] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#F5F8F5] p-3 rounded-xl text-xs text-gray-600 border border-emerald-50">
                    <span className="font-semibold text-[#0B3D2E]">Best suited for: </span>
                    {service.suitableFor}
                  </div>
                </div>

                <div className="p-6 bg-gray-50/70 border-t border-gray-100 mt-auto">
                  <div className="text-[11px] text-gray-500 italic mb-3">
                    {service.statusNote}
                  </div>
                  <button
                    onClick={() => {
                      setActivePage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="solar-button-glow w-full bg-white hover:bg-[#168447] text-[#0B3D2E] hover:text-white border border-[#168447]/30 hover:border-transparent py-2.5 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Enquire About This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="solar-interactive-card bg-[#0B3D2E] text-white rounded-3xl p-8 md:p-12 border border-emerald-800">
          <div className="max-w-3xl">
            <span className="text-[#F5B82E] text-xs font-bold uppercase tracking-wider">
              Installation Integrity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">
              Engineering Built for Andhra Pradesh Weather
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
              Coastal Andhra Pradesh encounters high summer ambient temperatures, seasonal monsoons, and gusty winds. Solar installations require corrosion-resistant hot-dip galvanised or anodised aluminium mounting brackets, UV-rated DC cabling, dual-ground earthing pits, and dedicated lightning arrestors.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10 text-center">
              <div>
                <div className="text-[#F5B82E] font-extrabold text-xl">Tier-1</div>
                <div className="text-xs text-gray-300 mt-1">Mono-PERC / TOPCon Modules</div>
              </div>
              <div>
                <div className="text-[#F5B82E] font-extrabold text-xl">IP65 / IP66</div>
                <div className="text-xs text-gray-300 mt-1">Weatherproof Inverters</div>
              </div>
              <div>
                <div className="text-[#F5B82E] font-extrabold text-xl">Class A</div>
                <div className="text-xs text-gray-300 mt-1">Galvanised Structures</div>
              </div>
              <div>
                <div className="text-[#F5B82E] font-extrabold text-xl">Dual Earth</div>
                <div className="text-xs text-gray-300 mt-1">Dedicated Surge Grounding</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SolarSolutionsPage = ({ setActivePage, onOpenQuoteModal }) => {
  const [systemTypeTab, setSystemTypeTab] = useState('ongrid');
  const [estimatedMonthlyUnits, setEstimatedMonthlyUnits] = useState(350);

  const suggestedKw = useMemo(() => {
    const raw = estimatedMonthlyUnits / 120;
    return Math.max(1, Math.min(25, Math.round(raw * 10) / 10));
  }, [estimatedMonthlyUnits]);

  const approxRoofArea = useMemo(() => {
    return Math.round(suggestedKw * 90);
  }, [suggestedKw]);

  return (
    <div className="space-y-16 py-8 md:py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#168447] font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Technology & Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B3D2E] mt-3">
            Solar Solutions & Technical Benefits
          </h1>
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Understanding how photovoltaic technology works empowers you to select the appropriate system setup for your home, commercial building, or agricultural land.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="solar-interactive-card bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D2E]">
              How Solar Panels Generate Electricity
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              The photovoltaic (PV) effect transforms electromagnetic radiation from sunlight directly into usable household current in four continuous stages:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="solar-interactive-card p-5 rounded-2xl bg-[#F5F8F5] border border-emerald-100">
              <div className="w-10 h-10 rounded-lg bg-[#168447] text-white flex items-center justify-center font-bold text-sm mb-3">1</div>
              <h3 className="font-bold text-[#0B3D2E] text-base mb-1">Sunlight Absorption</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Silicon semiconductor wafers inside solar panels absorb sunlight photons, releasing free electrons and creating direct current (DC).
              </p>
            </div>

            <div className="solar-interactive-card p-5 rounded-2xl bg-[#F5F8F5] border border-emerald-100">
              <div className="w-10 h-10 rounded-lg bg-[#168447] text-white flex items-center justify-center font-bold text-sm mb-3">2</div>
              <h3 className="font-bold text-[#0B3D2E] text-base mb-1">DC to AC Conversion</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                The solar inverter transforms variable Direct Current (DC) into clean 230V/415V Alternating Current (AC) matching utility grid frequency.
              </p>
            </div>

            <div className="solar-interactive-card p-5 rounded-2xl bg-[#F5F8F5] border border-emerald-100">
              <div className="w-10 h-10 rounded-lg bg-[#168447] text-white flex items-center justify-center font-bold text-sm mb-3">3</div>
              <h3 className="font-bold text-[#0B3D2E] text-base mb-1">Premises Consumption</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Solar-generated AC power flows first to your active appliances (lights, fans, computers, air conditioners, and motors).
              </p>
            </div>

            <div className="solar-interactive-card p-5 rounded-2xl bg-[#F5F8F5] border border-emerald-100">
              <div className="w-10 h-10 rounded-lg bg-[#168447] text-white flex items-center justify-center font-bold text-sm mb-3">4</div>
              <h3 className="font-bold text-[#0B3D2E] text-base mb-1">Bi-Directional Metering</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Surplus daytime electricity is exported to the local electricity grid via a bi-directional net meter, registering export credits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D2E]">
            Core Solar System Components
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            A high-performance solar solution relies on balanced, high-grade balance-of-system (BOS) components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="solar-interactive-card bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="p-3 bg-emerald-100 text-[#168447] w-fit rounded-xl">
              <Sun className="w-6 h-6 animate-solar-rays" />
            </div>
            <h3 className="font-bold text-lg text-[#0B3D2E]">Photovoltaic (PV) Modules</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Mono-crystalline or bifacial solar modules with anti-reflective tempered glass designed to deliver reliable generation over a 25-year performance lifespan.
            </p>
          </div>

          <div className="solar-interactive-card bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="p-3 bg-amber-100 text-[#0B3D2E] w-fit rounded-xl">
              <Zap className="w-6 h-6 text-[#F5B82E]" />
            </div>
            <h3 className="font-bold text-lg text-[#0B3D2E]">Solar Inverter</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              The brain of the system: features Maximum Power Point Tracking (MPPT) algorithms to extract maximum wattage under varying daylight and temperature.
            </p>
          </div>

          <div className="solar-interactive-card bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div className="p-3 bg-blue-100 text-blue-700 w-fit rounded-xl">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#0B3D2E]">Mounting Structure & Protection</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Engineered hot-dip galvanised steel or aluminium frames engineered to withstand local wind velocities, paired with ACDB/DCDB protection boxes.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F8F5] rounded-3xl p-6 sm:p-10 border border-emerald-100">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D2E]">
              Comparing Solar System Types
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Selecting between On-Grid, Off-Grid, and Hybrid depends on your grid stability and power backup objectives.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { id: 'ongrid', label: '1. On-Grid (Grid-Tied) System' },
              { id: 'offgrid', label: '2. Off-Grid (Battery-Based) System' },
              { id: 'hybrid', label: '3. Hybrid Solar System' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSystemTypeTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
                  systemTypeTab === tab.id
                    ? 'bg-[#168447] text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="solar-interactive-card bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
            {systemTypeTab === 'ongrid' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#168447] font-bold text-lg">
                  <Zap className="w-5 h-5 text-[#F5B82E]" />
                  <span>On-Grid (Grid-Tied) Solar System</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Directly linked with the electricity distribution company (DISCOM) grid through a bi-directional net meter. Excess solar energy produced during peak midday sunshine is sent into the grid, earning credits against night-time usage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100">
                    <div className="font-semibold text-xs text-[#0B3D2E] mb-1">Advantages:</div>
                    <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                      <li>Lowest initial capital investment (no expensive battery bank).</li>
                      <li>Minimal ongoing maintenance requirements.</li>
                      <li>Eligible for DISCOM net-metering schemes.</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-100">
                    <div className="font-semibold text-xs text-amber-900 mb-1">Key Consideration:</div>
                    <ul className="text-xs text-amber-800 space-y-1 list-disc list-inside">
                      <li>Inverter automatically shuts down during grid power outages for utility line-worker anti-islanding safety.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {systemTypeTab === 'offgrid' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#168447] font-bold text-lg">
                  <BatteryCharging className="w-5 h-5 text-[#F5B82E]" />
                  <span>Off-Grid Solar System with Battery Storage</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Operates completely independently of the utility electrical grid. Solar modules charge a dedicated battery storage bank (Lithium Ferrophosphate or Tubular Lead-Acid), which powers your loads 24/7.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100">
                    <div className="font-semibold text-xs text-[#0B3D2E] mb-1">Advantages:</div>
                    <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                      <li>Complete electrical self-reliance without grid reliance.</li>
                      <li>Ideal for remote farms, agro-pumps, and locations with frequent grid blackouts.</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-100">
                    <div className="font-semibold text-xs text-amber-900 mb-1">Key Consideration:</div>
                    <ul className="text-xs text-amber-800 space-y-1 list-disc list-inside">
                      <li>Higher equipment expenditure due to battery replacement cycles every 5 to 10 years.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {systemTypeTab === 'hybrid' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#168447] font-bold text-lg">
                  <Layers className="w-5 h-5 text-[#F5B82E]" />
                  <span>Hybrid Solar System (Grid-Tied + Battery Backup)</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Combines the benefits of both worlds: feeds excess solar power back to the grid for net-metering credits while retaining a critical battery backup to keep essential appliances running when the main grid fails.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100">
                    <div className="font-semibold text-xs text-[#0B3D2E] mb-1">Advantages:</div>
                    <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                      <li>Continuous power backup during outages plus net-metering billing benefits.</li>
                      <li>Smart priority management (Solar &gt; Battery &gt; Grid).</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-100">
                    <div className="font-semibold text-xs text-amber-900 mb-1">Key Consideration:</div>
                    <ul className="text-xs text-amber-800 space-y-1 list-disc list-inside">
                      <li>Requires a specialized multi-mode hybrid inverter and battery integration.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sizing & Capacity Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-6 space-y-4 text-gray-700">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D2E]">
              Factors Affecting Solar System Capacity and Cost
            </h2>
            <p className="text-sm leading-relaxed">
              Every solar quote varies because no two rooftops or electrical consumption habits are identical. Primary variables include:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#168447] mt-1.5 shrink-0"></span>
                <span><strong>Sanctioned Load & Tariff Slabs:</strong> Your system capacity must comply with DISCOM sanctioned load limits.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#168447] mt-1.5 shrink-0"></span>
                <span><strong>Rooftop Type & Framing Height:</strong> Flat RCC roofs, high-raised structures to preserve terrace usage, or metal factory sheds affect structural steel costs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#168447] mt-1.5 shrink-0"></span>
                <span><strong>Cable Length & Earthing Distance:</strong> Distance between solar modules, inverter, and the main switchboard affects DC drop and copper cabling lengths.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#168447] mt-1.5 shrink-0"></span>
                <span><strong>Component Grade:</strong> Selection between standard polycrystalline, Mono-PERC, or high-efficiency N-Type TOPCon panels.</span>
              </li>
            </ul>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
              <strong>Transparent Policy:</strong> Sun Solar System does not publish unverified fixed prices or speculative government subsidy amounts. All quotation figures are provided in writing following on-site audit.
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="solar-interactive-card bg-white rounded-2xl border-2 border-[#168447] p-6 sm:p-8 shadow-md space-y-5">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-[#168447]" />
                  <h3 className="font-bold text-[#0B3D2E] text-lg">Solar Capacity Estimator</h3>
                </div>
                <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono">
                  Educational Guide
                </span>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 flex justify-between">
                  <span>Approximate Monthly Electricity Usage (Units / kWh):</span>
                  <span className="text-[#168447] font-bold text-sm">{estimatedMonthlyUnits} Units</span>
                </label>
                <input 
                  type="range" 
                  min="100" 
                  max="2000" 
                  step="50"
                  value={estimatedMonthlyUnits}
                  onChange={(e) => setEstimatedMonthlyUnits(Number(e.target.value))}
                  className="w-full mt-2 accent-[#168447] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>100 Units (Compact Home)</span>
                  <span>1000 Units (Large Home / Store)</span>
                  <span>2000+ Units</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-[#F5F8F5] p-4 rounded-xl border border-emerald-100">
                <div>
                  <div className="text-xs text-gray-500">Suggested Capacity:</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0B3D2E]">~{suggestedKw} kWp</div>
                  <div className="text-[11px] text-gray-500">Kilowatt Peak</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Estimated Roof Space:</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#168447]">~{approxRoofArea} sq.ft</div>
                  <div className="text-[11px] text-gray-500">Shadow-free roof area</div>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 italic leading-snug">
                *Note: This calculation uses an average baseline generation factor of ~4 units per kW per day for Andhra Pradesh. Actual requirements must be assessed through an on-site inspection.
              </p>

              <button
                onClick={onOpenQuoteModal}
                className="solar-button-glow w-full bg-[#168447] hover:bg-[#0B3D2E] text-white py-3 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 shadow"
              >
                <Calculator className="w-4 h-4 text-[#F5B82E]" />
                <span>Find the Right Solar Solution for Your Property</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: 'Residential',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null,
    inProgress: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, error: null, inProgress: true });

    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormStatus({
        submitted: false,
        error: "Please provide both your name and phone number so we can process your enquiry.",
        inProgress: false
      });
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setFormStatus({
        submitted: false,
        error: "Please enter a valid 10-digit mobile contact number.",
        inProgress: false
      });
      return;
    }

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: null,
        inProgress: false
      });
    }, 600);
  };

  return (
    <div className="space-y-16 py-8 md:py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#168447] font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B3D2E] mt-3">
            Contact Sun Solar System
          </h1>
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Have questions regarding rooftop solar installation or wish to schedule a physical site assessment in Tenali? Contact Proprietor Vijay Kumar directly or submit your details below.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="solar-interactive-card lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border-2 border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D2E] mb-2">
              Send a Solar Enquiry
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mb-6">
              Complete the form below. Provide details about your roof or property in Tenali to receive appropriate technical recommendations.
            </p>

            {formStatus.submitted ? (
              <div className="bg-emerald-50 border-2 border-[#168447] rounded-2xl p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#168447] text-white rounded-full">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B3D2E] text-lg">Enquiry Form Captured (Frontend Client)</h3>
                    <p className="text-xs text-gray-600">Reviewing provided inquiry parameters</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-emerald-200 text-xs space-y-2 text-gray-700">
                  <div className="font-semibold text-[#0B3D2E] border-b pb-1">Captured Information:</div>
                  <div><strong>Name:</strong> {formData.name}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Property Type:</strong> {formData.propertyType}</div>
                  {formData.message && <div><strong>Message:</strong> {formData.message}</div>}
                </div>

                <div className="bg-amber-50 border border-amber-300 p-4 rounded-xl text-xs text-amber-900 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-700" />
                    <span>Backend Delivery Notice:</span>
                  </div>
                  <p>
                    This website is currently operating in frontend demonstration mode. Submissions are processed in client memory and are not yet routed to an external database or email service.
                  </p>
                  <p className="text-[11px] text-amber-800">
                    To link this form to an active inbox or CRM, configure an API endpoint, webhook, or service such as EmailJS, Formspree, or your local server. For immediate assistance, reach out directly on WhatsApp.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={BUSINESS_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#168447] hover:bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-2 transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send details via WhatsApp ({BUSINESS_INFO.whatsappNumber})</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormStatus({ submitted: false, error: null, inProgress: false });
                      setFormData({ name: '', phone: '', propertyType: 'Residential', message: '' });
                    }}
                    className="text-xs font-semibold text-[#168447] underline hover:text-[#0B3D2E] py-2"
                  >
                    &larr; Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                {formStatus.error && (
                  <div className="p-3 bg-red-50 border border-red-300 text-red-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{formStatus.error}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Rajesh Kumar"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168447] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., 96XXXXXXXX (10 Digits)"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168447] focus:border-transparent text-sm"
                  />
                  <span className="text-[11px] text-gray-400">Used strictly for scheduling site evaluation.</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Property Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168447] focus:border-transparent text-sm bg-white"
                  >
                    <option value="Residential">Residential (Home, Villa, Apartment)</option>
                    <option value="Commercial">Commercial (Office, Hospital, Retail Shop)</option>
                    <option value="Industrial">Industrial (Mill, Factory, Processing Plant)</option>
                    <option value="Other">Other / Agricultural Farm Shed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Your Message / Roof Information (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mention available roof area, average monthly electricity bill, or specific queries..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#168447] focus:border-transparent text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.inProgress}
                  className="solar-button-glow w-full bg-[#168447] hover:bg-[#0B3D2E] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  {formStatus.inProgress ? (
                    <span>Validating Form...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-gray-500 text-center pt-1">
                  We respect your privacy. Inquiries are handled directly for site engineering assessments.
                </p>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="solar-interactive-card bg-[#F5F8F5] p-6 sm:p-8 rounded-3xl border border-emerald-100 space-y-4">
              <SunSolarLogo animated={true} />
              <div className="border-t border-emerald-200/60 pt-4 space-y-3">
                <div>
                  <span className="text-xs text-[#168447] font-bold uppercase tracking-wider block">Enterprise Leadership</span>
                  <div className="text-base font-bold text-[#0B3D2E]">Proprietor: {BUSINESS_INFO.proprietor}</div>
                  <div className="text-xs text-gray-600 font-medium">{BUSINESS_INFO.name}</div>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <MapPin className="w-5 h-5 text-[#168447] shrink-0 mt-1" />
                  <div className="text-sm text-gray-800">
                    <div className="font-semibold text-[#0B3D2E]">Business Address</div>
                    <div className="text-gray-700 leading-snug mt-0.5">
                      {BUSINESS_INFO.address}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Region: {BUSINESS_INFO.region} • PIN: {BUSINESS_INFO.pincode}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <Clock className="w-5 h-5 text-[#168447] shrink-0 mt-1" />
                  <div className="text-sm text-gray-700">
                    <div className="font-semibold text-[#0B3D2E]">Business Schedule</div>
                    <div>{BUSINESS_INFO.operatingHours}</div>
                    <div className="text-xs text-gray-500">Sundays: By appointment for site visits</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Channels: Replaced Landline placeholder with Verified WhatsApp / Contact */}
            <div className="solar-interactive-card bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="font-bold text-[#0B3D2E] text-sm uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#168447]" />
                <span>Verified Contact Channels</span>
              </h3>

              {/* Verified WhatsApp / Contact Channel */}
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B3D2E] flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-[#168447]" />
                    <span>WhatsApp / Contact</span>
                  </span>
                  <span className="text-[10px] bg-[#168447] text-white font-semibold px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
                <div className="text-base font-extrabold text-[#0B3D2E]">
                  {BUSINESS_INFO.whatsappNumber}
                </div>
                <p className="text-[11px] text-gray-600 leading-tight">
                  Connect with Proprietor Vijay Kumar for rooftop solar feasibility surveys in Tenali and surrounding districts.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <a 
                    href={BUSINESS_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="solar-button-glow flex-1 bg-[#168447] hover:bg-[#0B3D2E] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition"
                  >
                    <MessageSquare className="w-4 h-4 text-[#F5B82E]" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a 
                    href={BUSINESS_INFO.phoneLink}
                    className="solar-interactive-card bg-white hover:bg-gray-50 text-[#0B3D2E] border border-gray-300 py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#168447]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 4. GOOGLE MAPS INTEGRATION: "Find Us on Google Maps" */}
            <div className="solar-interactive-card bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#0B3D2E] text-sm uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#168447]" />
                  <span>Find Us on Google Maps</span>
                </h3>
                <span className="text-[10px] bg-emerald-100 text-[#168447] font-semibold px-2 py-0.5 rounded">
                  Tenali, AP
                </span>
              </div>
              <p className="text-xs text-gray-600">
                Centrally situated at Dwaraka Nagar, Morrispet, Tenali, serving residential and commercial properties across Guntur and Krishna delta regions.
              </p>
              
              {/* Responsive Map View Frame */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-gray-200 bg-slate-100 shadow-inner group">
                <iframe 
                  title="Google Maps Location - Sun Solar System, Dwaraka Nagar, Morrispet, Tenali"
                  src="https://maps.google.com/maps?q=Dwaraka%20Nagar%2C%20Morrispet%2C%20Tenali%2C%20Andhra%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-105"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                {/* Floating Map Pin Indicator */}
                <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-gray-200 text-[10px] font-bold text-[#0B3D2E] shadow-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#168447]" />
                  <span>Dwaraka Nagar, Morrispet</span>
                </div>
              </div>

              {/* "Get Directions" Button with exact requested URL */}
              <a
                href={BUSINESS_INFO.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="solar-button-glow w-full bg-[#0B3D2E] hover:bg-[#168447] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition"
              >
                <MapPin className="w-4 h-4 text-[#F5B82E]" />
                <span>Get Directions on Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useSolarFavicon();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'solutions', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F8F5] text-[#1F2937] font-sans flex flex-col antialiased selection:bg-[#168447] selection:text-white">
      <SolarCustomStyles />

      {/* Modern Get Solar Quote Modal */}
      <SolarQuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onNavigateContact={() => navigateTo('contact')}
      />

      <Header 
        activePage={activePage} 
        setActivePage={navigateTo} 
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      <main className="flex-grow">
        {(() => {
          switch (activePage) {
            case 'home':
              return (
                <HomePage 
                  setActivePage={navigateTo} 
                  onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                />
              );
            case 'about':
              return <AboutPage setActivePage={navigateTo} />;
            case 'services':
              return <ServicesPage setActivePage={navigateTo} />;
            case 'solutions':
              return (
                <SolarSolutionsPage 
                  setActivePage={navigateTo} 
                  onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                />
              );
            case 'contact':
              return <ContactPage />;
            default:
              return (
                <HomePage 
                  setActivePage={navigateTo} 
                  onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                />
              );
          }
        })()}
      </main>

      <Footer 
        setActivePage={navigateTo} 
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />
    </div>
  );
}
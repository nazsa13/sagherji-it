import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  ShieldCheck, 
  Camera, 
  PhoneCall, 
  Fingerprint, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Solar Energy Solutions",
      description: "Harness the power of the sun with our high-efficiency PV panels and smart energy storage systems.",
      icon: <Sun className="w-8 h-8 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e7c?auto=format&fit=crop&q=80&w=800",
      color: "border-orange-500"
    },
    {
      title: "Intrusion Detection",
      description: "Advanced wireless alarm systems, motion sensors, and real-time alerts for complete peace of mind.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
      color: "border-blue-600"
    },
    {
      title: "CCTV Surveillance",
      description: "Crystal clear 4K monitoring with night vision and remote mobile access for 24/7 security.",
      icon: <Camera className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=800",
      color: "border-blue-600"
    },
    {
      title: "Telecom & IP PBX",
      description: "Unified communication systems for businesses, featuring seamless VoIP and hardware integration.",
      icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=80&w=800",
      color: "border-blue-600"
    },
    {
      title: "Biometric Access Control",
      description: "Modern entry management using fingerprint, facial recognition, and smart card technology.",
      icon: <Fingerprint className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      color: "border-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded shadow-lg">
              <span className="text-white font-black text-2xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl tracking-tight leading-none ${scrolled ? 'text-blue-900' : 'text-blue-900 md:text-white'}`}>SAGHERJI</span>
              <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>Integrated Technologies</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Solutions', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`font-medium transition-colors hover:text-orange-500 ${scrolled ? 'text-slate-600' : 'text-white'}`}>
                {item}
              </a>
            ))}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-200">
              Get Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-blue-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu className={scrolled ? "text-blue-900" : "text-white"} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-2xl font-bold md:hidden">
          {['Home', 'Services', 'Solutions', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>{item}</a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover"
            alt="Tech Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-orange-500/30">
              Next-Gen Tech Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Integrating <span className="text-orange-500">Security</span> & <span className="text-blue-400">Innovation</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              We provide smart, integrated technological solutions for modern security, energy, and communication needs. Transforming the way you live and work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all group">
                Explore Our Solutions <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-lg font-bold text-lg border border-white/20 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 right-10 hidden lg:block opacity-30">
            <div className="w-64 h-64 border-8 border-white/10 rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Stats/Highlight Bar */}
      <div className="bg-white py-12 relative z-20 -mt-10 mx-4 sm:mx-8 md:mx-20 rounded-xl shadow-xl flex flex-wrap justify-around items-center border border-slate-100">
        {[
          { label: 'Successful Projects', val: '500+' },
          { label: 'Expert Engineers', val: '50+' },
          { label: 'Support Coverage', val: '24/7' },
          { label: 'Years Experience', val: '15+' }
        ].map((stat, i) => (
          <div key={i} className="text-center p-4">
            <div className="text-3xl font-black text-blue-900">{stat.val}</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold tracking-[0.2em] uppercase mb-2">What We Do</h2>
            <h3 className="text-4xl font-black text-blue-950 mb-4">Our Specialized Solutions</h3>
            <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-b-4 ${service.color}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={service.title} />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#" className="flex items-center font-bold text-blue-900 hover:text-orange-500 transition-colors gap-2">
                    Learn More <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section / Under Construction Teaser */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-black mb-6">Building the Future of <br/><span className="text-orange-400">Integrated Security</span></h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              We are currently expanding our digital presence to serve you better. Our new platform will feature a full product catalog, online technical support, and real-time project tracking.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Comprehensive site surveys and needs assessment",
                "Professional installation by certified technicians",
                "Lifetime maintenance and 24/7 technical support",
                "Cloud-based management for all security systems"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-orange-500 rounded-full p-1"><ChevronRight size={16} /></div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-4 bg-blue-950 p-4 rounded-xl border border-blue-800">
               <div className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold uppercase animate-pulse">Update</div>
               <span className="text-sm font-semibold">New Solar Storage Solutions arriving June 2026</span>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                alt="Installation" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-6 rounded-2xl shadow-xl">
                <Clock className="w-8 h-8 mb-2" />
                <div className="font-bold">Fast Installation</div>
                <div className="text-sm opacity-80 text-white/90">Within 48 Hours</div>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black text-blue-950 mb-6">Let's Secure Your <br/>Project Together</h2>
              <p className="text-slate-600 mb-10 text-lg">
                Have a question or ready to start your journey with us? Our team is standing by to provide expert consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl text-blue-600">
                    <MapPin />
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-950">Our Headquarters</h5>
                    <p className="text-slate-500 text-sm">Industrial Hub Center, Technology Plaza<br/>Suite 402, UAE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl text-blue-600">
                    <Phone />
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-950">Call Us</h5>
                    <p className="text-slate-500 text-sm">+971 (0) 50 123 4567<br/>+971 (0) 4 888 0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl text-blue-600">
                    <Mail />
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-950">Email Support</h5>
                    <p className="text-slate-500 text-sm">info@sagherji.tech<br/>sales@sagherji.tech</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input type="text" className="bg-white p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input type="email" className="bg-white p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Interest</label>
                  <select className="bg-white p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Solar Energy</option>
                    <option>CCTV Surveillance</option>
                    <option>Intrusion Alarms</option>
                    <option>Access Control</option>
                    <option>Telecom/PBX</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea rows="4" className="bg-white p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="md:col-span-2 bg-blue-900 text-white font-bold p-4 rounded-lg hover:bg-blue-800 transition-colors shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded">
                  <span className="text-white font-black text-xl">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-tight leading-none text-white">SAGHERJI</span>
                  <span className="text-[8px] font-semibold tracking-[0.2em] uppercase text-slate-400">Integrated Technologies</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Leading provider of integrated security and smart technology solutions. We protect what matters most to you.
              </p>
              <div className="flex gap-4">
                {['fb', 'tw', 'ln', 'ig'].map(s => (
                  <div key={s} className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-colors uppercase text-[10px] font-bold">{s}</div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-lg">Solutions</h5>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Residential Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial Protection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Industrial Automation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Government Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-lg">Company</h5>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-lg">Newsletter</h5>
              <p className="text-slate-400 text-sm mb-4">Stay updated with the latest tech news.</p>
              <div className="flex bg-white/10 p-1 rounded-lg border border-white/10">
                <input type="email" className="bg-transparent px-3 py-2 text-sm w-full outline-none" placeholder="Enter email" />
                <button className="bg-orange-500 px-4 py-2 rounded font-bold text-sm">Join</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs uppercase tracking-widest font-bold">
            <div>&copy; 2026 SAGHERJI Integrated Technologies. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
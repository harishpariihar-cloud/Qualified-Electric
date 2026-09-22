import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap, ChevronDown } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, services, serviceAreas } from '@/data/site-data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  const simpleNavLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/#about' },
    { label: 'Reviews', to: '/#testimonials' },
    { label: 'FAQs', to: '/#faqs' },
    { label: 'Contact', to: '/#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ink-950/95 backdrop-blur-md shadow-xl shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="container-pad">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-electric-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-ink-950" fill="currentColor" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-electric-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-white text-lg tracking-tight">Qualified Electric</span>
                <span className="text-electric-400 text-xs font-semibold tracking-wide">DENVER, CO</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {simpleNavLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm font-semibold text-ink-200 hover:text-electric-400 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-400 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button className="text-sm font-semibold text-ink-200 hover:text-electric-400 transition-colors duration-200 flex items-center gap-1 relative group">
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-400 group-hover:w-full transition-all duration-300" />
                </button>
                <div
                  className={`absolute top-full right-0 pt-3 transition-all duration-200 ${
                    servicesDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                  }`}
                >
                  <div className="w-[480px] bg-ink-900 border border-ink-700 rounded-2xl shadow-2xl p-3 grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-ink-800 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-electric-500/20 text-electric-400 flex items-center justify-center flex-shrink-0 group-hover/item:bg-electric-500 group-hover/item:text-ink-950 transition-colors">
                          <Zap className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-ink-100 group-hover/item:text-electric-400 transition-colors">
                          {s.shortTitle}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Areas Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAreasDropdown(true)}
                onMouseLeave={() => setAreasDropdown(false)}
              >
                <button className="text-sm font-semibold text-ink-200 hover:text-electric-400 transition-colors duration-200 flex items-center gap-1 relative group">
                  Service Areas
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${areasDropdown ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-400 group-hover:w-full transition-all duration-300" />
                </button>
                <div
                  className={`absolute top-full right-0 pt-3 transition-all duration-200 ${
                    areasDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                  }`}
                >
                  <div className="w-[340px] bg-ink-900 border border-ink-700 rounded-2xl shadow-2xl p-3 grid grid-cols-1 gap-1 max-h-[400px] overflow-y-auto">
                    {serviceAreas.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/${a.slug}`}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-ink-800 transition-colors group/item"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-500 flex-shrink-0" />
                        <span className="text-sm font-semibold text-ink-100 group-hover/item:text-electric-400 transition-colors">
                          Electrician in {a.city}, {a.state}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="btn-primary text-sm py-3 px-5"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 bg-ink-900 transition-transform duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto ${menuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          <nav className="container-pad py-6 flex flex-col gap-1">
            {simpleNavLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="py-3 px-4 rounded-xl text-ink-100 font-semibold hover:bg-ink-800 hover:text-electric-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services Submenu */}
            <button
              className="py-3 px-4 rounded-xl text-ink-100 font-semibold hover:bg-ink-800 hover:text-electric-400 transition-colors flex items-center justify-between"
              onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'services' && (
              <div className="pl-4 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="py-2.5 px-4 rounded-xl text-sm text-ink-300 font-medium hover:bg-ink-800 hover:text-electric-400 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Service Areas Submenu */}
            <button
              className="py-3 px-4 rounded-xl text-ink-100 font-semibold hover:bg-ink-800 hover:text-electric-400 transition-colors flex items-center justify-between"
              onClick={() => setMobileSubmenu(mobileSubmenu === 'areas' ? null : 'areas')}
            >
              Service Areas
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'areas' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'areas' && (
              <div className="pl-4 flex flex-col gap-1">
                {serviceAreas.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/${a.slug}`}
                    className="py-2.5 px-4 rounded-xl text-sm text-ink-300 font-medium hover:bg-ink-800 hover:text-electric-400 transition-colors"
                  >
                    Electrician in {a.city}, {a.state}
                  </Link>
                ))}
              </div>
            )}

            <a
              href={`tel:${PHONE_TEL}`}
              className="btn-primary mt-3"
            >
              <Phone className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

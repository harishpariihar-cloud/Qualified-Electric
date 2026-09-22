import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Zap, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, BUSINESS_NAME, MAIN_LOCATION, MAPS_URL, services, serviceAreas } from '@/data/site-data';

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark bg-grid pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-pad relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-electric-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-ink-950" fill="currentColor" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-white text-lg tracking-tight">Qualified Electric</span>
                <span className="text-electric-400 text-xs font-semibold tracking-wide">DENVER, CO</span>
              </div>
            </Link>
            <p className="text-sm text-ink-400 leading-relaxed mb-5">
              Professional residential electrician serving Denver, CO and surrounding areas. Safe, reliable, code-compliant electrical work for your home.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-electric-500 hover:text-ink-950 flex items-center justify-center transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-electric-500 hover:text-ink-950 flex items-center justify-center transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-electric-500 hover:text-ink-950 flex items-center justify-center transition-all duration-300" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-5 text-base">Denver Services</h3>
            <ul className="space-y-2.5">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="text-sm text-ink-400 hover:text-electric-400 transition-colors duration-200">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-5 text-base">Service Areas</h3>
            <ul className="space-y-2.5">
              {serviceAreas.slice(0, 8).map((a) => (
                <li key={a.slug}>
                  <Link to={`/${a.slug}`} className="text-sm text-ink-400 hover:text-electric-400 transition-colors duration-200">
                    Electrician in {a.city}, {a.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-5 text-base">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="flex items-start gap-3 text-sm text-ink-400 hover:text-electric-400 transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 text-electric-500 group-hover:scale-110 transition-transform" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-ink-400 hover:text-electric-400 transition-colors group">
                  <MapPin className="w-4 h-4 mt-0.5 text-electric-500 group-hover:scale-110 transition-transform" />
                  <span>{MAIN_LOCATION}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-400">
                <Clock className="w-4 h-4 mt-0.5 text-electric-500" />
                <span>Mon - Sun: 7:00 AM - 9:00 PM</span>
              </li>
            </ul>
            <a href={`tel:${PHONE_TEL}`} className="btn-primary mt-5 w-full">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>

        <div className="border-t border-ink-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Licensed & Insured Electrician Serving Denver, CO
          </p>
        </div>
      </div>
    </footer>
  );
}

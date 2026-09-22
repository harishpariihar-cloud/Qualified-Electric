import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/data/site-data';

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className="fixed bottom-5 right-5 z-50 lg:hidden flex items-center gap-2 px-6 py-4 rounded-full bg-electric-500 text-ink-950 font-bold shadow-2xl shadow-electric-500/40 animate-pulse-glow active:scale-95 transition-transform"
      aria-label={`Call ${PHONE_DISPLAY}`}
    >
      <Phone className="w-5 h-5" fill="currentColor" />
      <span className="text-sm">Call Now</span>
    </a>
  );
}

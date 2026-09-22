import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Award, BadgeDollarSign, Battery, Check,
  ChevronRight, Clock, MapPin, Phone, ShieldCheck, Star, Zap,
  AlertTriangle, Plug, Thermometer, Lightbulb, Home, Wrench,
  Cable, ToggleLeft, Fan, BatteryCharging, ClipboardCheck, Search,
} from 'lucide-react';
import SEO, { faqSchema, localBusinessSchema } from '@/components/SEO';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import {
  PHONE_DISPLAY, PHONE_TEL, MAPS_URL, services, serviceAreas,
  testimonials, homepageFaqs, problemsWeSolve, whyChooseUs, projectGallery,
} from '@/data/site-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Wrench, Zap, Cable, Plug, ToggleLeft, Lightbulb, Fan,
  BatteryCharging, ClipboardCheck, ShieldCheck, Search, AlertTriangle,
  Thermometer, Battery, Clock, BadgeDollarSign, Award, MapPin,
};

function SectionHeader({ eyebrow, title, subtitle, light = false }: { eyebrow: string; title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl mb-12 lg:mb-16">
      <span className={light ? 'eyebrow-light' : 'eyebrow'}>
        <span className="w-8 h-px bg-current" />
        {eyebrow}
      </span>
      <h2 className={`section-title mt-4 text-balance ${light ? 'text-white' : 'text-ink-900'}`}>{title}</h2>
      {subtitle && <p className={`section-subtitle ${light ? 'text-ink-300' : ''}`}>{subtitle}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SEO
        title="Electrician in Denver, CO | Qualified Electric"
        description="Qualified Electric is your trusted residential electrician in Denver, CO. Electrical repair, panel upgrades, wiring, lighting, EV chargers, inspections, and more. Call (720) 840-4198."
        schema={[localBusinessSchema, faqSchema(homepageFaqs)]}
      />

      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Problems />
      <WhyChooseUs />
      <ProjectWork />
      <ServiceAreas />
      <Testimonials />
      <FAQSection />
      <Contact />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[720px] lg:min-h-[820px] flex items-center bg-ink-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Professional electrician working on a circuit breaker panel"
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
      </div>
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-30" />
      <div className="absolute right-10 top-1/4 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl" />

      <div className="container-pad relative pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="eyebrow-light mb-6">
            <span className="w-10 h-px bg-electric-400" />
            Denver's Trusted Electrical Professionals
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] text-balance">
            Your Home Deserves <span className="text-electric-400">Qualified</span> Electrical Work.
          </h1>
          <p className="text-xl lg:text-2xl text-ink-200 mt-7 max-w-2xl leading-relaxed">
            Reliable residential electricians in Denver, CO. From quick repairs to complete electrical upgrades, we keep your home safe, comfortable, and powered right.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-9">
            <a href={`tel:${PHONE_TEL}`} className="btn-primary text-lg px-8 py-4">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a href="#services" className="btn-ghost-light text-lg px-8 py-4">
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 text-sm text-ink-300">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-electric-400" /> Licensed & Insured</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-electric-400" /> Upfront Pricing</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-electric-400" /> Local Denver Team</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden xl:block w-[38%] h-36 bg-electric-500/10 backdrop-blur-sm border-t border-l border-white/10 p-6">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-electric-500 flex items-center justify-center">
            <Zap className="w-7 h-7 text-ink-950" fill="currentColor" />
          </div>
          <div>
            <p className="text-white font-bold text-lg">Powering Denver With Confidence</p>
            <p className="text-ink-300 text-sm mt-1">Quality work. Clear communication. Every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="bg-electric-500 py-5">
      <div className="container-pad">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5 lg:gap-8">
          {[
            { icon: ShieldCheck, text: 'Licensed & Insured' },
            { icon: Clock, text: 'Fast Response Times' },
            { icon: BadgeDollarSign, text: 'Upfront Pricing' },
            { icon: Award, text: 'Quality Workmanship' },
            { icon: Phone, text: PHONE_DISPLAY },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-ink-950 font-bold text-sm">
              <Icon className="w-5 h-5" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container-pad">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img src="https://images.pexels.com/photos/17843269/pexels-photo-17843269.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Professional electrician inspecting electrical panels" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-white font-display font-bold text-xl">Qualified Electric</p>
                  <p className="text-ink-300 text-sm mt-1">Serving Denver since day one</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-electric-500 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-ink-950" fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-ink-900 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['https://images.pexels.com/photos/4981802/pexels-photo-4981802.jpeg?auto=compress&cs=tinysrgb&w=100', 'https://images.pexels.com/photos/10871737/pexels-photo-10871737.jpeg?auto=compress&cs=tinysrgb&w=100', 'https://images.pexels.com/photos/21812146/pexels-photo-21812146.jpeg?auto=compress&cs=tinysrgb&w=100'].map((src) => <img key={src} src={src} alt="Qualified Electric team member" className="w-9 h-9 rounded-full object-cover border-2 border-ink-900" />)}
                </div>
                <div>
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-electric-400" fill="currentColor" /><span className="text-white font-bold">5.0</span></div>
                  <p className="text-ink-400 text-xs">Homeowners trust us</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pl-4">
            <SectionHeader
              eyebrow="The Qualified Difference"
              title="Electrical work done right. Every time."
              subtitle="Your home deserves more than a quick fix. It deserves electrical work performed with care, expertise, and a commitment to doing things the right way."
            />
            <div className="space-y-5 text-ink-500 leading-relaxed">
              <p>Qualified Electric is a local Denver electrical company built on a simple idea: homeowners should be able to call an electrician they can trust. We bring professional expertise, honest communication, and meticulous workmanship to every home we enter.</p>
              <p>Whether you need a quick repair, a panel upgrade, or a complete home rewiring, we take the time to understand your needs and give you clear options. No confusing jargon. No surprise charges. Just quality electrical work that keeps your family safe.</p>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-8 pt-8 border-t border-ink-100">
              <div><p className="text-3xl font-extrabold text-ink-900 font-display">100%</p><p className="text-sm text-ink-500 mt-1">Safety-focused work</p></div>
              <div><p className="text-3xl font-extrabold text-ink-900 font-display">24/7</p><p className="text-sm text-ink-500 mt-1">Emergency support</p></div>
            </div>
            <a href={`tel:${PHONE_TEL}`} className="btn-dark mt-8"><Phone className="w-4 h-4" /> Speak With an Electrician</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-ink-50">
      <div className="container-pad">
        <SectionHeader eyebrow="What We Do" title="Complete electrical services for your Denver home." subtitle="From the smallest repair to the biggest upgrade, our experienced electricians have your home covered." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.slice(0, 8).map((service) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <Link key={service.slug} to={`/${service.slug}`} className="group bg-white rounded-2xl p-6 border border-ink-100 card-hover">
                <div className="w-12 h-12 rounded-xl bg-electric-100 text-electric-700 flex items-center justify-center mb-5 group-hover:bg-electric-500 group-hover:text-ink-950 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-ink-900 group-hover:text-electric-700 transition-colors">{service.shortTitle}</h3>
                <p className="text-sm text-ink-500 leading-relaxed mt-2 line-clamp-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-electric-600 font-bold text-sm mt-4 group-hover:gap-2 transition-all">{service.shortTitle} <ArrowRight className="w-4 h-4" /></span>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-10"><Link to="/residential-electrician-denver-co" className="btn-outline">View All Electrical Services <ArrowRight className="w-4 h-4" /></Link></div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="py-20 lg:py-28 bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-30" />
      <div className="container-pad relative">
        <SectionHeader light eyebrow="We Solve Electrical Problems" title="When your electrical system acts up, we're here to help." subtitle="Don't ignore the warning signs. Our electricians diagnose the issue and fix it safely — before a small problem becomes a big one." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problemsWeSolve.map((problem) => {
            const Icon = iconMap[problem.icon] || Zap;
            return <div key={problem.title} className="p-5 rounded-2xl border border-ink-700/70 bg-ink-800/50 hover:bg-ink-800 hover:border-electric-500/40 transition-all duration-300 group"><Icon className="w-6 h-6 text-electric-400 mb-4 group-hover:scale-110 transition-transform" /><h3 className="font-bold text-white">{problem.title}</h3><p className="text-sm text-ink-400 leading-relaxed mt-2">{problem.description}</p></div>;
          })}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"><a href={`tel:${PHONE_TEL}`} className="btn-primary"><Phone className="w-4 h-4" /> Get Help Now</a><span className="text-ink-400 text-sm">Not sure what's wrong? We'll figure it out.</span></div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-pad">
        <SectionHeader eyebrow="Why Denver Homeowners Choose Us" title="The confidence that comes with qualified work." subtitle="We believe the best electrical service is built on trust. That's why we make every part of your experience straightforward and professional." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {whyChooseUs.map(({ icon, title, description }) => { const Icon = iconMap[icon] || ShieldCheck; return <div key={title} className="flex gap-4"><div className="flex-shrink-0 w-12 h-12 rounded-xl bg-ink-900 text-electric-400 flex items-center justify-center"><Icon className="w-6 h-6" /></div><div><h3 className="font-display font-bold text-lg text-ink-900">{title}</h3><p className="text-sm text-ink-500 leading-relaxed mt-2">{description}</p></div></div>; })}
        </div>
      </div>
    </section>
  );
}

function ProjectWork() {
  return (
    <section className="py-20 lg:py-28 bg-ink-50">
      <div className="container-pad">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12 lg:mb-16"><SectionHeader eyebrow="Our Work" title="Built to look good. Built to last." subtitle="A look at the quality electrical work we provide for Denver homeowners." /><a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex btn-dark mb-1">Start Your Project <ArrowUpRight className="w-4 h-4" /></a></div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projectGallery.map((project, i) => <div key={project.title} className={`group relative rounded-2xl overflow-hidden ${i === 0 || i === 3 ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}><img src={project.image} alt={project.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /><div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" /><div className="absolute left-4 bottom-4 lg:left-6 lg:bottom-6"><span className="text-electric-400 text-xs font-bold uppercase tracking-wider">{project.category}</span><h3 className="text-white font-display font-bold text-base lg:text-lg mt-1">{project.title}</h3></div></div>)}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-white">
      <div className="container-pad">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div><SectionHeader eyebrow="Where We Serve" title="Proudly powering homes across the Denver metro." subtitle="Qualified Electric provides trusted residential electrical services in Denver and communities throughout the surrounding metro area." /><div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{serviceAreas.map((area) => <Link key={area.slug} to={`/${area.slug}`} className="group flex items-center gap-2 p-3 rounded-xl bg-ink-50 hover:bg-electric-50 transition-colors"><MapPin className="w-4 h-4 text-electric-600 group-hover:scale-110 transition-transform" /><span className="text-sm font-semibold text-ink-700 group-hover:text-electric-700">{area.city}</span><ChevronRight className="w-3 h-3 text-ink-300 ml-auto group-hover:text-electric-500" /></Link>)}</div><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-electric-600 font-bold text-sm mt-6 hover:gap-3 transition-all">View our service area <ArrowRight className="w-4 h-4" /></a></div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-ink-900"><img src="https://images.pexels.com/photos/16108565/pexels-photo-16108565.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Denver Colorado skyline at sunset" className="w-full h-full object-cover opacity-70" /><div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" /><div className="absolute bottom-7 left-7 right-7"><div className="flex items-center gap-3"><div className="w-11 h-11 rounded-xl bg-electric-500 flex items-center justify-center"><MapPin className="w-5 h-5 text-ink-950" fill="currentColor" /></div><div><p className="text-white font-display font-bold text-xl">Denver, Colorado</p><p className="text-ink-300 text-sm">Our home base. Your trusted electrician.</p></div></div></div></div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-ink-50">
      <div className="container-pad"><SectionHeader eyebrow="Homeowner Reviews" title="The kind of service people talk about." subtitle="Our reputation is built one satisfied homeowner at a time." /><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">{testimonials.slice(0, 8).map((t) => <div key={t.name + t.text} className="bg-white rounded-2xl p-6 border border-ink-100 card-hover"><div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 text-electric-500" fill="currentColor" />)}</div><p className="text-ink-600 text-sm leading-relaxed">“{t.text}”</p><div className="border-t border-ink-100 mt-5 pt-4"><p className="font-bold text-ink-900 text-sm">{t.name}</p><p className="text-xs text-ink-400 mt-1">{t.location}</p></div></div>)}</div></div>
    </section>
  );
}

function FAQSection() {
  return <section id="faqs" className="py-20 lg:py-28 bg-white"><div className="container-pad"><div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20"><div><SectionHeader eyebrow="Frequently Asked Questions" title="Answers before you call." subtitle="Have a question about electrical service in Denver? We've got you covered." /><a href={`tel:${PHONE_TEL}`} className="btn-dark"><Phone className="w-4 h-4" /> Still have questions?</a></div><FAQAccordion faqs={homepageFaqs} /></div></div></section>;
}

function Contact() {
  return <section id="contact" className="py-20 lg:py-28 bg-ink-900 relative overflow-hidden"><div className="absolute inset-0 bg-grid-dark bg-grid opacity-40" /><div className="container-pad relative"><div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"><div><SectionHeader light eyebrow="Get In Touch" title="Let's get your home powered right." subtitle="Tell us what you need help with, or call us directly. Our team is ready to answer your questions and schedule your service." /><div className="space-y-5"><a href={`tel:${PHONE_TEL}`} className="flex items-center gap-4 group"><div className="w-12 h-12 rounded-xl bg-electric-500 flex items-center justify-center group-hover:scale-105 transition-transform"><Phone className="w-5 h-5 text-ink-950" /></div><div><p className="text-ink-400 text-sm">Call us directly</p><p className="text-white font-display font-bold text-xl group-hover:text-electric-400 transition-colors">{PHONE_DISPLAY}</p></div></a><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group"><div className="w-12 h-12 rounded-xl bg-ink-800 border border-ink-700 flex items-center justify-center group-hover:border-electric-500 transition-colors"><MapPin className="w-5 h-5 text-electric-400" /></div><div><p className="text-ink-400 text-sm">Serving</p><p className="text-white font-bold group-hover:text-electric-400 transition-colors">Denver & the surrounding metro</p></div></a></div></div><div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-2"><iframe title="Qualified Electric service area in Denver, Colorado" src="https://www.google.com/maps?q=Denver%2C%20Colorado&output=embed" className="w-full h-[360px] lg:h-[420px] rounded-2xl border-0" loading="lazy" /></div></div></div></section>;
}

import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, Phone, ShieldCheck, Star, Zap } from 'lucide-react';
import { services, PHONE_DISPLAY, PHONE_TEL } from '@/data/site-data';
import SEO, { faqSchema, localBusinessSchema, serviceSchema } from '@/components/SEO';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';

export default function ServicePage({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug) || services[0];
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <>
      <SEO
        title={`${service.title} | Qualified Electric`}
        description={service.metaDescription}
        canonical={`/${service.slug}`}
        ogImage={service.heroImage}
        schema={[localBusinessSchema, serviceSchema(service.title, service.description, service.slug), faqSchema(service.faqs)]}
      />

      <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 bg-ink-950 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.heroImage} alt={service.heroAlt} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
        </div>
        <div className="absolute inset-0 bg-grid-dark bg-grid opacity-20" />
        <div className="container-pad relative">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-ink-400 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-electric-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-ink-200">{service.shortTitle}</span>
            </nav>
            <span className="eyebrow-light"><span className="w-8 h-px bg-electric-400" /> Denver, Colorado</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-5 text-balance">{service.h1}</h1>
            <p className="text-xl text-ink-200 leading-relaxed mt-6 max-w-2xl">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href={`tel:${PHONE_TEL}`} className="btn-primary text-lg"><Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}</a>
              <a href="#service-details" className="btn-ghost-light text-lg">Explore This Service <ArrowRight className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="service-details" className="py-20 lg:py-28 bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">
            <article>
              <span className="eyebrow"><span className="w-8 h-px bg-electric-600" /> Qualified Service</span>
              <h2 className="section-title mt-4">Professional {service.shortTitle.toLowerCase()} you can count on.</h2>
              <div className="space-y-5 mt-7 text-ink-600 text-lg leading-relaxed">
                {service.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {service.whatWeDo.map((item) => <div key={item.title} className="p-5 rounded-2xl bg-ink-50 border border-ink-100"><div className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-electric-500 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-ink-950" strokeWidth={3} /></div><div><h3 className="font-display font-bold text-ink-900">{item.title}</h3><p className="text-sm text-ink-500 leading-relaxed mt-2">{item.description}</p></div></div></div>)}
              </div>
            </article>
            <aside>
              <div className="lg:sticky lg:top-28 rounded-3xl bg-ink-900 p-7 lg:p-8 text-white overflow-hidden relative">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-electric-500/20 blur-2xl" />
                <div className="relative"><div className="w-14 h-14 rounded-2xl bg-electric-500 flex items-center justify-center mb-6"><Zap className="w-7 h-7 text-ink-950" fill="currentColor" /></div><h3 className="font-display font-bold text-2xl">Need {service.shortTitle.toLowerCase()}?</h3><p className="text-ink-300 leading-relaxed mt-3">Talk to a qualified Denver electrician today. We\'ll answer your questions and provide clear, upfront pricing.</p><a href={`tel:${PHONE_TEL}`} className="btn-primary w-full mt-6"><Phone className="w-4 h-4" /> Call Now</a><div className="space-y-3 mt-7 pt-6 border-t border-ink-700"><p className="flex items-center gap-3 text-sm text-ink-300"><ShieldCheck className="w-4 h-4 text-electric-400" /> Licensed & insured professionals</p><p className="flex items-center gap-3 text-sm text-ink-300"><Check className="w-4 h-4 text-electric-400" /> Upfront, transparent pricing</p><p className="flex items-center gap-3 text-sm text-ink-300"><Star className="w-4 h-4 text-electric-400" fill="currentColor" /> 5-star service experience</p></div></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-electric-50">
        <div className="container-pad"><div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"><div><span className="eyebrow"><span className="w-8 h-px bg-electric-600" /> Why It Matters</span><h2 className="section-title mt-4">Safety first. Always.</h2><p className="text-lg text-ink-600 leading-relaxed mt-5">Electrical work is not the place for shortcuts. Professional service protects your home, your family, and your investment.</p></div><div className="space-y-4">{service.whyItMatters.map((point) => <div key={point} className="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm"><div className="w-7 h-7 rounded-full bg-electric-500 flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4 text-ink-950" strokeWidth={3} /></div><p className="text-ink-700 font-medium leading-relaxed">{point}</p></div>)}</div></div></div>
      </section>

      <section className="py-20 lg:py-28 bg-white"><div className="container-pad"><div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20"><div><span className="eyebrow"><span className="w-8 h-px bg-electric-600" /> Common Questions</span><h2 className="section-title mt-4">About {service.shortTitle.toLowerCase()}.</h2><p className="section-subtitle">Get clear answers before you schedule your service.</p></div><FAQAccordion faqs={service.faqs} /></div></div></section>

      <section className="py-20 lg:py-24 bg-ink-50"><div className="container-pad"><div className="flex items-end justify-between mb-10"><div><span className="eyebrow"><span className="w-8 h-px bg-electric-600" /> More Services</span><h2 className="section-title mt-4 text-3xl lg:text-4xl">You may also need</h2></div><Link to="/#services" className="hidden sm:flex items-center gap-2 text-electric-600 font-bold hover:gap-3 transition-all">View all <ArrowRight className="w-4 h-4" /></Link></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{relatedServices.map((related) => <Link key={related.slug} to={`/${related.slug}`} className="bg-white rounded-2xl p-5 border border-ink-100 hover:border-electric-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"><h3 className="font-display font-bold text-ink-900 group-hover:text-electric-700">{related.shortTitle}</h3><p className="text-sm text-ink-500 mt-2 line-clamp-2">{related.description}</p><span className="inline-flex items-center gap-1 text-electric-600 font-bold text-sm mt-4">{related.shortTitle} <ArrowRight className="w-4 h-4" /></span></Link>)}</div></div></section>
      <CTASection title={`Ready for ${service.shortTitle.toLowerCase()} you can trust?`} subtitle="Call Qualified Electric today. We serve Denver and the surrounding metro with safe, professional electrical work." />
    </>
  );
}

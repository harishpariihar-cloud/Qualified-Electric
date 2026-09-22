import { useEffect } from 'react';
import { PHONE_DISPLAY, BUSINESS_NAME, MAIN_LOCATION } from '@/data/site-data';

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object | object[];
};

const SITE_URL = 'https://qualifiedelectricdenver.com';

export default function SEO({ title, description, canonical, ogImage, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:image', ogImage || 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1200', 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage || 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1200');

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical ? `${SITE_URL}${canonical}` : SITE_URL);

    const existingSchema = document.querySelectorAll('script[data-seo-schema]');
    existingSchema.forEach((s) => s.remove());

    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-schema', 'true');
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }

    window.scrollTo(0, 0);
  }, [title, description, canonical, ogImage, schema]);

  return null;
}

export { SITE_URL };

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ElectricalContractor',
  name: BUSINESS_NAME,
  description: `Professional electrician serving ${MAIN_LOCATION} and surrounding areas. Residential electrical repair, panel upgrades, lighting installation, EV charger installation, and more.`,
  telephone: PHONE_DISPLAY,
  url: SITE_URL,
  areaServed: {
    '@type': 'City',
    name: 'Denver',
    state: 'CO',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '07:00',
    closes: '21:00',
  },
};

export const serviceSchema = (serviceName: string, description: string, slug: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description,
  provider: {
    '@type': 'ElectricalContractor',
    name: BUSINESS_NAME,
    telephone: PHONE_DISPLAY,
    areaServed: { '@type': 'City', name: 'Denver', state: 'CO' },
  },
  areaServed: { '@type': 'City', name: 'Denver', state: 'CO' },
  url: `${SITE_URL}/${slug}`,
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

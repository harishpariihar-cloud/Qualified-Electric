export const PHONE = '+1 720-840-4198';
export const PHONE_DISPLAY = '(720) 840-4198';
export const PHONE_TEL = '+17208404198';
export const BUSINESS_NAME = 'Qualified Electric';
export const MAIN_LOCATION = 'Denver, CO';
export const MAPS_URL = 'https://maps.app.goo.gl/yfQm2CX9wSfrVZSg8';

export type ServicePage = {
  slug: string;
  title: string;
  h1: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  icon: string;
  heroImage: string;
  heroAlt: string;
  intro: string[];
  whatWeDo: { title: string; description: string }[];
  whyItMatters: string[];
  faqs: { q: string; a: string }[];
};

export const services: ServicePage[] = [
  {
    slug: 'residential-electrician-denver-co',
    title: 'Residential Electrician in Denver, CO',
    h1: 'Residential Electrician in Denver, CO',
    shortTitle: 'Residential Electrician',
    description: 'Full-service residential electrician serving Denver, CO — wiring, panels, lighting, outlets, inspections and more.',
    metaDescription: 'Qualified Electric provides expert residential electrician services in Denver, CO. From wiring to panel upgrades, lighting to inspections — call (720) 840-4198.',
    icon: 'Home',
    heroImage: 'https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Residential electrician installing wiring in a Denver home',
    intro: [
      'When you need a residential electrician in Denver, CO, Qualified Electric is the team homeowners trust for safe, code-compliant electrical work. From small repairs to whole-home rewiring, our electricians handle every aspect of your home\'s electrical system with precision and care.',
      'We understand that your home is your biggest investment. That\'s why every residential electrical job we take on — whether it\'s installing a new outlet or upgrading your electrical panel — is done to the highest safety standards and meets all Denver building codes.',
    ],
    whatWeDo: [
      { title: 'Whole-Home Wiring', description: 'Complete wiring installation for new construction, remodels, and home additions in Denver.' },
      { title: 'Outlet & Switch Repair', description: 'Repair or replacement of damaged outlets, switches, and GFCI receptacles throughout your home.' },
      { title: 'Panel Upgrades', description: 'Upgrade outdated electrical panels to handle modern power demands safely.' },
      { title: 'Lighting Installation', description: 'Install recessed lighting, fixtures, ceiling fans, and outdoor lighting.' },
      { title: 'Safety Inspections', description: 'Comprehensive electrical safety inspections for home buyers and homeowners.' },
      { title: 'Troubleshooting & Repair', description: 'Diagnose and repair electrical problems — flickering lights, tripped breakers, dead outlets.' },
    ],
    whyItMatters: [
      'A properly wired home protects your family from electrical fires and shock hazards.',
      'Modern electrical panels prevent overloaded circuits and support today\'s appliances and devices.',
      'Code-compliant work ensures your home passes inspection and maintains its value.',
      'Professional installation extends the lifespan of your electrical system and devices.',
    ],
    faqs: [
      { q: 'Do you offer same-day residential electrical service in Denver?', a: 'We strive to accommodate same-day and next-day appointments for residential electrical needs throughout Denver. Call us at (720) 840-4198 to check availability.' },
      { q: 'Are your electricians licensed and insured?', a: 'Yes. All of our electricians are fully licensed to work in Colorado and carry comprehensive insurance for your protection and peace of mind.' },
      { q: 'Do you provide free estimates for residential electrical work?', a: 'Yes, we provide upfront pricing and estimates for residential electrical projects. You\'ll know the cost before any work begins.' },
      { q: 'What areas of Denver do you serve?', a: 'We serve all of Denver and surrounding areas including Aurora, Lakewood, Littleton, Englewood, and more.' },
    ],
  },
  {
    slug: 'electrical-repair-denver-co',
    title: 'Electrical Repair in Denver, CO',
    h1: 'Electrical Repair in Denver, CO',
    shortTitle: 'Electrical Repair',
    description: 'Fast, reliable electrical repair services in Denver, CO. Flickering lights, dead outlets, tripping breakers — we fix it all.',
    metaDescription: 'Need electrical repair in Denver, CO? Qualified Electric fixes outlets, breakers, wiring, and more. Fast, reliable service. Call (720) 840-4198 today.',
    icon: 'Wrench',
    heroImage: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician repairing a circuit breaker panel in Denver',
    intro: [
      'Electrical problems don\'t wait for a convenient time. When you need electrical repair in Denver, CO, Qualified Electric responds quickly to diagnose and fix the issue before it becomes a safety hazard. From flickering lights to sparking outlets, our electricians have seen it all and can fix it all.',
      'Ignoring electrical issues is dangerous — a flickering light or warm outlet can signal a serious underlying problem. Our repair team uses professional diagnostic equipment to find the root cause, not just the symptom, so the fix lasts.',
    ],
    whatWeDo: [
      { title: 'Outlet Repair & Replacement', description: 'Fix dead, loose, or sparking outlets and install new ones where you need them.' },
      { title: 'Breaker & Panel Repair', description: 'Repair tripping breakers, replace faulty breakers, and address panel issues.' },
      { title: 'Wiring Repair', description: 'Repair damaged, frayed, or outdated wiring throughout your home.' },
      { title: 'Switch Repair', description: 'Fix unresponsive, warm, or sparking light switches and dimmers.' },
      { title: 'Lighting Repair', description: 'Repair flickering lights, recessed lighting, and fixture issues.' },
      { title: 'Emergency Repairs', description: 'Fast response for urgent electrical problems that pose safety risks.' },
    ],
    whyItMatters: [
      'Prompt repair prevents small issues from becoming dangerous electrical fires.',
      'Professional diagnosis ensures the root cause is fixed, not just the symptom.',
      'Code-compliant repairs protect your home\'s value and insurability.',
      'Reliable electrical service restores comfort and convenience to your daily life.',
    ],
    faqs: [
      { q: 'How do I know if I need electrical repair?', a: 'Common signs include flickering lights, outlets that don\'t work, breakers that trip frequently, warm switch plates, burning smells, or sparking. If you notice any of these, call us right away.' },
      { q: 'Is electrical repair dangerous to do myself?', a: 'Yes. Electrical work should always be done by a licensed electrician. DIY electrical repair risks shock, fire, and code violations that can affect your home insurance.' },
      { q: 'How much does electrical repair cost in Denver?', a: 'Costs vary depending on the issue. We provide upfront pricing after diagnosis, so you\'ll know the exact cost before we begin any repair work.' },
      { q: 'Do you offer emergency electrical repair?', a: 'Yes. For urgent safety issues, call us at (720) 840-4198 and we\'ll prioritize your repair.' },
    ],
  },
  {
    slug: 'electrical-panel-upgrade-denver-co',
    title: 'Electrical Panel Upgrade in Denver, CO',
    h1: 'Electrical Panel Upgrade in Denver, CO',
    shortTitle: 'Panel Upgrade',
    description: 'Upgrade your electrical panel in Denver, CO. Replace outdated 100-amp panels with safe, modern 200-amp service.',
    metaDescription: 'Upgrade your electrical panel in Denver, CO with Qualified Electric. Replace outdated breakers, add capacity, improve safety. Call (720) 840-4198.',
    icon: 'Zap',
    heroImage: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician upgrading an electrical panel in Denver',
    intro: [
      'Your electrical panel is the heart of your home\'s electrical system. If your panel is outdated, overloaded, or frequently tripping breakers, it\'s time for an electrical panel upgrade. Qualified Electric specializes in panel upgrades throughout Denver, CO, helping homeowners power modern lifestyles safely.',
      'Many Denver homes still have 100-amp or even 60-amp panels that were never designed for today\'s electrical demands — EV chargers, central air, home offices, and smart home devices all draw significant power. We upgrade your panel to 200 amps or more, giving you the capacity you need and the safety you deserve.',
    ],
    whatWeDo: [
      { title: '100A to 200A Upgrades', description: 'Replace undersized panels with 200-amp service to support modern household power needs.' },
      { title: 'Subpanel Installation', description: 'Add subpanels to expand capacity for additions, garages, or ADUs.' },
      { title: 'Breaker Replacement', description: 'Replace faulty, recalled, or outdated breakers with modern, safe alternatives.' },
      { title: 'Panel Relocation', description: 'Move your panel to a more accessible or safer location during remodels.' },
      { title: 'Meter Base Upgrade', description: 'Upgrade your meter base and service entrance to match your new panel capacity.' },
      { title: 'Code Compliance Upgrades', description: 'Bring older panels up to current Denver electrical code requirements.' },
    ],
    whyItMatters: [
      'Modern panels prevent overloaded circuits, reducing fire risk significantly.',
      'Higher amperage supports EV chargers, air conditioning, and modern appliances.',
      'New panels eliminate the danger of recalled or obsolete breaker brands like Federal Pacific or Zinsco.',
      'An upgraded panel increases your home\'s value and is often required for major renovations.',
    ],
    faqs: [
      { q: 'How long does an electrical panel upgrade take?', a: 'Most panel upgrades are completed in a single day. We\'ll give you a precise timeline during your estimate.' },
      { q: 'How much does a panel upgrade cost in Denver?', a: 'Panel upgrade costs vary based on amperage and whether your service entrance needs updating. We provide free, detailed estimates — call (720) 840-4198.' },
      { q: 'Do I need a permit for a panel upgrade?', a: 'Yes, panel upgrades require permits and inspections in Denver. We handle all permitting and coordinate inspections for you.' },
      { q: 'How do I know if my panel needs upgrading?', a: 'Signs include frequent breaker trips, flickering lights when appliances run, a panel that feels warm, or a panel rated under 150 amps. If your home is over 25 years old, it likely needs an assessment.' },
    ],
  },
  {
    slug: 'residential-wiring-denver-co',
    title: 'Residential Wiring in Denver, CO',
    h1: 'Residential Wiring in Denver, CO',
    shortTitle: 'Residential Wiring',
    description: 'Professional residential wiring installation in Denver, CO — new construction, remodels, additions, and rewiring.',
    metaDescription: 'Expert residential wiring services in Denver, CO. New construction, remodels, rewiring, and more. Code-compliant, safe, professional. Call (720) 840-4198.',
    icon: 'Cable',
    heroImage: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Residential electrical wiring installation in a Denver home',
    intro: [
      'Whether you\'re building a new home, remodeling, or replacing outdated wiring, Qualified Electric provides professional residential wiring in Denver, CO that meets all current building codes. Our electricians handle everything from rough-in wiring to final device installation with meticulous attention to detail.',
      'Older Denver homes — especially those built before 1980 — may have aluminum wiring, knob-and-tube wiring, or degraded insulation that poses a fire risk. We specialize in whole-home rewiring that brings your electrical system up to modern safety standards while preserving your home\'s character.',
    ],
    whatWeDo: [
      { title: 'New Construction Wiring', description: 'Complete electrical rough-in and finish wiring for new homes in Denver.' },
      { title: 'Remodel & Addition Wiring', description: 'Wire kitchen remodels, bathroom updates, home additions, and basement finishes.' },
      { title: 'Whole-Home Rewiring', description: 'Replace outdated or dangerous wiring throughout older Denver homes.' },
      { title: 'Knob & Tube Replacement', description: 'Remove and replace legacy knob-and-tube wiring with modern, safe alternatives.' },
      { title: 'Aluminum Wiring Remediation', description: 'Address fire risks from 1960s-70s aluminum wiring with pigtailing or rewiring.' },
      { title: 'Smart Home Pre-Wiring', description: 'Pre-wire for smart home systems, networking, and home automation.' },
    ],
    whyItMatters: [
      'Modern wiring dramatically reduces the risk of electrical fires in older homes.',
      'Proper wiring supports today\'s power-hungry devices and appliances without overloading.',
      'Code-compliant wiring is required to pass inspections and maintain home insurance.',
      'Updated wiring increases property value and makes your home more attractive to buyers.',
    ],
    faqs: [
      { q: 'How long does whole-home rewiring take?', a: 'Depending on the size of your home, rewiring typically takes 3 to 10 days. We work efficiently to minimize disruption and keep your home powered where possible.' },
      { q: 'Do you have to cut into my walls to rewire?', a: 'Some wall access is typically needed, but we use strategic access points and can coordinate with a drywall contractor for seamless repairs. We discuss all access needs during your estimate.' },
      { q: 'Is rewiring worth it for an older home?', a: 'Yes. If your home has knob-and-tube, aluminum, or degraded wiring, rewiring is one of the most important safety investments you can make. It also increases resale value.' },
      { q: 'Can you wire for smart home features?', a: 'Absolutely. We can pre-wire for smart switches, networking, security cameras, and home automation systems during any wiring project.' },
    ],
  },
  {
    slug: 'outlet-repair-denver-co',
    title: 'Outlet Repair in Denver, CO',
    h1: 'Outlet Repair in Denver, CO',
    shortTitle: 'Outlet Repair',
    description: 'Outlet repair and installation in Denver, CO. Fix dead, loose, or sparking outlets. Install GFCI and standard outlets.',
    metaDescription: 'Outlet repair and installation in Denver, CO. Fix dead, loose, or sparking outlets. GFCI installation, tamper-resistant outlets. Call (720) 840-4198.',
    icon: 'Plug',
    heroImage: 'https://images.pexels.com/photos/7937307/pexels-photo-7937307.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician repairing an electrical outlet in Denver',
    intro: [
      'A dead or sparking outlet is more than an inconvenience — it\'s a safety hazard. Qualified Electric provides fast, professional outlet repair in Denver, CO, fixing everything from outlets that have stopped working to GFCI outlets that won\'t reset. We also install new outlets wherever you need them.',
      'Modern electrical code requires GFCI protection in kitchens, bathrooms, garages, and outdoor areas. If your home still has standard outlets in these locations, we\'ll upgrade them to GFCI outlets that protect your family from electrical shock. We also install tamper-resistant outlets for homes with children.',
    ],
    whatWeDo: [
      { title: 'Dead Outlet Repair', description: 'Diagnose and fix outlets that have stopped working, including hidden wiring issues.' },
      { title: 'GFCI Installation', description: 'Install ground-fault circuit interrupter outlets in kitchens, baths, and outdoor areas.' },
      { title: 'Outlet Replacement', description: 'Replace damaged, loose, or discolored outlets with new, safe receptacles.' },
      { title: 'New Outlet Installation', description: 'Add outlets where you need them — behind TVs, in islands, or anywhere power is missing.' },
      { title: 'USB Outlet Installation', description: 'Install outlets with built-in USB charging ports for modern convenience.' },
      { title: 'Outdoor Outlet Installation', description: 'Install weatherproof outdoor outlets for lighting, tools, and EV charging.' },
    ],
    whyItMatters: [
      'Loose or damaged outlets can cause arcing, which is a leading cause of electrical fires.',
      'GFCI outlets prevent fatal shocks in wet areas like kitchens, bathrooms, and outdoors.',
      'Tamper-resistant outlets protect children from inserting objects into receptacles.',
      'Having enough outlets in the right places eliminates the need for unsafe daisy-chained power strips.',
    ],
    faqs: [
      { q: 'Why did my outlet stop working?', a: 'Common causes include a tripped GFCI, a tripped breaker, a loose wire connection, or a failed outlet. We diagnose the exact cause and fix it properly.' },
      { q: 'What is a GFCI outlet and do I need one?', a: 'A GFCI (ground-fault circuit interrupter) outlet shuts off power if it detects a shock hazard. They\'re required by code in kitchens, bathrooms, garages, and outdoor areas.' },
      { q: 'Can you install an outlet anywhere in my home?', a: 'In most cases, yes. We can fish wire through walls and ceilings to add outlets wherever you need them, including floors and islands.' },
      { q: 'How long does outlet repair take?', a: 'Most outlet repairs and replacements take 30 to 60 minutes. We\'ll give you a time estimate when you call.' },
    ],
  },
  {
    slug: 'switch-repair-denver-co',
    title: 'Switch Repair in Denver, CO',
    h1: 'Switch Repair in Denver, CO',
    shortTitle: 'Switch Repair',
    description: 'Switch repair and installation in Denver, CO. Fix unresponsive, warm, or sparking switches. Install dimmers and smart switches.',
    metaDescription: 'Switch repair and installation in Denver, CO. Fix unresponsive or sparking switches. Install dimmers, smart switches, and 3-way switches. Call (720) 840-4198.',
    icon: 'ToggleLeft',
    heroImage: 'https://images.pexels.com/photos/8488059/pexels-photo-8488059.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician repairing a light switch in Denver',
    intro: [
      'A light switch that feels warm, makes a crackling sound, or doesn\'t work at all is a sign of a problem that needs professional attention. Qualified Electric provides expert switch repair in Denver, CO, fixing all types of switches — from standard toggles to three-way switches, dimmers, and smart switches.',
      'Switches wear out over time, and loose connections inside the switch box can cause arcing and heat buildup. Our electricians don\'t just replace the switch — we inspect the wiring behind it to make sure everything is safe and up to code.',
    ],
    whatWeDo: [
      { title: 'Switch Replacement', description: 'Replace worn, broken, or unresponsive light switches with new, reliable ones.' },
      { title: 'Dimmer Switch Installation', description: 'Install LED-compatible dimmer switches for adjustable lighting in any room.' },
      { title: '3-Way & 4-Way Switches', description: 'Repair or install multi-location switches for stairways, hallways, and large rooms.' },
      { title: 'Smart Switch Installation', description: 'Install Wi-Fi and smart-home-compatible switches for app and voice control.' },
      { title: 'Switch Troubleshooting', description: 'Diagnose switches that work intermittently or control the wrong lights.' },
      { title: 'GFCI Switch Combos', description: 'Install combination GFCI outlet and switch units for bathrooms and garages.' },
    ],
    whyItMatters: [
      'A warm or crackling switch can indicate arcing — a fire hazard that needs immediate attention.',
      'Properly rated dimmer switches prevent flickering and extend LED bulb life.',
      'Smart switches add convenience, security, and energy savings to your home.',
      'Correct 3-way and 4-way switch wiring ensures safe, predictable lighting control.',
    ],
    faqs: [
      { q: 'Why is my light switch warm?', a: 'A warm switch is a sign of a loose connection or an overloaded circuit. This is a safety hazard — turn off the breaker and call us right away.' },
      { q: 'Can any light be put on a dimmer?', a: 'Most modern LED lights can be dimmed, but you need a dimmer rated for LED use and dimmable bulbs. We\'ll make sure your dimmer and lights are compatible.' },
      { q: 'Do you install smart switches?', a: 'Yes, we install all major smart switch brands including those that work with Alexa, Google Home, and Apple HomeKit.' },
      { q: 'Why does my switch control the wrong light?', a: 'This usually means the wiring was done incorrectly or a previous DIY attempt mixed up the travelers. We\'ll diagnose and rewire it correctly.' },
    ],
  },
  {
    slug: 'lighting-installation-denver-co',
    title: 'Lighting Installation in Denver, CO',
    h1: 'Lighting Installation in Denver, CO',
    shortTitle: 'Lighting Installation',
    description: 'Professional lighting installation in Denver, CO — recessed lighting, fixtures, outdoor lighting, and more.',
    metaDescription: 'Lighting installation in Denver, CO. Recessed lighting, chandeliers, outdoor lighting, under-cabinet lights. Professional, safe, beautiful. Call (720) 840-4198.',
    icon: 'Lightbulb',
    heroImage: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Beautiful lighting installation in a Denver home',
    intro: [
      'The right lighting transforms a space — making it more functional, more beautiful, and more energy-efficient. Qualified Electric provides professional lighting installation in Denver, CO, handling everything from recessed lighting to chandeliers, outdoor fixtures to under-cabinet LEDs.',
      'Whether you\'re upgrading a single room or re-lighting your entire home, our electricians ensure every fixture is installed safely, wired correctly, and positioned for maximum impact. We also help you choose energy-efficient LED options that save on your electric bill while providing superior light quality.',
    ],
    whatWeDo: [
      { title: 'Recessed Lighting', description: 'Install canless and can-style recessed lights for clean, modern ceilings.' },
      { title: 'Fixture Installation', description: 'Hang chandeliers, pendant lights, flush mounts, and ceiling fixtures of all sizes.' },
      { title: 'Outdoor Lighting', description: 'Install landscape lighting, pathway lights, security lights, and exterior fixtures.' },
      { title: 'Under-Cabinet Lighting', description: 'Install LED under-cabinet and toe-kick lighting for kitchens and bathrooms.' },
      { title: 'Track & Rail Lighting', description: 'Install adjustable track lighting for galleries, kitchens, and living spaces.' },
      { title: 'Smart Lighting', description: 'Install smart bulbs, switches, and lighting systems for app and voice control.' },
    ],
    whyItMatters: [
      'Properly installed lighting enhances your home\'s beauty, comfort, and resale value.',
      'LED lighting uses up to 80% less energy than incandescent and lasts 25 times longer.',
      'Outdoor lighting improves security and curb appeal while extending usable outdoor time.',
      'Professional installation ensures fixtures are safely supported and wired to code.',
    ],
    faqs: [
      { q: 'Can you install recessed lighting in an existing ceiling?', a: 'Yes. We can retrofit recessed lights into existing ceilings with minimal disruption using remodel housing that doesn\'t require access from above.' },
      { q: 'Do you install outdoor and landscape lighting?', a: 'Absolutely. We install pathway lights, spotlights, deck lighting, and security lighting — all with proper weatherproofing and GFCI protection.' },
      { q: 'Can you help me choose the right lighting for my space?', a: 'Yes. We\'ll advise on fixture types, color temperature, brightness levels, and placement to achieve the look and function you want.' },
      { q: 'Do you install smart lighting systems?', a: 'Yes, we install smart bulbs, smart switches, and whole-home lighting control systems from major brands.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation-denver-co',
    title: 'Ceiling Fan Installation in Denver, CO',
    h1: 'Ceiling Fan Installation in Denver, CO',
    shortTitle: 'Ceiling Fan Installation',
    description: 'Ceiling fan installation in Denver, CO. Safe mounting, proper wiring, and support for fans of all sizes.',
    metaDescription: 'Ceiling fan installation in Denver, CO. Safe mounting, proper wiring, support box installation. Indoor and outdoor fans. Call (720) 840-4198.',
    icon: 'Fan',
    heroImage: 'https://images.pexels.com/photos/6835109/pexels-photo-6835109.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Ceiling fan installed in a Denver home',
    intro: [
      'A ceiling fan keeps your home comfortable year-round and can lower your energy bills by supplementing your HVAC system. Qualified Electric provides professional ceiling fan installation in Denver, CO, ensuring every fan is safely mounted, properly wired, and securely supported.',
      'Many homes don\'t have the right support box for a ceiling fan — a standard light fixture box can\'t hold the weight and vibration of a fan. We install fan-rated support boxes and bracing to make sure your ceiling fan is safe, wobble-free, and built to last.',
    ],
    whatWeDo: [
      { title: 'Indoor Fan Installation', description: 'Install ceiling fans in bedrooms, living rooms, kitchens, and home offices.' },
      { title: 'Outdoor Fan Installation', description: 'Install wet-rated and damp-rated fans on covered patios and porches.' },
      { title: 'Fan Support Box Installation', description: 'Install fan-rated support boxes and bracing for safe, wobble-free mounting.' },
      { title: 'Fan Replacement', description: 'Remove old fans and install new ones, including remote-controlled and smart fans.' },
      { title: 'Light Kit Installation', description: 'Add or replace light kits on existing ceiling fans.' },
      { title: 'Fan Switch & Remote Setup', description: 'Install wall controls, remotes, and smart fan controllers.' },
    ],
    whyItMatters: [
      'Proper support prevents ceiling fans from falling — a critical safety concern.',
      'Correctly installed fans reduce energy costs by improving heating and cooling efficiency.',
      'Outdoor-rated fans extend comfortable outdoor living through Denver\'s warm months.',
      'Professional wiring ensures safe operation of fan motors, lights, and controls.',
    ],
    faqs: [
      { q: 'Can you install a ceiling fan where there was only a light fixture?', a: 'Yes, but we\'ll need to install a fan-rated support box. Standard light boxes aren\'t strong enough for the weight and vibration of a ceiling fan.' },
      { q: 'How long does ceiling fan installation take?', a: 'Most installations take 1 to 2 hours. If we need to install a support box or run new wiring, it may take longer.' },
      { q: 'Can you install a ceiling fan outdoors?', a: 'Yes, we install outdoor-rated ceiling fans on covered patios and porches. We ensure the fan and wiring are rated for outdoor use.' },
      { q: 'Do you install smart ceiling fans?', a: 'Yes, we install smart fans with Wi-Fi controls, remote systems, and smart home integration.' },
    ],
  },
  {
    slug: 'ev-charger-installation-denver-co',
    title: 'EV Charger Installation in Denver, CO',
    h1: 'EV Charger Installation in Denver, CO',
    shortTitle: 'EV Charger Installation',
    description: 'EV charger installation in Denver, CO. Level 2 home charging stations for all electric vehicle brands.',
    metaDescription: 'EV charger installation in Denver, CO. Level 2 home charging stations for Tesla, Chevy, Ford, and all EVs. Fast, professional. Call (720) 840-4198.',
    icon: 'BatteryCharging',
    heroImage: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'EV charger installation in Denver, CO',
    intro: [
      'As more Denver homeowners switch to electric vehicles, a Level 2 home charging station is becoming an essential upgrade. Qualified Electric provides professional EV charger installation in Denver, CO, giving you the convenience of a full charge overnight without relying on public charging stations.',
      'We install Level 2 chargers for all EV brands — Tesla, Chevy Bolt, Ford Mustang Mach-E, Rivian, and more. Our electricians assess your panel capacity, install a dedicated 240V circuit, and mount your charger in the optimal location for your garage or driveway.',
    ],
    whatWeDo: [
      { title: 'Level 2 Charger Installation', description: 'Install 240V Level 2 home charging stations for all EV brands and models.' },
      { title: 'Tesla Wall Connector', description: 'Install Tesla Wall Connectors for Tesla owners in Denver.' },
      { title: 'Universal EV Chargers', description: 'Install J1772 and NACS-compatible chargers that work with any EV.' },
      { title: 'Panel Assessment & Upgrades', description: 'Assess your panel\'s capacity and upgrade if needed to support EV charging.' },
      { title: 'Outdoor Charger Installation', description: 'Install weatherproof chargers for driveway and carport charging.' },
      { title: 'Smart Charger Setup', description: 'Configure Wi-Fi-enabled chargers with apps for scheduling and energy tracking.' },
    ],
    whyItMatters: [
      'A Level 2 charger charges your EV 5-10 times faster than a standard outlet.',
      'Home charging costs a fraction of public charging and is far more convenient.',
      'Proper installation with a dedicated circuit prevents overloading your electrical panel.',
      'An installed EV charger adds property value as EV adoption continues to grow in Colorado.',
    ],
    faqs: [
      { q: 'How much does EV charger installation cost in Denver?', a: 'Costs vary based on your panel capacity, charger brand, and installation location. We provide free estimates — call (720) 840-4198.' },
      { q: 'Do I need a panel upgrade for an EV charger?', a: 'It depends on your panel\'s capacity and current load. We assess your panel during the estimate and let you know if an upgrade is needed.' },
      { q: 'What charger should I buy?', a: 'We can recommend chargers based on your EV model, charging needs, and budget. We install all major brands including Tesla, ChargePoint, and JuiceBox.' },
      { q: 'How long does installation take?', a: 'Most EV charger installations take 2 to 4 hours. If a panel upgrade is needed, it may take longer.' },
    ],
  },
  {
    slug: 'electrical-inspection-denver-co',
    title: 'Electrical Inspection in Denver, CO',
    h1: 'Electrical Inspection in Denver, CO',
    shortTitle: 'Electrical Inspection',
    description: 'Comprehensive electrical inspection in Denver, CO. Safety inspections for home buyers, sellers, and homeowners.',
    metaDescription: 'Electrical inspection in Denver, CO. Comprehensive safety inspections for home buyers, sellers, and homeowners. Detailed reports. Call (720) 840-4198.',
    icon: 'ClipboardCheck',
    heroImage: 'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician performing an electrical inspection in Denver',
    intro: [
      'An electrical inspection gives you a clear picture of your home\'s electrical system — what\'s safe, what needs attention, and what should be replaced. Qualified Electric provides thorough electrical inspections in Denver, CO for home buyers, sellers, and homeowners who want peace of mind.',
      'Whether you\'re buying an older Denver home, planning a renovation, or just want to make sure your electrical system is safe, our detailed inspection covers every component — from your panel and wiring to outlets, switches, grounding, and surge protection. You\'ll receive a clear report with findings and recommendations.',
    ],
    whatWeDo: [
      { title: 'Pre-Purchase Inspections', description: 'Comprehensive electrical inspections for home buyers in Denver.' },
      { title: 'Safety Inspections', description: 'Full safety assessment of panels, wiring, outlets, switches, and grounding.' },
      { title: 'Insurance Inspections', description: 'Inspections required by insurance companies for older homes.' },
      { title: 'Remodel Inspections', description: 'Assess your electrical system before renovations to plan for upgrades.' },
      { title: 'Code Compliance Audits', description: 'Identify wiring and components that don\'t meet current Denver electrical code.' },
      { title: 'Detailed Reports', description: 'Receive a written report with photos, findings, and prioritized recommendations.' },
    ],
    whyItMatters: [
      'An inspection identifies hidden hazards before they cause fires or shocks.',
      'Pre-purchase inspections help you negotiate repairs and make informed buying decisions.',
      'Code compliance findings protect your home\'s value and insurability.',
      'Knowing your system\'s condition helps you plan and budget for future upgrades.',
    ],
    faqs: [
      { q: 'How long does an electrical inspection take?', a: 'A thorough inspection typically takes 1 to 3 hours depending on the size and age of your home. You\'ll receive a detailed report afterward.' },
      { q: 'Do I need an inspection if my home passed a general home inspection?', a: 'General home inspectors are not required to be electricians. An electrical inspection by a licensed electrician goes much deeper and can catch issues general inspections miss.' },
      { q: 'What if the inspection finds problems?', a: 'We provide a prioritized list of findings and recommendations. You\'ll know exactly what needs immediate attention and what can wait. We can also provide estimates for any recommended repairs.' },
      { q: 'How often should I have my electrical system inspected?', a: 'For homes over 30 years old, we recommend an inspection every 5 years. Newer homes can typically go 10 years between inspections.' },
    ],
  },
  {
    slug: 'surge-protection-denver-co',
    title: 'Surge Protection in Denver, CO',
    h1: 'Surge Protection in Denver, CO',
    shortTitle: 'Surge Protection',
    description: 'Whole-home surge protection in Denver, CO. Protect your electronics and appliances from power surges.',
    metaDescription: 'Whole-home surge protection in Denver, CO. Protect electronics, appliances, and HVAC from power surges. Professional installation. Call (720) 840-4198.',
    icon: 'ShieldCheck',
    heroImage: 'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Surge protection installation in Denver',
    intro: [
      'A power surge can destroy thousands of dollars of electronics and appliances in an instant. Qualified Electric installs whole-home surge protection in Denver, CO that guards your entire electrical system — from your HVAC and refrigerator to your TV, computer, and phone charger.',
      'Surges come from more than just lightning. They\'re caused by grid switching, downed power lines, and even large appliances cycling on and off inside your home. Over time, these small surges degrade your electronics. A whole-home surge protector installed at your panel stops surges before they reach your devices.',
    ],
    whatWeDo: [
      { title: 'Whole-Home Surge Protectors', description: 'Install panel-mounted surge protectors that guard your entire home.' },
      { title: 'Point-of-Use Protection', description: 'Install surge-protected outlets for sensitive electronics and home theaters.' },
      { title: 'Surge Protector Replacement', description: 'Replace old or expired surge protectors that no longer provide protection.' },
      { title: 'Lightning Protection', description: 'Install lightning protection systems for homes in storm-prone areas.' },
      { title: 'Surge Assessment', description: 'Evaluate your home\'s surge risk and recommend the right level of protection.' },
      { title: 'Smart Home Protection', description: 'Protect smart home systems, networking equipment, and automation controllers.' },
    ],
    whyItMatters: [
      'A single surge can destroy TVs, computers, appliances, and HVAC equipment worth tens of thousands of dollars.',
      'Whole-home protection covers devices that plug-in strips can\'t — like your refrigerator and HVAC.',
      'Many homeowners insurance policies don\'t fully cover surge damage, making prevention essential.',
      'Surge protection extends the lifespan of all your electronic devices and appliances.',
    ],
    faqs: [
      { q: 'What\'s the difference between a power strip and whole-home surge protection?', a: 'Power strips only protect what\'s plugged into them and don\'t cover large appliances. Whole-home surge protection is installed at your panel and protects everything in your home, including your HVAC and refrigerator.' },
      { q: 'Does whole-home surge protection replace power strips?', a: 'For maximum protection, use both. Whole-home protection handles large surges at the panel, while point-of-use strips protect sensitive electronics from smaller, residual surges.' },
      { q: 'How long does a whole-home surge protector last?', a: 'Most whole-home surge protectors last 3 to 5 years, depending on how many surges they absorb. We can check and replace them when they expire.' },
      { q: 'Will surge protection protect against lightning?', a: 'Whole-home surge protection significantly reduces lightning damage, but no system can guarantee 100% protection from a direct strike. For full protection, we recommend combining surge protection with a lightning protection system.' },
    ],
  },
  {
    slug: 'generator-installation-denver-co',
    title: 'Generator Installation in Denver, CO',
    h1: 'Generator Installation in Denver, CO',
    shortTitle: 'Generator Installation',
    description: 'Home generator installation in Denver, CO. Standby generators that keep your home powered during outages.',
    metaDescription: 'Generator installation in Denver, CO. Standby home generators that automatically power your home during outages. Professional installation. Call (720) 840-4198.',
    icon: 'Zap',
    heroImage: 'https://images.pexels.com/photos/18816918/pexels-photo-18816918.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Home generator installation in Denver, CO',
    intro: [
      'Denver\'s winter storms and high winds can knock out power for hours or even days. A standby generator keeps your home running — heat, lights, refrigeration, and medical equipment — automatically. Qualified Electric provides professional generator installation in Denver, CO, from sizing and selection to electrical connection and startup.',
      'Unlike portable generators that require fueling and manual setup in the dark, a standby generator kicks in automatically within seconds of a power outage. We handle the electrical installation, transfer switch, and integration with your home\'s system, so you\'re protected before the next storm hits.',
    ],
    whatWeDo: [
      { title: 'Standby Generator Installation', description: 'Install automatic standby generators that power your home during outages.' },
      { title: 'Generator Sizing', description: 'Help you choose the right generator size for your home\'s power needs.' },
      { title: 'Transfer Switch Installation', description: 'Install automatic transfer switches that switch to generator power seamlessly.' },
      { title: 'Generator Electrical Hookup', description: 'Connect your generator to your home\'s electrical panel safely and to code.' },
      { title: 'Portable Generator Hookups', description: 'Install manual transfer switches for portable generator use.' },
      { title: 'Generator Maintenance Wiring', description: 'Wire generator maintenance systems and monitoring controls.' },
    ],
    whyItMatters: [
      'Automatic standby power keeps your heating, refrigeration, and medical equipment running during outages.',
      'Standby generators run on natural gas or propane — no refueling in dangerous weather.',
      'Automatic transfer switches mean power is restored in seconds, even when you\'re not home.',
      'A permanently installed generator increases your home\'s value and resale appeal.',
    ],
    faqs: [
      { q: 'How big of a generator do I need for my home?', a: 'It depends on what you want to power. We can size a generator to run your whole home or just essential circuits. We\'ll help you choose during your estimate.' },
      { q: 'How long does generator installation take?', a: 'Generator installation typically takes 1 to 2 days, depending on the complexity of the electrical hookup and any gas line work needed.' },
      { q: 'Do I need a permit for a generator?', a: 'Yes, generator installation requires permits and inspections in Denver. We handle all permitting and coordinate inspections for you.' },
      { q: 'Can a generator power my whole house?', a: 'Yes. With a properly sized standby generator and automatic transfer switch, your entire home can run on generator power during an outage.' },
    ],
  },
  {
    slug: 'electrical-troubleshooting-denver-co',
    title: 'Electrical Troubleshooting in Denver, CO',
    h1: 'Electrical Troubleshooting in Denver, CO',
    shortTitle: 'Electrical Troubleshooting',
    description: 'Expert electrical troubleshooting in Denver, CO. Diagnose and fix flickering lights, tripping breakers, and mystery issues.',
    metaDescription: 'Electrical troubleshooting in Denver, CO. Diagnose and fix flickering lights, tripping breakers, dead circuits, and more. Expert electricians. Call (720) 840-4198.',
    icon: 'Search',
    heroImage: 'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'Electrician troubleshooting an electrical issue in Denver',
    intro: [
      'Electrical problems can be frustrating and dangerous — especially when you can\'t figure out what\'s causing them. Qualified Electric provides expert electrical troubleshooting in Denver, CO, using professional diagnostic tools and years of experience to find the root cause of any electrical issue.',
      'From breakers that trip for no apparent reason to lights that flicker when the AC kicks on, from outlets that work intermittently to circuits that have gone completely dead, our electricians have the tools and expertise to diagnose the problem accurately and fix it right the first time.',
    ],
    whatWeDo: [
      { title: 'Breaker Trip Diagnosis', description: 'Find out why your breakers keep tripping and fix the underlying cause.' },
      { title: 'Flickering Light Diagnosis', description: 'Identify why your lights flicker or dim and resolve the issue.' },
      { title: 'Dead Circuit Repair', description: 'Trace and repair circuits that have lost power completely.' },
      { title: 'Grounding Issues', description: 'Diagnose and fix grounding problems that cause shocks or equipment damage.' },
      { title: 'Voltage Drop Analysis', description: 'Identify voltage drops that cause dimming lights and appliance issues.' },
      { title: 'Mystery Issue Diagnosis', description: 'Track down and fix electrical problems other electricians couldn\'t find.' },
    ],
    whyItMatters: [
      'Accurate diagnosis prevents unnecessary repairs and saves you money.',
      'Hidden electrical issues can cause fires, shocks, and equipment damage if left unfixed.',
      'Professional troubleshooting identifies root causes, not just symptoms.',
      'Fixing underlying issues restores safety and reliability to your electrical system.',
    ],
    faqs: [
      { q: 'Why do my breakers keep tripping?', a: 'Breakers trip due to overloaded circuits, short circuits, or ground faults. We use diagnostic tools to identify the exact cause and fix it — whether that\'s redistributing loads, repairing wiring, or replacing a faulty breaker.' },
      { q: 'Why do my lights flicker when I turn on an appliance?', a: 'This usually indicates a voltage drop caused by a loose connection, an undersized circuit, or a failing neutral. We can diagnose and fix the underlying issue.' },
      { q: 'How much does electrical troubleshooting cost?', a: 'Troubleshooting costs vary based on the complexity of the issue. We provide upfront pricing after our initial diagnosis. Call (720) 840-4198 for details.' },
      { q: 'Can you find problems other electricians couldn\'t?', a: 'We specialize in difficult-to-diagnose electrical issues. Our electricians use advanced diagnostic equipment and have extensive experience tracking down problems others miss.' },
    ],
  },
];

export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  description: string;
  metaDescription: string;
};

export const serviceAreas: ServiceArea[] = [
  { slug: 'electrician-aurora-co', city: 'Aurora', state: 'CO', description: 'Electrician services in Aurora, CO — residential electrical repair, panel upgrades, lighting installation, EV charger installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Aurora, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
  { slug: 'electrician-lakewood-co', city: 'Lakewood', state: 'CO', description: 'Electrician services in Lakewood, CO — residential electrical repair, panel upgrades, lighting installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Lakewood, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
  { slug: 'electrician-littleton-co', city: 'Littleton', state: 'CO', description: 'Electrician services in Littleton, CO — residential electrical repair, panel upgrades, lighting installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Littleton, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
  { slug: 'electrician-englewood-co', city: 'Englewood', state: 'CO', description: 'Electrician services in Englewood, CO — residential electrical repair, panel upgrades, lighting installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Englewood, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
  { slug: 'electrician-castle-rock-co', city: 'Castle Rock', state: 'CO', description: 'Electrician services in Castle Rock, CO — residential electrical repair, panel upgrades, lighting installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Castle Rock, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
  { slug: 'electrician-arvada-co', city: 'Arvada', state: 'CO', description: 'Electrician services in Arvada, CO — residential electrical repair, panel upgrades, lighting installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Arvada, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
  { slug: 'electrician-westminster-co', city: 'Westminster', state: 'CO', description: 'Electrician services in Westminster, CO — residential electrical repair, panel upgrades, lighting installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Westminster, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
  { slug: 'electrician-thornton-co', city: 'Thornton', state: 'CO', description: 'Electrician services in Thornton, CO — residential electrical repair, panel upgrades, lighting installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Thornton, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
  { slug: 'electrician-centennial-co', city: 'Centennial', state: 'CO', description: 'Electrician services in Centennial, CO — residential electrical repair, panel upgrades, lighting installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Centennial, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
  { slug: 'electrician-parker-co', city: 'Parker', state: 'CO', description: 'Electrician services in Parker, CO — residential electrical repair, panel upgrades, lighting installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Parker, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
  { slug: 'electrician-highlands-ranch-co', city: 'Highlands Ranch', state: 'CO', description: 'Electrician services in Highlands Ranch, CO — residential electrical repair, panel upgrades, lighting installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Highlands Ranch, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
  { slug: 'electrician-broomfield-co', city: 'Broomfield', state: 'CO', description: 'Electrician services in Broomfield, CO — residential electrical repair, panel upgrades, lighting installation, and more.', metaDescription: 'Qualified Electric provides professional electrician services in Broomfield, CO. Repairs, panel upgrades, lighting, EV chargers, and more. Call (720) 840-4198.' },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  { name: 'Sarah M.', location: 'Denver, CO', rating: 5, text: 'Qualified Electric upgraded our electrical panel from 100 to 200 amps. The team was professional, on time, and cleaned up everything afterward. Our home can finally handle all our modern appliances without tripping breakers.' },
  { name: 'James T.', location: 'Aurora, CO', rating: 5, text: 'We had a flickering light issue that two other electricians couldn\'t figure out. Qualified Electric found the problem in 20 minutes — a loose neutral wire in the panel. Fixed it the same day. Highly recommend.' },
  { name: 'Patricia L.', location: 'Lakewood, CO', rating: 5, text: 'They installed recessed lighting throughout our living room and kitchen. The work was clean, the lights look amazing, and they even patched the small drywall cuts. True professionals.' },
  { name: 'Michael R.', location: 'Denver, CO', rating: 5, text: 'Got a Tesla Model Y and needed a home charger. Qualified Electric installed a Tesla Wall Connector in our garage in about 3 hours. They made sure our panel could handle it and everything works perfectly.' },
  { name: 'Jennifer K.', location: 'Littleton, CO', rating: 5, text: 'After a power surge fried our TV and microwave, we called Qualified Electric to install whole-home surge protection. Fast, knowledgeable, and reasonably priced. Wish we\'d done it sooner.' },
  { name: 'David S.', location: 'Englewood, CO', rating: 5, text: 'Our older home had aluminum wiring that was a fire risk. Qualified Electric rewired the whole house with minimal wall damage and coordinated the drywall repairs. Excellent work from start to finish.' },
  { name: 'Amanda B.', location: 'Centennial, CO', rating: 5, text: 'Installed a ceiling fan in our bedroom where there was just a light before. They added the proper support box so it\'s rock solid — no wobble at all. Will definitely use them again.' },
  { name: 'Robert H.', location: 'Denver, CO', rating: 5, text: 'Had them do an electrical inspection before buying our home. They found a dangerous wiring issue in the basement that the general inspector missed. Saved us from a serious problem. So grateful.' },
];

export type FAQ = {
  q: string;
  a: string;
};

export const homepageFaqs: FAQ[] = [
  { q: 'What electrical services do you offer in Denver, CO?', a: 'We offer a full range of residential electrical services in Denver, including electrical repair, panel upgrades, wiring, outlet and switch repair, lighting installation, ceiling fan installation, EV charger installation, electrical inspections, surge protection, generator installation, and troubleshooting.' },
  { q: 'How quickly can you come out to my home?', a: 'We strive to offer same-day and next-day appointments for most electrical service calls in Denver. For urgent safety issues, call us at (720) 840-4198 and we\'ll prioritize your call.' },
  { q: 'Are your electricians licensed and insured?', a: 'Yes. All of our electricians are fully licensed to perform electrical work in Colorado and carry comprehensive insurance for your protection and peace of mind.' },
  { q: 'Do you provide free estimates?', a: 'Yes, we provide free, upfront estimates for electrical projects. You\'ll know the full cost before any work begins — no surprises, no hidden fees.' },
  { q: 'What areas do you serve around Denver?', a: 'We serve Denver and all surrounding areas including Aurora, Lakewood, Littleton, Englewood, Castle Rock, Arvada, Westminster, Thornton, Centennial, Parker, Highlands Ranch, and Broomfield.' },
  { q: 'Do you handle emergency electrical repairs?', a: 'Yes. If you have an urgent electrical safety issue — sparking, burning smells, or a complete power loss — call us immediately at (720) 840-4198 and we\'ll respond as quickly as possible.' },
  { q: 'How much does an electrical panel upgrade cost?', a: 'Panel upgrade costs vary based on your current panel, desired amperage, and whether your service entrance needs updating. We provide free estimates with transparent pricing — call (720) 840-4198 to schedule yours.' },
  { q: 'Can you install an EV charger at my home?', a: 'Absolutely. We install Level 2 EV chargers for all electric vehicle brands, including Tesla, Chevy, Ford, and more. We\'ll assess your panel capacity and install a dedicated 240V circuit for safe, fast home charging.' },
];

export const problemsWeSolve = [
  { icon: 'Zap', title: 'Flickering Lights', description: 'Lights that flicker or dim when appliances turn on often indicate a loose connection or voltage issue. We diagnose and fix the root cause.' },
  { icon: 'AlertTriangle', title: 'Breakers That Keep Tripping', description: 'Frequently tripped breakers mean your circuit is overloaded or there\'s a short. We identify the problem and fix it safely.' },
  { icon: 'Plug', title: 'Dead Outlets', description: 'Outlets that have stopped working can be caused by tripped GFCIs, loose wires, or failed receptacles. We trace the issue and repair it.' },
  { icon: 'Thermometer', title: 'Warm Switches or Outlets', description: 'A warm switch or outlet is a fire hazard. We inspect the wiring and replace damaged components before they cause damage.' },
  { icon: 'Lightbulb', title: 'Old or Outdated Wiring', description: 'Homes with aluminum or knob-and-tube wiring are at higher risk for fires. We rewire homes to modern safety standards.' },
  { icon: 'Battery', title: 'Not Enough Outlets', description: 'Relying on power strips and extension cords is unsafe. We install new outlets exactly where you need them.' },
  { icon: 'Zap', title: 'No Power to Part of Your Home', description: 'When a circuit goes completely dead, our troubleshooting experts find the break or fault and restore power safely.' },
  { icon: 'ShieldCheck', title: 'No Surge Protection', description: 'Without whole-home surge protection, one power surge can destroy thousands in electronics. We install protection at your panel.' },
];

export const whyChooseUs = [
  { icon: 'ShieldCheck', title: 'Licensed & Insured', description: 'Every electrician on our team is fully licensed in Colorado and insured for your protection.' },
  { icon: 'Clock', title: 'Fast Response', description: 'Same-day and next-day appointments available. We respect your time and show up when we say we will.' },
  { icon: 'BadgeDollarSign', title: 'Upfront Pricing', description: 'Free estimates with transparent, upfront pricing. You know the full cost before any work begins.' },
  { icon: 'Award', title: 'Quality Workmanship', description: 'Every job — big or small — is done to the highest safety and quality standards, no shortcuts.' },
  { icon: 'MapPin', title: 'Local Denver Experts', description: 'We know Denver\'s building codes, neighborhoods, and homes inside and out. Local service you can trust.' },
  { icon: 'PhoneCall', title: 'Always Available', description: 'Call us anytime at (720) 840-4198. We\'re here when you need us, ready to help.' },
];

export const projectGallery = [
  { image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Electrical panel upgrade in Denver', title: 'Panel Upgrade', category: 'Panel Upgrade' },
  { image: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Recessed lighting installation in Denver', title: 'Recessed Lighting', category: 'Lighting' },
  { image: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'EV charger installation in Denver', title: 'EV Charger Install', category: 'EV Charging' },
  { image: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Residential wiring project in Denver', title: 'Whole-Home Rewiring', category: 'Wiring' },
  { image: 'https://images.pexels.com/photos/6835109/pexels-photo-6835109.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Ceiling fan installation in Denver', title: 'Ceiling Fan Install', category: 'Fans' },
  { image: 'https://images.pexels.com/photos/18816918/pexels-photo-18816918.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Generator installation in Denver', title: 'Standby Generator', category: 'Generators' },
];

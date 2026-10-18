import { EventItem, TeamMember, StartupItem, GalleryItem, BlogItem, InitiativeItem, TestimonialItem, AnnouncementItem, ContactMessage, FacultyAdvisor, MentorItem, AlumniItem, ResourceItem } from './types';

export const INITIAL_INITIATIVES: InitiativeItem[] = [
  {
    id: 'init-1',
    title: 'E-Summit Vizag',
    shortDesc: 'The flagship annual entrepreneurship conclave bringing together 2000+ students, 50+ founders, and investors.',
    fullDesc: 'E-Summit Vizag is BITS Vizag E-Cell\'s premier annual entrepreneurship summit. Featuring keynote speeches from unicorn founders, panel discussions, pitch battles, venture capital speed dating, and interactive workshops across 3 high-intensity days.',
    iconName: 'Rocket',
    badge: 'Annual Flagship',
    highlights: ['₹5,000,000+ Funding Pool', '50+ Keynote Speakers', '2,500+ Attendees', 'Live Shark Tank Pitching'],
    metrics: '2,500+ Attendees'
  },
  {
    id: 'init-2',
    title: 'Startup Bootcamp',
    shortDesc: 'A 48-hour intense zero-to-one product development sprint for early-stage idea validation.',
    fullDesc: 'Designed to transform nascent ideas into working prototypes. Participants receive hands-on guidance from senior product managers, full-stack engineers, and UI designers to build and pitch within a weekend.',
    iconName: 'Zap',
    badge: 'Hands-on Sprint',
    highlights: ['48 Hours Non-stop', '1-on-1 Mentor Office Hours', 'Prototype Validation', 'Cloud Credits Awarded'],
    metrics: '40+ Teams Sprinted'
  },
  {
    id: 'init-3',
    title: 'Vizag Hackathon',
    shortDesc: '36-hour code and hardware hackathon solving real-world maritime, industrial, and AI challenges.',
    fullDesc: 'Bringing together top tech talent from Andhra Pradesh and across India to hack solutions in Smart Cities, Marine Tech, Generative AI, and Clean Energy.',
    iconName: 'Code',
    badge: 'Tech & Hardware',
    highlights: ['₹200,000 Cash Prizes', 'Incubation Offers', 'Direct Internship Tracks', 'Hardware Kits Provided'],
    metrics: '500+ Hackers'
  },
  {
    id: 'init-4',
    title: 'Ideathon 2026',
    shortDesc: 'National level problem-solving challenge for school & college students to pitch disruptive concepts.',
    fullDesc: 'Ideathon provides a platform for budding innovators to identify real-world pain points and propose structured business models evaluated by industry experts.',
    iconName: 'Lightbulb',
    badge: 'Ideation Stage',
    highlights: ['No Code Required', 'Pitch Training Modules', 'Patent Guidance', 'Mentorship for Top 10'],
    metrics: '300+ Submissions'
  },
  {
    id: 'init-5',
    title: 'Startup School',
    shortDesc: 'A 6-week cohort-based course covering legal, financial, product-market fit, and fundraising 101.',
    fullDesc: 'Curriculum structured in collaboration with seasoned entrepreneurs and angel investors. Weekly live masterclasses, assignments, and capstone pitch decks.',
    iconName: 'GraduationCap',
    badge: '6-Week Cohort',
    highlights: ['Certificate of Completion', 'Legal & Tax Toolkits', 'Capstone Pitch Night', 'Alumni Network'],
    metrics: '120+ Graduates'
  },
  {
    id: 'init-6',
    title: 'Founder Talks',
    shortDesc: 'Fireside chats with legendary founders sharing unfiltered stories of grit, failure, and scale.',
    fullDesc: 'Bi-weekly interactive sessions hosted in the BITS Vizag Auditorium and streamed live globally. Get candid advice on navigating the early founder journey.',
    iconName: 'Mic',
    badge: 'Bi-Weekly Speaker',
    highlights: ['Live Q&A Sessions', 'Networking Tea', 'Exclusive Founder Dinners', 'Recorded Library'],
    metrics: '25+ Guest Speakers'
  },
  {
    id: 'init-7',
    title: 'Investor Connect',
    shortDesc: 'Exclusive closed-door deal-making sessions connecting top BITS Vizag startups with VCs and Angels.',
    fullDesc: 'A curated pitch day where investment-ready student startups pitch directly to VC firms, angel syndicates, and government grant officers.',
    iconName: 'TrendingUp',
    badge: 'Venture Capital',
    highlights: ['15+ VC Partners', 'Speed Dating Format', 'Term Sheet Support', 'Direct Grant Access'],
    metrics: '₹1.5 Cr Raised'
  },
  {
    id: 'init-8',
    title: 'Pitch Competition',
    shortDesc: 'High-stakes elevator pitch battle where founders get 3 minutes to convince a panel of judges.',
    fullDesc: 'Quick-fire presentation competition testing clarity, market size, business model, and founder conviction under pressure.',
    iconName: 'Award',
    badge: 'Competitive Battle',
    highlights: ['Instant Feedback', 'Micro-grants Awarded', 'Spotlight Exposure', 'Media Coverage'],
    metrics: '₹50k Micro Grants'
  },
  {
    id: 'init-9',
    title: 'Innovation Challenge',
    shortDesc: 'Industry-sponsored challenges solving specific technical problems for Vizag enterprises.',
    fullDesc: 'Partnering with local industries in Visakhapatnam to present real operational challenges. Winning student teams win cash prizes and commercial pilot contracts.',
    iconName: 'Target',
    badge: 'Industry Partnered',
    highlights: ['Real Industry Problems', 'Pilot Deployment', 'Commercial Contracts', 'Faculty Sponsorship'],
    metrics: '8 Corporate Partners'
  },
  {
    id: 'init-10',
    title: 'Mentorship Program',
    shortDesc: '1-on-1 personalized mentorship matching student founders with domain specialists.',
    fullDesc: 'Access an elite network of 50+ alumni founders, CTOs, marketing heads, and IP attorneys dedicated to guiding BITS Vizag student ventures.',
    iconName: 'Users',
    badge: '1-on-1 Advisory',
    highlights: ['Domain-specific Matching', 'Monthly Strategy Reviews', 'Pitch Deck Audits', 'Introductions'],
    metrics: '50+ Active Mentors'
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: 'E-Summit Vizag 2026: The Next Wave',
    category: 'Summit',
    date: '2026-09-18',
    time: '09:00 AM - 06:00 PM',
    location: 'Main Auditorium, BITS Vizag Campus',
    description: 'The biggest entrepreneurship conclave in Visakhapatnam featuring unicorn founders, VC pitch rooms, and tech expos.',
    fullDetails: 'Join over 2,000 innovators at BITS Vizag for 3 action-packed days of keynotes, hackathons, VC speed dating, and startup stalls. Key topics include AI Agents, Climate Tech, and Hardware Manufacturing.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    status: 'Upcoming',
    registrationOpen: true,
    registrationDeadline: '2026-09-10',
    prizePool: '₹5,00,000 In Cash & Credits',
    speakers: [
      { name: 'Dr. Ramesh Varma', role: 'Partner', company: 'Sequoia India', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300' },
      { name: 'Priya Sundaram', role: 'Co-Founder & CEO', company: 'Nexus AI', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300' },
      { name: 'Anil Chowdary', role: 'Angel Investor', company: 'Vizag Angels', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' }
    ],
    schedule: [
      { time: '09:00 AM', activity: 'Inaugural Keynote & Lighting of Lamp' },
      { time: '10:30 AM', activity: 'Unicorn Founder Panel: Building from Tier 2 Cities' },
      { time: '01:30 PM', activity: 'Live Pitching Arena (Top 10 Finalists)' },
      { time: '04:30 PM', activity: 'Investor Connect & Networking Gala' }
    ]
  },
  {
    id: 'evt-2',
    title: 'AI & Generative Tech Hackathon',
    category: 'Hackathon',
    date: '2026-08-25',
    time: '10:00 AM (36 Hours)',
    location: 'Innovation Lab 3, BITS Vizag',
    description: 'Build production-ready LLM agents, vision models, and autonomous tools within 36 hours.',
    fullDetails: 'Hacker teams of 2-4 will receive $1,000 in OpenAI & Anthropic API credits, mentor guidance, and 24/7 catering. Top 3 teams win cash prizes and direct incubation.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    status: 'Upcoming',
    registrationOpen: true,
    registrationDeadline: '2026-08-20',
    prizePool: '₹1,50,000',
    speakers: [
      { name: 'Karthik Raju', role: 'Head of AI', company: 'TechLabs Vizag', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300' }
    ]
  },
  {
    id: 'evt-3',
    title: 'Pitch Perfect: Deck & Storytelling Workshop',
    category: 'Workshop',
    date: '2026-08-12',
    time: '02:00 PM - 05:00 PM',
    location: 'Seminar Hall B, BITS Vizag',
    description: 'Learn how to craft a compelling 10-slide pitch deck that converts VC meetings into term sheets.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    status: 'Upcoming',
    registrationOpen: true,
    registrationDeadline: '2026-08-11'
  },
  {
    id: 'evt-4',
    title: 'Founder Fireside Chat with Srikanth Bolla',
    category: 'Talk',
    date: '2026-03-15',
    time: '04:00 PM - 06:00 PM',
    location: 'BITS Vizag Central Auditorium',
    description: 'Inspirational journey of resilience, innovation, and scaling Bollant Industries.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    status: 'Past',
    registrationOpen: false
  },
  {
    id: 'evt-5',
    title: 'Startup Bootcamp 2025: Zero to One',
    category: 'Bootcamp',
    date: '2025-11-20',
    time: '48 Hours Sprint',
    location: 'Maker Lab, BITS Vizag',
    description: 'Weekend product sprint where 35 student teams validated MVP concepts.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    status: 'Past',
    registrationOpen: false
  }
];

export const INITIAL_TEAM: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Rupa Tejaswi Chillimunthala',
    position: 'Marketing Head',
    department: 'Marketing',
    photo: '/team/Rupa Tejaswi Chillimunthala.jpeg',
    linkedin: '',
    email: '',
    featured: true
  },
  {
    id: 'tm-2',
    name: 'Dhanusha Das',
    position: 'Overall Coordinator',
    department: 'Core Executive Council',
    photo: '/team/Dhanusha Das.jpeg',
    linkedin: 'https://www.linkedin.com/in/dhanusha-das-495843332',
    email: 'dhanushadas.work@gmail.com',
    featured: true
  },
  {
    id: 'tm-3',
    name: 'Rapaka Siddardha',
    position: 'Operations Head',
    department: 'Operations',
    photo: '/team/Siddardha Rapaka.jpeg',
    linkedin: 'https://www.linkedin.com/in/rapaka-siddardha-985b57335',
    email: 'siddurapaka1912@gmail.com',
    featured: true
  },
  {
    id: 'tm-4',
    name: 'Vasavi Prasadi',
    position: 'Finance Head',
    department: 'Finance',
    photo: '/team/Vasavi Prasadi.jpeg',
    linkedin: '',
    email: '',
    featured: true
  },
  {
    id: 'tm-5',
    name: 'Pulakala Sandil',
    position: 'Web and Technical Head',
    department: 'Web & Tech',
    photo: '/team/Pulakala Sandil.jpeg',
    linkedin: 'https://www.linkedin.com/in/pulakala-sandil-944639335',
    email: 'pulaklqsandil@gmail.com',
    featured: true
  },
  {
    id: 'tm-5b',
    name: 'Saleem Sk',
    position: 'Web and Technical Lead',
    department: 'Web & Tech',
    photo: '/team/Saleem sk.jpeg',
    linkedin: '',
    email: '',
    featured: true
  },
  {
    id: 'tm-6',
    name: 'Khushal Chelluru',
    position: 'Design and Media Head',
    department: 'Design & Media',
    photo: '/team/Khushal Chelluru.jpeg',
    linkedin: '',
    email: '',
    featured: true
  },
  {
    id: 'tm-7',
    name: 'Oduru Koushik Sai Surya',
    position: 'Content and Media Head',
    department: 'Content & Media',
    photo: '/team/Koushik Sai Surya Oduru.jpeg',
    linkedin: 'https://www.linkedin.com/in/oduru-surya-b366a83b5',
    email: 'koushiksaisurya@gmail.com',
    featured: true
  },
  {
    id: 'tm-8',
    name: 'Rahul Metta',
    position: 'Media Lead',
    department: 'Design & Media',
    photo: '/team/Metta Rahul.jpeg',
    linkedin: 'https://www.linkedin.com/in/rahul-metta-72970537a',
    email: 'rahulmetta25@gmail.com',
    featured: true
  },
  {
    id: 'tm-9',
    name: 'Sai Siddhardh Moyyi',
    position: 'Startup Assistance Head',
    department: 'Startup & Innovation',
    photo: '/team/Siddhardh M S.jpeg',
    linkedin: 'https://www.linkedin.com/in/sai-siddhardh-moyyi-57a378393',
    email: 'Iamsiddhardhms@gmail.com',
    featured: true
  },
  {
    id: 'tm-10',
    name: 'Sahiti Rejeti',
    position: 'Corporate Relations Head',
    department: 'Corporate Relations',
    photo: '/team/Sahiti Rejeti.jpeg',
    linkedin: 'https://in.linkedin.com/in/sahiti-rejeti-628252425',
    email: 'sahiti.scm@gmail.com',
    featured: true
  },
  {
    id: 'tm-11',
    name: 'Kondra Ashritha',
    position: 'Events and PR Head',
    department: 'Events & PR',
    photo: '/team/Ashritha Kondra.jpeg',
    linkedin: 'https://www.linkedin.com/in/kondra-ashritha-8a6ba23ab',
    email: 'kondrashritha@gmail.com',
    featured: true
  },
  {
    id: 'tm-12',
    name: 'Edhitha Venkat Sampath Janapareddy',
    position: 'Research and Documentation Head',
    department: 'Research',
    photo: '/team/edhitha janapareddy.jpeg',
    linkedin: 'https://www.linkedin.com/in/edhitha-janapareddy-177473358',
    email: 'edhithajanapareddy@gmail.com',
    featured: true
  },
  {
    id: 'tm-13',
    name: 'Chaitanya Sree Majji',
    position: 'Marketing Head',
    department: 'Marketing',
    photo: '/team/Chaitanya Sree Majji.jpeg',
    linkedin: '',
    email: '',
    featured: true
  }
];

export const INITIAL_STARTUPS: StartupItem[] = [
  {
    id: 'stp-1',
    name: 'AquaSense AI',
    tagline: 'Autonomous IoT sensors for marine water quality & shrimp aquaculture management.',
    founder: 'Sravan Kumar & Team',
    founderRole: 'BITS Vizag CSE 2024 Alumni',
    industry: 'DeepTech',
    logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&auto=format&fit=crop&q=80',
    website: 'https://aquasense-ai.example.com',
    description: 'AquaSense AI uses custom sub-surface optical probes and machine learning algorithms to predict water hypoxia and disease outbreaks in aquaculture farms across Coastal Andhra.',
    fundingStage: 'Incubated / Seed',
    valuationOrGrant: '₹25,00,000 Seed Grant',
    achievements: ['Won National Coastal Innovation Award 2025', 'Deployed across 120+ Shrimp Ponds in Vizag', 'Patent Filed for Optical Probe Tech']
  },
  {
    id: 'stp-2',
    name: 'SkillCraft VR',
    tagline: 'Immersive industrial safety & welding simulations for polytechnics and shipyards.',
    founder: 'Ananya & Tech Group',
    founderRole: 'BITS Vizag Mech & ECE Team',
    industry: 'EdTech',
    logo: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=200&auto=format&fit=crop&q=80',
    website: 'https://skillcraft-vr.example.com',
    description: 'Providing low-cost VR headsets loaded with physics-accurate industrial simulation software to train technicians 10x faster with zero material waste.',
    fundingStage: 'Pre-Series A',
    valuationOrGrant: '₹1.2 Cr Angel Raised',
    achievements: ['Partnered with Vizag Steel Plant for Pilot Training', '10,000+ Trainee Hours Logged', 'Featured on Economic Times']
  },
  {
    id: 'stp-3',
    name: 'EcoDrive Logistics',
    tagline: 'EV Fleet optimization platform for port cargo & last-mile delivery in Visakhapatnam.',
    founder: 'Venkatesh Naidu',
    founderRole: 'BITS Vizag EEE 2025',
    industry: 'Sustainability',
    logo: 'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?w=200&auto=format&fit=crop&q=80',
    website: 'https://ecodrive.example.com',
    description: 'AI-driven telematics and battery swapping management designed specifically for electric heavy three-wheelers operating near harbor corridors.',
    fundingStage: 'Incubated / Seed',
    valuationOrGrant: '₹15,00,000 Seed Grant',
    achievements: ['Cut CO2 emissions by 45 Tons in Q1 2026', 'Operates 30 Electric Fleets', 'Supported by IIC Ministry of HRD']
  },
  {
    id: 'stp-4',
    name: 'MedPulse Vizag',
    tagline: 'Instant diagnostic lab-on-a-chip for rural health centers.',
    founder: 'Dr. Gayatri & BITS Team',
    founderRole: 'Faculty & Student Joint Venture',
    industry: 'HealthTech',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&auto=format&fit=crop&q=80',
    website: 'https://medpulse.example.com',
    description: 'Portable microfluidic cartridge system capable of completing 14 blood biomarkers tests in under 8 minutes without expensive lab infrastructure.',
    fundingStage: 'Idea Phase',
    valuationOrGrant: '₹10,00,000 BIRAC Grant',
    achievements: ['Selected for BIRAC BIG 2025', 'Clinical Trial clearance in progress']
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'E-Cell Inauguration',
    category: 'E-Summit Inaugural Ceremony',
    imageUrl: '/gallery/IMG-20260221-WA0096.jpg',
    date: 'Feb 21, 2026'
  },
  {
    id: 'gal-2',
    title: 'Inaugural Ceremony',
    category: 'E-Summit Inaugural Ceremony',
    imageUrl: '/gallery/IMG-20260221-WA0098.jpg',
    date: 'Feb 21, 2026'
  },
  {
    id: 'gal-3',
    title: 'Inauguration Celebrations',
    category: 'E-Summit Inaugural Ceremony',
    imageUrl: '/gallery/IMG20260221153553.jpg',
    date: 'Feb 21, 2026'
  },
  {
    id: 'gal-4',
    title: 'E-Summit Inaugural Event',
    category: 'E-Summit Inaugural Ceremony',
    imageUrl: '/gallery/IMG-20260317-WA0029.jpg',
    date: 'Mar 17, 2026'
  },
  {
    id: 'gal-5',
    title: 'Inaugural Gathering',
    category: 'E-Summit Inaugural Ceremony',
    imageUrl: '/gallery/IMG-20260317-WA0068.jpg',
    date: 'Mar 17, 2026'
  },
  {
    id: 'gal-6',
    title: 'Inaugural Address',
    category: 'E-Summit Inaugural Ceremony',
    imageUrl: '/gallery/IMG-20260317-WA0071.jpg',
    date: 'Mar 17, 2026'
  },
  {
    id: 'gal-7',
    title: 'E-Summit Inauguration Highlights',
    category: 'E-Summit Inaugural Ceremony',
    imageUrl: '/gallery/IMG-20260317-WA0072.jpg',
    date: 'Mar 17, 2026'
  },
  {
    id: 'gal-8',
    title: 'RTIH Visit',
    category: 'RTIH Visit',
    imageUrl: '/gallery/IMG-20260227-WA0130.jpg',
    date: 'Feb 27, 2026'
  },
  {
    id: 'gal-9',
    title: 'Ratan Tata Innovation Hub Tour',
    category: 'RTIH Visit',
    imageUrl: '/gallery/IMG-20260227-WA0146.jpg',
    date: 'Feb 27, 2026'
  },
  {
    id: 'gal-10',
    title: 'RTIH Exploration',
    category: 'RTIH Visit',
    imageUrl: '/gallery/IMG-20260227-WA0156.jpg',
    date: 'Feb 27, 2026'
  },
  {
    id: 'gal-11',
    title: 'Innovation Hub Visit',
    category: 'RTIH Visit',
    imageUrl: '/gallery/IMG-20260227-WA0174.jpg',
    date: 'Feb 27, 2026'
  },
  {
    id: 'gal-12',
    title: 'Team at RTIH',
    category: 'RTIH Visit',
    imageUrl: '/gallery/IMG-20260227-WA0201.jpg',
    date: 'Feb 27, 2026'
  },
  {
    id: 'gal-13',
    title: 'RTIH Day 2',
    category: 'RTIH Visit',
    imageUrl: '/gallery/IMG-20260228-WA0156.jpg',
    date: 'Feb 28, 2026'
  },
  {
    id: 'gal-14',
    title: 'RTIH Learning Experience',
    category: 'RTIH Visit',
    imageUrl: '/gallery/IMG-20260228-WA0162.jpg',
    date: 'Feb 28, 2026'
  },
  {
    id: 'gal-15',
    title: 'Ratan Tata Innovation Hub Memories',
    category: 'RTIH Visit',
    imageUrl: '/gallery/IMG-20260228-WA0178.jpg',
    date: 'Feb 28, 2026'
  }
];

export const INITIAL_BLOGS: BlogItem[] = [
  {
    id: 'blg-1',
    title: 'From ₹10,000 to a Billion-Dollar Startup: Zerodha\'s Inspiring Journey',
    slug: 'zerodha-inspiring-journey',
    excerpt: 'Zerodha proved that success doesn\'t always begin with millions of rupees — it begins with solving a real problem. Starting with just ₹10,000, the Kamath brothers built India\'s largest stock brokerage.',
    content: `When people think of successful startups, they often imagine huge investments and famous investors. But Zerodha proved that success doesn't always begin with millions of rupees but it begins with solving a real problem. One of the finest Founders of Zerodha is by the inspiring brothers Nithin Kamath and Nikhil Kamath, in 2010 Zerodha started with an investment of around ₹10,000 and a simple mission: make stock market investing affordable and accessible for everyone.

At a time when brokerage fees were high and trading platforms were complicated, the founders saw an opportunity to change the system. Instead of following the traditional brokerage model, Zerodha introduced a flat-fee pricing structure. This made investing simpler and more affordable, especially for first time investors. Their focus wasn't on rapid expansion or raising external funding, it was on building trust and delivering value to customers.

What makes Zerodha's journey even more inspiring is that it remained bootstrapped, meaning the company grew without relying on venture capital. By focusing on customer satisfaction, innovation, and long-term sustainability, Zerodha became India's largest stock brokerage platform and one of the country's most successful startups.

The journey of Zerodha teaches us aspiring entrepreneurs that success isn't determined by the amount of money you start with. It's determined by your ability to identify a real problem, create a meaningful solution, and stay committed to your vision.

Key Lessons from Zerodha:
● Solve real problems, not just create products.
● Start small, but think big.
● Keeping things simple — simplicity attracts users.
● Build trust before chasing rapid growth.
● Stay consistent and focus on long-term value.

Zerodha's story reminds us that great businesses are built through patience, innovation, and a customer-first mindset — not just funding. Every successful startup begins with a single idea and the courage to take the first step.

💬 What problem around you would you love to solve through a startup? Share your thoughts in the comments!`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Founder Stories',
    publishedAt: 'September 01, 2025',
    readTime: '4 min read',
    coverImage: '/blogs/from 10,000 to a billion-dollar startup.jpeg',
    tags: ['Zerodha', 'Bootstrapping', 'StartupIndia', 'Entrepreneurship']
  },
  {
    id: 'blg-2',
    title: 'Hidden Indian Startups That Deserve the Spotlight',
    slug: 'hidden-indian-startups',
    excerpt: 'Beyond Flipkart and Zomato, several innovative Indian startups are quietly solving real-world problems — from space tech to precision agriculture.',
    content: `When we think about Indian startups, we instantly get an idea about the popular startups like Flipkart, Zerodha, Zomato, and Ola. While these companies have transformed industries, there's another side of India's startup ecosystem that often goes unnoticed. Across the country, several innovative startups are quietly solving real-world problems and shaping the future.

Take Agnikul Cosmos, for example. This Chennai-based space startup is developing customizable launch vehicles to make satellite launches more accessible. It's proving that India is not just participating in the global space race but also driving innovation in it.

Another inspiring startup is Pixxel, which is building a constellation of hyperspectral satellites. These satellites help monitor agriculture, climate change, pollution, and natural resources with incredible precision. Their technology has the potential to make a significant impact on environmental sustainability.

In the field of healthcare, Qure.ai is using Artificial Intelligence to help doctors detect diseases such as tuberculosis and lung cancer from medical scans. By combining AI with healthcare, the startup is improving access to faster and more accurate diagnoses.

India's agricultural sector is also witnessing innovation through startups like Fasal. Using IoT and AI, Fasal provides farmers with real-time insights on irrigation, weather conditions, and crop health, helping them increase productivity while conserving resources.

What connects all these startups is not just technology, it's their commitment to solving meaningful problems. They remind us that entrepreneurship isn't always about creating the next viral app or becoming an overnight unicorn. Sometimes, it's about making a lasting difference in people's lives.

As students and aspiring entrepreneurs, these stories inspire us to look beyond the obvious. Innovation begins by identifying problems around us and having the courage to create solutions. The next groundbreaking startup may not be making headlines today; it could be working quietly in a college lab, a small office, or even a hostel room. Great startups don't chase attention; they chase impact. And eventually, the world notices.

💬 Which hidden Indian startup inspires you the most, or what problem would you love to solve through innovation? Share your thoughts below!`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Entrepreneurship',
    publishedAt: 'September 15, 2025',
    readTime: '5 min read',
    coverImage: '/blogs/Hidden indain startups.jpeg',
    tags: ['StartupIndia', 'Innovation', 'DeepTech', 'MakeInIndia']
  },
  {
    id: 'blg-3',
    title: 'Why Great Startups Don\'t Start With Great Ideas',
    slug: 'great-startups-great-problems',
    excerpt: 'The most successful startups don\'t create new problems — they solve existing ones better than anyone else. It all starts with identifying the right problem.',
    content: `When people think about successful startups, they often believe they all began with a revolutionary idea. But if we look closely at the world's biggest companies, we'll realize that's not true. Great startups don't start with great ideas — they start with great problems.

Take Airbnb, for example. It wasn't created because someone wanted to build a billion dollar company. It began when two founders couldn't afford their rent and decided to rent out air mattresses in their apartment. That simple solution to a personal problem eventually transformed the global hospitality industry.

The same applies to Uber. The founders didn't invent transportation — they simply made booking a ride easier. Zerodha didn't invent investing; it made investing more affordable and accessible. The most successful startups don't create new problems, they solve existing ones better than anyone else.

Many aspiring entrepreneurs spend months waiting for a "million-dollar idea." In reality, the best ideas often come from everyday frustrations. Long queues, complicated apps, expensive services, or inefficient systems are opportunities waiting to be explored. Instead of asking, "What's the next big idea?", ask yourself:

● What problem do people face every day?
● Why does this problem still exist?
● How can I make solving it simpler, faster, or more affordable?

Entrepreneurship is not about having a perfect idea from day one. It's about observing, listening, testing, learning, and improving. Many successful startups changed their products several times before finding what truly worked.

The next great startup may not begin in a boardroom with a groundbreaking invention. It could begin with a student noticing a small inconvenience in college, a commuter frustrated by daily travel, or a farmer looking for a better way to manage crops. The biggest businesses are built by solving the smallest problems consistently and effectively.

So, don't wait for the perfect idea. Start paying attention to the problems around you. Your next complaint could become your biggest opportunity.

💬 What's one everyday problem you've noticed that deserves a better solution? Share your thoughts in the comments!`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Entrepreneurship',
    publishedAt: 'October 01, 2025',
    readTime: '4 min read',
    coverImage: '/blogs/Great startups don\'t start with great ideas.jpeg',
    tags: ['ProblemSolving', 'Entrepreneurship', 'ThinkLikeAFounder', 'Innovation']
  },
  {
    id: 'blg-4',
    title: 'Will AI Replace Entrepreneurs?',
    slug: 'will-ai-replace-entrepreneurs',
    excerpt: 'AI is an incredibly powerful tool, but it doesn\'t wake up with a mission to solve a problem. The entrepreneurs of tomorrow won\'t be replaced by AI — they\'ll be empowered by it.',
    content: `Artificial Intelligence is transforming the way we work. It can write code, create presentations, analyze data, design logos, generate marketing content, and even answer complex questions in seconds. With AI becoming smarter every day, one question continues to spark debate: Will AI replace entrepreneurs?

The answer is no — but it will redefine entrepreneurship.

AI is an incredibly powerful tool, but it doesn't wake up with a mission to solve a problem. It doesn't experience frustration while standing in a long queue, notice a gap in the market, or dream of creating something that changes lives. Those ideas come from people.

Successful entrepreneurs don't just build products; they identify opportunities, understand human emotions, make difficult decisions, and inspire teams to work toward a shared vision. These are qualities that technology can support but not fully replace.

Instead of fearing AI, entrepreneurs should learn to work alongside it. Today, a founder can use AI to conduct market research, write business plans, create prototypes, automate customer support, and analyze trends. This saves time and allows entrepreneurs to focus on what truly matters: innovation, creativity, and building meaningful relationships.

The future won't belong to those who compete with AI. It will belong to those who know how to use AI effectively to solve bigger problems and create greater value.

History has shown that every major technological revolution created new opportunities for those willing to adapt. AI is no different. It isn't replacing entrepreneurship; it's giving entrepreneurs more powerful tools than ever before. The entrepreneurs of tomorrow won't be replaced by AI — they'll be empowered by it.

💬 If you had access to the world's best AI tools, what problem would you choose to solve?`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Tech Trends',
    publishedAt: 'October 15, 2025',
    readTime: '4 min read',
    coverImage: '/blogs/will AI replace entrepreneurs.jpeg',
    tags: ['ArtificialIntelligence', 'FutureOfWork', 'Innovation', 'Technology']
  },
  {
    id: 'blg-5',
    title: 'The Reality of Startups: Beyond the Glamour',
    slug: 'reality-of-startups',
    excerpt: 'Behind every success story is a reality that few people talk about. Startups aren\'t built by people who never fail — they\'re built by people who never stop learning.',
    content: `When we hear the word startup, we often picture billion-dollar valuations, successful founders, and headlines celebrating the next unicorn. Social media highlights funding announcements, awards, and rapid growth, making entrepreneurship look exciting and glamorous. But behind every success story is a reality that few people talk about.

Startups are built on long hours, uncertainty, and constant learning. Founders face rejection from investors, lose customers, change business ideas, and often work without knowing whether their efforts will pay off. Success rarely happens overnight; it is the result of countless small decisions, failures, and improvements.

One of the biggest myths is that a startup begins with a perfect idea. In reality, most successful startups evolve over time. Founders listen to customer feedback, adapt to market changes, and improve their products continuously. Flexibility is often more valuable than perfection.

Another misconception is that funding guarantees success. While investment can help a business grow, it cannot replace a strong product, a clear vision, or customer trust. Many startups with huge funding have failed, while others with limited resources have built sustainable businesses by focusing on solving real problems.

The reality is that entrepreneurship isn't just about building a company — it's about building resilience. Every challenge teaches a lesson, every setback creates experience, and every small milestone becomes a step toward something bigger.

For students and aspiring entrepreneurs, the goal shouldn't be to become the next unicorn overnight. Instead, focus on identifying meaningful problems, creating valuable solutions, and learning from every experience along the way. Startups aren't built by people who never fail — they're built by people who never stop learning.

💬 What's one startup myth that you believed before learning about entrepreneurship? Share your thoughts in the comments!`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Entrepreneurship',
    publishedAt: 'November 01, 2025',
    readTime: '4 min read',
    coverImage: '/blogs/reality of startups.jpeg',
    tags: ['StartupReality', 'Entrepreneurship', 'Leadership', 'Growth']
  },
  {
    id: 'blg-6',
    title: 'Why Curiosity Is More Valuable Than Intelligence',
    slug: 'curiosity-vs-intelligence',
    excerpt: 'Intelligence can help you solve a problem, but curiosity helps you discover the right problem to solve. Every great innovation begins with a question.',
    content: `When we think of successful entrepreneurs, we often assume they are the smartest people in the room. But if we look closely at the journeys of great innovators, we discover that their greatest strength wasn't just intelligence — it was curiosity.

Curiosity is the desire to ask questions, explore possibilities, and understand how things work. It's what drives people to challenge the ordinary and imagine something better. Every breakthrough innovation began with a simple question: "What if there was a better way?"

Some of the world's most successful companies were born because someone was curious enough to question existing systems. They didn't accept problems as permanent — they searched for better solutions. That mindset is what separates innovators from spectators.

Intelligence can help you solve a problem, but curiosity helps you discover the right problem to solve. A curious entrepreneur observes everyday challenges, listens to people's needs, and continuously learns from both success and failure. They know that every unanswered question is an opportunity waiting to be explored.

In today's rapidly changing world, knowledge is easily accessible. What truly sets people apart is their willingness to keep learning. The entrepreneurs who succeed aren't those who know everything — they're the ones who never stop asking questions.

As students, curiosity can start with something as simple as asking, "Why is this process so complicated?" or "Can this be done more efficiently?" Those questions can lead to ideas that improve lives, create businesses, and drive innovation.

At the heart of every successful startup is not just a brilliant idea, but a curious mind that refuses to accept the status quo. Never stop asking questions — because every great innovation begins with one.

💬 What's one question you've always had about the world that could inspire a new idea or innovation? Share it in the comments!`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Entrepreneurship',
    publishedAt: 'November 15, 2025',
    readTime: '4 min read',
    coverImage: '/blogs/why curiosity is more valuable than intelligence.jpeg',
    tags: ['Curiosity', 'Innovation', 'ThinkDifferent', 'ProblemSolving']
  },
  {
    id: 'blg-7',
    title: 'Invisible Innovations of the Universe',
    slug: 'invisible-innovations',
    excerpt: 'The greatest innovations aren\'t always the ones that amaze us — they\'re the ones we can\'t imagine living without. From QR payments to GPS navigation.',
    content: `Have you ever wondered how many incredible innovations you use every day without even thinking about them? When we talk about innovation, we often imagine rockets, robots, or artificial intelligence. But some of the most impactful innovations are the ones we hardly notice — because they have become a natural part of our lives.

Think about scanning a QR code to pay for your morning coffee. It takes just a few seconds, yet behind that simple action lies years of technological advancement that has transformed digital payments in India.

Or consider Google Maps. We open it without hesitation to avoid traffic or find the fastest route. What feels like a simple navigation app is actually powered by real-time data, satellite technology, GPS, and millions of users contributing live traffic information every day.

Even something as ordinary as online food delivery is an invisible innovation. With just a few taps, restaurants, delivery partners, payment systems, GPS tracking, and customers work together through one seamless digital platform.

These innovations don't demand our attention because they've become part of our routine. But behind every "simple" experience is a team of innovators who asked one important question: "How can we make life easier?"

This is the true essence of entrepreneurship — not creating technology for the sake of technology, but using it to solve everyday problems in ways that feel effortless to the people who use it.

As aspiring entrepreneurs, we often search for groundbreaking ideas. But sometimes, the biggest opportunities are hidden in the smallest inconveniences. The next great innovation may not be a flying car or a humanoid robot. It could simply be a better way to do something people already do every day.

The greatest innovations aren't always the ones that amaze us — they're the ones we can't imagine living without.

💬 What's one everyday technology or service you use so often that you rarely stop to appreciate the innovation behind it?`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Tech Trends',
    publishedAt: 'December 01, 2025',
    readTime: '4 min read',
    coverImage: '/blogs/Invisible innovations.jpeg',
    tags: ['Innovation', 'Technology', 'ThinkDifferent', 'InnovationMatters']
  },
  {
    id: 'blg-8',
    title: 'The Startup Graveyard: Where Good Ideas Go to Die',
    slug: 'startup-graveyard-intro',
    excerpt: 'We like to pretend the market is a pure meritocracy. But the startup graveyard tells a different story — great ideas die every day, and the reasons are more uncomfortable than you think.',
    content: `We've all drank the Silicon Valley Kool-Aid at some point. You know the story: two kids in a garage, a whiteboard covered in crazy diagrams, a massive seed round, and boom — a billion-dollar exit before anyone hits thirty. It's a great story. It sells tickets, gets clicks, and makes people leave comfortable corporate jobs to chase a dream.

What nobody talks about at the pitch events, though, are the ghosts.

Walk through any tech hub or scroll through a dead founder's Twitter thread from five years ago. There's an entire invisible graveyard out there. Thousands of companies that raised real money, hired incredible people, threw launch parties, and then just... evaporated. The domain name expired, the app got yanked from the App Store, and the team ended up back on LinkedIn looking for corporate gigs.

And here's the kicker that keeps me up at night: a lot of those dead startups didn't even have bad ideas.

We like to pretend the market is a pure meritocracy. If a business fails, we shrug and say, "Well, guess nobody wanted that." But that's a lie we tell ourselves to feel like we have control. You can have an absolute banger of an idea, a product that actually works, and still watch it burn to the ground because your timing was six months off, your pricing was wrong, or your competitors had bigger war chests to burn.

Take timing. I've seen guys build tech that was genuinely incredible, only to fold two years later because consumer habits weren't there yet or cellular networks were too slow to handle it. Then, five years down the road, some new kid launches the exact same product with a fresh coat of paint, hits the market at the right cultural moment, and becomes a household name. Was the first team stupid? No. They were just early, and being early in startup land is the exact same thing as being wrong.

Or look at the "users vs. paying customers" trap. It's so easy to trick yourself here. You build a tool, launch it on Product Hunt, and get 20,000 signups in a weekend. Everyone's tweeting about it. People are telling you it's "game-changing." But the second you put up a paywall and ask for $10 a month? Radio silence. Turns out people love free novelties, but very few people actually want to pay to solve a minor annoyance. Passion doesn't pay your AWS bill.

Money trips people up, too. Raising $5M sounds like a victory, but half the time it's just a bigger shovel to dig your own grave. Funding buys you a runway, sure, but if your core business mechanics are fundamentally broken, VC money just lets you run full-speed in the wrong direction for longer before you hit the brick wall.

The same goes for scaling. Everyone wants to go "to the moon" right away. But if you double your user base overnight before your backend, customer support, or team culture can handle it, the whole thing snaps in half. Growing too fast will kill a company just as quickly as running out of cash.

At the end of the day, failure is almost never one single catastrophic mistake. It's a domino effect. You misread the market, so you panic and pivot. The pivot pisses off your early fans. You burn through cash trying to acquire new ones, your team gets burnt out, key engineers leave, and a leaner team beats you to the punch. Game over.

That's why I'm obsessed with dead startups.

Success stories are mostly survivorship bias wrapped in PR talk. They tell you what worked for one specific company, at one specific moment, with a specific group of people. You can't just copy Apple or Airbnb and expect it to work in 2026. But dead startups? They leave behind raw, honest data. They show you where the hidden landmines are buried so you don't step on them yourself.

If you're trying to build something right now, forget asking if your tech is cool enough. Ask the uncomfortable questions: Is this a problem people actually lie awake worrying about? Will they hand over hard-cash to fix it today? Or am I just in love with my own cleverness?

Because when you look at what separates the companies that make it from the ones in the graveyard, it's rarely the raw idea.

It's everything that happens after you write the first line of code.`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Startup Graveyard',
    publishedAt: 'January 01, 2026',
    readTime: '6 min read',
    coverImage: '/blogs/startup_graveyard/coverpost.png',
    tags: ['StartupGraveyard', 'FailureAnalysis', 'Entrepreneurship', 'StartupLessons']
  },
  {
    id: 'blg-9',
    title: 'Startup Graveyard Ep 1: Killed by Timing',
    slug: 'startup-graveyard-ep1-killed-by-timing',
    excerpt: 'What if your startup didn\\'t fail because your idea was bad? What if you were actually right, but the world was just too behind to care?',
    content: `What if your startup didn't fail because your idea was bad? What if you were actually right, but the world was just too behind to care?

In founder circles, speed is treated like a religion. Move fast, ship product, iterate, outrun the competition. But there's a quiet killer sitting in the corner that doesn't give a damn about how fast you code: timing.

You can spot a genuine problem, build an incredible solution, and still watch your bank account hit zero because the market simply isn't ready. Maybe the hardware is too expensive. Maybe people's habits haven't shifted. Maybe the supporting tech stack isn't there yet. It creates one of the most frustrating reality checks in entrepreneurship: you can be 100% correct about the future and still go broke.

Look at video calling. We didn't suddenly invent the concept during the pandemic, or even in the 2010s. Tech companies were sinking millions into video phones back in the 90s. The problem wasn't that people hated seeing each other's faces; it was that the dial-up internet couldn't handle it, webcams were grainy garbage, and nobody had a smartphone in their pocket. Fast forward twenty years: fiber internet is everywhere, cloud infrastructure is cheap, and suddenly video calling is just a normal Tuesday. The core idea didn't get brilliant overnight. The world around it finally caught up.

That's the catch — startups don't exist in a vacuum. You rely on an entire ecosystem. You might build a fantastic affordable electric car, but if there are no charging stations in a 50-mile radius, good luck selling it. You are essentially waiting on the rest of society to catch up to your head start.

Google Glass is a prime example. When it dropped, it proved we could slap a screen on a pair of glasses and project augmented reality straight to your retina. It was impressive. It was also creepy to the general public, ridiculously expensive, and had zero daily use cases that justified looking like a sci-fi extra. Years later, smartwatches and sleek AR headsets quietly took off. The lesson wasn't that wearable tech was a dumb idea — it was that technology being possible doesn't mean it's practical for a regular person's life today.

When you launch too early, you aren't just selling a product. You're trying to force a massive shift in human behavior. And convincing humans to change their habits takes an agonizingly long time and a mountain of cash.

That's where the cruel irony kicks in.

An early startup ends up burning through millions educating the market, lobbying regulators, and proving out the tech. By the time the public finally goes, "Oh! I get it now," that first startup is out of money and declaring bankruptcy. Two years later, a well-funded competitor walks into the market you paved, steals your homework, and becomes a billion-dollar "overnight" success.

You were right about the ten-year horizon. But you only had two years of runway. In the startup world, being five years early is functionally identical to being completely wrong.

This is why "launch right now" isn't always the smartest play. Sometimes the hardest strategy is waiting — building quietly, testing assumptions, and watching the ecosystem until the moment is right. But waiting carries its own terror: wait too long, and someone else steals the wave. Enter too early, the wave crashes on you.

It's an awkward balance, especially right now with AI, robotics, bio-tech, and clean energy. These technologies move at lightning speed, but cultural adoption, unit economics, and regulation move at a crawl.

That's why I think the startup graveyard deserves a lot more respect than it gets. A dead company isn't always a monument to bad judgment. Often, it was just an expensive prototype for the future. The company dies, but the idea stays in the air until someone else comes along with better timing to execute it.

Before you jump into your next venture, don't just ask if the idea is good or if the tech works. Ask the uncomfortable question: Is the market ready to buy this today, or am I going to go broke trying to teach them why they need it?

Because sometimes, the difference between a total disaster and an industry giant isn't the idea at all. It's just the month and year it hit the market.`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Startup Graveyard',
    publishedAt: 'January 15, 2026',
    readTime: '7 min read',
    coverImage: '/blogs/startup_graveyard/episode01.png',
    tags: ['StartupGraveyard', 'Timing', 'MarketReadiness', 'FounderLessons']
  },
  {
    id: 'blg-10',
    title: 'Startup Graveyard Ep 2: Killed by Its Own Success',
    slug: 'startup-graveyard-ep2-killed-by-success',
    excerpt: 'There\\'s a weirder, far more brutal way to die that nobody warns you about: getting crushed by your own growth.',
    content: `We usually picture startup failure as a quiet, depressing collapse: no traction, no users, bank account sitting at zero. But there's a weirder, far more brutal way to die that nobody warns you about: getting crushed by your own growth.

It sounds absurd. Isn't massive traction the whole point? You want the traffic spike, the inbox flooded with orders, the media coverage, the exponential charts. But success brings something that early-stage survival doesn't: scale. And scale acts like a magnifying glass on every dirty little secret, shortcut, and broken process you swept under the rug when you were small.

When you're running a tiny ten-person shop, you can survive on pure chaos. The founder can personally jump on customer support calls, manually fix broken database entries, and run payroll off a messy spreadsheet. If a server crashes, you reboot it. If a client is pissed off, you call them directly and buy them coffee. It's personal, nimble, and forgiving.

Now imagine a million people sign up overnight because your product went viral.

Suddenly, that informal charm vanishes. The founder can't handle 50,000 support tickets. The database locks up. Orders get lost in the void. Customers who used to think your quirks were "charming" are now furious because they paid hard-earned cash and can't get a human being on the phone.

Your biggest marketing victory just became your biggest operational disaster.

This is the trap of hypergrowth. Scaling doesn't just make your business bigger; it fundamentally changes what the business is. The way you manage five people sitting at the same dining table has zero overlap with leading a team of two hundred spread across three time zones. What worked at ₹1 lakh in revenue completely breaks when you try to force it through a ₹1 crore pipeline.

A lot of founders confuse growing fast with growing healthy. They parade vanity metrics — "User base grew 500% this quarter!" — on LinkedIn slide decks while the house burns down behind the scenes.

Because what good is 500% growth if 90% of those users churn after three days? What good is record revenue if your unit economics mean you lose ₹500 on every single order? In that scenario, rapid growth doesn't fix your business model — it just accelerates your path to bankruptcy. You're pouring gasoline on a flat tire.

Then there's the human element, which breaks first and hardest.

When you hire aggressively to keep up with the chaos, culture degrades fast. You go from a tight-knit group of passionate believers to a sea of new hires who barely understand what the product actually does. Decision-making slows to a crawl. The startup becomes bureaucratic, clunky, and bloated — the exact kind of corporate monster you set out to disrupt in the first place.

And through all of this, the founder has to go through the most painful evolution of all: stepping back. The micromanaging habits that kept the company alive in Year One will actively strangle it in Year Three. If you can't learn to delegate, trust teams, and build real systems, you become the single biggest bottleneck in your own company.

The startup graveyard is full of ghost towns nobody cared about. But if you look closely into the corners, you'll find the ruins of places that were mobbed to death. Companies that didn't die because nobody wanted their product, but because too many people wanted it before the infrastructure was ready to hold the weight.

Before you start praying for hypergrowth, you have to ask yourself the uncomfortable question: If my business grew ten times bigger by tomorrow morning, what breaks first?

Because the ultimate goal isn't just to catch lightning in a bottle. It's building something strong enough to handle the charge when it hits.`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Startup Graveyard',
    publishedAt: 'February 01, 2026',
    readTime: '6 min read',
    coverImage: '/blogs/startup_graveyard/episode02.png',
    tags: ['StartupGraveyard', 'Hypergrowth', 'Scaling', 'OperationalFailure']
  },
  {
    id: 'blg-11',
    title: 'Startup Graveyard Ep 3: Killed by Too Much Money',
    slug: 'startup-graveyard-ep3-killed-by-too-much-money',
    excerpt: 'Money itself doesn\\'t kill companies, but getting a massive pile of it too early acts like a drug. It dulls your pain receptors — and pain is the only thing telling you you\\'re doing something stupid.',
    content: `What would you do if someone dropped ₹10 crore into your startup's bank account tomorrow?

The instinct is obvious: move into a sleek office, double your engineering team, crank up performance marketing, launch in five new cities, and finally breathe a sigh of relief. The money problem is solved.

Except it isn't. Money itself doesn't kill companies, but getting a massive pile of it too early acts like a drug. It dulls your pain receptors. And in the early days of a business, pain is the only thing telling you you're doing something stupid.

When a startup is broke, say, running on ₹5 lakh of savings — it is forced into absolute brutal honesty. Every single rupee spent has to yield a result. You don't ask, "Should we hire five account managers?" You ask, "Can one person stretch to handle this until we have real revenue?" You don't rent fancy desks; you work out of a living room. You don't throw cash at Facebook ads to mask a boring product; you get on the phone with every customer to find out why they aren't using your software.

Scarcity enforces discipline.

When you inject ₹50 crore into that same early-stage company, that discipline vanishes. Suddenly, instead of solving a core product flaw, you throw money around it. Product isn't retaining users? Spend ₹20 lakh a month on ad campaigns to pump up download numbers. Is the operational process a mess? Hire ten more managers to coordinate the chaos instead of fixing the underlying workflow.

It feels like momentum, but it's just an illusion bought on credit. Massive capital doesn't solve fundamental business problems — it just delays the day you're forced to face them.

And that leads to the ultimate VC trap: scaling before you actually have product-market fit.

Before people actually love what you're making, your only job is to experiment quickly on a small scale. But once you take a huge check, the clock starts ticking. Investors aren't looking for a modest, steady business — they want hypergrowth to justify their valuation. You get pushed to expand internationally, launch secondary product lines, and hire 100 people before you've even figured out why your first 100 users signed up.

You end up building a massive, expensive organization on a foundation of sand.

Then the funding climate shifts. Investors stop writing check after check, and suddenly they start asking awkward questions: "What's your burn rate? What are your unit economics? When will you actually reach profitability?"

If it costs you ₹100 in marketing and overhead to acquire a customer who only generates ₹50 in value, growing ten times bigger doesn't make you successful. It just means you lose ₹50 on a much larger scale.

This is why startup funding announcements shouldn't be celebrated like a finish line. Raising money isn't an achievement — it's taking on indebted expectations. It's fuel. If your car has a broken engine, filling the tank to the brim won't get you down the road any faster; it just makes the explosion bigger when you crash.

The graveyard is littered with startups that raised tens of millions, threw wild launch parties, and made headlines, only to fold quietly two years later. They didn't die because they ran out of cash. They died because the abundance of cash made them forget how to build a real business.

If you ever find yourself sitting on a pile of venture capital, the challenge isn't figuring out how fast you can spend it. It's having the discipline to pretend you're still broke until the core engine actually works.`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Startup Graveyard',
    publishedAt: 'February 15, 2026',
    readTime: '6 min read',
    coverImage: '/blogs/startup_graveyard/episoode03.png',
    tags: ['StartupGraveyard', 'VCFunding', 'BurnRate', 'Discipline']
  },
  {
    id: 'blg-12',
    title: 'Startup Graveyard Ep 4: Killed by the Wrong Customer',
    slug: 'startup-graveyard-ep4-killed-by-wrong-customer',
    excerpt: 'One of the easiest ways to kill a startup is confusing a "user" with a "buyer." Just because someone likes your app doesn\\'t mean they are a customer.',
    content: `You spend eight months in a room building a product. You test it, polish it, polish it some more, and finally drop it into the world. People actually use it. They tell you it's "super cool," leave nice comments on social media, and download it in droves.

And yet, your bank account is bleeding out, and the startup is dying.

The knee-jerk reaction is to blame the product: We need more features. The UI is ugly. The onboarding is broken.

But what if the product is totally fine? What if you're just trying to sell it to the wrong damn person?

One of the easiest ways to kill a startup is confusing a "user" with a "buyer." Just because someone likes your app, uses it daily, and finds it helpful doesn't mean they are a customer. A real customer is someone who has the pain, the authority, and — crucially — the willingness and ability to pull out a credit card.

Take the classic college app mistake. A team builds a study tool for students. Students love it. They use it every night, tweet about it, and beg their friends to download it. The founders celebrate. Then, they put up a \$5/month paywall. Overnight, 95% of those users vanish.

Was the product bad? No. But college students are broke, super price-sensitive, and used to getting digital tools for free. They liked the app, but they didn't need it enough to sacrifice a cup of coffee. The founders built a business on polite applause instead of actual budget.

The person who feels the pain isn't always the one holding the wallet.

Look at enterprise software. An entry-level employee might hate doing manual data entry every Friday, but they don't have purchasing power. The manager who does have the budget doesn't care because they aren't the one doing the grunt work. If you pitch the employee, you get enthusiasm with zero sales. If you pitch the manager, you get a blank stare because the problem isn't painful enough to line-item in their budget.

Humans tolerate dozens of mild annoyances every single day without paying a dime to fix them. A mild inconvenience is not a business opportunity.

If your phone battery drains a little fast, that's annoying. You deal with it. If a company loses ₹50,000 every time its servers go down for ten minutes, that's a hair-on-fire crisis. The stronger and more expensive the pain, the faster people will throw money at a fix.

And please, stop saying your target market is "everyone."

"Our app is for small businesses." Which ones? A local bakery and a 50-person marketing agency are both "small businesses," but their budgets, workflows, and headaches couldn't be more different. When you try to build a product that pleases everybody, you build a watered-down mess that nobody truly loves.

Narrowing your focus feels terrifying because it feels like you're turning away potential money. But picking one specific group — say, independent boutique coffee shop owners — allows you to build the exact razor-sharp solution they've been begging for. You can speak their language, charge what you're worth, and own that tiny corner of the market before expanding.

The same trap applies to feedback. You cannot treat all feedback equally. If you listen to a loud group of free-tier users demanding feature changes, you'll end up destroying the core functionality that your paying power-users actually depend on. Free users will waste hours of your support time and offer endless opinions, but they won't pay your rent. Listen to the people who give you money.

If you want to know if you have a real customer, stop asking them: "Would you buy this?" People are polite in surveys; they will lie to your face to make you feel good.

Instead, ask them: "How are you fixing this right now, and how much are you currently spending on it?"

If their answer is, "Eh, we don't really do anything about it," walk away. They don't care. But if they say, "We hired two interns and built a janky Excel sheet that breaks every Tuesday," bingo. You just found a customer who is actively hurting and desperately looking for a cure.

The startup graveyard is packed with great products built for ghost customers — people who cheered from the sidelines but never bought a ticket.

So ask yourself: Would you rather have 10,000 users who think your product is "neat," or 100 customers who can't live without it and are terrified of you shutting it down?

Because at the end of the day, compliments don't clear payroll. Paying customers do.`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Startup Graveyard',
    publishedAt: 'March 01, 2026',
    readTime: '7 min read',
    coverImage: '/blogs/startup_graveyard/episode04.png',
    tags: ['StartupGraveyard', 'CustomerDiscovery', 'ProductMarketFit', 'UserVsBuyer']
  },
  {
    id: 'blg-13',
    title: 'Startup Graveyard Ep 5: Killed by a Better Competitor',
    slug: 'startup-graveyard-ep5-killed-by-better-competitor',
    excerpt: 'In business, nobody gives out gold medals for showing up first. Customers only care about who solves their problem with the least amount of friction today.',
    content: `You saw the problem before anyone else did. You spent months building the first version, hustled for your first 1,000 users, and put the category on the map. You were the pioneer.

Then a new kid shows up on the block.

They've got sleeker branding, a faster interface, cheaper pricing, and a massive war chest. Almost overnight, the users you bled to acquire start jumping ship. It feels like a total betrayal. You built the house — why are they moving into it?

Because in business, nobody gives out gold medals for showing up first. Customers don't care about your origin story or how many sleepless nights you spent coding the v1. They only care about who solves their problem with the least amount of friction today.

Being the first mover sounds like an advantage, but it's often a trap.

When you're first, you bear the heavy financial tax of educating the market. You have to convince people the problem exists, figure out what price point works, fail publicly, and fix early bugs.

A competitor coming in second gets to sit back and watch. They study your product, read your worst negative reviews, look at your pricing tiers, and map out your mistakes — all without spending a single rupee of their own money. Then they launch a streamlined, bug-free version that skips your two years of painful trial and error.

You did the hard labor; they took the notes.

The real danger kicks in when early success makes you complacent. You hit a steady growth rate, revenue looks healthy, and the team starts protecting what's already built instead of pushing boundaries.

That's when a lean competitor asks the most lethal question in tech: "What if we built this from scratch today?"

While your team is buried in meetings, approving minor feature updates, and maintaining legacy code to avoid upsetting old users, that new startup moves at ten times your speed. They cut out the bloat, strip away seven unused features, and deliver the exact outcome your users wanted in two clicks instead of ten.

Technically minded founders fail here all the time. They fall in love with their product's complexity. They keep adding features, thinking more knobs = more value. Meanwhile, the competitor wins simply because their software is easier to use. Customers don't buy features; they buy results.

Stop obsessing over people "copying" your idea. Ideas are cheap. The real threat is someone understanding your customer's current frustration better than you do.

When a competitor steals your market share, they aren't usually using dark magic. They are just exposing the gaps you stopped paying attention to — the slow customer support, the bloated UI, the outdated pricing model, or the features you refused to fix.

If the only defense you have against a new rival is, "Well, we were here first," you don't actually have a moat. You just have a head start that's shrinking every day.

The goal isn't to kill off competition or panic every time a new app drops. It's to stay paranoid enough to keep improving. The moment you assume you're irreplaceable is the exact moment someone starts building your replacement.

Ask yourself right now: If a funded team launched tomorrow with your exact feature set but a 10x better user experience, why would anyone stay with you?

If you don't have a solid answer, stop watching the competition and go fix your product.`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Startup Graveyard',
    publishedAt: 'March 15, 2026',
    readTime: '6 min read',
    coverImage: '/blogs/startup_graveyard/episode05.png',
    tags: ['StartupGraveyard', 'Competition', 'FirstMoverTrap', 'ProductStrategy']
  },
  {
    id: 'blg-14',
    title: 'Startup Graveyard Ep 6: Killed by Growing Too Fast',
    slug: 'startup-graveyard-ep6-killed-by-growing-too-fast',
    excerpt: 'Growth isn\\'t proof of health. Growth is an amplifier. If your product, team, or ops are already slightly messy, blowing up multiplies them until the whole machine snaps in half.',
    content: `Growth is every startup's favorite drug.

The numbers are going up and to the right, media outlets are reaching out, investors are throwing money at you, and everyone on LinkedIn thinks you're a genius. When a startup goes viral or explodes onto the scene, it feels like winning the lottery.

Except nobody tells you about the dark side of that high: what happens when your business grows faster than your ability to keep up with it?

Growth isn't proof of health. Growth is an amplifier. If your product, team, or internal ops are already slightly messy at ten customers, blowing up to a hundred thousand doesn't fix those messes — it multiplies them until the whole machine snaps in half.

When you're running a small ten-person startup, you can survive on pure adrenaline and quick conversations. The founder jumps on a support ticket, the engineer fixes a bug in twenty minutes, everyone gets takeout together, and you call it a day. It's fast, chaotic, and personal.

Now throw a million users at that same tiny structure.

The founder can't personally answer 10,000 angry emails. The server locks up. Database calls fail. Orders get delayed, quality plummets, and your team is working 18-hour days trying to patch holes with duct tape. Your biggest marketing triumph just turned into a PR crisis.

It's like a tiny local restaurant going viral on TikTok. Suddenly 500 people are standing outside a kitchen built to serve fifty. Orders take two hours, the food comes out cold, staff gets burnt out and quits, customers leave brutal reviews, and three weeks later the restaurant goes under. The problem wasn't a lack of interest — it was a complete lack of capacity.

This is where founders confuse growing with scaling.

Growing simply means getting bigger — more users, more revenue, but also twice as many expenses, three times as many support tickets, and ten times as many headaches. Scaling means growing your user base without letting complexity and costs blow up at the same speed.

Instead of scaling, panic-stricken founders usually do the worst thing possible: they throw money at the problem by hiring too fast.

They raise a big round, hire 50 people in three months, and suddenly the original tight-knit culture evaporates. You get layers of middle management, endless coordination meetings, bureaucracy, and a sea of new hires who don't even know what the core product does. More headcount doesn't mean more output — half the time it just means more noise and longer slack threads.

And God forbid growth slows down even a little bit.

When you expand aggressively into ten new cities based on the assumption that revenue will keep doubling forever, you build a massive, expensive machine. The moment the market cools off or a competitor steps in, you're left with sky-high monthly expenses, empty offices, and a burn rate that forces brutal layoffs.

Sustainable growth isn't about moving like a snail — it's about growing at a pace your operational engine can actually support.

Before you pray for hypergrowth, ask yourself the unglamorous questions:
● If user signups multiply by ten tonight, does customer support collapse tomorrow?
● If we double our team size, can we actually manage them without endless bureaucracy?
● If growth slows down by 30% next quarter, do we go bankrupt?

The startup graveyard is packed with companies that had millions of downloads, huge launch parties, and massive teams. They didn't die because nobody cared. They died because too many people cared all at once — and the company crushed itself under its own weight.

Before you try to blow up the scoreboard, make sure your foundation can actually take the hit.`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Startup Graveyard',
    publishedAt: 'April 01, 2026',
    readTime: '6 min read',
    coverImage: '/blogs/startup_graveyard/episode06.png',
    tags: ['StartupGraveyard', 'GrowthTraps', 'Scaling', 'SustainableGrowth']
  },
  {
    id: 'blg-15',
    title: 'Startup Graveyard Ep 7: Killed by Solving a Problem Nobody Had',
    slug: 'startup-graveyard-ep7-killed-by-no-problem',
    excerpt: 'The far more tragic deaths happen to startups where everything is built impeccably well — but after the launch excitement fades, there\\'s deafening silence.',
    content: `Some startups die because the product is ugly, slow, or broken. But the far more tragic deaths happen to startups where everything is built impeccably well: the code is clean, the branding is sleek, the team is brilliant, and the tech works like magic.

The pitch decks look incredible, and investors even drop comments like, "Wow, that's genuinely innovative."

Then you launch, open the doors, and encounter a deafening silence.

Because after all the launch excitement fades, you're left facing the single most brutal reality check in entrepreneurship: Does anyone actually give a damn about this problem?

Founders are wired to spot friction points everywhere. We look at an old-fashioned process, a minor inconvenience, or an outdated system and instantly start brainstorming how to fix it with code, AI, or automation.

It's an awesome instinct — until you fall into the trap of confusing what you can build with what people actually need.

Take a hypothetical app that tracks every drop of water you drink, calculates your hydration metrics down to the milliliter, sends customized notifications, and generates weekly graphs. The tech might be seamless. The UI could win awards. But the average person's reaction is just going to be: "I'm capable of drinking water when I'm thirsty."

You didn't build a business; you built a complex, beautifully engineered solution to a minor inconvenience that nobody felt like paying money to solve.

This happens most often when people start with a solution instead of a problem:
● "I want to build a crypto/blockchain startup."
● "I want to launch an AI workflow app."
● "I want to make a hyper-niche marketplace."

Starting with the hammer guarantees everything looks like a nail. But customers don't buy your shiny hammer — they buy a hole in the wall. If they don't actually care about hanging a picture, your hammer is just an expensive desk paperweight.

Before writing a single line of code, you have to look for actual evidence that the problem hurts.

Polite survey responses don't count as evidence. If you ask a friend or acquaintance, "Would you use a product that does X?", they'll usually say yes to be nice. They might even think it sounds neat in theory. But "sounds neat" doesn't translate into changing daily habits or pulling out a credit card.

The question you should be asking people instead is: "How are you trying to fix this right now?"

If their answer is, "Honestly, I don't really do much about it," walk away immediately. They don't care enough. But if their answer is, "We're paying ₹20,000 a month for three messy spreadsheets and a contractor just to keep up with it," you've found a real, bleeding pain point.

The hardest part of this process is checking your own ego. Founders get deeply, emotionally attached to their original vision. When early users bounce, it's comforting to assume, "Oh, the market just doesn't understand the vision yet."

Sometimes that's true. But 90% of the time, the market understands what you built perfectly well — they just don't want or need it.

Falling in love with your solution traps you inside a box. Fall in love with the problem instead. If the problem is real, you can change the tech, rethink the workflow, or completely redesign the product ten times over without losing sight of the goal.

The startup graveyard is packed with brilliant engineering projects that nobody ever asked for. The smartest founders aren't the ones who are always right on day one; they're the ones who realize they're wrong fast enough to fix it before the money runs out.

Stop asking "Can we build this?"

Start asking "If we build this, would anyone's life actually suffer if it disappeared tomorrow?"`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Startup Graveyard',
    publishedAt: 'April 15, 2026',
    readTime: '6 min read',
    coverImage: '/blogs/startup_graveyard/episode07.png',
    tags: ['StartupGraveyard', 'ProblemValidation', 'BuildVsNeed', 'FounderEgo']
  },
  {
    id: 'blg-16',
    title: 'Startup Graveyard Ep 8: Killed by Listening to Everyone',
    slug: 'startup-graveyard-ep8-killed-by-listening-to-everyone',
    excerpt: 'Listening to everyone will kill your company just as fast as listening to nobody. Feedback is raw data — it isn\\'t a direct order.',
    content: `"Listen to your customers."

It's the first commandment of startup advice, and for good reason. Customers use your product, suffer through your bugs, and feel the friction firsthand. Their feedback can pull you out of blind spots you didn't even know you had.

But there's a brutal lesson every founder learns the hard way: listening to everyone will kill your company just as fast as listening to nobody.

Picture this: You launch a product.
● User A wants three new features added.
● User B says the UI is too bloated and wants them removed.
● User C says \$20/month is way too expensive.
● User D says \$20/month makes the app look cheap and untrustworthy.

If you try to make everyone happy, you start tweaking, adding, removing, and repricing every two weeks. Before you know it, your clean, focused software turns into a Frankenstein monster of conflicting opinions — trying to be everything to everyone, and ended up being useless to everybody.

Feedback is raw data. It isn't a direct order.

Customers are incredible at describing their own pain, but they are rarely good at designing the cure. If ten users ask for ten different feature buttons, your job isn't to build all ten. Your job is to figure out the underlying itch they're trying to scratch.

If a user demands, "Send me an email alert every time a file changes," building that alert might actually be a mistake. The deeper issue might be that they don't trust your system to process their files reliably. Fixing the trust issue solves the actual problem; adding more noise to their inbox just papers over it.

You also have to watch out for loud-mouth bias. The loudest customer in your inbox isn't automatically your most important user. Often, the people screaming for custom features on Twitter or support tickets contribute \$10 a month, while your quiet power users silently rely on the product, pay \$200 a month, and never file a ticket — until you break the app to satisfy the loud guy.

Context matters. Who is giving the feedback?
● If a beginner tries professional design software and complains it's "too complex," simplifying it strips away the exact power features your paying pro designers depend on.
● If someone outside your target audience says your price is too high, lowering it won't magically make them a long-term customer — it just degrades your unit economics for the people who actually value what you built.

Not everyone should love your product. In fact, having a specific group of people dislike your software is often a great sign that you've picked a clear side and built something differentiated.

And then there's the advisory noise. Beyond customers, you have investors, mentors, friends, employees, and LinkedIn influencers all barking directions at once.
● "Expand internationally!"
● "Stay local!"
● "Pivot to AI!"
● "Focus on enterprise!"

If you treat a startup like a democracy, you'll sail in circles until you run out of fuel. Feedback is the wind, but your vision is the rudder. You need both to get anywhere.

The startup graveyard is full of stubborn founders who ignored every warning sign. But right next to them are the founders who had no backbone — the ones who listened to absolutely everybody, lost their product's identity, and built a ghost town out of polite consensus.

Listen deeply. Analyze the motives. Inspect the data. But at the end of the day, have the guts to look at experienced advisors or vocal users, shake their hand, and say: "I hear you, but we're not going to do that."

Think About It:
If ten people gave you ten completely different directions for your startup tomorrow, would you try to compromise and please all ten? Or do you have a clear enough vision to thank them for the feedback and still stay your course?`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Startup Graveyard',
    publishedAt: 'May 01, 2026',
    readTime: '6 min read',
    coverImage: '/blogs/startup_graveyard/episode08.png',
    tags: ['StartupGraveyard', 'Feedback', 'ProductVision', 'FounderBackbone']
  },
  {
    id: 'blg-17',
    title: 'Startup Graveyard Ep 9: What Dead Startups Can Teach Living Ones',
    slug: 'startup-graveyard-ep9-lessons-from-dead-startups',
    excerpt: 'The startup graveyard is the most valuable library on earth. Failure gives you a line-by-line breakdown of what went wrong — study it with deep respect.',
    content: `Every startup founder loves talking about success.

We celebrate the \$5 million seed round, the TechCrunch headline, the massive user milestone, and the slick new office. Success stories dominate podcasts, Twitter threads, and LinkedIn posts.

But there's a massive, quiet graveyard of companies that nobody wants to talk about:
● The startups that quietly ran out of cash.
● The products that launch to total radio silence.
● The founding teams that tore themselves apart over equity.
● The high-flyers that grew too fast and exploded.

We treat these dead startups like embarrassing secrets to sweep under the rug. But if you're trying to build something that lasts, the startup graveyard is the most valuable library on earth.

When a startup wins, it's actually really hard to reverse-engineer why. People point to "vision," "great culture," or "hustle," but half the time, the company just got lucky with timing or landed one key partnership.

Failure, on the other hand, is brutally clear. The autopsy doesn't lie:
● They spent \$50 to acquire users who only generated \$10 in lifetime value.
● They built a complex product nobody wanted to pay for.
● They ran out of runway six months before hitting their next growth milestone.
● They expanded into three new markets before proving unit economics in the first.

Failure gives you a line-by-line breakdown of what went wrong.

One of the biggest unfair advantages you have as an entrepreneur today is that you don't have to pay for every lesson yourself. You can study the wreckage of companies that burned through tens of millions of dollars so you don't make the exact same mistakes with your own limited budget.

Study successful companies to figure out what might work. Study failed companies to learn what will definitely kill you.

Take funding, for example. The media glorifies massive fundraising rounds as if raising capital is the win. But studying dead startups teaches you the uncomfortable truth: capital doesn't fix a broken business model; it just accelerates its collapse. Throwing \$10 million at a flawed product doesn't create market demand — it just helps you burn cash at ten times the speed.

It also forces you to stop falling for vanity metrics. A dead startup might have boasted 100,000 app downloads before going under. Why? Because downloads aren't retention, users aren't paying customers, and "viral interest" isn't a sustainable business model.

Studying failure breeds a healthy, survival-focused mindset. It replaces blind optimism with sharp curiosity:
● Instead of asking "How do we hit \$1M in revenue?", you start asking "What are the three things that could bankrupt us next quarter?"
● "What if our biggest enterprise client leaves?"
● "What if user acquisition costs double?"
● "What if our primary distribution channel changes its algorithm?"

Asking these questions isn't negative — it's how you build resilience.

Behind every dead startup are real human beings — founders who lost their savings, employees who were laid off, and investors who lost their shirts. We shouldn't mock those failures. We should study them with deep respect, take notes on the warning signs, and learn from their mistakes.

Entrepreneurship isn't about never messing up. It's about recognizing a mistake fast enough to correct course before it becomes fatal.

The smartest founders aren't the ones who think they're invincible. They're the ones who read the tombstones, recognize the patterns, and make sure they don't dig their own grave for the exact same reason.

Think About It:
If you had full access to the internal post-mortems of 100 failed startups in your exact industry before writing your first line of code, how many disastrous mistakes would you avoid?

Maybe the ultimate competitive edge isn't having a secret formula for success — it's knowing every hidden trap that leads to failure.`,
    author: {
      name: 'E-Cell BITS Vizag',
      role: 'Content Team',
      avatar: '/logo.jpg'
    },
    category: 'Startup Graveyard',
    publishedAt: 'May 15, 2026',
    readTime: '6 min read',
    coverImage: '/blogs/startup_graveyard/episode09.png',
    tags: ['StartupGraveyard', 'FailureAnalysis', 'Resilience', 'FounderMindset']
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'K. Satyanarayana',
    role: 'Managing Director',
    organization: 'Vizag Port Logistics Hub',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    quote: 'BITS Vizag E-Cell is fostering a phenomenal entrepreneurial spirit. The student startups coming out of this campus are solving genuine regional industrial challenges with world-class engineering.',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Dr. Radhika V',
    role: 'Regional Director',
    organization: 'Institution\'s Innovation Council (IIC)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200',
    quote: 'The structured incubation model, maker labs, and mentorship drives organized by BITS Vizag E-Cell set a benchmark for technical institutes across Andhra Pradesh.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Anil Kumar',
    role: 'Founder & CEO',
    organization: 'AquaSense AI (Incubated Startup)',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200',
    quote: 'Without E-Cell\'s seed grant and mentor network, AquaSense AI would still be a college lab project. Today we manage 120+ farms across Vizag coast.',
    rating: 5
  }
];

export const INITIAL_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'anc-1',
    title: 'E-Summit Vizag 2026 Early Bird Passes Released!',
    content: 'Register before August 25 to get free access to VC Speed Dating and Masterclasses.',
    date: 'July 28, 2026',
    type: 'Urgent',
    link: '/events'
  },
  {
    id: 'anc-2',
    title: 'Incubation Grant Cohort #5 Open for Applications',
    content: 'BITS Vizag student founders can apply for up to ₹25 Lakhs in non-dilutive seed funding.',
    date: 'July 20, 2026',
    type: 'Info',
    link: '/initiatives'
  }
];

export const INITIAL_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Ramesh Babu',
    email: 'ramesh@vizaginvestors.com',
    subject: 'Mentorship & VC Sponsorship for E-Summit',
    message: 'Hello E-Cell Team, We would like to sponsor the upcoming E-Summit 2026 pitch competition and join the jury panel.',
    timestamp: '2026-07-30 14:22',
    status: 'Unread'
  }
];

export const INITIAL_FACULTY: FacultyAdvisor[] = [
  {
    id: 'fac-1',
    name: 'Dr. Ravi Varma',
    role: 'Chief Faculty Advisor',
    department: 'Computer Science & Engineering',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
    bio: 'With over 15 years in AI research and 3 patents, Dr. Varma guides the E-Cell on deep tech incubation and industry partnerships.',
    linkedin: 'https://linkedin.com/in/ravi-varma',
    email: 'rvarma@bitsvizag.ac.in'
  },
  {
    id: 'fac-2',
    name: 'Prof. Lakshmi K',
    role: 'Incubation Head',
    department: 'Mechanical Engineering',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    bio: 'Former consultant at McKinsey. She handles the hardware accelerator program and mentors student hardware startups.',
    email: 'lakshmi.k@bitsvizag.ac.in'
  }
];

export const INITIAL_MENTORS: MentorItem[] = [
  // ===== Patronage & Institutional Leadership =====
  {
    id: 'mnt-1',
    name: 'Dr. Sri Lakshmi Kondru',
    expertise: [],
    company: 'BITS Vizag',
    role: 'Secretary',
    photo: '/mentors/Dr. Sri Lakshmi kondru.jpeg',
    linkedin: 'https://www.linkedin.com/in/dr-sri-lakshmi-kondru-a855406b/',
    email: '',
    phone: '',
    bio: '',
    available: false,
    category: 'Patronage & Institutional Leadership'
  },
  {
    id: 'mnt-2',
    name: 'Dr. B Poorna Satyanarayana',
    expertise: [],
    company: 'BITS Vizag',
    role: 'Principal',
    photo: '/mentors/Dr.B POORNA SATYANARAYANA.jpeg',
    linkedin: 'https://www.linkedin.com/in/dr-b-poorna-satyanarayana-659b5130/',
    email: '',
    phone: '9121214313',
    bio: '',
    available: false,
    category: 'Patronage & Institutional Leadership'
  },

  // ===== Advisory Board - All HODs =====
  {
    id: 'mnt-3',
    name: 'Joshua Raju P',
    expertise: [],
    company: 'BITS Vizag',
    role: 'Faculty Advisor',
    photo: '/mentors/Joshua Raju P.jpeg',
    linkedin: 'https://www.linkedin.com/in/joshua-raju-p-a11335163/',
    email: 'josh.educato@gmail.com',
    phone: '8297293834',
    bio: '',
    available: false,
    category: 'Advisory Board'
  },
  {
    id: 'mnt-4',
    name: 'Mr. Srirangam Durga Prasad',
    expertise: [],
    company: 'Dept. of CSE',
    role: 'HOD - CSE',
    photo: '/mentors/Mr. Srirangam Durga Prasad.jpg',
    linkedin: '',
    email: 'babacsehod@gmail.com',
    phone: '8712297422',
    bio: '',
    available: false,
    category: 'Advisory Board'
  },
  {
    id: 'mnt-5',
    name: 'Dr. Pathem Uma Chaithanya',
    expertise: [],
    company: 'Dept. of Mechanical Engineering',
    role: 'HOD - MECH',
    photo: '/mentors/Dr. Pathem Uma Chaithanya.jpeg',
    linkedin: '',
    email: 'babamechhod@gmail.com',
    phone: '9817049898',
    bio: '',
    available: false,
    category: 'Advisory Board'
  },
  {
    id: 'mnt-6',
    name: 'Dr. Dusi Narasimha Murty',
    expertise: [],
    company: 'Dept. of BS&H',
    role: 'HOD - BS&H',
    photo: '',
    linkedin: '',
    email: '',
    phone: '9398688852',
    bio: '',
    available: false,
    category: 'Advisory Board'
  },
  {
    id: 'mnt-7',
    name: 'Dr. Kondapalli Pradeep',
    expertise: [],
    company: 'Dept. of ECE',
    role: 'HOD - ECE',
    photo: '',
    linkedin: '',
    email: 'babaecehod@gmail.com',
    phone: '9160350380',
    bio: '',
    available: false,
    category: 'Advisory Board'
  },
  {
    id: 'mnt-8',
    name: 'Dr. Kamaraju Vechalapu',
    expertise: [],
    company: 'Dept. of EEE',
    role: 'HOD - EEE',
    photo: '',
    linkedin: '',
    email: 'babaeeehod@gmail.com',
    phone: '9963268636',
    bio: '',
    available: false,
    category: 'Advisory Board'
  },
  {
    id: 'mnt-9',
    name: 'Mrs. K. Sireesha',
    expertise: [],
    company: 'Dept. of MBA',
    role: 'HOD - MBA',
    photo: '',
    linkedin: '',
    email: 'babambahod@gmail.com',
    phone: '9703193788',
    bio: '',
    available: false,
    category: 'Advisory Board'
  },
  {
    id: 'mnt-10',
    name: 'Dr. Shahazadi Begum',
    expertise: [],
    company: 'Dept. of Civil Engineering',
    role: 'HOD - CIVIL',
    photo: '',
    linkedin: '',
    email: 'babcivilhod@gmail.com',
    phone: '9032972944',
    bio: '',
    available: false,
    category: 'Advisory Board'
  },

  // ===== Advisory Panel (Associate / Assistant Professors) =====
  {
    id: 'mnt-11',
    name: 'Dr. Aswan Kumar Gera',
    expertise: [],
    company: 'Dept. of ECE, BITS Vizag',
    role: 'Associate Professor',
    photo: '/mentors/Dr.Aswan Kumar Gera.jpeg',
    linkedin: '',
    email: 'aswanphd@gmail.com',
    phone: '',
    bio: '',
    available: false,
    category: 'Advisory Panel'
  },
  {
    id: 'mnt-12',
    name: 'Mr. M V S Prem Sagar',
    expertise: [],
    company: 'Dept. of EEE',
    role: 'Assistant Professor',
    photo: '/mentors/Mr. M V S PREM SAGAR.jpeg',
    linkedin: '',
    email: 'sagarmanthri@gmail.com',
    phone: '9985742615',
    bio: '',
    available: false,
    category: 'Advisory Panel'
  },
  {
    id: 'mnt-13',
    name: 'Mr. M. Vasudevarao',
    expertise: [],
    company: 'Dept. of Management Studies, BITS Vizag',
    role: 'Associate Professor',
    photo: '/mentors/Mr.M.VASUDEVARAO.jpeg',
    linkedin: '',
    email: 'vasumalicherla@gmail.com',
    phone: '9885993163',
    bio: '',
    available: false,
    category: 'Advisory Panel'
  },
  {
    id: 'mnt-14',
    name: 'Dr. Paromita Mukherjee',
    expertise: [],
    company: 'Dept. of BS&H',
    role: 'Faculty',
    photo: '/mentors/Dr. Paromita Mukherjee.jpeg',
    linkedin: '',
    email: 'drparomitabitsvizag@gmail.com',
    phone: '9313184040',
    bio: '',
    available: false,
    category: 'Advisory Panel'
  },
  {
    id: 'mnt-15',
    name: 'K. Lavanya',
    expertise: [],
    company: 'Dept. of Civil Engineering, BITS Vizag',
    role: 'Assistant Professor',
    photo: '/mentors/K. Lavanya.jpeg',
    linkedin: '',
    email: 'kotnilavanya1013@gmail.com',
    phone: '9182357411',
    bio: '',
    available: false,
    category: 'Advisory Panel'
  },
  {
    id: 'mnt-16',
    name: 'Mr. Vadapalli Preetham Kumar',
    expertise: [],
    company: 'Dept. of Mechanical Engineering',
    role: 'Assistant Professor',
    photo: '/mentors/Mr. Vadapalli Preetham Kumar.jpeg',
    linkedin: '',
    email: 'preethamraju96@gmail.com',
    phone: '9701161391',
    bio: '',
    available: false,
    category: 'Advisory Panel'
  },
  {
    id: 'mnt-17',
    name: 'Mrs. P. Kavya Gayathri',
    expertise: [],
    company: 'Dept. of CSE',
    role: 'Assistant Professor',
    photo: '/mentors/Mrs.P.Kavya Gayathri.jpeg',
    linkedin: '',
    email: 'gayathriraghuram2016@gmail.com',
    phone: '9866247778',
    bio: '',
    available: false,
    category: 'Advisory Panel'
  },
  {
    id: 'mnt-18',
    name: 'Ms. Sukka Venkatakavitha',
    expertise: [],
    company: 'Dept. of BS&H',
    role: 'Faculty',
    photo: '/mentors/Ms. Sukka Venkatakavitha.jpeg',
    linkedin: '',
    email: 'Venkatakavithamsc@gmail.com',
    phone: '9985388148',
    bio: '',
    available: false,
    category: 'Advisory Panel'
  }
];

export const INITIAL_ALUMNI: AlumniItem[] = [
  {
    id: 'alm-1',
    name: 'Anil Chowdary',
    graduationYear: '2019',
    degree: 'B.Tech CSE',
    currentCompany: 'Vizag Angels',
    currentRole: 'Angel Investor',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com/in/anil-chowdary',
    location: 'Visakhapatnam, India',
    startupFounded: 'Sold First Startup to Flipkart'
  },
  {
    id: 'alm-2',
    name: 'Meghana Rao',
    graduationYear: '2021',
    degree: 'B.Tech ECE',
    currentCompany: 'Google',
    currentRole: 'Product Manager',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    linkedin: 'https://linkedin.com/in/meghana-rao',
    location: 'Bangalore, India'
  }
];

export const INITIAL_RESOURCES: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Standard Pre-Seed Pitch Deck Template',
    description: 'A 10-slide template covering Problem, Solution, Market, and Ask. Used by 5+ funded BITS startups.',
    category: 'Pitch Decks',
    fileUrl: '#',
    fileType: 'PDF',
    dateAdded: '2026-08-01'
  },
  {
    id: 'res-2',
    title: 'Founder Agreement (India)',
    description: 'Standard legal template for equity split, vesting schedules, and IP assignment.',
    category: 'Legal Templates',
    fileUrl: '#',
    fileType: 'DOCX',
    dateAdded: '2026-07-15'
  }
];

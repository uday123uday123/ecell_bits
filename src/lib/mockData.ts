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

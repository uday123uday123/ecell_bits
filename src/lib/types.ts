export interface EventItem {
  id: string;
  title: string;
  category: 'Summit' | 'Hackathon' | 'Workshop' | 'Pitch' | 'Talk' | 'Bootcamp';
  date: string;
  time: string;
  location: string;
  description: string;
  fullDetails?: string;
  image: string;
  status: 'Upcoming' | 'Live' | 'Past';
  registrationOpen: boolean;
  registrationDeadline?: string;
  prizePool?: string;
  speakers?: { name: string; role: string; company: string; avatar: string }[];
  schedule?: { time: string; activity: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  photo: string;
  linkedin: string;
  email: string;
  github?: string;
  featured?: boolean;
}

export interface StartupItem {
  id: string;
  name: string;
  tagline: string;
  founder: string;
  founderRole: string;
  industry: 'EdTech' | 'AI & ML' | 'HealthTech' | 'FinTech' | 'Sustainability' | 'SaaS' | 'DeepTech';
  logo: string;
  website: string;
  description: string;
  fundingStage: 'Idea Phase' | 'Incubated / Seed' | 'Pre-Series A' | 'Bootstrapped';
  valuationOrGrant?: string;
  achievements: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'E-Summit Inaugural Ceremony' | 'RTIH Visit';
  imageUrl: string;
  date: string;
}

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: 'Entrepreneurship' | 'Pitching' | 'Tech Trends' | 'Funding 101' | 'Founder Stories' | 'Startup Graveyard';
  publishedAt: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export interface InitiativeItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  highlights: string[];
  metrics: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'Urgent' | 'Info' | 'Event';
  link?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'Unread' | 'Read' | 'Responded';
}

export interface FacultyAdvisor {
  id: string;
  name: string;
  role: string;
  department: string;
  photo: string;
  bio: string;
  linkedin?: string;
  email: string;
}

export interface MentorItem {
  id: string;
  name: string;
  expertise: string[];
  company: string;
  role: string;
  photo: string;
  linkedin: string;
  email: string;
  phone: string;
  bio: string;
  available: boolean;
  category: 'Patronage & Institutional Leadership' | 'Advisory Board' | 'Advisory Panel';
}

export interface AlumniItem {
  id: string;
  name: string;
  graduationYear: string;
  degree: string;
  currentCompany: string;
  currentRole: string;
  photo: string;
  linkedin: string;
  location: string;
  startupFounded?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: 'Pitch Decks' | 'Legal Templates' | 'Financial Models' | 'Guides';
  fileUrl: string;
  fileType: 'PDF' | 'DOCX' | 'XLSX' | 'Link';
  dateAdded: string;
}

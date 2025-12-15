// ===== PROFILE DATA =====
export const profile = {
  name: "I Made Dwi Arya Wiguna",
  title: "Creative Producer & Show Director",
  email: "aryafoxs@gmail.com",
  summary:
    "Creative professional with extensive experience in visual storytelling, specializing in graphic design, video editing, motion graphics, and live stream direction.",
  location: "Bali, Indonesia",
  education: {
    degree: "S1 Sistem Informasi",
    institution: "Primakara University",
    graduationYear: 2026,
  },
};

// ===== NAVIGATION =====
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Skills", href: "/skills" },
  { name: "Training", href: "/training" },
  { name: "Contact", href: "/contact" },
];

// ===== SOCIAL LINKS =====
export const socialLinks = [
  { name: "Email", href: "mailto:aryafoxs@gmail.com", icon: "Mail" },
  { name: "LinkedIn", href: "#", icon: "Linkedin" },
  { name: "Instagram", href: "#", icon: "Instagram" },
];

// ===== WORK EXPERIENCE =====
export const experiences = [
  {
    id: 1,
    title: "Creative Producer & Show Director",
    company: "Bagoes Esports Organizer",
    duration: "Oct 2023 – 2025",
    description:
      "Leading creative production and show direction for esports events. Managing multimedia teams, coordinating live broadcasts, and developing visual content strategies.",
    responsibilities: [
      "Lead creative direction for esports tournaments",
      "Manage broadcast production teams",
      "Develop visual identity for events",
      "Coordinate live streaming operations",
    ],
    tools: ["OBS Studio", "vMix", "Adobe Premiere Pro", "After Effects"],
  },
  {
    id: 2,
    title: "Book Layouter",
    company: "BTW Edutech",
    duration: "Jan 2022 – Jan 2023",
    description:
      "Designed and produced educational book layouts. Created visually appealing and readable layouts for textbooks and learning materials.",
    responsibilities: [
      "Design book layouts and covers",
      "Create illustrations and infographics",
      "Ensure print-ready quality",
      "Collaborate with content writers",
    ],
    tools: ["Adobe InDesign", "Illustrator", "Photoshop"],
  },
  {
    id: 3,
    title: "Freelance Graphic Designer",
    company: "Self-employed",
    duration: "Jul 2020 – Jan 2022",
    description:
      "Provided graphic design services for various clients. Specialized in branding, social media content, and marketing materials.",
    responsibilities: [
      "Create brand identities",
      "Design social media content",
      "Develop marketing materials",
      "Client communication and project management",
    ],
    tools: ["Photoshop", "Illustrator", "Canva"],
  },
];

// ===== PROJECTS =====
export const projects = [
  {
    id: 1,
    title: "Wallkota Cup Denpasar",
    role: "Lead Multimedia & Broadcast Team",
    description:
      "Major esports tournament with full production coverage. Led the multimedia team for broadcast, graphics, and content creation.",
    highlights: [
      "Live broadcast production",
      "Real-time graphics integration",
      "Multi-camera direction",
      "Social media content",
    ],
    category: "Live Production",
  },
  {
    id: 2,
    title: "Glory of School",
    role: "Lead Multimedia & Broadcast Team",
    description:
      "School esports competition series. Managed end-to-end multimedia production including streaming, graphics, and video content.",
    highlights: [
      "Tournament broadcast",
      "Motion graphics packages",
      "Highlight videos",
      "Brand implementation",
    ],
    category: "Live Production",
  },
];

// ===== SKILLS =====
export const skillCategories = [
  {
    name: "Creative Production",
    icon: "Palette",
    skills: [
      { name: "Creative Direction", level: 90 },
      { name: "Visual Storytelling", level: 85 },
      { name: "Motion Graphics & Animation", level: 85 },
      { name: "Live Stream Production", level: 90 },
    ],
  },
  {
    name: "Technical Skills",
    icon: "Monitor",
    skills: [
      { name: "Video Editing", level: 90 },
      { name: "Graphic Design", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Team Leadership", level: 85 },
    ],
  },
  {
    name: "Soft Skills",
    icon: "Users",
    skills: [
      { name: "Client Communication", level: 85 },
      { name: "Team Collaboration", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Time Management", level: 80 },
    ],
  },
];

// ===== TOOLS =====
export const toolCategories = [
  {
    name: "Video & Motion",
    tools: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut",
    ],
  },
  {
    name: "Graphics & Visual",
    tools: ["Photoshop", "Illustrator", "InDesign", "Canva"],
  },
  {
    name: "Live Streaming",
    tools: ["OBS Studio", "vMix", "PRISM Live Studio", "TikTok Live Studio"],
  },
  {
    name: "Productivity",
    tools: ["Microsoft Word", "Excel", "PowerPoint"],
  },
];

// ===== TRAINING & SPEAKING =====
export const trainings = [
  {
    id: 1,
    title: "Creative Production Workshop",
    institution: "Bali International University",
    date: "Feb 2024",
    description: "Training session on creative production techniques for students.",
  },
  {
    id: 2,
    title: "Live Streaming Fundamentals",
    institution: "Bali International University",
    date: "May 2024",
    description: "Workshop covering the basics of professional live streaming.",
  },
  {
    id: 3,
    title: "Motion Graphics Masterclass",
    institution: "Bali International University",
    date: "Aug 2024",
    description: "Advanced motion graphics techniques using After Effects.",
  },
  {
    id: 4,
    title: "Esports Broadcast Production",
    institution: "Bali International University",
    date: "Feb 2025",
    description: "Comprehensive training on esports event production.",
  },
];

// ===== PORTFOLIO ITEMS =====
export const portfolioItems = [
  {
    id: 1,
    title: "Wallkota Cup Broadcast Package",
    category: "Live Production",
    description: "Complete broadcast graphics and production for Wallkota Cup Denpasar esports tournament.",
    thumbnail: "/images/portfolio/wallkota-cup.jpg",
    tags: ["Broadcast", "Motion Graphics", "Live Production"],
  },
  {
    id: 2,
    title: "Glory of School Event Graphics",
    category: "Live Production",
    description: "Full visual package for Glory of School esports competition series.",
    thumbnail: "/images/portfolio/glory-of-school.jpg",
    tags: ["Esports", "Graphics", "Animation"],
  },
  {
    id: 3,
    title: "Social Media Content Design",
    category: "Graphic Design",
    description: "Various social media content designs for esports and gaming clients.",
    thumbnail: "/images/portfolio/social-media.jpg",
    tags: ["Social Media", "Graphic Design", "Branding"],
  },
  {
    id: 4,
    title: "Motion Graphics Showreel",
    category: "Video & Motion",
    description: "Collection of motion graphics work including intros, transitions, and animations.",
    thumbnail: "/images/portfolio/motion-showreel.jpg",
    tags: ["After Effects", "Animation", "Motion"],
  },
];

// ===== PORTFOLIO CATEGORIES =====
export const portfolioCategories = [
  "All",
  "Video & Motion",
  "Graphic Design",
  "Live Production",
];

// ---------------------------------------------------------------
// SOLO: Skills, Opportunities, Learning and Outcome
// Content data structured from the official SOLO Learner Guide.
// ---------------------------------------------------------------

export const navLinks = [
  { label: 'Discover', href: '/discover' },
  { label: 'Build', href: '/build' },
  { label: 'Showcase', href: '/showcase' },
]

export const heroStats = [
  { value: '100+', label: 'Verified pathways' },
  { value: '100+', label: 'Cryptographic credentials' },
  { value: '100+', label: 'Career roles mapped' },
]

// Floating decorative cards in the hero
export const heroFloatingCards = [
  { id: 'jobs', kind: 'pill', icon: 'rocket', title: 'Jobs', subtitle: 'Launch', accent: 'var(--orange)', style: { top: '10%', left: '4%' } },
  { id: 'skills', kind: 'pill', icon: 'sparkles', title: 'Skills', subtitle: 'Grow', accent: 'var(--blue)', style: { top: '14%', right: '6%' } },
  { id: 'courses', kind: 'pill', icon: 'sparkle', title: 'Courses', subtitle: 'Explore', accent: 'var(--ink)', style: { top: '48%', right: '2%' } },
  { id: 'certifications', kind: 'pill', icon: 'check', title: 'Certifications', subtitle: 'Prove', accent: 'var(--ink)', style: { bottom: '18%', right: '4%' } },
  { id: 'internships', kind: 'pill', icon: 'arrow-up-right', title: 'Internships', subtitle: 'Match', accent: 'var(--success)', style: { bottom: '8%', left: '6%' } },
  { id: 'journey', kind: 'journey', eyebrow: 'Your journey', stageStart: '01', stageEnd: '04', title: 'From curious to career-ready.', style: { top: '38%', left: '4%' } },
]

export const trustStripItems = [
  { text: 'Open Badges & CLR Aligned' },
  { text: 'AI-Matched Pathways' },
  { text: 'Verifiable, Portable Credentials' },
  { text: 'Built with Institutions & Employers' },
]

export const whatIsSoloCards = [
  {
    title: 'Learn with Structured Pathways',
    desc: 'Follow step-by-step role pathways curated with partners like IBM SkillsBuild. Track progress as modules turn into earned badges.',
    accent: 'var(--orange)',
    bg: 'linear-gradient(160deg, #FFF0EA, #FDF1E6)',
  },
  {
    title: 'Prove It with Verifiable Credential Badges',
    desc: 'Turn course completions, live projects, and internships into tamper-proof credentials stored securely in your SOLO Credential Wallet.',
    accent: 'var(--gold)',
    bg: 'linear-gradient(160deg, #FFF3E6, #FDF1E6)',
  },
  {
    title: 'Analyze Skill Gaps & Launch Careers',
    desc: 'Compare your profile directly against target job roles. See matched, partially matched, and missing skills, then close the gap with 1 click.',
    accent: 'var(--blue)',
    bg: 'linear-gradient(160deg, #EAF0FF, #F3F6FF)',
  },
]

export const journeyStages = [
  {
    title: 'Sign Up & Import',
    image: '/images/journey/01-sign-up-import.png',
    imageAlt: 'SOLO sign up and resume import screen',
    desc: 'Get started via institutional invite or email. Upload an existing resume in PDF/DOCX to let SOLO AI automatically extract skills, education, and past projects into your profile.',
    items: [
      'Accept invite and connect personal email with OTP verification',
      'AI-powered resume parsing into verified Acquired Skills',
      'Add career interests for tailored opportunity recommendations',
    ],
  },
  {
    title: 'Discover Pathways',
    image: '/images/journey/02-discover-pathways.png',
    imageAlt: 'SOLO career pathways discovery screen',
    desc: 'Explore career pathways designed around real industry roles. See in-demand competencies and mapped curriculum paths before you even enroll.',
    items: [
      'Browse role-aligned pathways across Engineering, Design, AI, and Product',
      'Identify current skill readiness and prerequisite requirements',
      'Receive personalized pathway recommendations based on profile interests',
    ],
  },
  {
    title: 'Learn & Practice',
    image: '/images/journey/03-learn-practice.png',
    imageAlt: 'SOLO learning and practice screen',
    desc: 'Follow structured modules across internal SOLO courses and recognized partner platforms such as IBM SkillsBuild.',
    items: [
      'Engage with self-paced lessons, interactive assignments, and quizzes',
      'Seamless synchronization between SOLO and external partner portals',
      'Track module completion as green "Earned" badges unlock sequentially',
    ],
  },
  {
    title: 'Build & Submit Evidence',
    image: '/images/journey/04-build-submit-evidence.png',
    imageAlt: 'SOLO project evidence submission screen',
    desc: 'Transition from theory to practice with real-world challenges, hackathons, and live industry projects organized by partners like SPARK+.',
    items: [
      'Work on live problem statements and deliver demonstrable project code',
      'Submit proof of completion (repositories, artifacts, certificates)',
      'Undergo mentor and institutional assessment for verified quality',
    ],
  },
  {
    title: 'Earn & Endorse',
    image: '/images/journey/05-earn-endorse.png',
    imageAlt: 'SOLO credential earning and endorsement screen',
    desc: 'Upon verification, receive cryptographically signed digital badges and Comprehensive Learner Records (CLR) directly in your Credential Wallet.',
    items: [
      'Access verified credentials via the SOLO platform',
      'Request completion after completing courses and mentor endorsements for earned skills',
      'Export verifiable badges to LinkedIn licenses and social feeds with 1 tap',
    ],
  },
  {
    title: 'Match & Apply',
    image: '/images/journey/06-match-apply.png',
    imageAlt: 'SOLO skill matching and job application screen',
    desc: 'Use Skill Match Analysis to compare your verified credentials with real job vacancies and identify any missing gaps.',
    items: [
      'View Matched, Partially Matched, and Missing skills for any job opening',
      'Generate professional resumes with clickable credential verification links',
      'Apply directly to employer opportunities with proven capability',
    ],
  },
]

export const discoverPathCards = [
  {
    title: 'Learning',
    icon: 'layers',
    desc: 'Personalized learning opportunities that fit your pace.',
  },
  {
    title: 'Skill development',
    icon: 'compass',
    desc: 'Practical, industry-relevant skills you can put to work.',
  },
  {
    title: 'Live projects',
    icon: 'target',
    desc: 'Apply what you\u2019re learning to real briefs from real organizations, then turn the outcome into portfolio proof.',
  },
  {
    title: 'Career opportunities',
    icon: 'briefcase',
    desc: 'Discover internships, jobs, and meaningful projects.',
  },
  {
    title: 'Profile',
    icon: 'user-circle',
    desc: 'Build a professional learner profile that evolves over time.',
  },
  {
    title: 'Career growth',
    icon: 'trending-up',
    desc: 'Keep improving, connecting, and progressing.',
  },
]

export const courses = [
  {
    id: 'course-1',
    org: 'ScholarHat',
    logo: '/images/logo/solo-logo.png',
    title: 'Git & GitHub Mastery — Cloud DevOps',
    skills: '9 Skills',
    kind: 'Course',
    posted: 'A Day Ago',
    location: 'Virtual',
    duration: '4 Hours',
    cost: 'Free',
    image: '/images/local-screenshots/course-ai-workshop.png',
  },
  {
    id: 'course-2',
    org: 'Skill India',
    logo: '/images/logo/solo-logo.png',
    title: 'Problem Solving & Innovation in Tech',
    skills: '4 Skills',
    kind: 'Course',
    posted: '10 Days Ago',
    location: 'Virtual',
    duration: '7 Hours',
    cost: 'Free',
    image: '/images/local-screenshots/course-react-redux.png',
  },
  {
    id: 'course-3',
    org: 'IBM SkillsBuild',
    logo: '/images/logo/solo-logo.png',
    title: 'Digital Skills & Modern Full-Stack',
    skills: '8 Skills',
    kind: 'Course',
    posted: '2 Days Ago',
    location: 'Virtual',
    duration: '6 Hours',
    cost: 'Free',
    image: '/images/local-screenshots/course-reactjs.png',
  },
  {
    id: 'course-4',
    org: 'Sayfol Academy',
    logo: '/images/logo/solo-logo.png',
    title: 'Communicating with Confidence & Leadership',
    skills: '4 Skills',
    kind: 'Course',
    posted: '12 Days Ago',
    location: 'Virtual',
    duration: '5 Hours',
    cost: 'Free',
    image: '/images/local-screenshots/course-job-interviews.png',
  },
]

export const opportunities = [
  {
    id: 'opp-1',
    org: 'Kodework',
    logo: '/images/logo/solo-logo.png',
    title: 'Motion Graphics Designer',
    skills: '10 Skills',
    kind: 'Job',
    posted: '10 Days Ago',
    cost: 'Full-time',
    image: '/images/local-screenshots/opp-visual-designer.png',
  },
  {
    id: 'opp-2',
    org: '9 Digits Media',
    logo: '/images/logo/solo-logo.png',
    title: 'Graphic & Visual Designer',
    skills: '11 Skills',
    kind: 'Internship',
    posted: '10 Days Ago',
    cost: 'Stipend',
    image: '/images/local-screenshots/opp-graphic-design.png',
  },
  {
    id: 'opp-3',
    org: 'SPARK+ Technologies',
    logo: '/images/logo/solo-logo.png',
    title: 'Junior UX & Interaction Designer',
    skills: '8 Skills',
    kind: 'Job',
    posted: '3 Days Ago',
    cost: 'Full-time',
    image: '/images/local-screenshots/opp-visual-designer.png',
  },
  {
    id: 'opp-4',
    org: 'Northwind Studio',
    logo: '/images/logo/solo-logo.png',
    title: 'Brand Designer & Media Intern',
    skills: '5 Skills',
    kind: 'Internship',
    posted: '2 Days Ago',
    cost: 'Stipend',
    image: '/images/local-screenshots/opp-brand-designer.png',
  },
]

export const showcaseFeatures = [
  {
    icon: 'shield-check',
    title: 'Verified & Trusted',
    desc: 'Authentic credentials, issued by industry-recognized partners.',
  },
  {
    icon: 'link',
    title: 'Easy to Share',
    desc: 'Showcase your skills and achievements in just a few clicks.',
  },
  {
    icon: 'trending-up',
    title: 'Build Your Future',
    desc: 'Make your profile work for you — for better opportunities, always.',
  },
]

export const credentials = [
  {
    id: 'cred-1',
    title: 'Product & UX Design Pathway (CLR)',
    org: 'SPARK+ Technologies',
    dates: 'Issued Aug 2025 · Verified',
    desc: 'Comprehensive milestone credential uniting 6 design modules, prototype reviews, and peer endorsements.',
    status: 'Approved',
  },
  {
    id: 'cred-2',
    title: 'Git, GitHub & Cloud CI/CD Practitioner',
    org: 'ScholarHat',
    dates: 'Issued Sep 2025 · Verified',
    desc: 'Verified for building production version control pipelines and passing external hands-on assessments.',
    status: 'Approved',
  },
  {
    id: 'cred-3',
    title: 'Full-Stack Web Engineering Live Project',
    org: 'Hilite Technologies',
    dates: 'Submitted Oct 2025 · Under Evaluation',
    desc: 'Live project credential pending final reviewer assessment and faculty endorsement.',
    status: 'Pending',
  },
]

export const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Discover', href: '/discover' },
      { label: 'Build', href: '/build' },
      { label: 'Showcase', href: '/showcase' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'SOLO Learner Guide', href: '#' },
      { label: 'CLR Standards', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Help & Support', href: '#' },
    ],
  },
]

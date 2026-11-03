export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  category: 'real-estate' | 'social-media' | 'lead-gen' | 'healthcare';
  highlights: string[];
  keyCompetencies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  focus: string;
}

export const personalInfo = {
  name: "Ma. Francine Paula Javier",
  shortName: "Francine Paula Javier",
  title: "Disposition Assistant & Administrative Professional",
  secondaryTitle: "Registered Midwife | Virtual Assistance & Operations",
  location: "San Pedro, Laguna, Philippines",
  phone: "+63 961 750 9061",
  email: "mfpolajav@gmail.com",
  profileImage: "/assets/aistudio/Messenger_creation_394E66A9-C388-43B4-9731-80879F95AD24_1d4909bd.jpeg",
  cvPdfPath: "/assets/aistudio/Paula_CV__69d0a5a7.pdf",
  summary: "Adaptable and detail-oriented professional with a strong foundation in direct healthcare as a Registered Midwife, combined with over 3 years of experience in administrative operations, virtual assistance, and real estate support. Adept at managing schedules, high-volume communications, and sensitive client and clinical documentation with accuracy and strict confidentiality.",
  areasOfExpertise: [
    {
      title: "Real Estate & Disposition",
      description: "Legal document preparation (deeds, memorandums, lien releases), county filing coordination, buyer communication, and deal listings.",
      icon: "FileText"
    },
    {
      title: "Administrative Operations",
      description: "Calendar management, high-volume email workflows, task tracking, database organization, and strict confidentiality.",
      icon: "Calendar"
    },
    {
      title: "Growth & Outreach",
      description: "B2B lead generation, multi-channel outreach via LinkedIn, SMS, and email, alongside content scheduling and social analytics.",
      icon: "TrendingUp"
    },
    {
      title: "Clinical Healthcare Documentation",
      description: "6 years of hospital clinical operations at Dr. Jose Fabella Memorial Hospital upholding DOH protocols and RA 7392 standards.",
      icon: "Activity"
    }
  ]
};

export const skillsList: string[] = [
  "Calendar Management",
  "Task tracking",
  "Document preparation",
  "Scheduling",
  "Email Management",
  "Lead Generation",
  "Real Estate Support",
  "Data Entry",
  "Record keeping",
  "Client Coordination"
];

export const experienceData: ExperienceItem[] = [
  {
    id: "disposition-assistant",
    role: "Disposition Assistant",
    company: "Good Neighbor Solutions LLC",
    period: "Feb 2025 – October 2026",
    category: "real-estate",
    highlights: [
      "Formulated, formatted, and tracked legal documents—including deeds, memorandums, and lien releases—ensuring precise compliance for county recording and filing.",
      "Coordinated directly with county recorder offices and title departments to submit documents, verify recording fees, and resolve filing rejections efficiently.",
      "Listed properties and drafted deal updates across public platforms, investment channels, and real estate broker networks to drive buyer reach.",
      "Maintained active communication with individual buyers, corporate brokers, and title entities to monitor transaction progress from initial listing to close."
    ],
    keyCompetencies: ["County Recording & Filing", "Deeds & Memorandums", "Broker & Buyer Relations", "Title Coordination"]
  },
  {
    id: "social-media-manager",
    role: "Social Media Manager",
    company: "Your Eden Agency",
    period: "Jun 2023 – Feb 2025",
    category: "social-media",
    highlights: [
      "Created and scheduled content for Instagram, TikTok, and Reddit, increasing engagement by 30%.",
      "Analyzed social media analytics to refine content strategies, leading to improved audience interactions.",
      "Collaborated with creative teams to maintain consistent branding across platforms, enhancing brand recognition."
    ],
    keyCompetencies: ["Content Strategy & Scheduling", "Social Analytics", "Cross-Platform Branding", "+30% Engagement Growth"]
  },
  {
    id: "lead-generation-specialist",
    role: "Lead Generation Specialist",
    company: "ESP Solutions LLC",
    period: "Feb 2023 – Feb 2024",
    category: "lead-gen",
    highlights: [
      "Identified key decision-makers aligning with client profiles, enhancing lead quality by 20%.",
      "Conducted outreach via email, SMS, and LinkedIn, increasing lead engagement metrics.",
      "Maintained clean contact databases, tracking outreach metrics to optimize future engagement strategies."
    ],
    keyCompetencies: ["Decision-Maker Prospecting", "Omnichannel Outreach", "Database Hygiene", "+20% Lead Quality"]
  },
  {
    id: "registered-midwife-ii",
    role: "Registered Midwife II",
    company: "Dr. Jose Fabella Memorial Hospital",
    period: "Nov 2017 – Feb 2023",
    category: "healthcare",
    highlights: [
      "Managed patient records and clinical documentation in a busy hospital setting, ensuring accuracy and confidentiality.",
      "Supported medical staff with day-to-day operations, improving workflow efficiency in a high-pressure environment.",
      "Developed strong time management skills, consistently organizing multiple tasks to meet tight deadlines.",
      "Delivered comprehensive maternal and newborn care, including prenatal checkups, low-risk vaginal deliveries, and postpartum care following DOH clinical protocols and RA 7392 standards."
    ],
    keyCompetencies: ["Clinical Documentation", "Confidentiality & Compliance", "Hospital Operations", "DOH & RA 7392 Standards"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Diploma in Midwifery",
    institution: "Dr. Jose Fabella Memorial Hospital",
    period: "2015 – 2017",
    focus: "Maternal and child healthcare, clinical documentation, and healthcare ethics."
  }
];

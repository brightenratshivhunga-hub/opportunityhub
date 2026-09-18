import type { Opportunity } from '@/types';

export const opportunities: Opportunity[] = [
  {
    id: '1',
    title: 'NSFAS Bursary 2026',
    organisation: 'National Student Financial Aid Scheme',
    category: 'Bursaries',
    location: 'Nationwide, South Africa',
    closingDate: '2026-11-30',
    shortDescription:
      'Full funding for undergraduate studies at public universities and TVET colleges.',
    description:
      'The NSFAS bursary provides comprehensive financial aid to South African students from poor and working-class backgrounds. It covers tuition, accommodation, transport, and learning materials for approved programmes at public universities and TVET colleges.',
    requirements: [
      'South African citizen',
      'Combined household income of R350 000 or less per annum',
      'Registered or applied at a public university or TVET college',
      'Satisfactory academic progress for continuing students',
    ],
    benefits: [
      'Full tuition coverage',
      'Accommodation allowance',
      'Transport allowance',
      'Learning materials allowance',
    ],
    featured: true,
  },
  {
    id: '2',
    title: 'Standard Bank Graduate Programme 2026',
    organisation: 'Standard Bank South Africa',
    category: 'Graduate Programmes',
    location: 'Johannesburg, Gauteng',
    closingDate: '2026-10-15',
    shortDescription:
      'A 12-month rotational programme for recent graduates across banking functions.',
    description:
      'The Standard Bank Graduate Programme gives recent graduates exposure to different areas of the bank including retail banking, corporate investment banking, risk, and technology. Graduates rotate through teams and receive mentorship and formal training.',
    requirements: [
      'Completed degree in any field (Commerce, STEM, or IT preferred)',
      'Minimum 65% average in final year',
      'South African citizen or permanent resident',
      'Less than 2 years of work experience',
    ],
    benefits: [
      'Competitive monthly stipend',
      'Mentorship from senior leaders',
      'Possibility of permanent placement',
      'Professional development courses',
    ],
    featured: true,
  },
  {
    id: '3',
    title: 'Shoprite IT Internship',
    organisation: 'Shoprite Group',
    category: 'Internships',
    location: 'Cape Town, Western Cape',
    closingDate: '2026-09-30',
    shortDescription:
      'Hands-on software development internship at the largest retailer in Africa.',
    description:
      'The Shoprite IT Internship places you inside a high-performing software engineering team building systems used by millions of customers. You will work on real projects across e-commerce, supply chain, and in-store technology.',
    requirements: [
      'Completed or final-year degree in Computer Science, Software Engineering, or related field',
      'Knowledge of at least one programming language (Java, C#, or Python)',
      'Understanding of databases and SQL',
      'Strong problem-solving skills',
    ],
    benefits: [
      'Monthly internship stipend',
      'Real project experience',
      'Mentorship from senior engineers',
      'Pathway to permanent role',
    ],
  },
  {
    id: '4',
    title: 'Samsung Learnership Programme',
    organisation: 'Samsung South Africa',
    category: 'Learnerships',
    location: 'Midrand, Gauteng',
    closingDate: '2026-10-05',
    shortDescription:
      'A 12-month learnership in business administration and retail operations.',
    description:
      'The Samsung Learnership combines classroom learning with workplace experience, leading to an NQF Level 4 qualification in Business Administration. Learners gain exposure to retail operations, sales, and customer service.',
    requirements: [
      'Grade 12 / Matric certificate',
      'Between 18 and 35 years old',
      'Unemployed and available full-time',
      'Interest in business and retail',
    ],
    benefits: [
      'Monthly learnership allowance',
      'NQF Level 4 qualification',
      'Workplace experience certificate',
      'Mentorship and coaching',
    ],
  },
  {
    id: '5',
    title: 'Google Africa Developer Scholarship',
    organisation: 'Google Africa',
    category: 'Free Courses',
    location: 'Online (Remote)',
    closingDate: '2026-12-01',
    shortDescription:
      'Free access to Google Cloud, Android, and web development training and certification.',
    description:
      'The Google Africa Developer Scholarship provides free access to world-class training in mobile and cloud development. Participants can earn industry-recognised Google certifications and join a community of African developers.',
    requirements: [
      'Resident of an African country',
      'Basic programming knowledge',
      'Reliable internet connection',
      'Commitment to complete the programme',
    ],
    benefits: [
      'Free training content',
      'Google certification exam voucher',
      'Mentorship from Google experts',
      'Access to developer community',
    ],
    featured: true,
  },
  {
    id: '6',
    title: 'Eskom Bursary Scheme',
    organisation: 'Eskom Holdings SOC',
    category: 'Bursaries',
    location: 'Nationwide, South Africa',
    closingDate: '2026-09-30',
    shortDescription:
      'Bursaries for engineering and science students at South African universities.',
    description:
      'The Eskom Bursary Scheme supports students studying towards degrees in Engineering, Science, and related fields critical to the energy sector. Bursars may also receive vacation work and be considered for the Eskom Graduate-in-Training programme.',
    requirements: [
      'South African citizen',
      'Studying Engineering, Science, or related field',
      'Minimum 65% academic average',
      'Financial need demonstrated',
    ],
    benefits: [
      'Full tuition and accommodation',
      'Textbook allowance',
      'Monthly living allowance',
      'Vacation work opportunities',
    ],
  },
  {
    id: '7',
    title: 'Deloitte Summer Internship',
    organisation: 'Deloitte South Africa',
    category: 'Internships',
    location: 'Pretoria, Gauteng',
    closingDate: '2026-08-31',
    shortDescription:
      'A six-week internship in audit, consulting, or tax for penultimate-year students.',
    description:
      'The Deloitte Summer Internship gives penultimate-year university students real exposure to professional services. Interns work on client engagements, attend training, and receive feedback from experienced professionals.',
    requirements: [
      'Penultimate-year university student',
      'Studying towards a degree in Accounting, Commerce, or related field',
      'Strong academic record',
      'South African citizen or permanent resident',
    ],
    benefits: [
      'Weekly internship stipend',
      'Real client project experience',
      'Networking with professionals',
      'Pathway to graduate programme',
    ],
  },
  {
    id: '8',
    title: 'Microsoft Learn Free Courses',
    organisation: 'Microsoft',
    category: 'Free Courses',
    location: 'Online (Remote)',
    closingDate: '2026-12-31',
    shortDescription:
      'Self-paced free courses on cloud, AI, data, and software development.',
    description:
      'Microsoft Learn offers free, self-paced learning paths covering Azure cloud, artificial intelligence, data engineering, and software development. Learners build skills with hands-on sandboxes and can prepare for Microsoft certifications.',
    requirements: [
      'No prior experience required for beginner paths',
      'Reliable internet connection',
      'Microsoft account (free)',
      'Interest in technology',
    ],
    benefits: [
      'Free learning paths',
      'Hands-on sandbox environments',
      'Preparation for industry certifications',
      'Digital badges and certificates',
    ],
  },
  {
    id: '9',
    title: 'Nedbank CA(T) Graduate Programme',
    organisation: 'Nedbank',
    category: 'Graduate Programmes',
    location: 'Sandton, Gauteng',
    closingDate: '2026-10-31',
    shortDescription:
      'A structured programme for aspiring chartered accountants completing their CTA.',
    description:
      'The Nedbank CA(T) Graduate Programme is designed for students completing their Certificate in the Theory of Accounting (CTA) and working towards the SAICA qualifying examination. Trainees gain audit and assurance experience across multiple industries.',
    requirements: [
      'Completed or studying towards CTA (Certificate in the Theory of Accounting)',
      'Eligible for SAICA qualifying examination',
      'South African citizen or permanent resident',
      'Strong analytical skills',
    ],
    benefits: [
      'Competitive trainee salary',
      'SAICA articles served',
      'Study support for board exams',
      'Exposure to multiple industries',
    ],
  },
  {
    id: '10',
    title: 'Dis-Chem Learnership: Pharmacy Assistant',
    organisation: 'Dis-Chem Pharmacies',
    category: 'Learnerships',
    location: 'Johannesburg, Gauteng',
    closingDate: '2026-09-25',
    shortDescription:
      'A learnership leading to a Pharmacy Assistant qualification at Dis-Chem stores.',
    description:
      'The Dis-Chem Pharmacy Assistant Learnership combines theoretical training with practical workplace experience in a Dis-Chem pharmacy. Successful learners achieve a qualification that enables them to work as pharmacy assistants in the retail pharmacy sector.',
    requirements: [
      'Grade 12 / Matric with Mathematics and English',
      'Between 18 and 35 years old',
      'Unemployed and available full-time',
      'Interest in healthcare and pharmacy',
    ],
    benefits: [
      'Monthly learnership stipend',
      'Pharmacy Assistant qualification',
      'Practical in-store experience',
      'Possible permanent placement',
    ],
  },
];

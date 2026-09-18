export type Category =
  | 'Bursaries'
  | 'Internships'
  | 'Learnerships'
  | 'Graduate Programmes'
  | 'Free Courses';

export interface Opportunity {
  id: string;
  title: string;
  organisation: string;
  category: Category;
  location: string;
  closingDate: string;
  shortDescription: string;
  description: string;
  requirements: string[];
  benefits: string[];
  featured?: boolean;
}

export const CATEGORIES: Category[] = [
  'Bursaries',
  'Internships',
  'Learnerships',
  'Graduate Programmes',
  'Free Courses',
];

export interface Review {
  id: number;
  author?: string;
  name?: string;
  content?: string;
  text?: string;
  course?: string;
  rating: number;
  date: string | number | Date;
  profile_image?: string;
  helpful_count?: number;
  reported?: boolean;
  [key: string]: unknown;  // any → unknown
}

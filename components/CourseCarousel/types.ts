export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  image: string;
  buy_link: string | null;
}

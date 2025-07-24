export interface Ebook {
  preview_link?: string | null;   // 또는 string
  buy_link?: string | null;       // 또는 string
  title: string;
  author: string;
  price: number;                  // 문자열이 아니라 숫자
  rating: number;
  image: string;
}

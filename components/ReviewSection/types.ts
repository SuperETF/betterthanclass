export interface Review {
  id: number;                       // 리뷰 고유 ID (Supabase PK)
  author?: string;                  // 작성자(필드명 'name'과 혼용 가능)
  name?: string;                    // 작성자명(코드상 name/author 혼용시 둘 다 optional)
  content?: string;                 // 리뷰 본문 (DB에서 'content'로 썼을 때)
  text?: string;                    // 리뷰 본문(코드상 text/DB상 content 혼용시 둘 다 optional)
  course?: string;                  // 강좌명
  rating: number;                   // 별점
  date: string | number | Date;     // 등록일
  // 확장 필드
  profile_image?: string;           // 프로필 이미지
  helpful_count?: number;
  reported?: boolean;
  [key: string]: any;               // 기타 필드 유연 확장
}

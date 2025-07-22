import { useEffect, useState, useRef } from "react";
import ReviewCard from "./ReviewCard";
import { Review } from "./types";

const reviews: Review[] = [
  {
    name: "김지훈",
    rating: 5,
    text: "강의 내용이 정말 훌륭해요! 강사님이 모든 내용을 명확하게 설명해주셨습니다.",
    course: "리액트 개발",
  },
  {
    name: "이수진",
    rating: 5,
    text: "초보자에게 완벽한 강의예요. 몇 주 만에 정말 많이 배웠습니다.",
    course: "UI/UX 디자인",
  },
  {
    name: "박현우",
    rating: 4,
    text: "실용적인 예제와 실습 프로젝트가 매우 좋았습니다.",
    course: "디지털 마케팅",
  },
];

export default function ReviewSection() {
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardPx, setCardPx] = useState(0);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 반응형: 모바일 판단
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 카드의 실제 px 폭 구하기
  useEffect(() => {
    if (cardRef.current) {
      setCardPx(cardRef.current.offsetWidth + 16); // 16px은 px-4 여백 포함
    }
  }, [isMobile]); // 모바일/PC 전환시 다시 측정

  // 트랙의 실제 "한 바퀴" 길이(px)
  const realTrackPx = cardPx * reviews.length;

  // 무한 슬라이드(픽셀 기반)
  useEffect(() => {
    if (paused || !realTrackPx) return;
    const tick = () => {
      setProgress((prev) => {
        if (prev + 1 >= realTrackPx) {
          setTransition(false);
          return 0;
        }
        setTransition(true);
        return prev + 1; // px단위 1px씩 이동
      });
    };
    const interval = setInterval(tick, 16); // 60fps
    return () => clearInterval(interval);
  }, [paused, realTrackPx]);

  useEffect(() => {
    if (!transition) {
      const id = setTimeout(() => setTransition(true), 16);
      return () => clearTimeout(id);
    }
  }, [transition]);

  // 3배 복제
  const triple = [...reviews, ...reviews, ...reviews];

  const slideStyle = {
    transform: `translateX(-${progress}px)`,
    transition: transition ? "transform 0.2s linear" : "none",
    minWidth: 0,
  };

  // 일시정지 핸들러
  const handlePause = () => setPaused(true);
  const handleResume = () => setPaused(false);

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">수강생 후기</h2>
          <p className="text-base md:text-lg text-gray-600">학습 커뮤니티의 실제 피드백</p>
        </div>
        <div
          className="relative overflow-x-hidden pb-10"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onTouchStart={handlePause}
          onTouchEnd={handleResume}
        >
          <div className="flex" ref={trackRef} style={slideStyle}>
            {triple.map((review, idx) => (
              <div
                ref={idx === 0 ? cardRef : undefined}
                key={`${idx}-${review.name}`}
                className={
                  isMobile
                    ? "flex-shrink-0 px-2 w-full max-w-xs mx-auto"
                    : "flex-shrink-0 px-4 w-1/3 max-w-xs mx-auto"
                }
                style={{ minWidth: 0 }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

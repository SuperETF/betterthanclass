import { useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";
import { Course } from "./types";

const courses: Course[] = [
  {
    id: 1,
    title: "고급 리액트 개발",
    instructor: "김서연",
    price: "₩89,000",
    rating: 4.9,
    image: "https://readdy.ai/api/search-image?query=modern%20laptop%20displaying%20colorful%20code%20editor%20with%20React%20components%20on%20screen%2C%20clean%20white%20desk%20setup%20with%20soft%20lighting%20and%20minimalist%20background&width=400&height=225&seq=course1&orientation=landscape",
  },
  {
    id: 2,
    title: "UI/UX 디자인 마스터클래스",
    instructor: "박준호",
    price: "₩75,000",
    rating: 4.8,
    image: "https://readdy.ai/api/search-image?query=sleek%20design%20workspace%20with%20tablet%20showing%20colorful%20UI%20mockups%20and%20design%20tools%2C%20clean%20white%20background%20with%20soft%20shadows%20and%20modern%20aesthetic&width=400&height=225&seq=course2&orientation=landscape",
  },
  {
    id: 3,
    title: "디지털 마케팅 전략",
    instructor: "이지은",
    price: "₩65,000",
    rating: 4.7,
    image: "https://readdy.ai/api/search-image?query=modern%20smartphone%20and%20laptop%20displaying%20analytics%20dashboard%20with%20colorful%20charts%20and%20graphs%2C%20clean%20white%20background%20with%20professional%20lighting&width=400&height=225&seq=course3&orientation=landscape",
  },
  {
    id: 4,
    title: "파이썬 기초",
    instructor: "천민우",
    price: "₩55,000",
    rating: 4.9,
    image: "https://readdy.ai/api/search-image?query=clean%20coding%20setup%20with%20monitor%20showing%20Python%20code%20syntax%20highlighting%20in%20vibrant%20colors%2C%20minimal%20white%20desk%20environment%20with%20soft%20lighting&width=400&height=225&seq=course4&orientation=landscape",
  },
];

export default function CourseCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 자동 슬라이드(2초)
  useEffect(() => {
    if (courses.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []); // 의존성 배열에 courses.length 넣을 필요 없음

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % courses.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="w-full px-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">인기 강좌</h2>
          <p className="text-base md:text-lg text-gray-600">이번 달 가장 인기 있는 강좌</p>
        </div>
        <div className="relative w-full">
          <div className="overflow-x-hidden pb-10 w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{
                width: `${courses.length * 100}vw`,
                transform: `translateX(-${currentSlide * 100}vw)`,
                minWidth: 0,
              }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="w-screen flex-shrink-0 flex justify-center items-center"
                  style={{ minWidth: 0 }}
                >
                  <CarouselCard course={course} />
                </div>
              ))}
            </div>
          </div>
          {courses.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <i className="fas fa-chevron-left text-gray-600"></i>
              </button>
              <button
                onClick={nextSlide}
                className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <i className="fas fa-chevron-right text-gray-600"></i>
              </button>
            </>
          )}
          <div className="flex justify-center mt-8 space-x-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === currentSlide ? "bg-purple-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

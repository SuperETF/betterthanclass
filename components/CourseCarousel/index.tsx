// components/CourseCarousel/index.tsx

import { useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";
import { supabase } from "@/lib/supabaseClient";

// Course 타입은 반드시 title 기준
export interface Course {
  id: number;
  title: string;   // title이 표준!
  instructor: string;
  price: number;
  rating: number;
  image: string;
  buy_link: string | null;
}

export default function CourseCarousel() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  // supabase에서 강좌 목록 불러오기
  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("id, title, instructor, price, rating, image, buy_link")
        .order("id", { ascending: false });
      if (error) {
        console.error("강좌 불러오기 오류:", error);
      }
      setCourses(data || []);
      setLoading(false);
    };
    fetchCourses();
  }, []);
  

  // 자동 슬라이드(2초)
  useEffect(() => {
    if (courses.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [courses.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % courses.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);

  if (loading) {
    return (
      <section className="py-12 md:py-20 bg-white">
        <div className="w-full px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">인기 강좌</h2>
          <div className="py-16 text-gray-400 text-lg">로딩 중...</div>
        </div>
      </section>
    );
  }

  if (!courses.length) {
    return (
      <section className="py-12 md:py-20 bg-white">
        <div className="w-full px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">인기 강좌</h2>
          <div className="py-16 text-gray-400 text-lg">등록된 강좌가 없습니다.</div>
        </div>
      </section>
    );
  }

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

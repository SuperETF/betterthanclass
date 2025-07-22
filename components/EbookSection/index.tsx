import { useState, useEffect } from "react";
import EbookCard from "./EbookCard";
import { Ebook } from "./types";

const ebooks: Ebook[] = [
  {
    title: "리액트 완벽 가이드",
    author: "김태호",
    price: "₩35,000",
    rating: 4.8,
    image: "https://readdy.ai/api/search-image?query=professional%20ebook%20cover%20design%20showing%20modern%20programming%20concept%20with%20React%20logo%20and%20clean%20typography%20on%20gradient%20background%20with%20code%20elements&width=300&height=400&seq=ebook1&orientation=portrait",
  },
  {
    title: "UX 디자인 원칙",
    author: "이미영",
    price: "₩28,000",
    rating: 4.9,
    image: "https://readdy.ai/api/search-image?query=elegant%20ebook%20cover%20about%20UX%20design%20principles%20with%20minimal%20geometric%20shapes%20and%20modern%20typography%20on%20clean%20background&width=300&height=400&seq=ebook2&orientation=portrait",
  },
  {
    title: "디지털 마케팅 전략",
    author: "박성준",
    price: "₩32,000",
    rating: 4.7,
    image: "https://readdy.ai/api/search-image?query=professional%20digital%20marketing%20strategy%20ebook%20cover%20with%20modern%20business%20icons%20and%20data%20visualization%20elements%20on%20gradient%20background&width=300&height=400&seq=ebook3&orientation=portrait",
  },
  {
    title: "파이썬 데이터 분석",
    author: "최지원",
    price: "₩30,000",
    rating: 4.8,
    image: "https://readdy.ai/api/search-image?query=modern%20python%20data%20analysis%20ebook%20cover%20with%20clean%20data%20visualization%20elements%20and%20code%20snippets%20on%20professional%20background&width=300&height=400&seq=ebook4&orientation=portrait",
  },
];

function getVisibleCount() {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export default function EbookSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const maxIndex = ebooks.length - 1;
  
    useEffect(() => {
      if (ebooks.length <= 1) return;
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % ebooks.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [ebooks.length]);
  
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % ebooks.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + ebooks.length) % ebooks.length);
  
    return (
      <section className="py-12 md:py-20 bg-white">
        <div className="w-full px-0">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">인기 전자책</h2>
            <p className="text-base md:text-lg text-gray-600">베스트셀러 전자책을 만나보세요</p>
          </div>
          <div className="relative w-full">
            <div className="overflow-x-hidden pb-10 w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{
                  width: `${ebooks.length * 100}vw`,
                  transform: `translateX(-${currentSlide * 100}vw)`,
                  minWidth: 0,
                }}
              >
                {ebooks.map((book, idx) => (
                  <div
                    key={idx}
                    className="w-screen flex-shrink-0 flex justify-center items-center"
                    style={{ minWidth: 0 }}
                  >
                    <EbookCard book={book} />
                  </div>
                ))}
              </div>
            </div>
            {ebooks.length > 1 && (
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
              {ebooks.map((_, index) => (
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
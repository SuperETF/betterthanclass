import { useState, useEffect } from "react";
import EbookCard from "./EbookCard";
import { supabase } from "@/lib/supabaseClient";

export interface Ebook {
  id: number;
  title: string;
  author: string;
  price: number;
  rating: number;
  image: string;
  buy_link?: string | null;
  preview_link?: string | null;
}

export default function EbookSection() {
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEbooks = async () => {
      const { data, error } = await supabase
        .from("ebooks")
        .select("id, title, author, price, rating, image, buy_link, preview_link")
        .order("id", { ascending: true });
      if (data) setEbooks(data);
      setLoading(false);
    };
    fetchEbooks();
  }, []);

  // 슬라이드 자동 이동
  useEffect(() => {
    if (ebooks.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ebooks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ebooks.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % ebooks.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + ebooks.length) % ebooks.length);

  if (loading) {
    return (
      <section className="py-12 md:py-20 bg-white">
        <div className="w-full px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">인기 전자책</h2>
          <div className="py-16 text-gray-400 text-lg">로딩 중...</div>
        </div>
      </section>
    );
  }

  if (!ebooks.length) {
    return (
      <section className="py-12 md:py-20 bg-white">
        <div className="w-full px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">인기 전자책</h2>
          <div className="py-16 text-gray-400 text-lg">등록된 전자책이 없습니다.</div>
        </div>
      </section>
    );
  }

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
    key={book.id}
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

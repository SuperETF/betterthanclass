import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

interface Ebook {
  id: number;
  title: string;
  author: string;
  price: number;
  original_price: number;
  rating: number;
  review_count: number;
  category: string;
  image: string;
  description: string;
  buy_link?: string | null;       // 추가
  preview_link?: string | null;   // 추가
}

const AllEbook: React.FC = () => {
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEbooks = async () => {
      const { data, error } = await supabase
        .from("ebooks")
        .select(
          "id, title, author, price, original_price, rating, review_count, category, image, description, buy_link, preview_link"
        )
        .order("id", { ascending: true });
      if (data) setEbooks(data);
      setLoading(false);
    };
    fetchEbooks();
  }, []);

  if (loading) {
    return (
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">전체 전자책</h2>
          <div className="py-24 text-center text-gray-400">로딩 중...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">전체 전자책</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={ebook.image}
                  alt={ebook.title}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: "cover" }}
                />
                {ebook.original_price > ebook.price && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium shadow">
                    {Math.round((1 - ebook.price / ebook.original_price) * 100)}% 할인
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded">
                    {ebook.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                  {ebook.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">저자: {ebook.author}</p>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{ebook.description}</p>
                <div className="flex items-center mb-3">
                  <i className="fas fa-star text-yellow-400 text-sm mr-1"></i>
                  <span className="text-sm font-medium text-gray-700">{ebook.rating}</span>
                  <span className="text-xs text-gray-400 ml-2">({ebook.review_count})</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-purple-600">
                    ₩{ebook.price.toLocaleString()}
                  </span>
                  {ebook.original_price > ebook.price && (
                    <span className="text-sm text-gray-400 line-through">
                      ₩{ebook.original_price.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  {ebook.preview_link && (
                    <a
                      href={ebook.preview_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap text-center"
                    >
                      미리보기
                    </a>
                  )}
                  {ebook.buy_link ? (
                    <a
                      href={ebook.buy_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap text-center"
                    >
                      구매하기
                    </a>
                  ) : (
                    <button
                      className="flex-1 bg-gray-300 text-white py-2 px-3 rounded-lg text-sm font-medium cursor-not-allowed"
                      disabled
                    >
                      구매 불가
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          {ebooks.length === 0 && (
            <div className="col-span-full py-24 text-center text-gray-400">
              등록된 전자책이 없습니다.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllEbook;

// components/EbookPage/AllEbook.tsx

import React from "react";
import Image from "next/image";

const ebooks = [
  {
    id: 1,
    title: "리액트 완벽 가이드 2025",
    author: "김태호",
    price: 35000,
    originalPrice: 45000,
    rating: 4.8,
    reviewCount: 324,
    category: "프로그래밍",
    image:
      "https://readdy.ai/api/search-image?query=professional%20ebook%20cover%20design%20showing%20modern%20programming%20concept%20with%20React%20logo%20and%20clean%20typography%20on%20gradient%20background%20with%20code%20elements&width=300&height=400&seq=ebook1&orientation=portrait",
    description: "최신 리액트 18 기능부터 고급 패턴까지 완벽 마스터",
  },
  {
    id: 2,
    title: "UX 디자인 원칙과 실무",
    author: "이미영",
    price: 28000,
    originalPrice: 35000,
    rating: 4.9,
    reviewCount: 256,
    category: "디자인",
    image:
      "https://readdy.ai/api/search-image?query=elegant%20ebook%20cover%20about%20UX%20design%20principles%20with%20minimal%20geometric%20shapes%20and%20modern%20typography%20on%20clean%20background&width=300&height=400&seq=ebook2&orientation=portrait",
    description: "사용자 중심 디자인의 모든 것을 담은 실무 가이드",
  },
  {
    id: 3,
    title: "디지털 마케팅 전략 바이블",
    author: "박성준",
    price: 32000,
    originalPrice: 40000,
    rating: 4.7,
    reviewCount: 189,
    category: "마케팅",
    image:
      "https://readdy.ai/api/search-image?query=professional%20digital%20marketing%20strategy%20ebook%20cover%20with%20modern%20business%20icons%20and%20data%20visualization%20elements%20on%20gradient%20background&width=300&height=400&seq=ebook3&orientation=portrait",
    description: "성공하는 디지털 마케팅의 핵심 전략과 실행법",
  },
];

const AllEbook: React.FC = () => (
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
              {ebook.originalPrice > ebook.price && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium shadow">
                  {Math.round((1 - ebook.price / ebook.originalPrice) * 100)}% 할인
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
                <span className="text-xs text-gray-400 ml-2">({ebook.reviewCount})</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-purple-600">
                  ₩{ebook.price.toLocaleString()}
                </span>
                {ebook.originalPrice > ebook.price && (
                  <span className="text-sm text-gray-400 line-through">
                    ₩{ebook.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap">
                  미리보기
                </button>
                <button className="flex-1 bg-purple-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap">
                  구매하기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AllEbook;

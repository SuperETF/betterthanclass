// components/all-courses.tsx

import React, { useState } from "react";
import Image from "next/image";

// 1. 하드코딩된 강의 데이터 (API 연동 전)
const allCourses = [
  {
    id: 1,
    title: "고급 리액트 개발 마스터클래스",
    instructor: "김서연",
    price: "₩89,000",
    originalPrice: "₩120,000",
    rating: 4.9,
    students: 2847,
    category: "프로그래밍",
    image:
      "https://readdy.ai/api/search-image?query=modern%20laptop%20displaying%20colorful%20React%20code%20editor%20with%20components%20on%20screen%2C%20clean%20white%20desk%20setup%20with%20soft%20lighting%20and%20minimalist%20background&width=400&height=225&seq=course1&orientation=landscape",
  },
  {
    id: 2,
    title: "UI/UX 디자인 완벽 가이드",
    instructor: "박준호",
    price: "₩75,000",
    originalPrice: "₩95,000",
    rating: 4.8,
    students: 1923,
    category: "디자인",
    image:
      "https://readdy.ai/api/search-image?query=sleek%20design%20workspace%20with%20tablet%20showing%20colorful%20UI%20mockups%20and%20design%20tools%2C%20clean%20white%20background%20with%20soft%20shadows%20and%20modern%20aesthetic&width=400&height=225&seq=course2&orientation=landscape",
  },
  {
    id: 3,
    title: "디지털 마케팅 전략 A to Z",
    instructor: "이지은",
    price: "₩65,000",
    originalPrice: "₩85,000",
    rating: 4.7,
    students: 3156,
    category: "마케팅",
    image:
      "https://readdy.ai/api/search-image?query=modern%20smartphone%20and%20laptop%20displaying%20analytics%20dashboard%20with%20colorful%20charts%20and%20graphs%2C%20clean%20white%20background%20with%20professional%20lighting&width=400&height=225&seq=course3&orientation=landscape",
  },
  {
    id: 4,
    title: "파이썬 기초부터 실전까지",
    instructor: "천민우",
    price: "₩55,000",
    originalPrice: "₩70,000",
    rating: 4.9,
    students: 4521,
    category: "프로그래밍",
    image:
      "https://readdy.ai/api/search-image?query=clean%20coding%20setup%20with%20monitor%20showing%20Python%20code%20syntax%20highlighting%20in%20vibrant%20colors%2C%20minimal%20white%20desk%20environment%20with%20soft%20lighting&width=400&height=225&seq=course4&orientation=landscape",
  }
];

const categories = [
  "전체",
  "프로그래밍",
  "디자인",
  "비즈니스",
  "마케팅",
  "데이터 사이언스",
  "언어",
];
const sortOptions = ["인기순", "가격순", "평점순", "최신순"];

const AllCourses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [sortBy, setSortBy] = useState("인기순");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === "전체" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "가격순":
        return (
          parseInt(a.price.replace(/[^\d]/g, "")) -
          parseInt(b.price.replace(/[^\d]/g, ""))
        );
      case "평점순":
        return b.rating - a.rating;
      case "최신순":
        return b.id - a.id;
      default:
        return b.students - a.students;
    }
  });

  const coursesPerPage = 12;
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = sortedCourses.slice(startIndex, startIndex + coursesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans"
      style={{ fontFamily: 'Pretendard, "Noto Sans KR", sans-serif' }}>
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              모든 강의를 한 곳에서
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {filteredCourses.length}개의 프리미엄 강좌로 새로운 기술을 마스터하세요
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="강의명이나 강사명으로 검색하세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors cursor-pointer">
                <i className="fas fa-search text-sm"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 !rounded-button font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              총{" "}
              <span className="font-semibold text-purple-600">
                {filteredCourses.length}
              </span>
              개의 강의
            </p>
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 !rounded-button hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>{sortBy}</span>
                <i className="fas fa-chevron-down text-sm"></i>
              </button>
              {showSortDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setShowSortDropdown(false);
                        setCurrentPage(1);
                      }}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-50 cursor-pointer whitespace-nowrap"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-3">by {course.instructor}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <i className="fas fa-star text-yellow-400 mr-1"></i>
                      <span className="text-gray-700 font-medium">
                        {course.rating}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">
                        ({course.students.toLocaleString()}명)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-purple-600">
                        {course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {course.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-purple-600 text-white py-2 !rounded-button hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap">
                    수강하기
                  </button>
                </div>
              </div>
            ))}
          </div>
          {currentCourses.length === 0 && (
            <div className="text-center py-16">
              <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-500">다른 키워드로 검색해보세요</p>
            </div>
          )}
        </div>
      </section>
      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                }`}
              >
                <i className="fas fa-chevron-left mr-2"></i>
                이전
              </button>
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 2 && page <= currentPage + 2)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap ${
                        currentPage === page
                          ? "bg-purple-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (
                  page === currentPage - 3 ||
                  page === currentPage + 3
                ) {
                  return (
                    <span key={page} className="px-2 text-gray-400">
                      ...
                    </span>
                  );
                }
                return null;
              })}
              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 !rounded-button font-medium cursor-pointer whitespace-nowrap ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                }`}
              >
                다음
                <i className="fas fa-chevron-right ml-2"></i>
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AllCourses;

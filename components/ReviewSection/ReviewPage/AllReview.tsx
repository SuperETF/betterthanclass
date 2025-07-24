import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const AllReview: React.FC = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabase.from("reviews").select("*").order("id", { ascending: false });
      setReviews(data || []);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">전체 후기</h2>
          <div className="py-24 text-center text-gray-400">로딩 중...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">전체 후기</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* 리뷰 카드 구조 (ReviewCard 분리도 OK) */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {review.author}
                </h3>
                <div className="flex items-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-sm mr-1" />
                  ))}
                  <span className="ml-2 text-xs text-gray-400">{review.date}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{review.course}</p>
                <p className="text-xs text-gray-500 mb-3">{review.content}</p>
              </div>
            </div>
          ))}
          {reviews.length === 0 && (
            <div className="col-span-full py-24 text-center text-gray-400">
              등록된 후기가 없습니다.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllReview;

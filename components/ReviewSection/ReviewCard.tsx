import { Review } from "./types";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 max-w-xs w-full mx-auto">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg mr-4">
        {review.name.charAt(0)}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{review.name}</h4>
        <div className="flex">
          {[...Array(review.rating)].map((_, i) => (
            <i key={i} className="fas fa-star text-yellow-400 text-sm" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-700 mb-3">{review.text}</p>
    <p className="text-sm text-purple-600 font-medium">{review.course}</p>
  </div>
);

export default ReviewCard;

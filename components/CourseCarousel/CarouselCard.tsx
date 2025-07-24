import { Course } from "./index"; // 또는 별도 types 파일
import Image from "next/image";

interface Props {
  course: Course;
}

const CarouselCard = ({ course }: Props) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer max-w-xs w-full mx-auto">
    <div className="h-48 sm:h-56 overflow-hidden relative">
      <Image
        src={course.image}
        alt={course.title}
        width={400}
        height={225}
        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        unoptimized
        priority
      />
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
        {course.title}
      </h3>
      <p className="text-gray-600 mb-4">by {course.instructor}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl sm:text-2xl font-bold text-purple-600">
          ₩{course.price.toLocaleString()}
        </span>
        <div className="flex items-center">
          <i className="fas fa-star text-yellow-400 mr-1"></i>
          <span className="text-gray-700">{course.rating}</span>
        </div>
      </div>
      {course.buy_link ? (
        <a
          href={course.buy_link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-4 bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap text-center block"
        >
          수강하기
        </a>
      ) : (
        <button
          className="w-full mt-4 bg-gray-300 text-white py-2 rounded-full cursor-not-allowed"
          disabled
        >
          수강 불가
        </button>
      )}
    </div>
  </div>
);

export default CarouselCard;

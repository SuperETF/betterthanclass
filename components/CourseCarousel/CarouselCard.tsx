import { Course } from "./types";
import Link from "next/link";

interface Props {
  course: Course;
}

const CarouselCard = ({ course }: Props) => (
  <Link href={`/course/${course.id}`}>
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer max-w-xs w-full mx-auto">
      <div className="h-48 sm:h-56 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4">by {course.instructor}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl sm:text-2xl font-bold text-purple-600">
            {course.price}
          </span>
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-400 mr-1"></i>
            <span className="text-gray-700">{course.rating}</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default CarouselCard;

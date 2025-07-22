import { Ebook } from "./types";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

interface Props {
  book: Ebook;
}

const EbookCard = ({ book }: Props) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer max-w-xs w-full mx-auto">
    <div className="h-80 overflow-hidden relative">
      <Image
        src={book.image}
        alt={book.title}
        width={300}
        height={400}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        unoptimized // 외부 이미지면 LCP 최적화 경고 방지, 필요시 priority 추가
        priority
      />
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
        {book.title}
      </h3>
      <p className="text-gray-600 mb-2">저자: {book.author}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl sm:text-2xl font-bold text-purple-600">
          {book.price}
        </span>
        <div className="flex items-center">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-700">{book.rating}</span>
        </div>
      </div>
      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap">
        구매하기
      </button>
    </div>
  </div>
);

export default EbookCard;

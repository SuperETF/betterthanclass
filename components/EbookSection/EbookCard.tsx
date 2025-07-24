import type { Ebook } from "./index";
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
        unoptimized
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
  ₩{book.price.toLocaleString()}
</span>
        <div className="flex items-center">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-700">{book.rating}</span>
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        {book.preview_link && (
          <a
            href={book.preview_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap text-center"
          >
            미리보기
          </a>
        )}
        {book.buy_link ? (
          <a
            href={book.buy_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-purple-600 text-white py-2 px-3 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap text-center"
          >
            구매하기
          </a>
        ) : (
          <button
            className="flex-1 bg-gray-300 text-white py-2 px-3 rounded-full text-sm font-medium cursor-not-allowed"
            disabled
          >
            구매 불가
          </button>
        )}
      </div>
    </div>
  </div>
);

export default EbookCard;

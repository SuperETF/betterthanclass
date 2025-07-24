import Image from "next/image";

interface Category {
  title: string;
  description: string;
  icon: string;
  image: string;
}

const categories: Category[] = [
  {
    title: "유리한 신경계",
    description: "복잡한 신경계를 가장 쉽게, 누구나 이해할 수 있게! 풀어주는 기초 신경계 클래스입니다.",
    icon: "fas fa-code",
    image:
      "/neuro.png",
  },
  {
    title: "통증 핑거 포인트",
    description: "누구나 따라할 수 있는 손가락 촉진법으로 단순하고 체계적으로 통증의 핵심을 짚어줍니다.",
    icon: "fas fa-palette",
    image:
      "/point.png",
  },
  {
    title: "관리의 시작 MANA.ZIP",
    description: "경회원 관리, 센터 운영, 데이터 분석까지 현장에서 바로 써먹는 실질적 방법을 쉽고 명확하게 전달합니다.",
    icon: "fas fa-chart-line",
    image:
      "/mana.png",
  },
];

const CategorySection = () => (
  <section className="py-12 md:py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">카테고리 둘러보기</h2>
        <p className="text-base md:text-lg text-gray-600">다양한 강좌 중에서 선택해보세요</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
            <div className="h-48 mb-6 rounded-xl overflow-hidden relative">
              <Image
                src={cat.image}
                alt={cat.title}
                width={300}
                height={200}
                className="w-full h-full object-cover object-top"
                unoptimized // 외부 이미지일 때 LCP 최적화 경고 방지 (필요시)
                priority
              />
            </div>
            <div className="text-center">
              <i className={`${cat.icon} text-4xl text-purple-600 mb-4`} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{cat.title}</h3>
              <p className="text-gray-600">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CategorySection;

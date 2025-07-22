interface Category {
    title: string;
    description: string;
    icon: string;
    image: string;
  }
  
  const categories: Category[] = [
    {
      title: "유리한 신경계",
      description: "기초부터 배우는 코딩",
      icon: "fas fa-code",
      image:
        "https://readdy.ai/api/search-image?query=abstract%20geometric%20programming%20symbols%20and%20code%20patterns%20in%20vibrant%20gradient%20colors%20floating%20in%20clean%20white%20space%20with%20soft%20shadows&width=300&height=200&seq=cat1&orientation=landscape",
    },
    {
      title: "통증 핑거 포인트",
      description: "시각적 창의력 마스터",
      icon: "fas fa-palette",
      image:
        "https://readdy.ai/api/search-image?query=colorful%20design%20tools%20and%20creative%20elements%20arranged%20aesthetically%20on%20clean%20white%20background%20with%20soft%20lighting%20and%20modern%20minimalist%20style&width=300&height=200&seq=cat2&orientation=landscape",
    },
    {
      title: "관리의 시작 MANA.ZIP",
      description: "경력을 쌓아보세요",
      icon: "fas fa-chart-line",
      image:
        "https://readdy.ai/api/search-image?query=modern%20business%20growth%20charts%20and%20success%20symbols%20in%20vibrant%20colors%20on%20clean%20white%20background%20with%20professional%20lighting%20and%20sleek%20presentation&width=300&height=200&seq=cat3&orientation=landscape",
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
              <div className="h-48 mb-6 rounded-xl overflow-hidden">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover object-top" />
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
  
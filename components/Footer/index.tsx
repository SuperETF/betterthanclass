const Footer = () => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              유리한 클래스
            </div>
            <p className="text-gray-400 mb-4">
              색다른 강사진과 함께하는 프리미엄 교육
            </p>
            <div className="text-sm text-gray-400 space-y-2">
              <p>상호명: 유리한클래스 | JACOB I chaejeonguk U eunbi</p>
              <p>사업자등록번호: 652-58-00651</p>
              <p>통신판매업신고: 2023-서울강서-1449</p>
              <p>주소: 서울특별시 강서구 화곡로 305</p>
              <p>이메일: info@betterthan.com</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <i className="fab fa-facebook text-2xl text-gray-400 hover:text-white cursor-pointer"></i>
              <i className="fab fa-twitter text-2xl text-gray-400 hover:text-white cursor-pointer"></i>
              <i className="fab fa-instagram text-2xl text-gray-400 hover:text-white cursor-pointer"></i>
              <i className="fab fa-linkedin text-2xl text-gray-400 hover:text-white cursor-pointer"></i>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">유리한 프로그램</h3>
            <ul className="space-y-2">
              <li><a href="/courses/programming" className="text-gray-400 hover:text-white cursor-pointer">온라인 강의</a></li>
              <li><a href="/courses/design" className="text-gray-400 hover:text-white cursor-pointer">오프라인 강의</a></li>
              <li><a href="/courses/business" className="text-gray-400 hover:text-white cursor-pointer">전자책</a></li>
              <li><a href="/courses/marketing" className="text-gray-400 hover:text-white cursor-pointer">무료 강의</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">유리한 클래스의 칼럼</h3>
            <ul className="space-y-2">
              <li><a href="/columns/latest" className="text-gray-400 hover:text-white cursor-pointer">최신 칼럼</a></li>
              <li><a href="/columns/trending" className="text-gray-400 hover:text-white cursor-pointer">인기 칼럼</a></li>
              <li><a href="/columns/tech" className="text-gray-400 hover:text-white cursor-pointer">기술 칼럼</a></li>
              <li><a href="/columns/career" className="text-gray-400 hover:text-white cursor-pointer">커리어 칼럼</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 유리한 클래스. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  );
  export default Footer;
  
const BottomNav = () => (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around md:hidden z-50">
      <a href="/" className="flex flex-col items-center py-2 text-xs">
        <i className="fas fa-home text-lg"></i>
        <span>홈</span>
      </a>
      <a href="/lectures" className="flex flex-col items-center py-2 text-xs">
        <i className="fas fa-play-circle text-lg"></i>
        <span>강의</span>
      </a>
      <a href="/ebooks" className="flex flex-col items-center py-2 text-xs">
        <i className="fas fa-book text-lg"></i>
        <span>전자책</span>
      </a>
      <a href="/my" className="flex flex-col items-center py-2 text-xs">
        <i className="fas fa-user text-lg"></i>
        <span>내강의실</span>
      </a>
    </nav>
  );
  export default BottomNav;
  
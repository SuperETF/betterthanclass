import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const menuItems = [
  { label: "홈", href: "/" },
  { label: "전체 강의", href: "/courses" },
  { label: "전자책", href: "/ebooks" },
  { label: "수강후기", href: "/reviews" }
];

// 카테고리 경로 정의 (여기에만 뒤로가기만!)
const categoryPaths = ["/courses", "/ebooks", "/reviews"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // 현재 페이지가 홈
  const isRoot = router.pathname === "/" || router.pathname === "/index";
  // 현재 페이지가 카테고리(=햄버거X, 뒤로가기만)
  const isCategory = categoryPaths.includes(router.pathname);

  // 뒤로가기 핸들러
  const handleBack = () => router.back();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-14 relative">
            {/* 좌측: 조건부 (햄버거 or 뒤로가기 or 로고) */}
            <div className="flex items-center">
              {/* 1. 홈: 햄버거 + 로고 */}
              {isRoot && (
                <>
                  <button
                    className="md:hidden flex items-center p-2"
                    onClick={() => setOpen(true)}
                    aria-label="메뉴 열기"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <Link href="/" className="ml-2">
                    <span className="text-xl font-bold text-black cursor-pointer">
                      유리한 클래스
                    </span>
                  </Link>
                </>
              )}
              {/* 2. 카테고리: 뒤로가기만 */}
              {isCategory && (
                <button
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors ml-2"
                  onClick={handleBack}
                  aria-label="뒤로가기"
                >
                  <i className="fas fa-arrow-left text-xl mr-1"></i>
                  <span className="text-sm font-medium">뒤로가기</span>
                </button>
              )}
              {/* 3. 그 외(예: 상세페이지): 뒤로가기만(필요시 더 확장 가능) */}
              {!isRoot && !isCategory && (
                <button
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-colors ml-2"
                  onClick={handleBack}
                  aria-label="뒤로가기"
                >
                  <i className="fas fa-arrow-left text-xl mr-1"></i>
                  <span className="text-sm font-medium">뒤로가기</span>
                </button>
              )}
            </div>
            {/* PC 메뉴 (가운데 정렬) */}
            <div className="hidden md:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {/* 우측: 로그인/회원가입 */}
            <div className="flex items-center space-x-2">
              <Link href="/login">
                <button className="px-3 py-1 text-gray-600 hover:text-gray-800 rounded transition-colors cursor-pointer text-sm whitespace-nowrap">
                  로그인
                </button>
              </Link>
              <Link href="/register">
                <button className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors cursor-pointer text-sm whitespace-nowrap">
                  회원가입
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* 모바일 사이드 드로어 */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setOpen(false)}
        style={{ pointerEvents: open ? "auto" : "none" }}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-[999] shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ willChange: "transform" }}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        <div className="flex flex-col mt-12 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-base text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;

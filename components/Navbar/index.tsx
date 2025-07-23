import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "홈", href: "/" },
  { label: "전체 강의", href: "/courses" },
  { label: "전자책", href: "/ebooks" },
  { label: "수강후기", href: "#" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-14 relative">
            {/* 좌측: 햄버거 + 로고 (flex-start) */}
            <div className="flex items-center">
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
      {/* 모바일 사이드 드로어 (로그인/회원가입 X) */}
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
        {/* 닫기 버튼 */}
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

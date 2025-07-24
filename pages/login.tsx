import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer"; // <- 공통 Footer import

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans" style={{ fontFamily: 'Pretendard, "Noto Sans KR", sans-serif' }}>
      {/* Header (Back Button) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
              aria-label="뒤로가기"
            >
              <i className="fas fa-arrow-left text-xl mr-2"></i>
              <span className="text-sm font-medium">뒤로가기</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Login Container */}
      <main className="pt-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Logo and Title */}
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
              유리한 클래스
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">로그인</h2>
            <p className="text-gray-600">계정에 로그인하여 학습을 시작하세요</p>
          </div>

          {/* Login Form */}
          <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 또는 아이디
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="이메일 또는 아이디를 입력하세요"
                    autoComplete="username"
                  />
                  <i className="fas fa-user absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  비밀번호
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all pr-12"
                    placeholder="비밀번호를 입력하세요"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                    tabIndex={-1}
                    aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                  >
                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} text-sm`} />
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
  <Link
    href="/forgot-password"
    className="text-sm text-purple-600 hover:text-purple-800 cursor-pointer"
  >
    비밀번호 찾기
  </Link>
</div>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-[1.02] cursor-pointer whitespace-nowrap"
            >
              로그인
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  다른 방법으로 로그인
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button type="button" className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
                <i className="fab fa-google text-red-500 mr-3 text-lg"></i>
                구글로 로그인
              </button>
              <button type="button" className="w-full flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap">
                <span className="mr-3 text-lg font-bold">N</span>
                네이버로 로그인
              </button>
              <button type="button" className="w-full flex items-center justify-center px-4 py-3 bg-yellow-400 text-gray-900 rounded-xl text-sm font-medium hover:bg-yellow-500 transition-colors cursor-pointer whitespace-nowrap">
                <i className="fas fa-comment text-lg mr-3"></i>
                카카오로 로그인
              </button>
            </div>
          </form>

          {/* Sign Up Link (회원가입) */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              아직 회원이 아니신가요?{" "}
              <Link href="/register" className="font-medium text-purple-600 hover:text-purple-800 cursor-pointer">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer /> {/* 하단에 공통 Footer 삽입 */}
    </div>
  );
};

export default LoginPage;

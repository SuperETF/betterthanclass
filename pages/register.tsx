// pages/register.tsx 또는 pages/auth/register.tsx

import React, { useState } from "react";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // 에러 초기화
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", password: "", confirmPassword: "", agreeToTerms: "" };
    if (!formData.name.trim()) newErrors.name = "이름을 입력해주세요.";
    if (!formData.email.trim()) newErrors.email = "이메일을 입력해주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    if (!formData.password) newErrors.password = "비밀번호를 입력해주세요.";
    else if (formData.password.length < 8) newErrors.password = "비밀번호는 8자 이상이어야 합니다.";
    if (!formData.confirmPassword) newErrors.confirmPassword = "비밀번호 확인을 입력해주세요.";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "이용약관에 동의해주세요.";
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: 회원가입 처리 로직 (API 연동)
      alert("회원가입 성공!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: 'Pretendard, "Noto Sans KR", sans-serif' }}>
      {/* Navigation/Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            <a href="/" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
              <i className="fas fa-arrow-left mr-2"></i>
              <span className="text-sm">홈으로 돌아가기</span>
            </a>
            <div className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              유리한 클래스
            </div>
            <div className="w-32"></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-screen py-12 px-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">새로운 계정 만들기</h1>
            <p className="text-gray-600">유리한 클래스에 오신 것을 환영합니다</p>
          </div>
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors ${
                    errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
                  }`}
                  placeholder="이름을 입력해주세요"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">이메일 주소</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors ${
                    errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
                  }`}
                  placeholder="이메일을 입력해주세요"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pr-12 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.password ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
                    }`}
                    placeholder="비밀번호를 입력해주세요 (8자 이상)"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>
              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">비밀번호 확인</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pr-12 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.confirmPassword ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
                    }`}
                    placeholder="비밀번호를 다시 입력해주세요"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <i className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`} />
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>
              {/* Terms Agreement */}
              <div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-700 cursor-pointer">
                    <span className="text-purple-600 hover:text-purple-700 cursor-pointer">이용약관</span> 및{" "}
                    <span className="text-purple-600 hover:text-purple-700 cursor-pointer">개인정보처리방침</span>
                    에 동의합니다.
                  </label>
                </div>
                {errors.agreeToTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>}
              </div>
              {/* Submit Button */}
              <button type="submit" className="w-full bg-purple-600 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap">
                회원가입 완료
              </button>
            </form>
            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                이미 계정이 있으신가요?{" "}
                <a href="/login" className="text-purple-600 hover:text-purple-700 font-medium cursor-pointer">
                  로그인하기
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            유리한 클래스
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2025 유리한 클래스. 모든 권리 보유.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RegisterPage;

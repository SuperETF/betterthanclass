import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient"; // supabase 클라이언트 import
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password`, // 이 경로로 메일 발송 후 이동
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800">
              <i className="fas fa-arrow-left text-xl mr-2"></i>
              <span className="text-sm font-medium">뒤로가기</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">비밀번호 찾기</h2>
            <p className="text-gray-600">가입하신 이메일로 인증 메일을 보내드립니다.</p>
          </div>
          <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6" onSubmit={handleSend}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                이메일 주소
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="이메일 주소를 입력하세요"
                  required
                />
                <i className="fas fa-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
              </div>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {sent ? (
              <div className="text-center text-green-600 font-medium">
                인증 메일이 발송되었습니다. 이메일을 확인하세요.
              </div>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-xl text-sm font-semibold hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-[1.02]"
              >
                {loading ? "전송 중..." : "인증 메일 보내기"}
              </button>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}

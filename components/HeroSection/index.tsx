import { useRef, useState } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
      if (!videoRef.current.paused && !videoRef.current.muted) {
        videoRef.current.volume = 1;
      }
    }
  };

  return (
    <section className="pt-16 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트/버튼 영역 */}
          <div className="flex flex-col items-center lg:items-start text-white w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 text-center lg:text-left">
              유리한 클래스에서<br />
              <span className="text-yellow-300">빠르게 성장하기</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-4 text-white/90 leading-relaxed text-center lg:text-left">
              효율적으로 성장할 수 있도록 도와드립니다.
            </p>
            {/* 모바일 영상 */}
            <div className="w-full flex flex-col items-center lg:hidden mb-6 relative">
              <div className="aspect-[9/16] w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl bg-black relative">
                <video
                  ref={videoRef}
                  src="/home.mp4"
                  autoPlay
                  loop
                  muted={muted}
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "9 / 16" }}
                />
                {/* 소리 버튼 (우측 하단) */}
                <button
                  type="button"
                  onClick={handleMuteToggle}
                  className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full shadow transition"
                  aria-label={muted ? "소리 켜기" : "음소거"}
                >
                  <i className={`fas ${muted ? "fa-volume-mute" : "fa-volume-up"} text-lg`} />
                </button>
              </div>
            </div>
            {/* 통계 */}
            <div className="flex justify-center lg:justify-start items-center mt-4 mb-6 space-x-8 w-full">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">100+</div>
                <div className="text-white/80">수강생</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">200+</div>
                <div className="text-white/80">비포&에프터</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">4.5</div>
                <div className="text-white/80">평균 평점</div>
              </div>
            </div>
            {/* 버튼 */}
            <div className="flex w-full justify-center lg:justify-start">
              <button className="bg-purple-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-800 transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap">
                지금 시작하기
              </button>
            </div>
          </div>
          {/* PC: 영상 */}
          <div className="hidden lg:flex w-full justify-center">
            <div className="aspect-[9/16] w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-black relative">
              <video
                ref={videoRef}
                src="/home.mp4"
                autoPlay
                loop
                muted={muted}
                playsInline
                className="w-full h-full object-cover"
                style={{ aspectRatio: "9 / 16" }}
              />
              {/* 소리 버튼 (우측 하단) */}
              <button
                type="button"
                onClick={handleMuteToggle}
                className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full shadow transition"
                aria-label={muted ? "소리 켜기" : "음소거"}
              >
                <i className={`fas ${muted ? "fa-volume-mute" : "fa-volume-up"} text-lg`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

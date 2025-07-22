import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import CourseCarousel from "@/components/CourseCarousel";
import EbookSection from "@/components/EbookSection";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <CourseCarousel />
      <EbookSection />
      <ReviewSection />
      <Footer />
      <BottomNav />
    </div>
  );
}

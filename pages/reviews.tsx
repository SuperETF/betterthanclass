import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AllReview from "../components/ReviewSection/ReviewPage/AllReview";

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">
        <AllReview />
      </main>
      <Footer />
    </>
  );
}

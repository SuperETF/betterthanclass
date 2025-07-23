import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AllEbook from "../components/EbookSection/EbookPage/AllEbook";

export default function EbookPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">
        <AllEbook />
      </main>
      <Footer />
    </>
  );
}

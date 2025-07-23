// pages/courses.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AllCourses from "../components/CourseCarousel/CoursesPage/all-courses";

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen bg-gray-50">
        <AllCourses />
      </main>
      <Footer />
    </>
  );
}

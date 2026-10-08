import Header from "@/components/Header";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ProjectsCarousel />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Real Estate Projects in Raipur`,
    description:
      "Explore residential, commercial and plotted projects by Sumeet Infracon in Raipur, Chhattisgarh.",
    url: site.url,
    type: "website",
    images: ["/images/projects/sumeet-urban-nest.webp"],
  },
};

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

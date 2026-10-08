import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center py-20 sm:py-28">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark">404</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 max-w-xl text-base font-light leading-7 text-ink-soft">
            The page you requested is unavailable. Explore Sumeet Infracon&apos;s projects in Raipur
            from the homepage.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-gold-dark"
          >
            View our projects
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}

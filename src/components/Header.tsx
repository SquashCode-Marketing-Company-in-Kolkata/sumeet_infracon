import Image from "next/image";
import Container from "./Container";
import { PhoneIcon } from "./icons";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-4 md:h-22">
        <a href="#" aria-label={`${site.name} home`} className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/sumeet-infracon-logo.webp"
            alt={site.name}
            width={1268}
            height={1241}
            priority
            className="h-14 w-auto md:h-16"
          />
        </a>

        <nav aria-label="Main navigation" className="flex items-center gap-2 sm:gap-6">
          <a
            href="#projects"
            className="hidden text-xs font-medium uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold-dark sm:inline"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hidden text-xs font-medium uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold-dark md:inline"
          >
            Contact
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-4 py-3 min-[360px]:px-5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-gold-dark sm:px-6"
          >
            <PhoneIcon />
            Call Now
          </a>
        </nav>
      </Container>
    </header>
  );
}

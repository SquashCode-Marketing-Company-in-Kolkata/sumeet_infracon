import Image from "next/image";
import Container from "./Container";
import { FacebookIcon, InstagramIcon } from "./icons";
import { site } from "@/lib/site";

// Same structure and styling as the Sumeet Urban Nest footer.
export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-cream py-12 md:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" aria-label={`${site.name} home`} className="inline-flex">
              <Image
                src="/images/sumeet-infracon-logo.webp"
                alt={site.name}
                width={1268}
                height={1241}
                className="h-auto w-[110px] object-contain md:w-[130px]"
              />
            </a>
            <p className="mt-5 max-w-md text-sm font-light leading-7 text-muted md:text-base">
              {site.tagline}
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-medium tracking-[0.48em] text-[#555555] md:text-base">
              CORPORATE
            </h2>
            <address className="text-sm font-light not-italic leading-7 text-muted md:text-base">
              {site.address[0]}
              <span className="block">{site.address[1]}</span>
            </address>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-medium tracking-[0.48em] text-[#555555] md:text-base">
              CONTACT
            </h2>
            <ul className="space-y-1 text-sm font-light leading-7 text-muted md:text-base">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-gold-dark">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-words transition-colors hover:text-gold-dark">
                  {site.email}
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex gap-3" aria-label="Social media">
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on Instagram`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink hover:bg-ink hover:text-white"
                >
                  <InstagramIcon className="h-[18px] w-[18px]" />
                </a>
              </li>
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on Facebook`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink hover:bg-ink hover:text-white"
                >
                  <FacebookIcon className="h-[22px] w-[22px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#e2ded6] pt-6 text-center md:mt-12">
          <p className="text-xs text-[#aaa49c] md:text-sm">
            © 2026 {site.name}. All renderings are indicative and subject to change.
          </p>
        </div>
      </Container>
    </footer>
  );
}

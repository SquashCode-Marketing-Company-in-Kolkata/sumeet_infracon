"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { ArrowIcon } from "./icons";
import { projects, site } from "@/lib/site";

// Scroll position at which a slide sits flush with the track's leading padding.
function slideOffset(track: HTMLElement, slide: HTMLElement) {
  return slide.offsetLeft - (track.firstElementChild as HTMLElement).offsetLeft;
}

export default function ProjectsCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const left = track.scrollLeft;
    let nearest = 0;
    slides.forEach((slide, i) => {
      if (Math.abs(slideOffset(track, slide) - left) < Math.abs(slideOffset(track, slides[nearest]) - left)) nearest = i;
    });
    const end = left + track.clientWidth >= track.scrollWidth - 4;
    // When the last cards fit on screen together, treat the final one as active.
    setActive(end ? slides.length - 1 : nearest);
    setAtStart(left <= 4);
    setAtEnd(end);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (track && slide) track.scrollTo({ left: slideOffset(track, slide), behavior: "smooth" });
  };

  const step = (dir: 1 | -1) => {
    const current = atEnd && dir === -1 ? projects.length - 1 : active;
    goTo(Math.min(Math.max(current + dir, 0), projects.length - 1));
  };

  const progress = ((active + 1) / projects.length) * 100;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="overflow-hidden py-12 sm:py-16 lg:py-10 xl:py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl lg:flex lg:max-w-none lg:flex-1 lg:items-end lg:justify-between lg:gap-12">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold-dark sm:text-xs sm:tracking-[0.4em]">
                {site.name} · Raipur
              </p>
              <h1
                id="projects-heading"
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl xl:text-5xl"
              >
                Our Projects
              </h1>
            </div>
            <p className="mt-4 text-base font-light leading-7 text-ink-soft sm:text-lg lg:mt-0 lg:max-w-md lg:text-base">
              Residential, commercial and plotted developments across Raipur. {site.tagline}
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex lg:hidden">
            <ArrowButton direction="left" disabled={atStart} onClick={() => step(-1)} />
            <ArrowButton direction="right" disabled={atEnd} onClick={() => step(1)} />
          </div>
        </div>
      </Container>

      <ul
        ref={trackRef}
        aria-label="Projects"
        className="bleed-track no-scrollbar relative mt-8 flex snap-x lg:mt-8 snap-mandatory gap-4 overflow-x-auto sm:mt-10 sm:gap-5 lg:grid lg:grid-cols-4 lg:overflow-visible xl:gap-6"
      >
        {projects.map((project, i) => (
          <li
            key={project.number}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${projects.length}: ${project.name}`}
            className="w-[85%] shrink-0 snap-start sm:w-[62%] md:w-[46%] lg:w-auto"
          >
            <ProjectCard project={project} priority={i === 0} />
          </li>
        ))}
      </ul>

      <Container>
        <div className="mt-6 flex items-center gap-5 lg:hidden">
          <span className="text-sm font-medium tabular-nums text-ink">
            {projects[active].number}
            <span className="text-muted"> / {String(projects.length).padStart(2, "0")}</span>
          </span>
          <div className="relative h-px flex-1 bg-line" aria-hidden="true">
            <div
              className="absolute inset-y-0 left-0 h-[2px] -translate-y-[0.5px] bg-ink transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex gap-2" role="group" aria-label="Choose project">
            {projects.map((p, i) => (
              <button
                key={p.number}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${p.name}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-ink" : "w-2 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous project" : "Next project"}
      className="flex h-13 w-13 items-center justify-center rounded-full border border-ink/20 bg-white text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-35"
    >
      <ArrowIcon direction={direction} className="h-5 w-5" />
    </button>
  );
}

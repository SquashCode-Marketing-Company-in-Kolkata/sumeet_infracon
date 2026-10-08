import Image from "next/image";
import { ArrowIcon, PhoneIcon, PinIcon } from "./icons";
import { site, type Project, type ProjectStatus } from "@/lib/site";

const statusStyles: Record<ProjectStatus, string> = {
  "New Launch": "bg-gold text-ink",
  "Under Construction": "bg-white/90 text-ink",
  Delivered: "bg-ink/80 text-white",
};

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const external = project.href?.startsWith("http");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink lg:aspect-[16/11]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name}, ${project.location}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 46vw, (min-width: 640px) 62vw, 85vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <ImagePlaceholder name={project.name} />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/25" />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
        <span className="absolute bottom-3 right-4 text-4xl font-extralight leading-none text-white/90 xl:text-5xl">
          {project.number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 xl:p-6">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted xl:text-[11px]">
          <span className="text-gold-dark">{project.category}</span>
          <span className="inline-flex items-center gap-1.5">
            <PinIcon className="h-3 w-3" />
            {project.location}
          </span>
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink 2xl:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm font-light leading-6 text-ink-soft">
          {project.description}
        </p>

        <div className="mt-auto pt-5">
          <a
            href={project.href ?? site.phoneHref}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-ink px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-white"
          >
            {project.href ? (
              <>
                View Project
                <ArrowIcon />
              </>
            ) : (
              <>
                <PhoneIcon />
                Call Now
              </>
            )}
            <span className="sr-only">: {project.name}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

// Shown until real photography is added for a project.
function ImagePlaceholder({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#4a403a_0%,#2b2623_55%,#1b1816_100%)]">
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
        <defs>
          <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0v44" fill="none" stroke="#fff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <p className="relative px-8 text-center text-sm font-light uppercase tracking-[0.35em] text-gold/80">
        {name}
      </p>
    </div>
  );
}

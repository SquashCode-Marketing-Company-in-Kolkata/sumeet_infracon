// Single source of truth for company contact details.
// TODO: replace the email with Sumeet Infracon's real address.
export const site = {
  name: "Sumeet Infracon",
  tagline: "Building spaces designed for better living and better business.",
  phoneDisplay: "+91 72477 24758",
  phoneHref: "tel:+917247724758",
  email: "info@sumeetinfracon.com",
  address: ["Sumeet Business Park,", "Pachpedi Naka, Raipur, Chhattisgarh"],
  url: "https://sumeetinfracon.com",
  social: {
    instagram: "https://www.instagram.com/sumeet_infracon/",
    facebook: "https://www.facebook.com/share/1H9LyH5UEg/",
  },
};

export type ProjectStatus = "New Launch" | "Under Construction" | "Delivered";

export type Project = {
  number: string;
  name: string;
  status: ProjectStatus;
  category: "Residential" | "Commercial" | "Plotted";
  location: string;
  description: string;
  image?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Sumeet Urban Nest",
    status: "New Launch",
    category: "Residential",
    location: "Khamardih, Raipur",
    description:
      "2 & 3 BHK homes where an outdoor room extends the floor plan, on 1.76 acres off Shankar Nagar.",
    image: "/images/projects/sumeet-urban-nest.webp",
    href: "https://sumeeturbannest.com/",
  },
  {
    number: "02",
    name: "Sumeet Trade Centre",
    status: "Under Construction",
    category: "Commercial",
    location: "Pachpedi Naka, Raipur",
    description:
      "Three towers of glass-fronted offices and shopfronts at Raipur’s busiest commercial junction.",
    image: "/images/projects/sumeet-trade-centre.webp",
    href: "https://sumeetinfraventures.com/",
  },
  {
    number: "03",
    name: "Sumeet City of Dreams",
    status: "Delivered",
    category: "Residential",
    location: "Raipur",
    description:
      "A residential development that set the group’s benchmark for planning and finish.",
    image: "/images/projects/sumeet-city-of-dreams.webp",
  },
  {
    number: "04",
    name: "Sumeet Landscape",
    status: "Delivered",
    category: "Plotted",
    location: "Raipur",
    description:
      "Plotted land with wide roads and underground services, sold on clear title.",
    image: "/images/projects/sumeet-landscape.webp",
  },
];

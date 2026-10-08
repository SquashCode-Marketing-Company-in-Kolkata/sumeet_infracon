import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Residential & Commercial Projects in Raipur`,
  description:
    "Sumeet Infracon develops residential, commercial and plotted projects in Raipur, Chhattisgarh, including Sumeet Urban Nest, Sumeet Trade Centre, Sumeet City of Dreams and Sumeet Landscape.",
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
    images: ["/images/projects/sumeet-urban-nest.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f7f3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}

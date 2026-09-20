import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dineshgopi Sunkara — Founder Building AI Products",
  description: "Founder building AI products that ship — multi-agent systems, ads, markets. Featured work: AdForge, Dinesh AI Fund, DGS AI.",
  keywords: ["Dineshgopi Sunkara", "AI products", "founder", "Next.js", "TypeScript", "multi-agent systems", "AdForge", "DGS AI"],
  authors: [{ name: "Dineshgopi Sunkara" }],
  openGraph: {
    title: "Dineshgopi Sunkara — Founder Building AI Products",
    description: "Founder building AI products that ship — multi-agent systems, ads, markets.",
    url: "https://sunkara1111.github.io/portfolio/",
    siteName: "Dineshgopi Sunkara Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dineshgopi Sunkara — Founder Building AI Products",
    description: "Founder building AI products that ship — multi-agent systems, ads, markets.",
  },
  icons: {
    icon: "/portfolio/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

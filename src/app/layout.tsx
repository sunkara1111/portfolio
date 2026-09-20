import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinesh Gopi Sunkara — Automation Engineer",
  description: "Automation Engineer with a Master's degree in Computer Science from Pace University, building practical and accessible automation and AI-assisted tools. Featured work: AdForge, Dinesh AI Fund, DGS AI.",
  keywords: ["Dinesh Gopi Sunkara", "Automation Engineer", "Pace University", "Next.js", "TypeScript", "automation", "AI tools", "AdForge", "DGS AI"],
  authors: [{ name: "Dinesh Gopi Sunkara" }],
  openGraph: {
    title: "Dinesh Gopi Sunkara — Automation Engineer",
    description: "Automation Engineer with a Master's in Computer Science from Pace University, building practical and accessible automation and AI-assisted tools.",
    url: "https://sunkara1111.github.io/portfolio/",
    siteName: "Dinesh Gopi Sunkara Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh Gopi Sunkara — Automation Engineer",
    description: "Automation Engineer building practical and accessible automation and AI-assisted tools.",
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

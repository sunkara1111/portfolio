import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dineshgopi Sunkara — Automation Engineer",
  description: "Automation Engineer with a Master's degree in Computer Science from Pace University, building practical and accessible automation and AI-assisted tools.",
  keywords: ["Automation Engineer", "AI", "Machine Learning", "Portfolio", "Dineshgopi Sunkara"],
  authors: [{ name: "Dineshgopi Sunkara" }],
  openGraph: {
    title: "Dineshgopi Sunkara — Automation Engineer",
    description: "Automation Engineer with a Master's degree in Computer Science from Pace University, building practical and accessible automation and AI-assisted tools.",
    url: "https://sunkara1111.github.io/portfolio/",
    siteName: "Dineshgopi Sunkara Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dineshgopi Sunkara — Automation Engineer",
    description: "Automation Engineer with a Master's degree in Computer Science from Pace University, building practical and accessible automation and AI-assisted tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}

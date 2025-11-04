import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/providers/theme.provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Toaster } from "@/components/ui/sonner";
import NavMenu from "@/components/nav-menu";
import Footer from "@/components/footer";
import { WithContext } from "schema-dts";
import { Person } from "schema-dts";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.matthewjenkinson.dev"),
  title: {
    template: "%s | Matthew Jenkinson - Full-stack Developer",
    default: "Matthew Jenkinson - Full-stack Developer",
  },
  description: "Full-stack developer based in Bristol",
  openGraph: {
    images: [
      {
        url: "/api/og?title=Matthew Jenkinson&description=Full stack developer based in Bristol, UK&theme=dark",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const jsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matthew Jenkinson",
  image: "https://www.matthewjenkinson.com/matthew-jenkinson.jpg",
  description: "Full-stack developer based in Bristol",
  url: "https://www.matthewjenkinson.dev",
  sameAs: ["https://github.com/mattdjenkinson"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-background text-foreground"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-mono antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NavMenu />
          <main>{children}</main>
          <Footer />
          <ThemeToggle className="fixed right-4 bottom-4" />
          <Toaster position="top-right" />
        </ThemeProvider>

        {/* Analytics */}
        <Script
          src="https://analytics.chipscoding.dev/script.js"
          data-website-id="d45c62a8-1c98-4462-88b1-8fa72410e8ce"
          strategy="afterInteractive"
        />

        {/* JSON LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

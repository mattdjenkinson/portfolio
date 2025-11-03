"use client";

import ContentContainer from "@/components/content-container";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme.provider";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const globalErrorMetadata: Metadata = {
  metadataBase: new URL("https://www.matthewjenkinson.dev"),
  title: {
    template: "Error | Matthew Jenkinson",
    default: "Error | Matthew Jenkinson",
  },
  description: "An error occurred while processing your request.",
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

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
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
          <ContentContainer className="min-h-80">
            <h2 className="text-2xl font-semibold">Something went wrong!</h2>
            <p className="mb-8">
              An error occurred while processing your request.
            </p>
            <div className="flex gap-2">
              <Button onClick={() => reset()}>Try again</Button>
              <Link href="/">
                <Button className="" variant="outline">
                  <ArrowLeftIcon /> Go home
                </Button>
              </Link>
            </div>

            <pre className="bg-accent mt-8 rounded-lg p-2">{error.message}</pre>
          </ContentContainer>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default GlobalError;

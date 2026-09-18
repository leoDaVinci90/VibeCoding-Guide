import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider, themeInitScript } from "@/components/layout/ThemeProvider";
import { AppShell } from "@/components/layout/AppShell";
import "./tokens.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Vibe Coding Field Guide",
    template: "%s · The Vibe Coding Field Guide",
  },
  description:
    "A friendly guide for product designers, visual designers, content designers, and user researchers who are new to vibe coding — the language, the workflow, and what to ask next.",
  keywords: [
    "vibe coding",
    "AI",
    "LLM",
    "context engineering",
    "prompting",
    "design",
    "user research",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a href="#content" className="sr-only sr-only-focusable">
          Skip to content
        </a>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}

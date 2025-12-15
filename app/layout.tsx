import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "I Made Dwi Arya Wiguna | Creative Producer & Show Director",
  description:
    "Portfolio of I Made Dwi Arya Wiguna - Creative Producer & Show Director specializing in esports events, live streaming, motion graphics, and visual storytelling.",
  keywords: [
    "creative producer",
    "show director",
    "esports",
    "live streaming",
    "motion graphics",
    "video editing",
    "graphic design",
    "visual storytelling",
    "Bali",
    "Indonesia",
  ],
  authors: [{ name: "I Made Dwi Arya Wiguna", url: "mailto:aryafoxs@gmail.com" }],
  creator: "I Made Dwi Arya Wiguna",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://aryawiguna.com",
    title: "I Made Dwi Arya Wiguna | Creative Producer",
    description:
      "Creative Producer & Show Director specializing in esports events and visual storytelling.",
    siteName: "Arya Wiguna Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "I Made Dwi Arya Wiguna | Creative Producer",
    description:
      "Creative Producer & Show Director specializing in esports events and visual storytelling.",
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
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header />
            <main style={{ flex: 1, paddingTop: 72 }}>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

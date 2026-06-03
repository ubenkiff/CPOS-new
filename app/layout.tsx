import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "../components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CPOS - Construction Project Operating System",
  description: "The ultimate Project Operating System built for AEC professionals. Run your project schedules, budgets, and remote teams on one unified platform.",
  openGraph: {
    title: "CPOS - Construction Project Operating System",
    description: "The ultimate Project Operating System built for AEC professionals. Run your project schedules, budgets, and remote teams on one unified platform.",
    url: "https://cpos-new.vercel.app",
    siteName: "CPOS",
    images: [
      {
        url: "https://cpos-new.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPOS - Construction Project Operating System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPOS - Construction Project Operating System",
    description: "The ultimate Project Operating System built for AEC professionals. Run your project schedules, budgets, and remote teams on one unified platform.",
    images: ["https://cpos-new.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('cpos-theme');
                  // Since 'black' is default/dark, and 'white' is light
                  const theme = saved || 'black';
                  if (theme === 'white') {
                    document.documentElement.classList.add('white-theme-loaded');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}

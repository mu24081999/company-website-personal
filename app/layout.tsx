import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Softin.tech - Innovating the Future of Software Development",
  description:
    "Leading software development company specializing in AI, automation, cloud solutions, and full-stack development.",
  keywords:
    "software development, AI, automation, cloud solutions, full-stack development, mobile apps, DevOps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gradient-to-br from-dark-50 via-dark-100 to-dark-200 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700 min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HelpOneAnother | Finances made easy",
  description: "Unlock the Power of Your Data. Unleash Innovation with Custom LLMs.",
};

//added the antdRegistry component to the body
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AntdRegistry>{children}</AntdRegistry>
        <SpeedInsights />
      </body>
    </html>
  );
}

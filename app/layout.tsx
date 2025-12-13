import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Easy Tailwind Animations",
  description: "A complete animation playground and showcase built with Next.js and Tailwind CSS",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className="antialiased">
      {children}
    </body>
  </html>
);

export default RootLayout;

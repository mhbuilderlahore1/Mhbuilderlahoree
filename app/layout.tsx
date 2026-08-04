import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MHBuilder Lahore Building Contractor",
  description: "Construction Company in Lahore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Mulish  } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Mulish ({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Lorena - Admin Auth",
  description: "Admin dashboard to manage Lorena's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

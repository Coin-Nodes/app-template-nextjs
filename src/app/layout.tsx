"use client";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProgressBar
          height="8px"
          color="#000"
          options={{ showSpinner: false }}
        />
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  );
}

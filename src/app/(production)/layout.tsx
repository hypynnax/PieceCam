import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function ProductionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  );
}

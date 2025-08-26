import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Ana Sayfa",
  description: "",
};

export default function AdminLayout({
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

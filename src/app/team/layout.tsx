import { RootProvider } from "@/providers/root-provider/root-provider";
import { type Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Our Team",
  },
  description: "Check out who we are and the role each of us perform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

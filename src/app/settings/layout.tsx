import { RootProvider } from "@/providers/root-provider/root-provider";
import { type Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    template: "%s - AICulture",
    default: "Contact",
  },
  description: "Configure the looks of your page in any way you see fit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Settings</title>
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

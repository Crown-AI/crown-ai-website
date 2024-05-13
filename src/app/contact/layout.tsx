import { RootProvider } from "@/providers/root-provider/root-provider";
import { type Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    template: "%s - AICulture",
    default: "Contact",
  },
  description: "A page that allows you to contact the creator of AICulture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Contact | AICulture</title>
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

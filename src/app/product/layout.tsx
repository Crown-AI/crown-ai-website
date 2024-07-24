import { RootProvider } from "@/providers/root-provider/root-provider";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s ",
    default: "Products",
  },
  description: "The Crown of Luxury: Royalty in Technology and Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

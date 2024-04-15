import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "defualt tilte like nextjs tutorial",
    template: "%s | codevolution",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}

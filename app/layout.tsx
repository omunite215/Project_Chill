import { Footer, Navbar } from "@/components";
import "../styles/globals.css";

export const metadata = {
  title: "Chill",
  description: "Products that Matter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-BgWhite w-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

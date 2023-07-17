import { Footer, Navbar } from "@/Common_Components";
import "../styles/globals.css";

export const metadata = {
  title: "Chill.",
  description: "Products that Matter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-BgWhite w-full overflow-x-hidden">
        <nav className="sm:px-20 px-10 flex justify-center items-center">
          <Navbar />
        </nav>
        {children}
        <footer className="sm:px-20 px-10 flex justify-center items-center">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

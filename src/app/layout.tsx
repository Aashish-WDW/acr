import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import SiteFooter from "./components/SiteFooter";
import Preloader from "./components/Preloader";

export const metadata: Metadata = {
  title: "AVR Green Energy — Solar Energy Developer",
  description: "AVR Green Energy Pvt. Ltd. — Solar energy developer. 2.5 MW plant commissioned. Development, EPC, and O&M services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Share+Tech+Mono&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Preloader />
        <Navigation />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

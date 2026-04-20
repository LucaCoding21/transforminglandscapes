import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transforming Landscapes | REIBC",
  description:
    "A research platform on the future, challenges, and opportunities of First Nations-led real estate development in British Columbia. Produced by the Real Estate Institute of British Columbia and Greater Vancouver REALTORS®.",
  openGraph: {
    title: "Transforming Landscapes",
    description:
      "Research on the future of real estate in British Columbia. Produced by REIBC and Greater Vancouver REALTORS®.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${inter.variable}`}>
      <body className="bg-earth-50 text-earth-900">
        <PageTransition>
          <Nav />
          {children}
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}

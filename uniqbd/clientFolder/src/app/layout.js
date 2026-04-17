import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import BubbleRain from "./components/BubbleRain";
import { CartProvider } from "@/context/CartContext";
import { ThemeContextProvider } from "@/context/ThemeContext";
import Socialicones from "./Socialicones/page";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UniQbd",
  description: "Gaming Topup Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <ThemeContextProvider>
            <CartProvider>
              <Navbar />
              <main className="relative min-h-screen overflow-hidden">
                <div className="relative z-5">
                  <div className="color">{children}</div>
                </div>
              </main>
              <Socialicones/>
              <Footer />
            </CartProvider>
          </ThemeContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

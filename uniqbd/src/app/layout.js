import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "UniQbd",
  description: "Gaming Topup Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          <main className="relative min-h-screen bg-bgmain bg-dark-image">

            <div className="absolute inset-0 "></div>

            <div className="relative z-10">
              {children}
            </div>

          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
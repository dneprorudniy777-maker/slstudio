import { Outfit } from 'next/font/google'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfit.className} min-h-screen flex flex-col`}>
                <Header />
                <main className="container flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

import Header from "@/components/Header";
import "./globals.scss";
import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Cupie Cakes",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

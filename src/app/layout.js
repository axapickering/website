import 'bootstrap/dist/css/bootstrap.css';
import { Raleway } from "next/font/google";
import "./globals.css";
import BootstrapClient from './BootstrapClient';
import Navbar from './Navbar';
import IconLinks from './IconLinks';

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Axa Pickering, SWE",
  description: "Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>

        <Navbar />
        <IconLinks />


        <div className='content-container'>
          {children}
        </div>

        <div className='bottom-stripe' />
        <div className='bottom-stripe-accent' />

        <BootstrapClient />
      </body>
    </html>
  );
}

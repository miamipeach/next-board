import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/" className="logo">
            Appleforum
          </Link>
          <Link href="/list">List</Link>
          <Link href="/write">Write</Link>
        </div>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'ManifestTOK',
  description: 'Bring your literary world to life',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

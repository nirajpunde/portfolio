import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Niraj Punde — Full Stack Developer',
  description:
    'Full-stack engineer with 4+ years building high-stakes financial systems at Credit Suisse.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

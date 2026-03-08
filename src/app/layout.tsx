import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://addrlab.com'),
  title: 'AddrLab | Solana Vanity Address Generator',
  description:
    'Generate custom Solana wallet addresses and token mint addresses. Create vanity addresses for pump.fun token launches. 100% client-side, open source, and secure.',
  keywords: [
    'solana',
    'vanity address',
    'crypto',
    'wallet',
    'address generator',
    'blockchain',
    'addrlab',
    'token mint',
    'pump.fun',
    'solana token',
    'custom address',
    'sol domain',
    'solana naming service',
  ],
  authors: [{ name: 'AddrLab', url: 'https://addrlab.com' }],
  creator: 'AddrLab',
  publisher: 'AddrLab',
  openGraph: {
    title: 'AddrLab | Solana Vanity Address Generator',
    description:
      'Generate custom Solana wallet and token addresses. Perfect for pump.fun launches. 100% client-side and secure.',
    url: 'https://addrlab.com',
    siteName: 'AddrLab',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AddrLab - Solana Vanity Address Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AddrLab | Solana Vanity Address Generator',
    description:
      'Generate custom Solana wallet and token addresses. Perfect for pump.fun launches.',
    site: '@addrlab',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://addrlab.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="theme-color" content="#F7F5F0" />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

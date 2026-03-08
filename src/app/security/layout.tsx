import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security | AddrLab - How We Keep Your Keys Safe',
  description: 'Learn how AddrLab protects your private keys with 100% client-side generation, open source code, and zero data storage.',
  keywords: [
    'AddrLab security',
    'Solana vanity address security',
    'client-side key generation',
    'browser cryptography',
    'open source security',
    'private key safety',
    'Web Crypto API',
    'CSPRNG',
  ],
  openGraph: {
    title: 'Security | AddrLab',
    description: 'Your private keys never leave your browser. Learn how AddrLab ensures complete security with client-side generation and open source transparency.',
    url: 'https://addrlab.com/security',
    siteName: 'AddrLab',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AddrLab Security',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security | AddrLab',
    description: 'Your private keys never leave your browser. 100% client-side, open source, verifiable.',
    images: ['/og-image.png'],
  },
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

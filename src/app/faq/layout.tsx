import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | AddrLab',
  description:
    'Frequently asked questions about AddrLab Solana vanity address generator. Learn about security, performance, token mints, and how it works.',
  keywords: [
    'vanity address faq',
    'solana address generator help',
    'how to create vanity address',
    'pump.fun token guide',
    'addrlab help',
  ],
  openGraph: {
    title: 'FAQ | AddrLab',
    description:
      'Frequently asked questions about AddrLab. Learn about security, performance, and how to generate vanity addresses.',
    url: 'https://addrlab.com/faq',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AddrLab FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | AddrLab',
    description:
      'Frequently asked questions about AddrLab Solana vanity address generator.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://addrlab.com/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

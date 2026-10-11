import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'monis.rent — Custom Workspace Builder | Bali Office Rental',
    template: '%s | monis.rent'
  },
  description:
    'Custom workspace builder and premium ergonomic equipment rental for digital nomads and startups in Bali. Sit-stand desks, mesh chairs, 4K monitors, and villa lifestyle gear.',
  keywords: [
    'monis.rent',
    'workspace builder bali',
    'bali office rental',
    'ergonomic chair bali',
    'standing desk rental canggu',
    'coworking equipment ubud'
  ],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/icon.svg',
    apple: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ]
  },
  openGraph: {
    title: 'monis.rent — Custom Workspace Builder | Bali Office Rental',
    description:
      'Design your perfect workstation in Bali. Ergonomic desks, chairs, monitors, and lifestyle equipment delivered to your villa.',
    siteName: 'monis.rent',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'monis.rent — Custom Workspace Builder | Bali Office Rental',
    description:
      'Design your perfect workstation in Bali. Ergonomic desks, chairs, monitors, and lifestyle equipment delivered to your villa.'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col bg-white text-neutral-900 font-sans">
        {children}
      </body>
    </html>
  );
}

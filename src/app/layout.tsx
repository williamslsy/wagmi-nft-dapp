import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Web3Provider } from '@/context/wagmi-provider';
import ConnectButton from '@/components/connect-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'wagmi nft dApp',
  description: 'simple nft dApp with wagmi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Provider>
          <ConnectButton />
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}

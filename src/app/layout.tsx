import './globals.css';

import { ClerkProvider } from '@clerk/nextjs/app-beta';
import { Toaster } from 'react-hot-toast';

import { TrpcProvider } from '@/components/TrpcProvider';

export const metadata = {
  title: '<Title>',
  description: '<Description>',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full">
      <ClerkProvider>
        <TrpcProvider>
          <body className="h-full">
            <Toaster />
            {children}
          </body>
        </TrpcProvider>
      </ClerkProvider>
    </html>
  );
}

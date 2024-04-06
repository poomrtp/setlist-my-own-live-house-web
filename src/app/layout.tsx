import type { Metadata } from 'next';
import './globals.css';
import AuthSessionProvider from '@/components/auth-session/authSessionProvider';
import { getServerSession } from 'next-auth';
import authOptions from './api/auth/[...nextauth]/authOptions';
import Layout from '@/components/layout/layout';
import Provider from './provider';

export const metadata: Metadata = {
  title: 'My own Live House',
  description: 'My own Live House setlist',
  authors: { name: 'Ratthapon Sananaur' },
  keywords: ['setlist', 'spotify', 'music'],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <AuthSessionProvider session={session}>
        <body>
          <Provider>
            <Layout>{children}</Layout>
          </Provider>
        </body>
      </AuthSessionProvider>
    </html>
  );
}

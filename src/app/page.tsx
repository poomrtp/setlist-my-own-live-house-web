'use client';

import SpotifyBtn from '@/components/buttons/spotifyBtn';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session || session.status !== 'authenticated') {
      return;
    }
    router.push('/most-listened');
  }, [session, router]);

  return (
    <div className="w-full h-full">
      <div className="hero">
        <div className="hero-content text-center flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">
              Welcome to My Spotify data app
            </h1>
            {session?.status === 'authenticated' ? (
              <>
                <p className="py-6">{`Let's create your set list`}</p>
                <Link href={'/most-listened'}>
                  <button className="btn btn-primary">Get Started</button>
                </Link>
              </>
            ) : (
              <>
                <p className="py-6">Sign in to get started</p>
                <div className="flex justify-center">
                  <SpotifyBtn />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

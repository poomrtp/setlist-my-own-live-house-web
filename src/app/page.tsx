'use client';

import { useSession, signOut, signIn } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const session = useSession();

  if (!session || session.status !== 'authenticated') {
    return (
      <div>
        <h1>Spotify Web API Typescript SDK in Next.js</h1>
        <button onClick={() => signIn('spotify')}>Sign in with Spotify</button>
      </div>
    );
  }

  return (
    <div>
      <p>Logged in as {session.data.user?.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
      <div>Welcome to My Spotify data app</div>
      <Link href={'/most-listened'}>
        <button className="px-4 py-2 bg-black rounded-md text-white">
          Most Listened
        </button>
      </Link>
    </div>
  );
}

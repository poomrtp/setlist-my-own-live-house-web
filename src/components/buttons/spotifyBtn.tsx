import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { HTMLAttributes } from 'react';

export default function SignInBtn({ className }: HTMLAttributes<any>) {
  return (
    <>
      <button
        className={`btn btn-spotify ${className} hover:bg-spotify/90 flex flex-row gap-2`}
        onClick={() => signIn('spotify')}
      >
        <Image
          src={'/Spotify_Icon_RGB_Black.png'}
          alt="spotify icon"
          width={24}
          height={24}
        />
        Sign in
      </button>
    </>
  );
}

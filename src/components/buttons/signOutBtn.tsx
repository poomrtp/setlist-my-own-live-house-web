import { signOut } from 'next-auth/react';
import { HTMLAttributes } from 'react';

export default function SignOutBtn({ className }: HTMLAttributes<any>) {
  return (
    <>
      <button
        className={`btn btn-ghost ${className}`}
        onClick={() => signOut()}
      >
        Sign-out
      </button>
    </>
  );
}

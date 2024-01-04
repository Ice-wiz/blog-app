"use client";

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';

type Props = {}

export const Button = (props: Props) => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (session) {
    return (
      <div className='flex'>
        <Link href="/blog/new" className='mr-6 hover:underline self-center'>✍️Blog</Link>
        <div>
        <img
          style={{
            borderRadius: '50%',
            height: '50px', // Adjust the height as needed
            width: '50px', // Adjust the width as needed
            marginRight: '8px', // Adjust the margin as needed
            marginTop:'0.5px',
            marginBottom:'0.5px'
          }}
          src={session.user?.image ?? ''}
          alt="User Image"
        />
        <h1 style={{marginLeft:'1'}}>{session.user?.name}</h1>
        </div>
        <button className="text-white bg-black p-4 cursor-pointer" onClick={(e) => {
          e.preventDefault();
          signOut();
        }}>Sign Out</button>
      </div>
    );
  }
  return (
    <div onClick={() => signIn()} className="text-white bg-black p-4 cursor-pointer">Sign In</div>
  )
}
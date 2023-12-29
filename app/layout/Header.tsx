"use client";

import React from 'react';
import {Button as AuthButton} from '@/app/auth/Button'
import { SessionProvider } from 'next-auth/react';

type Props={}

const Header=(props:Props)=>{
    return(
        <SessionProvider>
        <div className='border-b flex justify-between'>
            <div className='text-4xl px-2 py-2 '>LOGO
            </div>
            <AuthButton/>
        </div>
        </SessionProvider>
    )
}

export default Header;
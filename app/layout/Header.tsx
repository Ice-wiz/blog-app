"use client";

import React from 'react';
import {Button as AuthButton} from '@/app/auth/Button'
import { SessionProvider } from 'next-auth/react';

type Props={}

const Header=(props:Props)=>{
    return(
        <SessionProvider>
        <div className='border-b flex justify-between'>
            <div className='text-4xl px-2 py-3 '>LOGO</div>
            <div><AuthButton/></div>
        </div>
        </SessionProvider>
    )
}

export default Header;
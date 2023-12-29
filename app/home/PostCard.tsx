import React from 'react';
import type {Post} from '@prisma/client'
import {User} from '@prisma/client'
import type {User as UserType} from '@prisma/client'
import Link from 'next/link'

type Props={
    post:Post;
    user:UserType | null;
    className?:string;
}

const PostCard=({post,user,className}:Props)=>{

    return(
        <Link href={`/blog/${post.id}`} className={`${className} p-4 rounded border-2 flex flex-col justify-between shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]`}>
            <h3 className='text-3xl mb-3 '>{post.title}</h3>
            <p>{post.content}</p>
            {/* <p>Author_Id:{post.authorId}</p> */}
            {/* <p className='text-xl self-start mb-0'>{user?.name || 'Unknown author'}</p> */}
        </Link>
    )
}

export default PostCard;
import React from 'react'
import { PrismaClient } from '@prisma/client'
import Postcard from '@/app/home/PostCard'

const prisma = new PrismaClient()

type Props = {}

const Posts = async(props: Props) => {
    
const users=await prisma.user.findMany()
console.log(users);

const posts=await prisma.post.findMany()
console.log(posts)

const bgClasses=[
    'bg-pink-400',
    'bg-yellow-400',
    'bg-cyan-400',
    'bg-green-400',
    'bg-indigo-400',
    'bg-red-400',
]

 return (
    <div className='p-4 rounded border-2'>
      <h2 className='text-4xl text-center mt-8 border-2 rounded b-2 border-gray-500 pb-1 mb-8'>Trending</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {posts.map((post,index) => {
          // Find the user associated with the post
          const user = users.find((u) => u.id === post.authorId);
          return <Postcard key={post.id} post={post} user={user || null} className={bgClasses[index]}/>;
        })}
      </div>
    </div>
  );
};

export default Posts;

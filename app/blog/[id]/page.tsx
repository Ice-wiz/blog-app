import React from "react";
import Prisma from "@/lib/prisma";
type Props = {};

const Page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const post = await Prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  console.log(post);
  return <div>{post && <h1>{post.title}</h1>}</div>;
};

export default Page;

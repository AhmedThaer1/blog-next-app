import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        <div className=" w-[90%] h-[400px] relative">
          <Image
            src="/images/post1.webp"
            alt="top image"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm transform rotate-[270deg] m-auto">
          03.12.2024
        </span>
      </div>
      <div className="bot">
        <h1 className="text-2xl mb-5 w-[90%]">title</h1>
        <p className="mb-5 font-[300] text-gray-500 w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia
          veritatis quod adipisci! Aliquam qui praesentium laboriosam quam
          veniam! Consequatur temporibus omnis id voluptas accusamus maiores
          magnam cupiditate necessitatibus ullam.
        </p>
        <Link className="underline" href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

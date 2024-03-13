import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        <div className=" w-[90%] h-[400px] relative">
          {/* <Image
            src="/images/post2"
            alt="top image"
            fill
            className="object-cover"
          /> */}
        </div>
        <span className="text-sm transform rotate-[270deg]">03.12.2024</span>
      </div>
      <div className="bot">
        <h1 className="title">title</h1>
        <p className="desc">description</p>
        <Link href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;

import PostCard from "@/components/shared/PostCard";

const BlogPage = () => {
  return (
    <div className="flex justify-center flex-wrap gap-5">
      <div className="w-[100%] md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>

      <div className="w-[100%] md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>

      <div className="w-[100%] md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>

      <div className="w-[100%] md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;

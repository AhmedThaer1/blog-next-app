import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="hidden md:block flex-1 relative h-[calc(100vh-200px)]">
        <Image
          className="object-cover"
          src={"/images/post1.webp"}
          alt="info Image"
          fill
        />
      </div>
      <div className="flex-[2] flex flex-col gap-[50px]">
        <h1 className="text-6xl">Title</h1>
        <div className="flex gap-3">
          <Image
            className="object-cover rounded-[50%]"
            src={"/images/post1.webp"}
            alt="Avatar Image"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-3">
            <span className="text-gray-600 font-bold">Author</span>
            <span className="font-[500]">UserName</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-600 font-bold">Published</span>
            <span className="font-[500]">01.01.2024</span>
          </div>
        </div>
        <div className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          dolor mollitia reprehenderit facere vitae animi obcaecati harum
          repellendus voluptatibus amet, nam, beatae nobis esse! Aperiam fugiat
          aspernatur veritatis delectus iusto.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

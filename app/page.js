import Image from "next/image";
const Home = () => {
  return (
    <div className="flex gap-24 ">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-8xl">I have no Idea Agency.</h1>
        <p className="text-xl">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-5">
          <button className="p-3 min-w-[120px] cursor-pointer border-none rounded bg-[--btn] text-[--text]">
            Learn more
          </button>
          <button className="p-3 min-w-[120px] cursor-pointer border-none rounded text-black bg-white">
            Contact
          </button>
        </div>
        <div className="w-[500px] h-12 relative grayscale">
          <Image
            src="/images/brands.png"
            alt="brands"
            fill
            className=" object-contain"
          />
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/hero.gif"
          alt="hero"
          fill
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default Home;

import Image from "next/image";
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-24 text-center container">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-6xl md:text-8xl">I have no Idea Agency.</h1>
        <p className="text-xl">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center md:justify-normal gap-5">
          <button className="p-3 min-w-[100px] cursor-pointer border-none rounded bg-[--btn] text-[--text]">
            Learn more
          </button>
          <button className="p-3 min-w-[100px] cursor-pointer border-none rounded text-black bg-white">
            Contact
          </button>
        </div>
        <div className="w-[100%] sm:w-[500px] h-12 relative grayscale">
          <Image
            src="/images/brands.png"
            alt="brands"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/hero.gif"
          alt="hero"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Home;

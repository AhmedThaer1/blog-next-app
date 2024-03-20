import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h2 className="text-[--btn]">About US</h2>
        <h1 className="text-6xl">
          We create digital ideas that are bigger, bolder and better.
        </h1>
        <p className="text-xl font-[300]">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-[--btn] font-bold text-lg">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-[--btn] font-bold text-lg">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-[--btn] font-bold text-lg">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src="/images/about.png"
          alt="About Image"
          fill
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default AboutPage;

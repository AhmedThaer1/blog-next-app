import Image from "next/image";
const AboutPage = () => {
  return (
    <div>
      <div className="relative h-[500px]">
        <Image src="/images/about.png" alt="about-Image" fill />
      </div>
    </div>
  );
};

export default AboutPage;

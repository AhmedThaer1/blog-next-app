import Image from "next/image";
const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-24">
      <div className="relative flex-1 h-[500px]">
        <Image
          src="/images/contact.png"
          alt="Contact Image"
          fill
          className=" object-contain"
        />
      </div>
      <div className="flex-1">
        <form action="" className="flex flex-col gap-5">
          <input
            className="p-5 rounded border-0 outline-none "
            type="text"
            placeholder="Name"
          />
          <input
            className="p-5 rounded border-0 outline-none "
            type="text"
            placeholder="Email"
          />
          <input
            className="p-5 rounded border-0 outline-none "
            type="text"
            placeholder="Phone (Optinoal)"
          />
          <textarea
            className="p-5 rounded border-0 outline-none "
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="p-5 bg-[--btn] text-[--text] font-bold border-0 rounded cursor-pointer">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

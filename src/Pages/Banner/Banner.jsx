import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:px-20 px-10 text-center md:gap-10 bg-black text-white rounded-lg py-10 mx-auto">
      <div className="order-2 md:order-1">
        <h1 className="md:text-4xl text-2xl font-bold ">
          Hi, I’m Ariful Islam
        </h1>
        <h2 className="md:text-3xl text-xl font-bold text-[#f8024d]">
          <Typewriter 
            words={[
              "Web Developer",
              "MERN Stack Developer",
              "Software Eng. Enthusiastic",
            ]}
            loop={20}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <button className="mt-5">
          <a
            className="bg-[#f8024d] py-3 px-2 rounded  text-white"
            href="Personal Branding.pdf"
            download
          >
            Download Resume
          </a>
        </button>
      </div>
      <div className="order-1 md:order-2">
        <img className="w-96" src="/web-developer.gif" alt="" />
      </div>
    </div>
  );
};

export default Banner;

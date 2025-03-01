import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 md:px-[8rem] py-24">
      <h2 className="text-md mb-4">Hey, I'm</h2>
      <div className="inline text-8xl font-semibold bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text text-transparent">
        Rajanikanta Biswal
      </div>
      <p className="text-lg font-regular text-gray-300 leading-relaxed mt-8">
        I'm a software engineer based in Toronto, Canada and also a
        communication and journalism student. I enjoy creating things that live
        on the internet, whether that be websites, applications, or anything in
        between. I have been freelancing for a year now while studying at the
        university and I've manage to gain a decent amount of experience and
        valuable knowledge from all different kinds of fields throughout my
        projects/work.
      </p>
      <div className="flex space-x-2 items-center mt-10">
        <a href="#" className="text-xl">Say hi</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#ffffff"
          fill="none"
        >
          <path
            d="M20.0001 11.9998L4.00012 11.9998"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Universities() {
  const universityLogos = [
    {
      logo: "berkeley.edu.jpg",
      className: "berkeley-logo",
    },
    {
      logo: "brown.edu.jpg",
      className: "brown-logo",
    },
    {
      logo: "caltech.edu.jpg",
      className: "caltech-logo",
    },
    {
      logo: "columbia.edu.jpg",
      className: "columbia-logo",
    },
    {
      logo: "cornell.edu.jpg",
      className: "cornell-logo",
    },
    {
      logo: "dartmouth.edu.jpg",
      className: "dartmouth-logo",
    },
    {
      logo: "duke.edu.jpg",
      className: "duke-logo",
    },
    {
      logo: "georgetown.edu.jpg",
      className: "georgetown-logo",
    },
    {
      logo: "harvard.edu.jpg",
      className: "harvard-logo",
    },
    {
      logo: "jhu.edu.jpg",
      className: "jhu-logo",
    },
    {
      logo: "mit.edu.jpg",
      className: "mit-logo",
    },
    {
      logo: "northwestern.edu.jpg",
      className: "northwestern-logo",
    },
    {
      logo: "nyu.edu.jpg",
      className: "nyu-logo",
    },
    {
      logo: "princeton.edu.jpg",
      className: "princeton-logo",
    },
    {
      logo: "stanford.edu.jpg",
      className: "stanford-logo",
    },
    {
      logo: "uchicago.edu.jpg",
      className: "uchicago-logo",
    },
    {
      logo: "ucla.edu.jpg",
      className: "ucla-logo",
    },
    {
      logo: "umich.edu.jpg",
      className: "umich-logo",
    },
    {
      logo: "upenn.edu.jpg",
      className: "upenn-logo",
    },
    {
      logo: "usc.edu.jpg",
      className: "usc-logo",
    },
    {
      logo: "yale.edu.jpg",
    },
  ];
  return (
    <div className=" py-8 overflow-hidden w-full">
      <Marquee speed={40}>
        <div className="flex items-center ">
          {universityLogos.map((uy, idx) => (
            <div
              key={idx}
              className="pl-6 xl:pl-10 transition-all ease-linear duration-300 hover:scale-105"
            >
              <Image
                src={`/assets/img/university/${uy.logo}`}
                className={`${uy.className} h-[50px] sm:h-[70px] w-auto transition-all ease-linear duration-300 hover:scale-105 `}
                // style={{ filter: "drop-shadow(0 0 0.03rem #00009C)" }}
                width={1000}
                height={800}
                unoptimized={true}
                alt=""
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

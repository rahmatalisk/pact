import React from "react";
import brown from "../public/assets/img/partner/brown.svg";
import yale from "../public/assets/img/partner/yale.svg";
import dartmouth from "../public/assets/img/partner/dartmouth.svg";
import columbia from "../public/assets/img/partner/columbia.svg";
import duke from "../public/assets/img/partner/duke.svg";
import berkeley from "../public/assets/img/partner/berkeley.svg";
import michigan from "../public/assets/img/partner/michigan.svg";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Universities() {
  const partners = [
    {
      logo: brown,
      className: "w-[103px] md:w-[135px]",
    },
    {
      logo: yale,
      className: "w-[57px] md:w-[75px]",
    },
    {
      logo: dartmouth,
      className: "w-[42px] md:w-[55px]",
    },
    {
      logo: columbia,
      className: "w-[100px] md:w-[148px]",
    },
    {
      logo: duke,
      className: "w-[80px] md:w-[117px]",
    },
    {
      logo: berkeley,
      className: "w-[96px] md:w-[140px]",
    },
    {
      logo: michigan,
      className: "w-[176px] md:w-[246px]",
    },
  ];

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

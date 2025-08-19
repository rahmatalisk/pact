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

export default function Partner() {
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
  return (
    <div className=" min-h-[110px]">
      <Marquee>
        <div className="flex items-center ">
          {[...partners, ...partners].map((pt, idx) => (
            <div key={idx} className="lg:pl-[65px] pl-8">
              <Image
                src={pt.logo}
                className={`${pt.className} `}
                style={{ filter: "drop-shadow(0 0 0.03rem #00009C)" }}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

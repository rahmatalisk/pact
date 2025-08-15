import Image from "next/image";
import React from "react";
import crown from "../../public/assets/img/icons/crown.svg";
import gmail from "../../public/assets/img/icons/social/gmail.svg";
import facebook from "../../public/assets/img/icons/social/facebook.svg";
import whatsapp from "../../public/assets/img/icons/social/whatsapp.svg";
import twitter from "../../public/assets/img/icons/social/twitter.svg";
import Link from "next/link";

export default function ThankYou() {
  const social = [
    {
      icon: gmail,
      link: "",
    },
    {
      icon: facebook,
      link: "",
    },
    {
      icon: whatsapp,
      link: "",
    },
    {
      icon: twitter,
      link: "",
    },
  ];
  return (
    <div className="min-h-screen flex justify-center items-center md:py-[70px] py-8">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 xl:px-[45px] w-full">
        <h4 className="text-black text-[20px] sm:text-[28px] xl:text-[40px] font-bold text-center leading-[119.565%] tracking-[0.038px]">
          Thank you!
        </h4>
        <p className="my-4 text-center text-black text-[16px] md:text-[20px] xl:text-[28px] tracking-[0.038px] leading-[119.565%]">
          “We have added your email address to the signup queue”
        </p>

        <div className="bg-[#BFE7FF] flex items-center min-h-[182px] w-full px-6">
          <h4 className="text-black text-[24px] sm:text-[32px] xl:text-[48px] font-bold text-center leading-[119.565%] tracking-[0.038px] w-full">
            35642 People ahead of you
          </h4>
        </div>

        <Image src={crown} className="w-[60px] md:w-[94px] mx-auto my-[14px]" />
        <h4 className="text-[#D7B759] text-[18px] sm:text-[24px] xl:text-[32px] font-bold text-center leading-[119.565%] tracking-[0.038px]">
          Interested in priority access?
        </h4>
        <p className="my-4 text-center text-black text-[16px] md:text-[20px] xl:text-[28px] tracking-[0.038px] leading-[119.565%] max-w-[738px] mx-auto">
          Get early access by referring your friends. The more friends that
          join, the sooner you’ll get access.
        </p>

        <div className="mt-8 lg:mt-[80px] flex gap-4 sm:gap-6 flex-col lg:flex-row items-center justify-center">
          <div className="flex items-center gap-4 sm:gap-6">
            {social.map((sc, idx) => (
              <Link key={idx} href={sc.link}>
                <Image src={sc.icon} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center ">
            <p className="text-black  text-[16px] md:text-[20px] leading-[169.5%] tracking-[0.038px] text-center">
              Or share this unique link:{" "}
              <Link href="" className="text-[#1976D2] underline text-center">
                Pact.referral.com
              </Link>
            </p>
            <button className="text-white text-[15px] font-bold leading-[186%] tracking-[0.038px] px-[17px] py-[5px] bg-[#1976D2] rounded-[8px] cursor-pointer whitespace-nowrap">
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

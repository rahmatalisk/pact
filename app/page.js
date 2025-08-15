"use client";

import EmailDropdown from "@/components/EmailDropdown";
import Image from "next/image";
import headImg from "../public/assets/img/head-img.svg";
import Partner from "@/components/Partner";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div
      className="h-screen bg-center bg-cover  pt-[29px] flex flex-col lg:bg-[url(/assets/img/bg.png)] bg-[url(/assets/img/mobile-bg.png)] relative"
      // style={{ backgroundImage: "url(/assets/img/bg.png)" }}
    >
      <div className="absolute left-0 top-0 w-full md:max-w-[780px] md:h-full h-[50%] bg-[linear-gradient(180deg,#000_-23.83%,rgba(0,0,0,0)_100%)] opacity-20 md:opacity-100 md:bg-[linear-gradient(277deg,rgba(0,0,0,0)_11.14%,#000_105.56%)]"></div>
      <div className="relative flex-1 md:px-[54px] px-3 flex flex-col gap-[56px] justify-between pb-8 md:justify-start">
        <div>
          <h3 class="text-[41.15px] bungee-font font-normal leading-[137.703%] tracking-[0.038px] bg-gradient-to-r from-[#0FA7FF] via-[#0FA7FF] to-[#FC56E0] bg-clip-text text-transparent w-fit">
            Pact.
          </h3>

          <h2
            className="mt-[22px] mb-3 text-white font-normal bungee-font max-w-fit w-full text-[9.15vw] sm:text-[48px] xl:text-[66px] leading-[99.697%] tracking-[0.038px] flex whitespace-nowrap"
            style={{ textShadow: "0 4px 10.8px rgba(0, 0, 0, 0.77)" }}
          >
            <span>"</span>
            <span>
              DROP AR SCENES <br /> IN YOUR CAMPUS
            </span>{" "}
            <span className="flex items-end">"</span>
          </h2>

          <div className="ml-4 text-white bungee-font xl:text-[50px] text-[17.491px] sm:text-[36px] leading-[129.541%] tracking-[0.038px] w-fit max-w-full bg-gradient-to-r from-[#10A7FF] to-[#C23088] md:px-8 px-4 py-1">
            anywhere... anytime...
          </div>

          <p className="text-[#FA0] bungee-font text-[14px] sm:text-[20.922px] font-normal leading-[254%] tracking-[0.038%] lg:pl-[50px] pl-4">
            Coming to 21 schools first
          </p>
        </div>

        <div className="flex items-start flex-col-reverse lg:flex-row lg:gap-[50px] gap-[18.71px] sm:gap-8 w-full md:ml-4">
          <div className="w-full flex flex-col sm:gap-3 gap-2.5 sm:max-w-[454px]">
            <EmailDropdown />
            <button
              onClick={() => router.push("/thank-you")}
              className="bg-[#332E2E] px-[38px] md:h-[63px] h-[51px] rounded-[129.746px] font-medium text-white text-[14.65px] sm:text-[18.235px] tracking-[-0.18px] sm:tracking-[-0.224px] leading-[80.769%] sm:w-fit w-full cursor-pointer hover:bg-white hover:text-[#332E2E] transition-all ease-linear duration-300"
            >
              Get Early Access
            </button>
          </div>

          <Image src={headImg} className="w-[80px] sm:w-[120px] xl:w-[184px]" />
        </div>
      </div>
      <div className="relative">
        <Partner />
      </div>
    </div>
  );
}

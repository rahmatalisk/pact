import GetEarlyAccess from "@/components/GetEarlyAccess";
import Partner from "@/components/Partner";

export default function Home() {
  return (
    <div className="overflow-hidden h-screen bg-center bg-cover flex flex-col lg:bg-[url(/assets/img/bg.webp)] bg-[url(/assets/img/mobile-bg.webp)] relative">
      {/* gardient  */}
      <div className="absolute left-0 top-0 w-full md:max-w-[780px] md:h-full h-[50%] bg-[linear-gradient(180deg,#000_-23.83%,rgba(0,0,0,0)_100%)] opacity-20 md:opacity-100 md:bg-[linear-gradient(277deg,rgba(0,0,0,0)_11.14%,#000_105.56%)]"></div>

      {/* content  */}
      <div className=" pt-[29px] relative flex flex-col flex-1 w-full overflow-y-auto">
        <div className="relative flex-1 md:px-[54px] px-3 flex flex-col gap-[56px] justify-between pb-8 md:justify-start ">
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

            <p className="md:text-[#FA0] text-red-600 bungee-font text-[14px] sm:text-[20.922px] font-normal leading-[254%] tracking-[0.038%] lg:pl-[50px] pl-4">
              Coming to 21 schools first
            </p>
          </div>

          <GetEarlyAccess />
        </div>
        <div className="relative">
          <Partner />
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import Image from "next/image";
import headImg from "../public/assets/img/head-img.svg";
import Link from "next/link";
import copyIcon from "@/public/assets/img/icons/copy.svg";
import close from "@/public/assets/img/icons/close.svg";
import gmail from "@/public/assets/img/icons/social/gmail.svg";
import facebook from "@/public/assets/img/icons/social/facebook.svg";
import whatsapp from "@/public/assets/img/icons/social/whatsapp.svg";
import twitter from "@/public/assets/img/icons/social/twitter.svg";
import influencer from "@/public/assets/img/icons/influencer.svg";
import tastemaker from "@/public/assets/img/icons/tastemaker.svg";

export default function GetEarlyAccess() {
  const domains = ["edu.com"];
  const [selected, setSelected] = useState(domains[0]);
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false); // 👈 Controls animation
  const dropdownRef = useRef(null);
  const popupRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    function handleOutsideClick(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        handleClosePopup();
      }
    }
    if (showPopup) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showPopup]);

  // Handle opening with animation
  const handleOpenPopup = () => {
    setShowPopup(true);
    setTimeout(() => setAnimatePopup(true), 10); // Small delay to trigger transition
  };

  // Handle closing with animation
  const handleClosePopup = () => {
    setAnimatePopup(false);
    setTimeout(() => setShowPopup(false), 300); // Wait for transition to finish
  };

  // social link
  const social = [
    {
      icon: gmail,
      link: "",
      className: "w-8 md:w-9",
    },
    {
      icon: facebook,
      link: "",
      className: "w-[29px] md:w-[38px]",
    },
    {
      icon: whatsapp,
      link: "",
      className: "w-[39px] md:w-[50px]",
    },
    {
      icon: twitter,
      link: "",
      className: "w-8 md:w-[42px]",
    },
  ];
  return (
    <>
      {/* Main Section */}
      <div className="flex items-start flex-col-reverse lg:flex-row lg:gap-[50px] gap-[18.71px] sm:gap-8 w-full md:ml-4">
        <div className="w-full flex flex-col sm:gap-3 gap-2.5 sm:max-w-[454px]">
          {/* Input + Dropdown */}
          <div
            ref={dropdownRef}
            className="bg-white flex md:h-[63px] h-[51px] items-center w-full rounded-[129.746px] px-5 sm:px-10 gap-[13px] relative"
          >
            <input
              type="text"
              className="flex-1 w-full bg-transparent text-black text-[14.65px] sm:text-[18.235px] tracking-[-0.18px] sm:tracking-[-0.224px] leading-[80.769%] border-none outline-none font-medium"
              placeholder=" yourname@university"
            />
            <div className="bg-black/20 h-full w-[1px]"></div>
            <button
              onClick={() => setOpen(!open)}
              className="text-black text-[14.65px] sm:text-[18.235px] tracking-[-0.18px] sm:tracking-[-0.224px] leading-[80.769%] font-medium flex items-center gap-1 cursor-pointer relative"
            >
              {selected}
              <IoChevronDown
                color="#000"
                size={16}
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Button */}
          <button
            onClick={handleOpenPopup}
            className="bg-[#332E2E] px-[38px] md:h-[63px] h-[51px] rounded-[129.746px] font-medium text-white text-[14.65px] sm:text-[18.235px] tracking-[-0.18px] sm:tracking-[-0.224px] leading-[80.769%] sm:w-fit w-full cursor-pointer hover:bg-white hover:text-[#332E2E] transition-all ease-linear duration-300"
          >
            Get Early Access
          </button>
        </div>
        <Image
          src={headImg}
          alt="Header Image"
          className="w-[80px] sm:w-[120px] xl:w-[184px]"
        />
      </div>

      {/* Smooth Popup */}
      {showPopup && (
        <div
          className={`fixed inset-0 bg-black/60 flex justify-center items-center z-50 transition-opacity duration-300 ${
            animatePopup ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={popupRef}
            className={`bg-white rounded-[15px] p-7 sm:pb-10 pt-16 max-w-[1391px] overflow-y-auto w-full mx-2 max-h-[95vh] md:max-h-[90vh] transform transition-all duration-300 flex justify-center items-center relative ${
              animatePopup ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              onClick={handleClosePopup}
              className=" absolute top-4 right-4 sm:top-5 sm:right-5 w-5 sm:w-7 xl:w-9"
            >
              <Image src={close} alt="" />
            </button>
            <div className="flex-1">
              <h2 className="text-black xl:text-[40px] sm:text-[32px] text-[26px] font-bold leading-[119.565%] sm:tracking-[0.038px] tracking-[0.025px] text-center">
                Thank you!
              </h2>
              <p className="mt-4 text-black xl:text-[28px] sm:text-[24px] text-[18.137px] font-normal leading-[119.565%] sm:tracking-[0.038px] tracking-[0.025px] text-center">
                “We have added your email address to the signup queue”
              </p>
              <h5 className="mt-8 text-black xl:text-[22px] sm:text-[20px] text-[15px]  leading-[145.455%] sm:tracking-[0.038px] tracking-[0.025px] text-center font-bold">
                Get early access by referring your friends. The more friends
                that join, the sooner you’ll get access.
              </h5>

              <div className="sm:bg-[#E9F7FF] rounded-[6px]  mt-6 flex items-stretch gap-2.5 sm:gap-0">
                <p className="bg-[#E9F7FF] rounded-[1.82px] flex-1 text-center text-black text-[13.5px] sm:text-[18px] xl:text-[27px] font-bold leading-[125.556%] sm:tracking-[0.038px] tracking-[0.025px] px-3 h-full py-4 md:py-8">
                  Share this unique link:{" "}
                  <Link href="" className="text-[#1976D2]">
                    Pact.referral.com
                  </Link>
                </p>

                <button className="md:px-8 py-4 md:py-8 sm:border-l border-[#237FC2]/10">
                  <Image src={copyIcon} className="w-4 sm:w-6 xl:w-8" alt="" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-5 sm:gap-6 md:mt-7 mt-[23px]">
                {social.map((sc, idx) => (
                  <Link key={idx} href={sc.link}>
                    <Image src={sc.icon} className={sc.className} alt="" />
                  </Link>
                ))}
              </div>

              <div className="xl:mt-20 mt-[70px] grid grid-cols-1 lg:grid-cols-2 gap-6 gap-y-[18px]">
                <div className="bg-[#F7F7F7] sm:rounded-[6px] rounded-[3px] flex items-center xl:gap-11 gap-[24px] xl:p-11 p-5 sm:p-8">
                  <Image
                    src={influencer}
                    alt=""
                    className="w-[30px] sm:w-[56px]"
                  />
                  <div>
                    <h6 className="text-black xl:text-[18px] sm:text-[14px] text-[12px] tracking-[0.025px] sm:tracking-[0.038px] leading-[133.33%] font-bold">
                      The "influencer" (5 Referrals)
                    </h6>
                    <p className="text-black xl:text-[18px] sm:text-[14px] text-[11px] tracking-[0.025px] sm:tracking-[0.038px] leading-[133.33%] font-normal">
                      Incentive: "Get 5 friends to sign up, and you'll get to
                      vote on the next AR objects we create for the app."
                    </p>
                  </div>
                </div>
                <div className="bg-[#F7F7F7] sm:rounded-[6px] rounded-[3px] flex items-center xl:gap-11 gap-[18px] xl:p-11 p-5 sm:p-8">
                  <Image
                    src={tastemaker}
                    alt=""
                    className="w-[38px] sm:w-[64px] xl:w-[75px]"
                  />
                  <div>
                    <h6 className="text-black xl:text-[18px] sm:text-[14px] text-[12px] tracking-[0.025px] sm:tracking-[0.038px] leading-[133.33%] font-bold">
                      The "Tastemaker" (10 Referrals)
                    </h6>
                    <p className="text-black xl:text-[18px] sm:text-[14px] text-[11px] tracking-[0.025px] sm:tracking-[0.038px] leading-[133.33%] font-normal">
                      Incentive: "Get 10 friends to sign up, and you'll get to
                      design a new AR object with our creative team."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function EmailDropdown() {
  const domains = [
    "edu.com",
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "icloud.com",
  ];
  const [selected, setSelected] = useState(domains[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div
      ref={dropdownRef}
      className="bg-white flex md:h-[63px] h-[51px] items-center w-full rounded-[129.746px] px-5 sm:px-10 gap-[13px] relative"
    >
      <input
        type="text"
        className="flex-1 w-full bg-transparent text-black text-[14.65px] sm:text-[18.235px] tracking-[-0.18px] sm:tracking-[-0.224px] leading-[80.769%] border-none outline-none placeholder:text-black font-medium"
        placeholder="tabrej.khan@duke"
      />

      {/* Divider */}
      <div className="bg-black/20 h-full w-[1px]"></div>

      {/* Dropdown Trigger */}
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

      {/* Dropdown Menu */}
      <div
        className={`absolute right-7 z-10  top-[70px] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 ease-out w-fit ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
        // style={{ width: "150px" }}
      >
        {domains.map((domain) => (
          <div
            key={domain}
            onClick={() => {
              setSelected(domain);
              setOpen(false);
            }}
            className="px-4 py-2 text-black text-[14.65px] sm:text-[18.235px] tracking-[-0.18px] sm:tracking-[-0.224px] hover:bg-gray-100 cursor-pointer"
          >
            {domain}
          </div>
        ))}
      </div>
    </div>
  );
}

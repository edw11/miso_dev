import React from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Narrivals from "@/components/Narrivals";
import Tselling from "@/components/Tselling";
import Footer from "@/components/Footer";
import Brand from "@/components/Brand";

const page = () => {
  return (
    <div>
      <div className="w-full bg-white fixed min-lg:px-20 px-7 py-2 z-50">
        <Navbar />
      </div>
      <div className="bg-[#F2F0F1] pt-28  px-4 min-lg:px-0 w-full">
        <Hero />
      </div>

      <Brand />
      <div className="pt-15 px-7 min-lg:px-20 min-lg:pt-24 gap-20 flex flex-col w-full mb-15">
        <Narrivals />
        <Tselling />
      </div>

      <div className="bg-[#F0F0F0] pt-5 px-7 min-lg:px-20 w-full">
        <Footer />
        <div className="w-full pt-5 pb-10 ">
          <div className="w-full bg-gray-400 p-[0.03rem]"></div>
          <p className="pt-3">Miso 2025 ©. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Narrivals from "@/components/Narrivals";
import Tselling from "@/components/Tselling";
import Footer from "@/components/Footer";
import Brand from "@/components/Brand";

const page = () => {
  return (
    <div>
      <div className="w-full bg-white fixed min-lg:px-20 px-7 py-2">
        <Navbar />
      </div>
      <div className="bg-[#F2F0F1] pt-28  px-4 min-lg:px-0 w-full">
        <Hero />
      </div>

      <Brand />
      <div className="pt-28 px-7 min-lg:px-20 min-lg:pt-24 gap-20 flex flex-col w-full">
        <Narrivals />
        <Tselling />
        <Footer />
      </div>
    </div>
  );
};

export default page;

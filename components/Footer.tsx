import React from "react";
import { Facebook, Instagram } from "lucide-react";
import FooterElement from "./FooterElement";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 pb-5 md:flex-row">
      <div className="flex flex-col gap-4">
        <h1 className="font-integral-medium text-2xl text-black lg:text-3xl">
          MISO
        </h1>
        <p className="leading-relaxed text-black font-satoshi max-w-lg">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>

        <div className="flex gap-5">
          <button className="p-2 border-2 border-solid bg-white rounded-full w-fit hover:bg-gray-800 transition">
            <Facebook className="text-black" width={24} height={24} />
          </button>
          <button className="p-2 bg-white border-2 border-solid rounded-full w-fit hover:bg-gray-800 transition">
            <Instagram className="text-black" width={24} height={24} />
          </button>
        </div>
      </div>
      {/* {[...Array(3)].map((_, index) => (
        
      ))} */}
      <div className="grid grid-cols-2 gap-y-8 md:flex-row md:flex justify-between w-full ">
        <FooterElement />
        <FooterElement />
        <FooterElement />
        <FooterElement />
      </div>
    </footer>
  );
};

export default Footer;

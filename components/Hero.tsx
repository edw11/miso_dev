import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="min-lg:p-20 min-lg:pb-0 min-lg:flex ">
      <div className="text-black w-full flex flex-col gap-5 px-3 min-lg:px-0 min-lg:gap-10 ">
        {/* <h1 className="font-integral-medium text-4xl min-lg:text-6xl">
          FIND PRODUCTS THAT MATCHES YOUR STYLE
        </h1> */}
        <h1 className="font-integral-medium text-4xl min-[1024px]:text-6xl leading-tight text-start space-y-0">
          <span className="block">FIND PRODUCTS</span>
          <span className="block">THAT MATCHES</span>
          <span className="block">YOUR STYLE</span>
        </h1>
        <p className="text-gray-500 font-satoshi text-base md:text-lg leading-relaxed max-w-2xl text-start  ">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <div className="flex max-w-full justify-center min-lg:justify-start min-lg:w-auto  ">
          <button className="text-white py-4 bg-black rounded-full max-lg:w-full text-center cursor-pointer min-lg:px-20">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center bg-[#F2F0F1] py-10 px-4 min-lg:items-start ">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            {/* First two with divider */}
            <div className="flex gap-8 items-center">
              <div>
                <p className="font-satoshi font-bold text-3xl lg:text-4xl">
                  200+
                </p>
                <p className="text-gray-600 text-sm lg:text-base">
                  International Brands
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="w-[0.08rem] h-12 bg-gray-300  lg:block" />

              <div className="text-center">
                <p className="font-satoshi font-bold text-3xl lg:text-4xl">
                  2,000+
                </p>
                <p className="text-gray-600 text-sm lg:text-base">
                  High-Quality Products
                </p>
              </div>
            </div>
            <div className="w-[0.08rem] h-12 bg-gray-300 max-lg:hidden  lg:block" />
            {/* Third Stat */}
            <div className="text-center">
              <p className="font-satoshi font-bold text-3xl lg:text-4xl">
                30,000+
              </p>
              <p className="text-gray-600 text-sm lg:text-base">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* image model */}
      <Image
        src="/images/model.png"
        width={387}
        height={445}
        alt="model"
        className="mx-auto pl-5 lg:hidden"
      />

      <Image
        src="/images/modelbig.png"
        width={647}
        height={680}
        alt="model"
        className="mx-auto pl-5 max-lg:hidden"
      />
    </div>
  );
};

export default Hero;

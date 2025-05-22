import React from "react";

const Brand = () => {
  return (
    <div className="bg-black py-10">
      <div className="grid grid-cols-3 gap-y-6 font-satoshi text-white text-2xl font-semibold text-center lg:flex lg:justify-evenly max-sm:text-xl">
        <p className="tracking-wide">VERSACE</p>
        <p className="tracking-wide">ZARA</p>
        <p className="tracking-wide">GUCCI</p>
        <p className="tracking-wide max-lg:hidden">PRADA</p>
        <p className="tracking-wide max-lg:hidden">CALVIN KLEIN</p>
      </div>
      <div className="grid grid-cols-2 text-2xl font-satoshi font-bold pt-6 text-center text-white lg:hidden max-sm:text-xl">
        <p className="tracking-wide">PRADA</p>
        <p className="tracking-wide">CALVIN KLEIN</p>
      </div>
    </div>
  );
};

export default Brand;

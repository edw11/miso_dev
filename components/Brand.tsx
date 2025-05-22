import React from "react";

const Brand = () => {
  return (
    <div className="bg-black py-10">
      <div className="grid grid-cols-3 gap-y-6  text-white text-2xl font-semibold text-center lg:flex lg:justify-evenly">
        <p className="tracking-wide">VERSACE</p>
        <p className="tracking-wide">ZARA</p>
        <p className="tracking-wide">GUCCI</p>
        <p className="tracking-wide max-lg:hidden">PRADA</p>
        <p className="tracking-wide max-lg:hidden">CALVIN KLEIN</p>
      </div>
      <div className="grid grid-cols-2  text-2xl pt-6 text-center text-white lg:hidden ">
        <p className="tracking-wide">PRADA</p>
        <p className="tracking-wide">CALVIN KLEIN</p>
      </div>
    </div>
  );
};

export default Brand;

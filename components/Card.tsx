import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-xs mx-auto">
      <Image src="/images/sample.png" width={200} height={200} alt="sample" />
      <p className="font-satoshi text-base font-semibold  mt-2">
        T-shirt with tape details
      </p>
      <p className="font-satoshi font-bold text-base mt-2">Rp.500,000</p>
    </div>
  );
};

export default Card;

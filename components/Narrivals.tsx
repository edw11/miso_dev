import React from "react";
import Card from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Narrivals = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-black font-integral-medium text-center text-2xl">
        new arrivals
      </h1>
      <div className="px-7">
        <Carousel
          className="w-full mx-auto mt-5 max-sm:max-w-sm"
          opts={{ align: "start" }}
        >
          <CarouselContent>
            {[...Array(6)].map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className=" flex justify-center mt-5 ">
        <p className="text-black font-satoshi text-center p-2 px-8 border-2 border-solid rounded-full w-fit ">
          View All
        </p>
      </div>
    </div>
  );
};

export default Narrivals;

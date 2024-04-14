import * as React from 'react';

import SVGComponent from './svgWave';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export function CarouselSpacing() {
  return (
    <Carousel opts={{ loop: true }} className=" relative w-screen ">
      <div>
        <SVGComponent className=" absolute z-10" />
        <CarouselContent className="splide__list overflow-visible">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] gap-2 bg-yellow-200 md:basis-[30%]"
            >
              <Card className="h-full bg-dark md:h-[40vw]">
                <CardContent className="flex aspect-square size-full items-center justify-center p-6 md:size-full">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <SVGComponent className=" absolute  z-10 -translate-y-full -rotate-180" />
        <div className=" container right-0 z-20 flex justify-center gap-4 ">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
}

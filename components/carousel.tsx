import Image from 'next/image';

import first from '../public/assets/images/carousel/1.jpg';
import second from '../public/assets/images/carousel/2.jpg';
import third from '../public/assets/images/carousel/3.jpg';
import fourth from '../public/assets/images/carousel/4.jpg';
import fifth from '../public/assets/images/carousel/5.jpg';
import SVGComponent from './svgWave';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const images = [first, second, third, fourth, fifth];

export function CarouselSpacing() {
  return (
    <Carousel opts={{ loop: true }} className=" relative w-screen ">
      <div>
        <SVGComponent className=" absolute z-10" />
        <CarouselContent className="splide__list overflow-visible">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] gap-2 md:basis-[30%]"
            >
              <Card className="h-full bg-dark md:h-[40vw]">
                <CardContent className="flex aspect-square size-full items-center justify-center p-6 md:size-full">
                  <Image
                    src={image}
                    placeholder="blur"
                    className="size-full object-cover"
                    alt="damcom services offered"
                  />
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

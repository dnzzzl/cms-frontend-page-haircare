import React from "react";
import { Parallax } from "./parallax";
import { AvatarCn, AvatarFallback, AvatarImage } from "./avatar-shadcn";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

export type TestimonialType = {
  name: string;
  content: string;
  imageSrc: string;
  handle: string;
  link: string;
  initials: string;
};

const TestimonialsGallery = (props: {
  listoftestimonials: TestimonialType[];
}) => {
  return (
    <div className="sticky top-8 h-[90vh] w-full overflow-hidden bg-background ">
      <h1 className="mb-10 justify-center text-4xl font-bold leading-tight tracking-tighter md:mb-4 md:text-7xl">
        Confia en nuestros clientes y sus opiniones
      </h1>
      <Carousel
        className="mx-10"
      >
        <CarouselContent className="">
          {props.listoftestimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 my-auto">
              <div className=" mx-auto rounded-lg border-2 border-red-300 bg-gradient-to-tr from-pink-200 via-transparent to-red-200 p-4">
                <h1 className="mb-2 text-xl font-semibold">
                  {testimonial.name}
                </h1>
                <p>"{testimonial.content}"</p>
                <div className="m-2 flex items-center gap-2">
                  -{" "}
                  <AvatarCn>
                    <AvatarImage src={testimonial.imageSrc} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </AvatarCn>
                  <Link href={testimonial.link}>{testimonial.handle}</Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
      <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TestimonialsGallery;

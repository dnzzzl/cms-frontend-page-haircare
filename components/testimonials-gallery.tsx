import React from 'react'
import {Parallax} from './parallax'
import { AvatarCn,AvatarFallback,AvatarImage } from './avatar-shadcn'
import Link from 'next/link'

export type TestimonialType = {
    name: string,
    content: string,
    imageSrc: string,
    handle: string,
    link: string,
    initials: string,
}

const TestimonialsGallery = (props: { listoftestimonials: TestimonialType[] }) => {
  return (
    
    <div className='h-[90vh] sticky top-8 bg-background w-full overflow-hidden '>
        <h1 className='text-4xl md:text-7xl mb-10 md:mb-4 justify-center font-bold tracking-tighter leading-tight'>Confia en nuestros clientes y sus opiniones</h1>
        <div className='flex flex-row md:flex-wrap overflow-hidden gap-5 pt-20'>
            {props.listoftestimonials.map((testimonial, index) => (
            <Parallax key={index} speed={-.2-index-Math.random()*2} className="mx-auto">
                <div className=" w-[300px] bg-gradient-to-tr from-pink-200 via-red-300 to-background rounded-lg border-red-300 border-2 p-4">
                <h1 className='font-semibold text-xl mb-2'>{testimonial.name}</h1>
                <p>"{testimonial.content}"</p>
                <div className='flex items-center gap-2 m-2'>
                    - <AvatarCn>
                    <AvatarImage src={testimonial.imageSrc} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </AvatarCn>
                    <Link href={testimonial.link}>{testimonial.handle}</Link>
                </div>
                </div>
            </Parallax>
            ))}
        </div>
        
        
    </div>
  )
}

export default TestimonialsGallery
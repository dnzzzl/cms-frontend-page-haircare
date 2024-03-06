import React from 'react'
import {Parallax} from './parallax'
import { AvatarCn,AvatarFallback,AvatarImage } from './avatar-shadcn'
import Link from 'next/link'

const TestimonialsGallery = () => {
  return (
    <div className='h-screen bg-background w-full flex flex-col md:grid md:grid-cols-3 justify-between overflow-hidden pt-10 md:pt-20 gap-5'>
        <Parallax speed={-1.2} className="mx-auto">
            <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-500/30 to-background rounded-lg border-red-300 border-2 p-4">
                <h1 className='font-semibold text-xl mb-2'>Wendy Perez</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum accusantium explicabo, a libero nobis temporibus consequuntur et sint doloribus veritatis atque tempore fuga corrupti nam, laborum saepe impedit alias!</p>
                <div className='flex items-center gap-2 m-2'>
                    <AvatarCn>
                        <AvatarImage src='/public/image.png'/>
                        <AvatarFallback>WP</AvatarFallback>
                    </AvatarCn>
                    <Link href='https://instagram.com/wendy_perez'>@wendy_perez</Link>
                </div>
            </div>
        </Parallax>
        <Parallax speed={-2} className="mx-auto">
            <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-500/30 to-background rounded-lg border-red-300 border-2 p-4">
                <h1 className='font-semibold text-xl mb-2'>Wendy Perez</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum accusantium explicabo, a libero nobis temporibus consequuntur et sint doloribus veritatis atque tempore fuga corrupti nam, laborum saepe impedit alias!</p>
                <div className='flex items-center gap-2 m-2'>
                    <AvatarCn>
                        <AvatarImage src='/public/image.png'/>
                        <AvatarFallback>WP</AvatarFallback>
                    </AvatarCn>
                    <Link href='https://instagram.com/wendy_perez'>@wendy_perez</Link>
                </div>
            </div>
        </Parallax>
        <Parallax speed={-3} className="mx-auto">
            <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-500/30 to-background rounded-lg border-red-300 border-2 p-4">
                <h1 className='font-semibold text-xl mb-2'>Wendy Perez</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum accusantium explicabo, a libero nobis temporibus consequuntur et sint doloribus veritatis atque tempore fuga corrupti nam, laborum saepe impedit alias!</p>
                <div className='flex items-center gap-2 m-2'>
                    <AvatarCn>
                        <AvatarImage src='/public/image.png'/>
                        <AvatarFallback>WP</AvatarFallback>
                    </AvatarCn>
                    <Link href='https://instagram.com/wendy_perez'>@wendy_perez</Link>
                </div>
            </div>
        </Parallax>
        <Parallax speed={-3.5} className="mx-auto">
            <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-500/30 to-background rounded-lg border-red-300 border-2 p-4">
                <h1 className='font-semibold text-xl mb-2'>Wendy Perez</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum accusantium explicabo, a libero nobis temporibus consequuntur et sint doloribus veritatis atque tempore fuga corrupti nam, laborum saepe impedit alias!</p>
                <div className='flex items-center gap-2 m-2'>
                    <AvatarCn>
                        <AvatarImage src='/public/image.png'/>
                        <AvatarFallback>WP</AvatarFallback>
                    </AvatarCn>
                    <Link href='https://instagram.com/wendy_perez'>@wendy_perez</Link>
                </div>
            </div>
        </Parallax>
        <Parallax speed={-4} className="mx-auto">
            <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-500/30 to-background rounded-lg border-red-300 border-2 p-4">
                <h1 className='font-semibold text-xl mb-2'>Wendy Perez</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum accusantium explicabo, a libero nobis temporibus consequuntur et sint doloribus veritatis atque tempore fuga corrupti nam, laborum saepe impedit alias!</p>
                <div className='flex items-center gap-2 m-2'>
                    <AvatarCn>
                        <AvatarImage src='/public/image.png'/>
                        <AvatarFallback>WP</AvatarFallback>
                    </AvatarCn>
                    <Link href='https://instagram.com/wendy_perez'>@wendy_perez</Link>
                </div>
            </div>
        </Parallax>
        <Parallax speed={-4.5} className="mx-auto">
            <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-500/30 to-background rounded-lg border-red-300 border-2 p-4">
                <h1 className='font-semibold text-xl mb-2'>Wendy Perez</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum accusantium explicabo, a libero nobis temporibus consequuntur et sint doloribus veritatis atque tempore fuga corrupti nam, laborum saepe impedit alias!</p>
                <div className='flex items-center gap-2 m-2'>
                    <AvatarCn>
                        <AvatarImage src='/public/image.png'/>
                        <AvatarFallback>WP</AvatarFallback>
                    </AvatarCn>
                    <Link href='https://instagram.com/wendy_perez'>@wendy_perez</Link>
                </div>
            </div>
        </Parallax>
        <Parallax speed={-5} className="mx-auto">
            <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-500/30 to-background rounded-lg border-red-300 border-2 p-4">
                <h1 className='font-semibold text-xl mb-2'>Wendy Perez</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum accusantium explicabo, a libero nobis temporibus consequuntur et sint doloribus veritatis atque tempore fuga corrupti nam, laborum saepe impedit alias!</p>
                <div className='flex items-center gap-2 m-2'>
                    <AvatarCn>
                        <AvatarImage src='/public/image.png'/>
                        <AvatarFallback>WP</AvatarFallback>
                    </AvatarCn>
                    <Link href='https://instagram.com/wendy_perez'>@wendy_perez</Link>
                </div>
            </div>
        </Parallax>
        <Parallax speed={-7} className="mx-auto">
            <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-500/30 to-background rounded-lg border-red-300 border-2 p-4">
                <h1 className='font-semibold text-xl mb-2'>Wendy Perez</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum accusantium explicabo, a libero nobis temporibus consequuntur et sint doloribus veritatis atque tempore fuga corrupti nam, laborum saepe impedit alias!</p>
                <div className='flex items-center gap-2 m-2'>
                    <AvatarCn>
                        <AvatarImage src='/public/image.png'/>
                        <AvatarFallback>WP</AvatarFallback>
                    </AvatarCn>
                    <Link href='https://instagram.com/wendy_perez'>@wendy_perez</Link>
                </div>
            </div>
        </Parallax>
    </div>
  )
}

export default TestimonialsGallery
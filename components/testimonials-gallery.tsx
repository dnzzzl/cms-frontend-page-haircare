import React from 'react'
import {Parallax} from './parallax'
import { AvatarCn,AvatarFallback,AvatarImage } from './avatar-shadcn'
import Link from 'next/link'

const TestimonialsGallery = () => {
  return (
    <div className='h-[90vh] sticky top-8 bg-background w-full overflow-hidden '>
        <h1 className='text-4xl md:text-7xl font-bold tracking-tighter leading-tight'>Confia en nuestros clientes y sus opiniones</h1>
        <div className='flex flex-row md:flex-wrap overflow-hidden pt-20 md:pt-20 gap-5'>
            <Parallax speed={-4} className="mx-auto">
                <div className=" w-[300px] bg-gradient-to-tr from-foreground via-red-300 to-background rounded-lg border-red-300 border-2 p-4">
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
                <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-300 to-background rounded-lg border-red-300 border-2 p-4">
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
                <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-300 to-background rounded-lg border-red-300 border-2 p-4">
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
                <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-300 to-background rounded-lg border-red-300 border-2 p-4">
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
                <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-300 to-background rounded-lg border-red-300 border-2 p-4">
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
                <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-300 to-background rounded-lg border-red-300 border-2 p-4">
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
            <Parallax speed={-6} className="mx-auto">
                <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-300 to-background rounded-lg border-red-300 border-2 p-4">
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
                <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-300 to-background rounded-lg border-red-300 border-2 p-4">
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
            <Parallax speed={-6} className="mx-auto">
                <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-300 to-background rounded-lg border-red-300 border-2 p-4">
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
                <div className=" w-[300px] bg-gradient-to-tr from-foreground/35 via-red-300 to-background rounded-lg border-red-300 border-2 p-4">
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
        
        
    </div>
  )
}

export default TestimonialsGallery
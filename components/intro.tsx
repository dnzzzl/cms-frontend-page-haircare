import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'
//import Button from './button'

interface IntroProps {
  title: string;
  subtitle: string;
  image?: string;
  left?: boolean
}

export default function Intro( {title, subtitle, image = '',left} : IntroProps ) {

  return (
    <section className={`${left? "justify-end":""} flex relative `}>
      <Image 
        src={image}
        alt='hero image showing the products less tangle, clean-me-up shampoo and stay free'
        objectFit='cover'
        layout='fill'
        className='absolute z-10 w-full h-full'
      />
      <div 
      className="flex-col flex items-center justify-between bg-cover md:bg-transparent px-8 py-8 md:py-16 lg:py-24 xl:py-32 2xl:py-40 mx-0 md:w-1/2 z-20 relative">
        <h1 className="text-left text-6xl md:text-8xl font-bold tracking-tighter leading-tight">                                      
          {title}                                                         
        </h1>
        <h4 className="text-center text-lg my-5 ">                                                            
          {subtitle}                                                       
        </h4>
        <div className="mt-8 rounded-lg sm:mt-0">
          <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get bundle</button>
        </div>    
      </div>
    </section>
  )
}

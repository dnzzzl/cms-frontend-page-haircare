import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'
import {Roboto_Serif} from 'next/font/google'
//import Button from './button'

interface IntroProps {
  title: string;
  subtitle: string;
  image?: string;
  left?: boolean
}

const roboto_serif = Roboto_Serif({
  subsets:['latin'],
  weight:['100','200','400','700'],
  preload: true
});
export default function Intro( {title, subtitle, image = '',left} : IntroProps ) {

  return (
    <section className={`${left? "justify-end":""} flex relative ${roboto_serif.className}`}>
      <Image 
        src={image}
        alt='hero image showing the products less tangle, clean-me-up shampoo and stay free'
        objectFit='cover'
        layout='fill'
      />
      <div 
      className="flex-col flex items-center justify-between bg-cover backdrop-blur-sm sm:backdrop-blur-none px-8 py-14 mt-14 lg:mt-20 mx-0 sm:w-3/4 md:w-1/2 z-20 relative transition-all ease-in-out duration-500">
        <h1 className="text-left text-6xl lg:text-8xl tracking-tighter leading-tight">                                      
          {title}                                                         
        </h1>
        <h4 className="text-center text-xl md:text-2xl  my-5 ">                                                            
          {subtitle}                                                       
        </h4>
        <div className=" rounded-lg ">
          <button className="my-4 px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get bundle</button>
        </div>    
      </div>
    </section>
  )
}

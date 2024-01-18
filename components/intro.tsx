import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'
//import Button from './button'

interface IntroProps {
  title: string;
  subtitle: string;
  image?: string;
}

export default function Intro( {title, subtitle, image = ''} : IntroProps ) {
  const bgStyle = image                                              
       ? { backgroundImage: `url(${image})`, color: 'white' }           
       : { backgroundColor: 'salmon', color: 'white' };
  return (
    <section
    className='flex '
    style={bgStyle}>
      <div
      className="md:ml-20 flex-col flex items-center justify-between bg-cover px-8 py-8 md:py-16 lg:py-24 xl:py-32 2xl:py-40 mx-0 md:w-1/2">
          <h1 
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">                                      
            {title}                                                         
          </h1>
          <h4 className="text-center md:text-left text-lg my-5 md:pl-8">                                                            
           {subtitle}                                                       
          </h4>                                                             
          <div className="mt-3 rounded-lg sm:mt-0">
            <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get bundle</button>
          </div>    
        </div>
      </section>
  )
}

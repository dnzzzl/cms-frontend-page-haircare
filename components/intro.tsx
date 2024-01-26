import Image from 'next/image'
import {Roboto_Serif} from 'next/font/google'
//import Button from './button'

interface IntroProps {
  children: React.ReactNode,
  image_data?:{
    imageUrl: string,
    alt:string,
  }
  left?: boolean
}

const roboto_serif = Roboto_Serif({
  subsets:['latin'],
  weight:['100','200','400','700'],
  preload: true
});
export default function Intro( {children,image_data, left} : IntroProps ) {

  return (
    <section className={`${left? "justify-end":""} flex relative ${roboto_serif.className} bg-rose-400/50 min-h-40`}>
      {image_data && <Image 
        src={image_data.imageUrl}
        alt={image_data.imageUrl}
        objectFit='cover'
        layout='fill'
      />}
     {children}
    </section>
  )
}

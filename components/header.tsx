import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import AnimatedLinks from './animated-link';
import Drawer from './drawer';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [{
    href:"/posts",
    text: "Blog"
  },{
    href:"/shop",
    text: "Shop"
  },{
    href:"/nosotros",
    text:"Nosotros"
    }]

    
  return (
    <header  className='absolute z-10 w-full bg-transparent py-4 '>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-3 items-center justify-between'>
        <div className='hidden md:flex'>
          {routes.map(({href,text})=>{
            return (
              <Link href={href} key={href}
              className='text-nowrap mx-2 px-4 rounded-lg shadow-lg py-2 hover:bg-blue-700 hover:text-white backdrop-blur-sm '
              >
                  {text}
              </Link> 
            );
          })}
        </div>
        <div className='flex justify-center md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
              <div className='h-16 w-24 rounded-lg'>
                  <Image
                    src={"http://localhost:8889/wp-content/uploads/2024/01/enhanced-image-3-1-e1706202239482.png"}
                    alt="logo"
                    width={1720}
                    height={1158}
                    className="h-full w-full scale-125 hover:scale-100  transition-all ease-in-out "
                  />
              </div>
          </button>
        </div>
        <div className='justify-center hidden md:flex'>
          <Link href={'/'} className='h-16 w-24 rounded-lg'>
              <Image
                src={"http://localhost:8889/wp-content/uploads/2024/01/enhanced-image-3-1-e1706202239482.png"}
                alt="logo"
                width={1720}
                height={1158}
                className="h-full w-full scale-125 hover:scale-100  transition-all ease-in-out "
              />
          </Link>
        </div>
        <div className='hidden md:flex justify-end'>
        </div>
      </div>
      {isOpen && <Drawer isOpen={isOpen} callback={()=>{
        setIsOpen(false)
        }}>
        <AnimatedLinks routes={routes}/>
      </Drawer>}
    </header>
  )
}
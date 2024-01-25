import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
  const routes = [{
    href:"/posts",
    text: "Blog"
  },{
    href:"#",
    text: "Escribe un DM"
  },{
    href:"/shop",
    text: "Shop"
  }]

  return (
    <header className='absolute z-30 w-full bg-transparent p-4 '>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-3 items-center justify-between'>
        <div className='hidden md:flex'>
          {routes.map(({href,text})=>{
            return (
              <Link 
              className=" text-nowrap mx-2  px-4 rounded-lg shadow-lg py-2 hover:bg-blue-700 hover:text-white backdrop-blur-sm"
              href={href}>
                {text}
              </Link> 
            );
          })}
        </div>
        <div className='flex justify-center'>
          <Link href={'/'}>
            <div className='h-16 w-24 rounded-lg'>
            <Image
              src={"http://localhost:8889/wp-content/uploads/2024/01/enhanced-image-3-1-e1706202239482.png"}
              alt="logo"
              width={1720}
              height={1158}
              className="h-full w-full scale-125 hover:scale-100  transition-all ease-in-out "
              />
              </div>
          </Link>
        </div>
        <div className='hidden md:flex justify-end'>
          {/* <button className='mx-2 py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white '>Nosotros</button> */}
          <Link 
              className=" text-nowrap mx-2  px-4 rounded-lg shadow-lg py-2 hover:bg-blue-700 hover:text-white backdrop-blur-sm"
              href="/nosotros">
                Nosotros
              </Link> 
        </div>
      </div>
    </header>
  )
}

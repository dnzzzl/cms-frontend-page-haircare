import Link from 'next/link'

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
    <header className='relative md:absolute z-30 w-full bg-transparent p-4 '>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-3 items-center justify-between'>
        <div className='hidden md:flex'>
          {routes.map(({href,text})=>{
            return (
              <Link 
              className=" text-ellipsis mx-2  px-4 rounded-lg shadow-lg py-2 hover:bg-blue-700 hover:text-white"
              href={href}>
                {text}
              </Link> 
            );
          })}
        </div>
        <div className='flex align-center justify-center'>
          <Link href={'/'}>
            Home
          </Link>
        </div>
        <div className='hidden md:flex justify-end'>
          <button className='mx-2 py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white'>currency</button>
          <button className='mx-2 py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white '>darkmode</button>
        </div>
      </div>
    </header>
  )
}

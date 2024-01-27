
 import React from "react"
 import Link from "next/link"

 type Props = {
    routes: {
      href:string,
      text:string,
    }[]
    
}
export default function LinkList ({routes} : Props) {    
    return(
      <>
          {routes.map(({href,text})=>{
            return (
              <Link key={href} href={href} className='gsap-animated-link bg-slate-300/50 max-w-min mx-auto text-nowrap px-4 rounded-lg my-2 py-2 hover:bg-blue-700 hover:text-white backdrop-blur-sm' >
                {text}
              </Link>
            );
          })}
      </>
    )
}

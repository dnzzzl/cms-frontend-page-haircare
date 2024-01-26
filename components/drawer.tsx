"use client"

import {useGSAP} from  "@gsap/react"
import gsap from "gsap";
import { useRef } from "react";

type Props = {
    children: React.ReactNode,
    isOpen: boolean,
    callback: React.MouseEventHandler
}

export default function Drawer({children,isOpen,callback}:Props){
    const navLinkContainer = useRef();
    
    useGSAP(() => {
        if (!navLinkContainer.current) return;
    
        const tl = gsap.timeline({ paused: true});
        
        tl.fromTo(navLinkContainer.current,{top:"-100vh"}, { y:0, top:0, duration: .5, ease: 'power2.inOut' });
        tl.fromTo(".gsap-animated-link", {opacity:0, x:"-40%"}, {opacity: 1, x:0, duration: .2, ease: "back.out", stagger:-.1},"-=.2")
        
        if (isOpen) {
          tl.play();
        } else {
          tl.reverse(.5);
        }
     }, [isOpen]);

    return (
    <nav ref={navLinkContainer} className='absolute top-[-100vh] flex flex-col w-full bg-rose-400/50' onClick={callback}>
            {children}
    </nav> )
} 
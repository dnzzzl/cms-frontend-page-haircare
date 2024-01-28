"use client"

import {useGSAP} from  "@gsap/react"
import gsap from "gsap";
import { useRef, useState } from "react";

type Props = {
    isOpen:boolean,
    children: React.ReactNode,
    callback: React.MouseEventHandler
}

export default function Drawer({children,isOpen,callback}:Props){
    const navLinkContainer = useRef();
    
    useGSAP(() => {
        if (!navLinkContainer.current) return;
        
        const tl = gsap.timeline({ paused: true});
        
        tl.fromTo(".gsap-animated-link", {opacity:0, x:"-40%"}, {opacity: 1, x:0, duration: .5, ease: "back.out", stagger:-.1})
        
        if (isOpen) {
          tl.play();
        } else {
          tl.reverse();
        }
     }, [isOpen]);

    return (
    <nav ref={navLinkContainer} className={`absolute top-0 ${isOpen?"":"translate-y-[-40vh]"} transition-all duration-500 flex flex-col w-full bg-rose-400/50`} onClick={callback}>
            {children}
    </nav> )
} 
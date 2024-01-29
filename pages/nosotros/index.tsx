import React from "react";
import Layout from "../../components/layout";
import preview from "../api/preview";
import Intro from "../../components/intro";
import Image from "next/image";
type Props = {
    preview: any,
}

export default function AboutPage({ preview} : Props){
   const title = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatibus alias, eum, quos vero nihil iusto possimus ipsam officia sequi perspiciatis! Unde veniam"
   const subtitle = ""

    return(
        <Layout preview={preview}>
            <Intro>
                <div 
                className="flex-col flex items-center justify-end bg-cover px-8 py-14 mt-14 mx-0 sm:w-3/4 md:w-1/2 transition-all ease-in-out duration-500">
                    <h1 className="text-center text-2xl lg:text-6xl tracking-tighter leading-tight w-full">                                      
                    {title}                                                         
                    </h1>
                    <h4 className="text-center text-xl md:text-2xl ">                                                            
                    {subtitle}                                                       
                    </h4>
                </div>
             </Intro>
             <div className="md:max-w-4xl mx-auto">
             <section className="flex flex-col-reverse md:flex-row p-5 w-full  md:gap-5">
                    <div className=" max-w-sm mx-auto">
                        <p className='md:sticky top-5  whitespace-pre-line md:mt-5 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit dolorum officia a omnis est, dolor ut aliquam maiores laudantium quibusdam quis. Rerum illum voluptates officiis et officia neque nisi?
                        </p>
                    </div>
                    <div className='my-5 bg-rose-400/25 p-5 rounded-lg mx-auto flex-grow'>
                    <Image
                        src={"http://localhost:8889/wp-content/uploads/2024/01/enhanced-image-3-1-e1706202239482.png"}
                        alt="logo"
                        width={1720}
                        height={1158}
                        className="h-full w-full scale-100  transition-all ease-in-out "
                    />
                    </div>
                </section>
                <section className="flex flex-col-reverse md:flex-row-reverse p-5 w-full  md:gap-5">
                    <div className=" max-w-sm mx-auto">
                        <p className='md:sticky top-5  whitespace-pre-line md:mt-5 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit dolorum officia a omnis est, dolor ut aliquam maiores laudantium quibusdam quis. Rerum illum voluptates officiis et officia neque nisi?
                        </p>
                    </div>
                    <div className='my-5 bg-rose-400/25 p-5 rounded-lg mx-auto flex-grow'>
                    <Image
                        src={"http://localhost:8889/wp-content/uploads/2024/01/enhanced-image-3-1-e1706202239482.png"}
                        alt="logo"
                        width={1720}
                        height={1158}
                        className="h-full w-full scale-100  transition-all ease-in-out "
                    />
                    </div>
                </section>

                <section className="flex flex-col-reverse md:flex-row p-5 w-full  md:gap-5">
                    <div className=" max-w-sm mx-auto">
                        <p className='md:sticky top-5  whitespace-pre-line md:mt-5 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit dolorum officia a omnis est, dolor ut aliquam maiores laudantium quibusdam quis. Rerum illum voluptates officiis et officia neque nisi?
                        </p>
                    </div>
                    <div className='my-5 bg-rose-400/25 p-5 rounded-lg mx-auto flex-grow'>
                    <Image
                        src={"http://localhost:8889/wp-content/uploads/2024/01/enhanced-image-3-1-e1706202239482.png"}
                        alt="logo"
                        width={1720}
                        height={1158}
                        className="h-full w-full scale-100  transition-all ease-in-out "
                    />
                    </div>
                </section>
            </div>
        </Layout>
    )
} 
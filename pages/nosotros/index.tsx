import React from "react";
import Layout from "../../components/layout";
import preview from "../api/preview";
import Intro from "../../components/intro";
import Image from "next/image";
import { LOGO_SEETHRU_IMG_URL } from "../../lib/constants";
type Props = {
    preview: any,
}

export default function AboutPage({ preview} : Props){
   const title = "Nos enorgullece ofrecer productos que resaltan la beleza autentica de tu cabello. Combinando la riqueza de los ingredientes naturales con métodos probados y veraces.    "
   const subtitle = ""

   const img1 = "https://wordpress.elizabeth-haircare.com/wp-content/uploads/2024/01/IMG_20210208_170858-scaled.jpg"
   const img2 = "https://wordpress.elizabeth-haircare.com/wp-content/uploads/2024/01/00100dPORTRAIT_00100_BURST20210328133317117_COVER-scaled.jpg"
   const img3 = "https://wordpress.elizabeth-haircare.com/wp-content/uploads/2024/01/IMG_20210208_1655392-scaled.jpg"

    return (
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
                            {"Creemos en la armonia entre la salud capilar y los recursos que la naturaleza pone a nuestra disposicion.\n\nHemos diseñado una variedad de productos que abordan las necesidades de nuestro cabello, comenzando desde la salud del cuero cabelludo, hasta las puntas."}
                        </p>
                    </div>
                    <div className='my-5 bg-rose-400/25 rounded-lg mx-auto flex-grow overflow-hidden'>
                    <Image
                        src={img1}
                        alt="logo"
                        height={1000}
                        width={1000}
                        className="h-full w-full scale-100  transition-all ease-in-out "/>
                    </div>
                </section>
                <section className="flex flex-col-reverse md:flex-row-reverse p-5 w-full  md:gap-5">
                    <div className=" max-w-sm mx-auto">
                        <p className='md:sticky top-5  whitespace-pre-line md:mt-5 '>
                            {"Cada producto Elizabeth Haircare es la conclusion de un proceso iterativo formulado con precisión, para brindar resultados visibles y duraderos.\n\nEstimular el crecimiento capilar es uno de nuestros compromisos clave, y cada fórmula está cuidadosamente elaborada para promover un crecimiento saludable."}
                        </p>
                    </div>
                    <div className='my-5 bg-rose-400/25 rounded-lg mx-auto flex-grow overflow-hidden'>
                    <Image
                        src={img2}
                        alt="logo"
                        width={1000}
                        height={1000}
                        className="h-full w-full scale-100  transition-all ease-in-out "
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                    </div>
                </section>

                <section className="flex flex-col-reverse md:flex-row p-5 w-full  md:gap-5">
                    <div className=" max-w-sm mx-auto">
                        <p className='md:sticky top-5  whitespace-pre-line md:mt-5 '>
                            {"Además de estimular el crecimiento, nuestros productos están diseñados para fortalecer, nutrir y revitalizar tu cabello.\n\nDesde ingredientes que mejoran la circulación sanguínea en el cuero cabelludo hasta aquellos que proporcionan nutrientes esenciales para cada hebra, nuestros productos ofrecen una experiencia completa de cuidado capilar."}
                        </p>
                    </div>
                    <div className='my-5 bg-rose-400/25 rounded-lg mx-auto flex-grow overflow-hidden'>
                    <Image
                        src={img3}
                        alt="logo"
                        height={1000}
                        width={1000}
                        className="h-full w-full scale-100  transition-all ease-in-out "
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                    </div>
                </section>
            </div>
        </Layout>
    );
} 
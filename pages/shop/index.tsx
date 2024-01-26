import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '../../components/layout'
import { GetStaticProps } from 'next'
import {Product} from '../../components/product-card'
import { getProductsMockData } from '../../lib/api'
import { FC } from 'react';
import { ShopGrid } from '../../components/shop-section-grid'
import Intro from '../../components/intro'
import { sub } from 'date-fns'



export interface ShopProps {
  allProducts: {
    edges: Product[];
  };
  preview: boolean;
}

export const getStaticProps: GetStaticProps = async () => {
  const allProducts = getProductsMockData();

  return {
    props: {
      allProducts: allProducts, // pass the data as a prop to your component
      preview: false, // or whatever value you want to pass
    }
  };
};

const Page: FC<ShopProps> =({ allProducts , preview }: ShopProps) => {
  const title = "Elizabeth Haircare"
  const subtitle = "Productos para mostrar la mejor versión de tu cabello."
  const heroImgUrl = 'http://localhost:8889/wp-content/uploads/2024/01/hero-01.png'

  return(
    <Layout preview={preview}>
      <Intro image_data={{imageUrl:heroImgUrl,alt:"Hero image"}} left>
        <div 
        className="flex-col flex items-center justify-end bg-cover px-8 lg:mt-20 pt-20 lg:pt-0 mx-0 sm:w-3/4 md:w-1/2 relative transition-all ease-in-out duration-500">
          <h1 className="text-left text-6xl lg:text-8xl tracking-tighter leading-tight">                                      
            {title}                                                         
          </h1>
          <h4 className="text-center text-xl md:text-2xl  my-5 ">                                                            
            {subtitle}                                                       
          </h4>   
        </div>
      </Intro>
      <ShopGrid allProducts={allProducts} preview={preview}></ShopGrid>
    </Layout>
  );
}

export default Page;
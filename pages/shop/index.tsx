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
      <Intro title={title} subtitle={subtitle} image={heroImgUrl} left/>
      <ShopGrid allProducts={allProducts} preview={preview}></ShopGrid>
    </Layout>
  );
}

export default Page;
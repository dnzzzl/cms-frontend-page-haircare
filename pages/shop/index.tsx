import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '../../components/layout'
import { GetStaticProps } from 'next'
import {Product} from '../../components/product-card'
import { getProductsMockData } from '../../lib/api'
import { FC } from 'react';
import { ShopGrid } from '../../components/shop-section-grid'



export interface ShopProps {
  allProducts: {
    edges: Product[];
  };
  preview: boolean;
}

export const getStaticProps: GetStaticProps = async () => {
  // Fetch data from an API (for example) 
  const edges = getProductsMockData();

  return {
    props: {
      allProducts: edges, // pass the data as a prop to your component
      preview: false, // or whatever value you want to pass
    }
  };
};

const Page: FC<ShopProps> =({ allProducts , preview }: ShopProps) => {
  return(
    <Layout preview={preview}>
      <ShopGrid allProducts={allProducts} preview={preview}></ShopGrid>
    </Layout>
  );
}

export default Page;
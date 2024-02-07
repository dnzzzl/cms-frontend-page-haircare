import Layout from '../../components/layout'
import { GetStaticProps } from 'next'
import { getSimpleProductsFromGraphQL } from '../../lib/api'
import ShopGrid from '../../components/shop-section-grid'
import Intro from '../../components/intro'

import { HERO_SHOP_IMG_URL } from '../../lib/constants'
import {Product} from '../../components/product-card'


export interface ShopProps {
  allProducts: {
    edges: Product[];
  };
  preview: boolean;
}

export const getStaticProps: GetStaticProps = async () => {
  const allProducts = await getSimpleProductsFromGraphQL();

  return {
    props: {
      allProducts: allProducts, // pass the data as a prop to your component
      preview: false, // or whatever value you want to pass
    }
  };
};

export default function Page ({ allProducts , preview }: ShopProps) {
  const title = "Elizabeth Haircare"
  const subtitle = "Productos para mostrar la mejor versión de tu cabello."

  return(
    <Layout preview={preview}>
      <Intro image_data={{imageUrl:HERO_SHOP_IMG_URL,alt:"Hero image"}} left>
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
      <h2 className="m-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Shop
      </h2>
      <ShopGrid allProducts={allProducts.edges}/>
    </Layout>
  );
}
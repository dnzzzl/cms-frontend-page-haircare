import Layout from '../../components/layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getProductsMockData, getSimpleProductsFromGraphQL } from '../../lib/api'
import Image from "next/image"
import Link from 'next/link'
import { Product } from '../../components/product-card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/carousel'

export default function ProductDetailsPage ({name, short_description,long_description,price,images}:Product) {

    const orderHref = `https://wa.me/18094618336?text=Hola%20%3A%29%20me%20interesa%3A%20${name}`


    return (
        <Layout preview={false}>
            <div className='flex flex-col-reverse md:flex-row py-5 mb-5 mt-28  mx-5 gap-5 md:max-w-4xl md:mx-auto'>
              <div className='mx-auto md:ml-5 flex flex-col justify-center w-full'> 
                <div className=''>
                  <Carousel>
                    <CarouselContent className="overflow-hidde rounded-lg mx-auto relative">
                      {images?.map((url)=>{
                        return(
                          <CarouselItem>
                            <Image
                            src={url}
                            alt={"product image"}
                            width={600}
                            height={600}
                            />
                          </CarouselItem>
                        )
                      })}
                    </CarouselContent>
                  </Carousel>
                </div>
                <p className='my-2 pt-5 whitespace-pre-line max-w-xl mx-auto'>
                  {long_description}
                </p>
              </div>
              <div className='w-full mr-5'>
                <div className='md:sticky my-5 top-5 bg-rose-400/25  shadow-xl  p-5 rounded-lg h-min mx-auto max-w-sm'>
                  <h1 className='text-2xl font-bold pb-2'>{name}</h1>
                  <div>{short_description}</div>
                  <div className='w-full flex justify-around mt-5 items-center p-4'>
                      <span><p className="mt-1 text-sm ">{price}</p></span>
                      <span><Link href={orderHref} className='bg-green-600 text-white text-sm font-bold p-2 rounded  hover:bg-green-700 transition-colors duration-200'>Order Now</Link></span>
                  </div>  
              </div>
            </div>
              
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const products = await getSimpleProductsFromGraphQL();
    const product = products.edges.find(product => product.slug === params.slug);
    
    if (!product) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        ...product,
        preview: false,
      },
    };
  }

export const getStaticPaths: GetStaticPaths = async () => {
    const allProducts = await getSimpleProductsFromGraphQL()
  
    return {
      paths: allProducts.edges.map(({ slug }) => `/shop/${slug}`) || [],
      fallback: true,
    }
  }
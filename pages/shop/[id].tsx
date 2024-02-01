import {FC} from 'react'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getProductsMockData } from '../../lib/api'
import Image from 'next/image'
import ImageSlider from '../../components/image-slider'
import Link from 'next/link'

type Props = {      
    id: number,
    name: string,
    short_description: string,
    long_description: string,
    price: string,
    preview: boolean,
    images:string[],
}       

export const ProductDetailsPage : FC<Props> = ({preview,name, short_description,long_description,price,images}:Props) =>{
    const router = useRouter();
    const id = router.query.id;
    const orderHref = `https://wa.me/18298449486?text=Hola%20%3A%29%20me%20interesa%3A%20${name}`


    return (
        <Layout preview={preview}>
            <div className='flex flex-col-reverse md:flex-row py-5 mb-5 mt-28  mx-5 gap-5 md:max-w-4xl md:mx-auto'>
              <div className='mx-auto md:ml-5 flex flex-col justify-center w-full'> 
                <ImageSlider images={images}/>
                <p className='my-2 pt-5 whitespace-pre-line max-w-xl mx-auto'>
                  {long_description}
                </p>
              </div>
              <div className='w-full mr-5'>
                <div className='md:sticky my-5 top-5 bg-rose-400/25  shadow-xl  p-5 rounded-lg h-min mx-auto max-w-sm'>
                  <h1 className='text-2xl font-bold pb-2'>{name}</h1>
                  <p>{short_description}</p>
                  <div className='w-full flex justify-around mt-5 items-center p-4'>
                      <span><p className="mt-1 text-sm ">{price}</p></span>
                      <span><Link href={orderHref} className='bg-blue-500 text-white text-sm font-bold p-2 rounded  hover:bg-blue-700 transition-colors duration-200'>Order Now</Link></span>
                  </div>  
              </div>
            </div>
              
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const products = await getProductsMockData();
    const product = products.edges.find(product => product.id === Number(params.id));
    
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
    const allProducts = await getProductsMockData()
  
    return {
      paths: allProducts.edges.map(({ id }) => `/shop/${id}`) || [],
      fallback: true,
    }
  }

  export default ProductDetailsPage;
import {FC} from 'react'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getProductsMockData } from '../../lib/api'

type Props = {      
    id: number,
    name: string,
    description: string,
    price: string,
    preview: boolean,

}       

export const ProductDetailsPage : FC<Props> = ({preview,name, description,price}:Props) =>{
    const router = useRouter();
    const id = router.query.id;

    return (
        <Layout preview={preview}>
            <p>i am product: {id}</p>
            <p>name: {name}</p>
            <p>description: {description}</p>
            <p>price: {price}</p>
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
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '../../components/layout'
import { GetStaticProps } from 'next'
import { FC } from 'react'

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  price: string;
}

interface ShopProps {
  allProducts: {
    edges: Product[];
  };
  preview: boolean;
}

const Shop: FC<ShopProps> = ({ allProducts: { edges }, preview })  => {
  return (
    <Layout preview={preview} >
    <section className="container mx-auto py-12 px-4 md:px-12 lg:py-24 lg:px-24 xl:px-32">
      <h1 className="text-3xl font-bold leading-snug tracking-wide uppercase text-center">Our Shop</h1>
      <div className="mt-12 grid gap-y-
      12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {edges.map((product) => (
          <Link href="/products/[id]" as={`/products/${product.id}`}>
            <a >
              <Image
                src={product.imageUrl}
                alt={product.name}
                objectFit="cover"
                height={300}
                width={300}
                priority
                quality={100}
                loading="lazy"
              />
              <div className="absolute inset-0 z-10 w-full h-full opacity-0 group-hover:opacity-100 transition duration-300 ease-out">
                <div className="relative z-20 flex items-center justify-center w-full h-full">
                  {/* <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full absolute left-0 top-0 bg-black opacity-75"
                  ></motion.div> */}
                  <div className="z-30 text-white text-lg font-semibold">{product.name}</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
    </Layout>
  )
}

function getProductsMockData() {
const products = [
  {
    "id": 1,
    "imageUrl": "<https://via.placeholder.com/300x450>",
    "name": "Shampoo",
    "description": "Our all-natural shampoo is infused with nourishing ingredients like coconut oil and shea butter to leave your hair feeling soft and clean.",
    "price": "$8.99"
  },
  {
    "id": 2,
    "imageUrl": "<https://via.placeholder.com/300x450>",
    "name": "Conditioner",
    "description": "Moisturizing and hydrating, our conditioner helps detangle and protect your hair from heat damage.",
    "price": "$7.99"
  },
  {
    "id": 3,
    "imageUrl": "<https://via.placeholder.com/300x450>",
    "name": "Leave-In Conditioner",
    "description": "A lightweight leave-in conditioner that adds moisture and shine to your hair without weighing it down.",
    "price": "$6.99"
  },
  {
    "id": 4,
    "imageUrl": "<https://via.placeholder.com/300x450>",
    "name": "Styling Cream",
    "description": "A rich styling cream that provides hold and definition to your hair, perfect for updos and braids.",
    "price": "$9.99"
  },
  {
    "id": 5,
    "imageUrl": "<https://via.placeholder.com/300x450>",
    "name": "Hair Mask",
    "description": "A luxurious hair mask that deeply nourishes and conditions your hair, leaving it soft and silky smooth.",
    "price": "$12.99"
  },
  {
    "id": 6,
    "imageUrl": "<https://via.placeholder.com/300x450>",
    "name": "Hair Oil",
    "description": "A nourishing hair oil that leaves your locks healthy, shiny, and full of life.",
    "price": "$14.99"
  }
]
return {
 edges: products
}
}
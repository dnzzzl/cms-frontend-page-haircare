import { motion } from 'framer-motion'
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export interface Product {
    id: number
    images: string[],
    name: string,
    short_description: string,
    long_description: string,
    price: string,
}

const ProductCard: FC<Product> = (product : Product) => {
  return (
    <div className='flex flex-col justify-between rounded-lg shadow-lg bg-rose-400/25 hover:shadow-xl transition-all duration-200 hover:scale-105 ease-in-out'>
        <Link key={product.id} href="/shop/[id]" as={`/shop/${product.id}`}>
            <div className="p-4">
                <Image
                src={product.images[0]}
                alt={product.name}
                objectFit="cover"
                height={300}
                width={300}
                quality={100}
                priority={true}
                className='m-auto rounded-lg transition-all duration-200 transform hover:-translate-y-2 hover:scale-110 ease-in-out'
                />

                <h2 className="text-xl font-bold  mt-4">{product.name}</h2>
                <p className="mt-1 text-sm text-gray-500">{product.short_description}</p>
                
            </div>
        </Link>
        <div className='w-full flex justify-around mt-2 items-center p-4'>
            <span><p className="mt-1 text-sm text-gray-500">{product.price}</p></span>
            <span><button className='bg-blue-500 text-white text-sm font-bold p-2 rounded  hover:bg-blue-700 transition-colors duration-200'>Order Now</button></span>
        </div>
    </div>
  )
}

export default ProductCard;
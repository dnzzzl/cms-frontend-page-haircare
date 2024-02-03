import { FC } from 'react';
import ProductCard, { Product } from './product-card';
import { ShopProps } from '../pages/shop';
import { GetStaticProps } from 'next';
import { getProductsMockData, getSimpleProductsFromGraphQL } from '../lib/api';

type Props = {
  allProducts : Product[]
}

export default function ShopGrid ({ allProducts }: Props) {

  return (
    <section className=" mx-auto pb-12 px-4 md:px-12">
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {allProducts?.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </section>
  );
};
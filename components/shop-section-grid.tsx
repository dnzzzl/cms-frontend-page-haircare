import { FC } from 'react';
import ProductCard from './product-card';
import { ShopProps } from '../pages/shop';

export const ShopGrid: FC<ShopProps> = ({ allProducts, preview }: ShopProps) => {


  return (
    <section className="container mx-auto pb-12 px-4 md:px-12">
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4">
        {allProducts.edges.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </section>
  );
};

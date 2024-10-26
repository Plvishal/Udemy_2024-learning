// import React from 'react';
import ProductItems from './ProductItems';

function Product() {
  const DUMMY_DATA = [
    {
      id: 'p1',
      price: 6,
      title: 'My First Book',
      description: 'The first book I ever Wrote',
    },
    {
      id: 'p2',
      price: 4,
      title: 'My second Book',
      description: 'The second book I ever Wrote',
    },
  ];
  return (
    <>
      <h1>Buy Your Favorite Products</h1>
      <div className="flex flex-col gap-8">
        {DUMMY_DATA.map((product) => (
          <ProductItems
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
}

export default Product;

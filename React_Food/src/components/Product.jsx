import React from 'react';
import { Link } from 'react-router-dom';

function Product() {
  const PRODUCT = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' },
  ];
  return (
    <>
      <ul>
        {PRODUCT.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product;

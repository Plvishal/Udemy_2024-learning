// import React from 'react';

function ProductItems(props) {
  const { title, price, description } = props;
  return (
    <div className="border border-white rounded-sm p-4">
      <h3>{title}</h3>
      <div>Price: ${price}</div>
      <p>{description}</p>
      <div>
        <button className="bg-white text-black p-1 px-3 rounded-lg border border-blue-600 hover:bg-blue-900 hover:text-white transition-all">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItems;

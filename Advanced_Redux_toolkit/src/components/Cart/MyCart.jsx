// import React from 'react';
import { useSelector } from 'react-redux';
function MyCart() {
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="w-[700px] h-[100%] bg-slate-700 rounded shadow-md p-10 flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.id} className="border rounded-lg p-3">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total Price: ${item.totalPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default MyCart;

// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice.js';
function MyCart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const addItemHandler = (id, title, price) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <div className="w-[700px] h-[100%] bg-slate-700 rounded shadow-md p-10 flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.id} className="border rounded-lg p-3">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total Price: ${item.totalPrice}</p>
          <div className="flex justify-end items-center gap-3">
            <button
              className="flex justify-center items-center p-1 px-6 border rounded-lg "
              onClick={() => removeItemHandler(item.id)}
            >
              -
            </button>
            <button
              className="flex justify-center items-center p-1 px-6 border rounded-lg "
              onClick={() => addItemHandler(item.id, item.name, item.price)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyCart;

// import React from 'react';
import { useDispatch } from 'react-redux';
import { uiAction } from '../store/ui-slice.js';
function Header() {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <div className="flex justify-between items-center w-full p-20">
      <h1>ReduxCart</h1>
      <div className="flex justify-center items-center gap-2 bg-blue-700 text-white rounded p-1 px-5">
        <button onClick={toggleHandler}>My Cart</button>
        <p className="bg-red-500 rounded-full p-2 w-[40px] flex justify-center items-center">
          1
        </p>
      </div>
    </div>
  );
}

export default Header;

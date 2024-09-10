import React from 'react';

function DynamicsValues() {
  const rectDes = ['Fundamental', 'Core', 'Crucial'];
  function randonGen(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  return (
    <>
      <p>{rectDes[randonGen(2)]} React concepts you will need for almost</p>
    </>
  );
}

export default DynamicsValues;

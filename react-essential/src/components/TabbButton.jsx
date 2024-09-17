import React from 'react';

function TabbButton({ children, onSelect }) {
  return (
    <>
      <button onClick={onSelect}>{children}</button>
    </>
  );
}

export default TabbButton;

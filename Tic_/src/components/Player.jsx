import React, { useState } from 'react';

function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inpurValue, setInputValue] = useState();
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    setIsEditing(false);
  };
  return (
    <li className={isActive ? 'active' : undefined}>
      {!isEditing ? (
        <span className="player">
          <span className="player-name">{name}</span>
          <span className="player-symbol">{symbol}</span>
        </span>
      ) : (
        <input
          type="text"
          className="player-name"
          value={name}
          onChange={() => setInputValue()}
        />
      )}
      {!isEditing ? (
        <button onClick={handleEdit}>Edit</button>
      ) : (
        <button onClick={handleSave}>Save</button>
      )}
    </li>
  );
}

export default Player;

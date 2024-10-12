import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGmaeTurns] = useState([]);
  function handleSelectSquare() {
    setActivePlayer((currActive) => (currActive === 'X' ? 'O' : 'X'));
    setGmaeTurns();
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={'Player 1'}
            symbol={'X'}
            isActive={activePlayer === 'X'}
          />
          <Player
            name={'Player 2'}
            symbol={'O'}
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          onSelectSqaure={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;

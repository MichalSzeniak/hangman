import React from 'react';
import './Style/GameOverAlert.scss';

const GameOver = ({ hiddenWord, playAgain }) => {
  return (
    <div className="p-3 mb-2 bg-primary container-fluid GameoverAlert">
      <div className="container text-center text-white mt-5">
        <h2>you lost 😕</h2>
        <p>The hidden word is: {hiddenWord}</p>
        <button className="btn btn-warning" onClick={playAgain}>
          play again
        </button>
      </div>
    </div>
  );
};

export default GameOver;

import React from 'react';
import './Style/GameOverAlert.scss';

const Win = ({hiddenWord, playAgain}) => {
    return (
        <div className="p-3 mb-2 bg-primary container-fluid GameoverAlert">
        <div className="container text-center text-white mt-5">
          <h2>You won 😮</h2>
          <p>Congratulations</p>
          <button className="btn btn-warning" onClick={playAgain}>
            play again
          </button>
        </div>
      </div>
    )
}

export default Win

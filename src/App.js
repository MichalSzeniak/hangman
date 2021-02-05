import './App.scss';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallows from './Components/Gallows';
import GameOver from './Components/GameOver';
import Win from './Components/Win';

const wordsList = ['potato', 'tomato', 'pasta', 'abcdef', 'butter', 'sandwitch'];
const hiddenWord =
  wordsList[Math.floor(Math.random() * (wordsList.length - 1 - 0 + 1))];

function App() {
  const [start, setStart] = useState(false);
  const [gueses, setGueses] = useState([]);
  const [correctCounter, setCorrectCounter] = useState('');
  const [wrongCounter, setWrongCounter] = useState(0);
  const [delay, setDelay] = useState(false);
  const [word, setWord] = useState('');

  
  function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }

  const guessesWord = word
    .split('')
    .map((letter) =>
      gueses.includes(letter) ? (
        <span className="letter">{letter}</span>
      ) : (
        <span className="letter"> _ </span>
      ),
    );

  const playAgain = () => {
    setWrongCounter(0);
    setCorrectCounter('');
    setStart(false);
    setGueses([]);
    setDelay(false);
    setStart(false);

    setWord(
      wordsList[Math.floor(Math.random() * (wordsList.length - 1 - 0 + 1))],
    );
  };

  const startGame = () => {
    setStart(true);
    setCorrectCounter(0);
    setGueses([]);
    setWrongCounter(0);
    setWord(
      wordsList[Math.floor(Math.random() * (wordsList.length - 1 - 0 + 1))],
    );
  };

  const test = (e) => {
    const letter = e.target.value;

    setGueses((gueses) => gueses + letter);
    if (!word.includes(letter)) {
      setWrongCounter(wrongCounter + 1);
    }
    if (word.includes(letter)) {
      setCorrectCounter(correctCounter + 1);
    }
    }

  const generateButtons = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map((letter, i) => (
      <button
        key={i}
        className="btn btn-primary btn-lg m-1 "
        value={letter}
        onClick={test}
        disabled={start ? gueses.includes(letter) : true}
      >
        {letter}
      </button>
    ));

  if (wrongCounter >= 7 && delay === false) {
    setTimeout(() => {
      setDelay(true);
    }, 500);
  }


  return (
    <div className="App container-sm">
      <div className="d-flex justify-content-center">
        <Header />
      </div>
      <div className="d-flex justify-content-center">
        <Gallows wrongCounter={wrongCounter} />
      </div>
      <p className={start ? 'lettes active' : 'letters'}>{guessesWord}</p>
      <div>
        <button className="btn btn-primary" onClick={startGame}>
          Start
        </button>
      </div>
      <p>{word.includes()}</p>
      <p>{generateButtons}</p>
      {delay && <GameOver hiddenWord={hiddenWord} playAgain={playAgain} />}
      {correctCounter === removeDuplicateCharacters(word).length && <Win hiddenWord={hiddenWord} playAgain={playAgain}/> }
    </div>
  );
}

export default App;

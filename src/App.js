import './App.scss';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallows from './Components/Gallows';
import GameOver from './Components/GameOver';
import Win from './Win';

const wordsList = ['potato', 'tomato', 'pasta', 'abcdef'];
const hiddenWord =
  wordsList[Math.floor(Math.random() * (wordsList.length - 1 - 0 + 1))];

function App() {
  const [start, setStart] = useState(false);
  const [gueses, setGueses] = useState([]);
  const [correctCounter, setCorrectCounter] = useState('');
  const [wrongCounter, setWrongCounter] = useState(0);
  const [delay, setDelay] = useState(false);
  const [word, setWord] = useState('');
  const [time, setTime] = useState(0);


  function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  // console.log(removeDuplicateCharacters(word).length);


  // const hiddenLetter = word
  // .split('')
  // .map((item, i) => <HiddenLetters key={i} {...item} item={item} />);

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
    setTime(0);
    setCorrectCounter('');
    setStart(false);
    setGueses([]);
    setDelay(false);
    setStart(false);

    setWord(
      wordsList[Math.floor(Math.random() * (wordsList.length - 1 - 0 + 1))],
    );
  };

  const handleRandom = () => {
    setStart(true);
    setCorrectCounter(0);
    setTime(0);
    setWord(
      wordsList[Math.floor(Math.random() * (wordsList.length - 1 - 0 + 1))],
    );
  };

  useEffect(() => {
    if(start) {
    const timer = setTimeout(() => {
      setTime(time + 1)
    }, 1000)}
  }
   )


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


  // const guessesWord2 = () => {

  // }


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
        <button className="btn btn-primary" onClick={handleRandom}>
          Start
        </button>
        <p>time: {time}</p>
      </div>
      <p>{word.includes()}</p>
      <p>{generateButtons}</p>
      {/* <p>wrong letters: {wrongLetter}</p>
      <p>good letters: {goodLetter}</p>
      <p>counter: {counter}</p> */}
      {delay && <GameOver setTime={setTime} hiddenWord={hiddenWord} playAgain={playAgain} />}
      {correctCounter === removeDuplicateCharacters(word).length && <Win /> }
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import HiddenLetters from './Components/HiddenLetters';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallows from './Components/Gallows';
import GameOver from './Components/GameOver';

const wordsList = ['potato', 'tomato'];
const hiddenWord =
  wordsList[Math.floor(Math.random() * (wordsList.length - 1 - 0 + 1))];

const word = hiddenWord
  .split('')
  .map((item, i) => <HiddenLetters key={i} {...item} item={item} />);

function App() {
  const [start, setStart] = useState(false);
  const [goodLetter, setGoodLetter] = useState([]);
  const [wrongLetter, setWrongLetter] = useState([]);
  const [gueses, setGueses] = useState([]);
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(false);

  const playAgain = () => {
    setCounter(0);
    setStart(false);
    setGoodLetter([]);
    setWrongLetter([]);
    setGueses([]);
    setDelay(false);
  }

  const handleRandom = () => {
    setStart(true);
  };

  // document.addEventListener('keydown', function (event) {
  //   if(start) {
  //   if (event.keyCode >= 65 && event.keyCode <= 90) {
  //     // console.log(event.key);
  //     if(hiddenWord.includes(event.key)) {
  //       console.log(event.key)
  //       setGoodLetters(goodLetters + event.key)
  //     }
  //   }
  // }
  // })



  const test = (e) => {
    const letter = e.target.value;
    setGueses((gueses) => gueses + letter)
    if(!hiddenWord.includes(letter)) {
      setWrongLetter(wrongLetter => wrongLetter + letter);
      setCounter(counter + 1)
    }
    if(hiddenWord.includes(letter)) {
      setGoodLetter(goodLetter => goodLetter + letter)
    }
  };

  const generateButtons = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map((letter, i) => (
      <button
        key={i}
        className="btn btn-primary btn-lg m-1 "
        value={letter}
        onClick={test}
        disabled={gueses.includes(letter)}
      >
        {letter}
      </button> 
    ));

    if(counter >= 7 && delay == false) {
      setTimeout(() => {
        setDelay(true)
      }, 500);
    }


  return (
    <div className="App container-sm">
      <div className="d-flex justify-content-center">
        <Header />
      </div>
      <div className="d-flex justify-content-center">
      <Gallows counter={counter} />
      </div>
      {start === true && (
        <div className="letters__box d-flex justify-content-center">{word}</div>
      )}
      <button className="btn btn-primary" onClick={handleRandom}>
        Klik
      </button>
      <p>{generateButtons}</p>
      <p>wrong letters: {wrongLetter}</p>
      <p>good letters: {goodLetter}</p>
      <p>counter: {counter}</p>
      { delay && <GameOver hiddenWord={hiddenWord} playAgain={playAgain}/>}
    </div>
  );
}

export default App;

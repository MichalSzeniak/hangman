import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import HiddenLetters from './Components/HiddenLetters';
import 'bootstrap/dist/css/bootstrap.min.css';

const wordsList = ['potato', 'tomato'];
const hiddenWord =
  wordsList[Math.floor(Math.random() * (wordsList.length - 1 - 0 + 1))];

const word = hiddenWord
  .split('')
  .map((item, i) => <HiddenLetters key={i} {...item} item={item} />);

function App() {
  const [start, setStart] = useState(false);
  const [xxx, setXxx] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleRandom = () => {
    // setGoodLetters(hiddenWord.split(''));
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
    if(hiddenWord.includes(letter)) {
      
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
        disabled={test}
      >
        {letter}
      </button>
    ));

  return (
    <div className="App container-sm">
      <div className="d-flex justify-content-center">
        <Header />
      </div>
      {start === true && (
        <div className="letters__box d-flex justify-content-center">{word}</div>
      )}
      <button className="btn btn-primary" onClick={handleRandom}>
        Klik
      </button>
      <p>{generateButtons}</p>
    </div>
  );
}

export default App;

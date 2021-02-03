import './App.css';
import Header from './Components/Header';
import HiddenLetters from './Components/HiddenLetters';
import 'bootstrap/dist/css/bootstrap.min.css';

const wordsList = ['potato', 'tomato'];
const hiddenWord =
  wordsList[Math.floor(Math.random() * (wordsList.length - 1 - 0 + 1))];

function App() {

  const word = hiddenWord.split('').map((item, i) => (
    <div>
      <HiddenLetters key={i} {...item} item={item} />
    </div>
  ));

  return (
    <div className="App">
      <Header className="text-center"/>
      <div className="letters__box d-flex justify-content-center">{word}</div>
    </div>
  );
}

export default App;

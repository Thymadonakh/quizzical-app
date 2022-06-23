import React, {useState, useEffect} from "react";
import './App.css';
import Quiz from './components/Quiz';
import Landing from "./Landing";

const URL = 'https://opentdb.com/api.php?amount=1&type=multiple' 

function App() {
  // Quiz Data 
  const [quizData, setQuizData] = useState([])  
  const [startGame, setStartGame] = useState(false)
  console.log(quizData)

  // Fetch Data 
  useEffect( () => {
      fetch(URL)
          .then(res => res.json())
          .then(data => setQuizData(data.results))
  }, [])
function start() {
  setStartGame(!startGame)
}


  return (
    <div className="App">
        {!startGame && <Landing />}
        {!startGame && <button onClick={() => start()}>Start Game</button>}
        {startGame && <Quiz />}
        {startGame && <button className="check-answer">Check Answer</button>}
    </div>
  );
}



export default App;
